import crypto from "crypto";
import { promisify } from "util";
import jwt from "jsonwebtoken";
import User from "../models/usersModel.js";
import asyncErrorWrapper from "../helpers/asyncErrorWrapper.js";
import AppError from "../helpers/appError.js";
import sendEmail from "../helpers/email.js";

function signToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
}

const sendToken = (res, user, statusCode, data) => {
  const token = signToken(user._id);
  const result = {
    status: "success",
    token,
  };
  if (data) result.data = data;
  res.status(statusCode).json(result);
};

export const signup = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    photo: req.body.photo,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  sendToken(res, user, 201, { user });
});

export const login = asyncErrorWrapper(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    throw new AppError("Missing email or password.", 400);

  const user = await User.findOne({ email }).select("+password");
  if (!user) throw new AppError(`No user found for '${email}'.`, 404);

  const correct = await user.correctPassword(password, user.password);
  if (!correct) throw new AppError(`Password not valid for '${email}'.`, 401);

  sendToken(res, user, 200);
});

export const protect = asyncErrorWrapper(async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer"))
    throw new AppError("Missing authorization.", 401);

  const token = authorization.split(" ")[1];
  if (!token) throw new AppError("Missing authorization token.", 401);

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id);
  if (!user) throw new AppError("No user exists for authorization token.", 401);
  if (user.passwordChangedAfter(decoded.iat))
    throw new AppError(
      "Password changed after issue of authorization token.",
      401,
    );

  req.user = user;
  next();
});

// export const restrictTo = asyncErrorWrapper(async (req, res, next) => {});
export const restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role))
      throw new AppError("User not authorised to perform action.", 403);
    next();
  };

export const forgotPassword = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) throw new AppError(`No user found for '${req.body.email}'.`, 404);

  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetUrl = `${req.protocol}://${req.get(
    "host",
  )}/api/v1/users/resetPassword/${resetToken}`;
  const message = `To reset password, send a patch request to the following URL, with both the password and password Confirm:\n\n${resetUrl}`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Password reset",
      message,
    });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    throw new AppError(
      `Error sending password reset token to email ${user.email}.`,
      500,
    );
  }

  res.status(200).json({
    status: "success",
    message: "Token sent to user email.",
  });
});

export const resetPassword = asyncErrorWrapper(async (req, res, next) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) throw new AppError("Invalid or expired token.", 400);

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  // user.passwordChangedAt = Date.now();
  await user.save();

  sendToken(res, user, 200);
});

export const updatePassword = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const correct = await user.correctPassword(
    req.body.currentPassword,
    user.password,
  );
  if (!correct)
    throw new AppError(`Password not valid for '${user.email}'.`, 401);

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  sendToken(res, user, 200);
});

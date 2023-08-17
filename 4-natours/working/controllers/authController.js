import { promisify } from "util";
import jwt from "jsonwebtoken";
import User from "../models/usersModel.js";
import asyncErrorWrapper from "../helpers/asyncErrorWrapper.js";
import AppError from "../helpers/appError.js";

function signToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
}

export const signup = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    photo: req.body.photo,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = signToken(user._id);

  res.status(201).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
});

export const login = asyncErrorWrapper(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    throw new AppError("Missing email or password.", 400);

  const user = await User.findOne({ email }).select("+password");
  if (!user) throw new AppError(`User '${email}' not found.`, 404);

  const correct = await user.correctPassword(password, user.password);
  if (!correct) throw new AppError(`Password not valid for '${email}'.`, 401);

  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
  });
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

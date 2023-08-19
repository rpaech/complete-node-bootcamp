import User from "../models/usersModel.js";
import ApiRequest from "../helpers/apiRequest.js";
import asyncErrorWrapper from "../helpers/asyncErrorWrapper.js";
import AppError from "../helpers/appError.js";

const validFields = ["name", "email", "photo"];

function filterObj(obj, ...fields) {
  const fieldSet = new Set(fields);
  const result = {};
  Object.entries(obj).forEach(([field, value]) => {
    if (fieldSet.has(field)) result[field] = value;
  });
  return result;
}

export const getAllUsers = asyncErrorWrapper(async (req, res, next) => {
  const apiRequest = new ApiRequest(User.find(), req.query, validFields)
    .filter()
    .sort()
    .select()
    .paginate();
  const users = await apiRequest.query;
  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

export const getUser = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user)
    throw new AppError(`No user found for ID '${req.params.id}'.`, 404);

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

export const createUser = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
});

export const updateUser = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user)
    throw new AppError(`No user found for ID '${req.params.id}'.`, 404);

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

export const deleteUser = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user)
    throw new AppError(`No user found for ID '${req.params.id}'.`, 404);

  res.status(204).json({
    status: "success",
    data: null,
  });
});

export const updateMyProfile = asyncErrorWrapper(async (req, res, next) => {
  if (req.body.password)
    throw new AppError("Unable to update password via this route.", 403);

  const profileData = filterObj(req.body, "name", "email");
  const user = await User.findByIdAndUpdate(req.user.id, profileData, {
    new: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

export const deleteMyProfile = asyncErrorWrapper(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

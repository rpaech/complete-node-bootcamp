import User from "../models/usersModel.js";
import asyncErrorWrapper from "../helpers/asyncErrorWrapper.js";
import AppError from "../helpers/appError.js";
import * as factory from "./routeHandlerFactory.js";

const validFields = ["name", "email", "photo", "role"];

function filterObj(obj, ...fields) {
  const fieldSet = new Set(fields);
  const result = {};
  Object.entries(obj).forEach(([field, value]) => {
    if (fieldSet.has(field)) result[field] = value;
  });
  return result;
}

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

export const getUser = factory.getOne(User);
export const getAllUsers = factory.getMany(User, validFields);
export const createUser = factory.createOne(User);
export const updateUser = factory.updateOne(User);
export const deleteUser = factory.deleteOne(User);

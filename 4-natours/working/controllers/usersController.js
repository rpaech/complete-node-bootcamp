import multer from "multer";
import sharp from "sharp";
import User from "../models/usersModel.js";
import asyncErrorWrapper from "../helpers/asyncErrorWrapper.js";
import AppError from "../helpers/appError.js";
import * as factory from "./routeHandlerFactory.js";

// const multerStorage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "public/img/users");
//   },
//   filename: (req, file, callback) => {
//     const ext = file.mimetype.split("/")[1];
//     callback(null, `user-${req.user.id}-${Date.now()}.${ext}`);
//   },
// });
const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) callback(null, true);
  else callback(new AppError("Uploaded file is not an image.", 400), false);
};
const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

const validFields = ["name", "email", "photo", "role"];

function filterObj(obj, ...fields) {
  const fieldSet = new Set(fields);
  const result = {};
  Object.entries(obj).forEach(([field, value]) => {
    if (fieldSet.has(field)) result[field] = value;
  });
  return result;
}

export const setMyProfileId = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

export const uploadUserPhoto = upload.single("photo");

export const resizeUserPhoto = (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  next();
};

export const updateMyProfile = asyncErrorWrapper(async (req, res, next) => {
  if (req.body.password)
    throw new AppError("Unable to update password via this route.", 403);

  const profileData = filterObj(req.body, "name", "email");
  if (req.file) profileData.photo = req.file.filename;
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

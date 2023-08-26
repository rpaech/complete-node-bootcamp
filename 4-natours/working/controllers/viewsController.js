import Tour from "../models/toursModel.js";
import User from "../models/usersModel.js";
import asyncErrorWrapper from "../helpers/asyncErrorWrapper.js";
import AppError from "../helpers/appError.js";

export const getOverview = asyncErrorWrapper(async (req, res, next) => {
  const tours = await Tour.find();

  res.status(200).render("overview", {
    title: "All tours",
    tours,
  });
});

export const getTour = asyncErrorWrapper(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: "reviews",
    fields: "review rating user",
  });
  if (!tour) throw new AppError(`No tour found for '${req.params.slug}'.`, 404);

  res.status(200).render("tour", {
    title: tour.name,
    tour,
  });
});

export const getLoginForm = asyncErrorWrapper(async (req, res, next) => {
  res.status(200).render("login", { title: "Login" });
});

export const getAccount = asyncErrorWrapper(async (req, res, next) => {
  res.status(200).render("account", { title: "My account" });
});

export const updateUserData = asyncErrorWrapper(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!user) throw new AppError("Unable to update user data.", 404);

  res.status(200).render("account", { title: "My account", user });
});

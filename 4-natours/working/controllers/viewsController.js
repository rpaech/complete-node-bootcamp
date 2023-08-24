import Tour from "../models/toursModel.js";
import asyncErrorWrapper from "../helpers/asyncErrorWrapper.js";
import AppError from "../helpers/appError.js";

export const getOverview = asyncErrorWrapper(async (req, res) => {
  const tours = await Tour.find();

  res.status(200).render("overview", {
    title: "All tours",
    tours,
  });
});

export const getTour = asyncErrorWrapper(async (req, res) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: "reviews",
    fields: "review rating user",
  });
  if (!tour) throw new AppError(`No tour found for '${req.params.slug}'`, 400);

  res.status(200).render("tour", {
    title: tour.name,
    tour,
  });
});

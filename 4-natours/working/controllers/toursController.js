import Tour from "../models/toursModel.js";
import asyncErrorWrapper from "../helpers/asyncErrorWrapper.js";
import AppError from "../helpers/appError.js";
import * as factory from "./routeHandlerFactory.js";

const validFields = [
  "name",
  "duration",
  "difficulty",
  "duration",
  "ratingsAverage",
  "price",
];

export function aliasTopTours(req, res, next) {
  req.query.limit = "5";
  req.query.sort = "-ratingsAverage,price";
  req.query.fields = "name,price,ratingsAverage,difficulty,summary";
  next();
}

export const getTourStats = asyncErrorWrapper(async (req, res, next) => {
  const stats = await Tour.aggregate([
    { $match: { ratingsAverage: { $gte: 4.5 } } },
    {
      $group: {
        _id: { $toUpper: "$difficulty" },
        numTours: { $sum: 1 },
        numRatings: { $sum: "$ratingsQuantity" },
        avgRating: { $avg: "$ratingsAverage" },
        avgPrice: { $avg: "$price" },
        minPrice: { $min: "$price" },
        maxPrice: { $max: "$price" },
      },
    },
    { $sort: { avgPrice: 1 } },
    { $match: { _id: { $ne: "EASY" } } },
  ]);
  res.status(200).json({
    status: "success",
    data: {
      stats,
    },
  });
});

export const getMonthlyPlan = asyncErrorWrapper(async (req, res, next) => {
  const year = Number(req.params.year);
  const plan = await Tour.aggregate([
    { $unwind: "$startDates" },
    {
      match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },
    {
      $group: {
        _id: { $month: "$startDates" },
        numTours: { $sum: 1 },
        tours: { $push: "$name" },
      },
    },
    { $addFields: { month: "$_id" } },
    { $project: { _id: 0 } },
    { $sort: { month: 1 } },
    { $limit: 3 },
  ]);
  res.status(200).json({
    status: "success",
    data: {
      plan,
    },
  });
});

export const getToursWithin = asyncErrorWrapper(async (req, res, next) => {
  const { distance, latlng, unit } = req.params;

  const [lat, lng] = latlng.split(",");
  if (!lat || !lng) throw new AppError("Invalid latitude and longitude.", 400);

  const radius = distance / (unit === "mi" ? 3963.2 : 6378.1);

  const tours = await Tour.find({
    startLocation: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });

  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      data: tours,
    },
  });
});

export const getTourDistances = asyncErrorWrapper(async (req, res, next) => {
  const { latlng, unit } = req.params;

  const [lat, lng] = latlng.split(",");
  if (!lat || !lng) throw new AppError("Invalid latitude and longitude.", 400);

  const multiplier = (unit === "mi" ? 0.621371 : 1) / 1000;

  const distances = await Tour.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [Number(lng), Number(lat)],
        },
        distanceField: "distance",
        distanceMultiplier: multiplier,
      },
    },
    {
      $project: {
        distance: 1,
        name: 1,
      },
    },
  ]);

  res.status(200).json({
    status: "success",
    results: distances.length,
    data: {
      data: distances,
    },
  });
});

export const getTour = factory.getOne(Tour, { path: "reviews" });
export const getAllTours = factory.getMany(Tour, validFields);
export const createTour = factory.createOne(Tour);
export const updateTour = factory.updateOne(Tour);
export const deleteTour = factory.deleteOne(Tour);

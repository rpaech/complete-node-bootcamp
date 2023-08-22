import Tour from "../models/toursModel.js";
import ApiRequest from "../helpers/apiRequest.js";
import asyncErrorWrapper from "../helpers/asyncErrorWrapper.js";
import AppError from "../helpers/appError.js";

const validFields = [
  "name",
  "duration",
  "difficulty",
  "duration",
  "ratingsAverage",
  "price",
];

// function parseToursQueryCriteria(query) {
//   const validFields = new Set([
//     "name",
//     "duration",
//     "difficulty",
//     "duration",
//     "ratingsAverage",
//     "price",
//   ]);
//   const validOperators = new Set(["gte", "gt", "lte", "lt"]);

//   const result = {};

//   for (const [field, fieldValue] of Object.entries(query)) {
//     if (validFields.has(field)) {
//       switch (typeof fieldValue) {
//         case "object":
//           for (const [op, opValue] of Object.entries(fieldValue)) {
//             if (!validOperators.has(op))
//               throw new AppError(`Invalid query operator '${op}'.`, 404);
//             if (!result[field]) result[field] = {};
//             result[field][`$${op}`] = opValue;
//           }
//           break;
//         case "boolean":
//         case "number":
//         case "string":
//           result[field] = fieldValue;
//           break;
//         default:
//           throw new AppError(
//             `Invalid query type: '${field}' is of type '${typeof fieldValue}'.`,
//             404,
//           );
//       }
//     }
//   }

//   return result;
// }

export function aliasTopTours(req, res, next) {
  req.query.limit = "5";
  req.query.sort = "-ratingsAverage,price";
  req.query.fields = "name,price,ratingsAverage,difficulty,summary";
  next();
}

export const getAllTours = asyncErrorWrapper(async (req, res, next) => {
  const apiRequest = new ApiRequest(Tour.find(), req.query, validFields)
    .filter()
    .sort()
    .select()
    .paginate();
  const tours = await apiRequest.query;
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
});

export const getTour = asyncErrorWrapper(async (req, res, next) => {
  const tour = await Tour.findById(req.params.id).populate("reviews");

  if (!tour)
    throw new AppError(`No tour found for ID '${req.params.id}'.`, 404);

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
});

export const createTour = asyncErrorWrapper(async (req, res, next) => {
  const newTour = await Tour.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      tour: newTour,
    },
  });
});

export const updateTour = asyncErrorWrapper(async (req, res, next) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!tour)
    throw new AppError(`No tour found for ID '${req.params.id}'.`, 404);

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
});

export const deleteTour = asyncErrorWrapper(async (req, res, next) => {
  const tour = await Tour.findByIdAndDelete(req.params.id);

  if (!tour)
    throw new AppError(`No tour found for ID '${req.params.id}'.`, 404);

  res.status(204).json({
    status: "success",
    data: null,
  });
});

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

import Tour from "../models/toursModel.js";
import ApiRequest from "../helpers/apiRequest.js";

function parseToursQueryCriteria(query) {
  const validFields = new Set([
    "name",
    "duration",
    "difficulty",
    "duration",
    "ratingsAverage",
    "price",
  ]);
  const validOperators = new Set(["gte", "gt", "lte", "lt"]);

  const result = {};

  for (const [field, fieldValue] of Object.entries(query)) {
    if (validFields.has(field)) {
      switch (typeof fieldValue) {
        case "object":
          for (const [op, opValue] of Object.entries(fieldValue)) {
            if (!validOperators.has(op))
              throw new Error(`Invalid query operator '${op}'.`);
            if (!result[field]) result[field] = {};
            result[field][`$${op}`] = opValue;
          }
          break;
        case "boolean":
        case "number":
        case "string":
          result[field] = fieldValue;
          break;
        default:
          throw new Error(
            `Invalid query type: '${field}' is of type '${typeof fieldValue}'.`,
          );
      }
    }
  }

  return result;
}

export function aliasTopTours(req, res, next) {
  req.query.limit = "5";
  req.query.sort = "-ratingsAverage,price";
  req.query.fields = "name,price,ratingsAverage,difficulty,summary";
  next();
}

export async function getAllTours(req, res) {
  try {
    const apiRequest = new ApiRequest(Tour.find(), req.query)
      .filter(parseToursQueryCriteria)
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
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
}

export async function getTour(req, res) {
  try {
    const tour = await Tour.findById(req.params.id);
    // findById(...) is shorthand for findOne({ _id: ... })
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
}

export async function createTour(req, res) {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
}

export async function updateTour(req, res) {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
}

export async function deleteTour(req, res) {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
}

export async function getTourStats(req, res) {
  try {
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
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
}

export async function getMonthlyPlan(req, res) {
  try {
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
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
}

import Tour from "../models/toursModel.js";

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

export async function getAllTours(req, res) {
  try {
    const criteria = parseToursQueryCriteria(req.query);
    const toursQuery = Tour.find(criteria);

    // TODO: Apply additional operations to the query.
    // { difficulty: "easy", duration: { $gte: 5 } }

    const tours = await toursQuery;

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

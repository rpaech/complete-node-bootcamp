import Tour from "../models/toursModel.js";

function createToursFilter(urlQuery) {
  const validQueryFields = [
    "name",
    "duration",
    "difficulty",
    "duration",
    "ratingsAverage",
    "price",
  ];

  const validComparisonOperators = ["gte", "gt", "lte", "lt"];

  const filter = {};
  validQueryFields.forEach((field) => {
    if (urlQuery[field]) {
      switch (typeof urlQuery[field]) {
        case "object":
          validComparisonOperators.forEach((operator) => {
            if (urlQuery[field][operator]) {
              if (!filter[field]) filter[field] = {};
              filter[field][`$${operator}`] = urlQuery[field][operator];
            }
          });
          break;
        default:
          filter[field] = urlQuery[field];
      }
    }
  });

  return filter;
}

export async function getAllTours(req, res) {
  try {
    const filter = createToursFilter(req.query);
    const toursQuery = Tour.find(filter);

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
      message: error,
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
      message: error,
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
      message: error,
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
      message: error,
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
      message: error,
    });
  }
}

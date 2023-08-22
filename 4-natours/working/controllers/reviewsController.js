import Review from "../models/reviewsModel.js";
import ApiRequest from "../helpers/apiRequest.js";
import asyncErrorWrapper from "../helpers/asyncErrorWrapper.js";
import AppError from "../helpers/appError.js";

const validFields = ["review", "rating", "user", "tour", "createdAt"];

export const getAllReviews = asyncErrorWrapper(async (req, res, next) => {
  const apiRequest = new ApiRequest(Review.find(), req.query, validFields)
    .filter()
    .sort()
    .select()
    .paginate();
  const reviews = await apiRequest.query;
  res.status(200).json({
    status: "success",
    results: reviews.length,
    data: {
      reviews,
    },
  });
});

export const getReview = asyncErrorWrapper(async (req, res, next) => {
  const review = await Review.findById(req.params.id);

  if (!review)
    throw new AppError(`No review found for ID '${req.params.id}'.`, 404);

  res.status(200).json({
    status: "success",
    data: {
      review,
    },
  });
});

export const createReview = asyncErrorWrapper(async (req, res, next) => {
  // req.body.user = req.user.id;
  const review = await Review.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      review,
    },
  });
});

export const updateReview = asyncErrorWrapper(async (req, res, next) => {
  // const extantReview = await Review.findById(req.params.id);
  // if (!extantReview)
  //   throw new AppError(`No review found for ID '${req.params.id}'.`, 404);

  // if (extantReview.user.toString() !== req.user.id)
  //   throw new AppError("Only the review author can update a review.", 403);

  // req.body.user = req.user.id;

  const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      review,
    },
  });
});

export const deleteReview = asyncErrorWrapper(async (req, res, next) => {
  // const extantReview = await Review.findById(req.params.id);
  // if (!extantReview)
  //   throw new AppError(`No review found for ID '${req.params.id}'.`, 404);

  // if (extantReview.user.toString() !== req.user.id && req.user.role !== "admin")
  //   throw new AppError(
  //     "Only the review author or an administrator can delete a review.",
  //     403,
  //   );

  const review = await Review.findByIdAndDelete(req.params.id);

  if (!review)
    throw new AppError(`No review found for ID '${req.params.id}'.`, 404);

  res.status(204).json({
    status: "success",
    data: null,
  });
});

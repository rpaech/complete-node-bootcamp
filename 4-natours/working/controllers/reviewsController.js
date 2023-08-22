import Review from "../models/reviewsModel.js";
import * as factory from "./routeHandlerFactory.js";

const validFields = ["review", "rating", "user", "tour", "createdAt"];

export const setQueryIds = (req, res, next) => {
  if (req.params.tourId) req.query.tour = req.params.tourId;
  next();
};

export const setBodyIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

export const getReview = factory.getOne(Review);
export const getAllReviews = factory.getMany(Review, validFields);
export const createReview = factory.createOne(Review);
export const updateReview = factory.updateOne(Review);
export const deleteReview = factory.deleteOne(Review);

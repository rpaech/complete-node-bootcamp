import express from "express";
import * as reviewsController from "../controllers/reviewsController.js";
import * as authController from "../controllers/authController.js";

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(reviewsController.setQueryIds, reviewsController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo("user"),
    reviewsController.setBodyIds,
    reviewsController.createReview,
  );

router
  .route("/:id")
  .get(reviewsController.getReview)
  .patch(authController.protect, reviewsController.updateReview)
  .delete(authController.protect, reviewsController.deleteReview);

export default router;

import express from "express";
import * as reviewsController from "../controllers/reviewsController.js";
import * as authController from "../controllers/authController.js";

const router = express.Router({ mergeParams: true });

///////////////////////////////////////////////////////////////////////////////
// Protect the routes below to only authenticated users.
router.use(authController.protect);
///////////////////////////////////////////////////////////////////////////////

router
  .route("/")
  .get(reviewsController.setQueryIds, reviewsController.getAllReviews)
  .post(
    authController.restrictTo("user"),
    reviewsController.setBodyIds,
    reviewsController.createReview,
  );

router
  .route("/:id")
  .get(reviewsController.getReview)
  .patch(
    authController.restrictTo("user", "admin"),
    reviewsController.updateReview,
  )
  .delete(
    authController.restrictTo("user", "admin"),
    reviewsController.deleteReview,
  );

export default router;

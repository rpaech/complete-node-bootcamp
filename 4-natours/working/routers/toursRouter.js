import express from "express";
import * as toursController from "../controllers/toursController.js";
import * as authController from "../controllers/authController.js";

const router = express.Router();

// router.param("id", toursController.checkId);

router
  .route("/top-5-cheap")
  .get(
    authController.protect,
    toursController.aliasTopTours,
    toursController.getAllTours,
  );

router
  .route("/stats")
  .get(authController.protect, toursController.getTourStats);

router
  .route("/monthly-plan/:year")
  .get(authController.protect, toursController.getMonthlyPlan);

router
  .route("/")
  .get(authController.protect, toursController.getAllTours)
  .post(
    authController.protect,
    authController.restrictTo("admin", "lead-guide"),
    toursController.createTour,
  );

router
  .route("/:id")
  .get(authController.protect, toursController.getTour)
  .patch(
    authController.protect,
    authController.restrictTo("admin", "lead-guide"),
    toursController.updateTour,
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "lead-guide"),
    toursController.deleteTour,
  );

export default router;

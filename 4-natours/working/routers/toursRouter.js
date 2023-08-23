import express from "express";
import * as toursController from "../controllers/toursController.js";
import * as authController from "../controllers/authController.js";
import reviewRouter from "./reviewsRouter.js";

const router = express.Router();

router.use("/:tourId/reviews", reviewRouter);

router
  .route("/top-5-cheap")
  .get(toursController.aliasTopTours, toursController.getAllTours);
router
  .route("/stats")
  .get(authController.protect, toursController.getTourStats);
router
  .route("/monthly-plan/:year")
  .get(
    authController.protect,
    authController.restrictTo("admin", "lead-guide", "guide"),
    toursController.getMonthlyPlan,
  );

router
  .route("/within/:distance/loc/:latlng/unit/:unit")
  .get(toursController.getToursWithin);

router
  .route("/distance/:latlng/unit/:unit")
  .get(toursController.getTourDistances);

router
  .route("/")
  .get(toursController.getAllTours)
  .post(
    authController.protect,
    authController.restrictTo("admin", "lead-guide"),
    toursController.createTour,
  );
router
  .route("/:id")
  .get(toursController.getTour)
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

import express from "express";
import * as toursController from "../controllers/toursController.js";

const router = express.Router();

// router.param("id", toursController.checkId);

router
  .route("/top-5-cheap")
  .get(toursController.aliasTopTours, toursController.getAllTours);

router
  .route("/")
  .get(toursController.getAllTours)
  .post(toursController.createTour);

router
  .route("/:id")
  .get(toursController.getTour)
  .patch(toursController.updateTour)
  .delete(toursController.deleteTour);

export default router;

import express from "express";
import * as viewsController from "../controllers/viewsController.js";
import * as authController from "../controllers/authController.js";

const router = express.Router();

router.use(authController.isLoggedIn);

router.get("/", viewsController.getOverview);
router.get("/tour/:slug", viewsController.getTour);
router.get("/login", viewsController.getLoginForm);

export default router;

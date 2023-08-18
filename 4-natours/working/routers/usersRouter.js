import express from "express";
import * as usersController from "../controllers/usersController.js";
import * as authController from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

router.patch(
  "/updatePassword",
  authController.protect,
  authController.updatePassword,
);

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    usersController.getAllUsers,
  )
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    usersController.createUser,
  );

router
  .route("/:id")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    usersController.getUser,
  )
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    usersController.updateUser,
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    usersController.deleteUser,
  );

export default router;

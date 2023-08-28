import express from "express";
import * as usersController from "../controllers/usersController.js";
import * as authController from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

///////////////////////////////////////////////////////////////////////////////
// Protect the routes below to only authenticated users.
router.use(authController.protect);
///////////////////////////////////////////////////////////////////////////////

router.patch("/updateMyPassword", authController.updateMyPassword);
router.get(
  "/myProfile",
  usersController.setMyProfileId,
  usersController.getUser,
);
router.patch(
  "/updateMyProfile",
  usersController.uploadUserPhoto,
  usersController.resizeUserPhoto,
  usersController.updateMyProfile,
);
router.delete("/deleteMyProfile", usersController.deleteMyProfile);

///////////////////////////////////////////////////////////////////////////////
// Restrict the routes below to only the 'admin' role.
router.use(authController.restrictTo("admin"));
///////////////////////////////////////////////////////////////////////////////

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.createUser);
router
  .route("/:id")
  .get(usersController.getUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

export default router;

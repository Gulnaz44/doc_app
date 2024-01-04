const express = require("express");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//Get method || USERS
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//Get method || ADMIN
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//Get method || Notification
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);
module.exports = router;

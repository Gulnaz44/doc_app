const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//Apply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notification Doctor || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

//Delete notification
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//Get All DOC
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//BOOK APPOINMENT
router.post("/book-appointment", authMiddleware, bookAppointmentController);

//Booking Availablility
router.post(
  "/booking-availability",
  authMiddleware,
  bookingAvailabilityController
);

//Appoinment List
router.get("/user-appointments", authMiddleware, userAppointmentController);

module.exports = router;

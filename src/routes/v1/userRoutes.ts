import express from "express";
import { login, register } from "../../controllers/userControllers";
import validateRequestBody from "../../utilities/validateRequestBody";
import userRegistrationValidation from "../../validations/userRegistrationValidation";
import authMiddleware from "../../middlewares/authMiddleware";
const router = express.Router();

router.post("/login", login);
router.post(
  "/register",
  validateRequestBody(userRegistrationValidation),
  register
);
router.post("/test", authMiddleware, (req, res) => {
  res.status(200).json({ message: "test api" });
});

export default router;

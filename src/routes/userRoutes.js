import express from "express";
import {
  userGetLike,
  userGetRate,
  userCreateLike,
} from "../controllers/userControllers.js";

const userRoutes = express.Router();

userRoutes.get("/user-get-like-onId/:userId", userGetLike);
userRoutes.get("/user-get-rate-onId/:userId", userGetRate);
userRoutes.post("/user-create-like", userCreateLike);
export default userRoutes;

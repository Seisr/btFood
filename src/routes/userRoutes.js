import express from "express";
import { userGetLike, userGetRate } from "../controllers/userControllers.js";

const userRoutes = express.Router();

userRoutes.get("/user-get-like-onId/:userId", userGetLike);
userRoutes.get("/user-get-rate-onId/:userId", userGetRate);
export default userRoutes;

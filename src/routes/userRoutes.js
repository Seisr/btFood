import express from "express";
import { userGetLike } from "../controllers/userControllers.js";

const userRoutes = express.Router();

userRoutes.get("/user-get-like-onId/:userId", userGetLike);
export default userRoutes;

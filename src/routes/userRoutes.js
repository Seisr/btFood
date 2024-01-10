import express from "express";
import {
  userGetLike,
  userGetRate,
  userCreateLike,
  userDeleteLike,
} from "../controllers/userControllers.js";

const userRoutes = express.Router();

userRoutes.get("/user-get-like-onId/:userId", userGetLike);
userRoutes.get("/user-get-rate-onId/:userId", userGetRate);
userRoutes.post("/user-create-like", userCreateLike);
userRoutes.delete("/user-delete-like/:userId/:resId", userDeleteLike);

export default userRoutes;

import express from "express";
import {
  userGetLike,
  userGetRate,
  userCreateLike,
  userDeleteLike,
  userCreateRate,
} from "../controllers/userControllers.js";

const userRoutes = express.Router();

userRoutes.get("/user-get-like-onId/:userId", userGetLike);
userRoutes.get("/user-get-rate-onId/:userId", userGetRate);
userRoutes.post("/user-create-like", userCreateLike);
userRoutes.delete("/user-delete-like/:userId/:resId", userDeleteLike);
userRoutes.post("/user-create-rate", userCreateRate);

export default userRoutes;

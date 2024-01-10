import express from "express";
import { resGetLike } from "../controllers/resControllers.js";

const resRoutes = express.Router();

resRoutes.get("/res-get-like/:resId", resGetLike);

export default resRoutes;

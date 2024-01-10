import express from "express";
import { resGetLike, resGetRate } from "../controllers/resControllers.js";

const resRoutes = express.Router();

resRoutes.get("/res-get-like-onId/:resId", resGetLike);
resRoutes.get("/res-get-rate-onId/:resId", resGetRate);

export default resRoutes;

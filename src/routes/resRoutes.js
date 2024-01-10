import express from "express";

const resRoutes = express.Router();

resRoutes.get("/like-res", getLike);

export default resRoutes;

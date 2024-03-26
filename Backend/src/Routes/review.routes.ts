import { Router } from "express";
import { createReview, getOneReview, getReviews, getSpecReviews, getUserReviews } from "../Controllers/review.controller";

const reviewRouter = Router()

reviewRouter.post("/",createReview)
reviewRouter.get("/", getReviews)
reviewRouter.get("/:id", getOneReview)
reviewRouter.get("/spec/:id", getSpecReviews);
reviewRouter.get("/user/:id", getUserReviews);

export default reviewRouter;
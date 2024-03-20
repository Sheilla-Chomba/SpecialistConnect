import { Router } from "express";
import { createReview, getOneReview, getReviews, getSpecReviews } from "../Controllers/review.controller";

const reviewRouter = Router()

reviewRouter.post("/",createReview)
reviewRouter.get("/", getReviews)
reviewRouter.get("/:id", getOneReview)
reviewRouter.get("/spec/:id", getSpecReviews);

export default reviewRouter;
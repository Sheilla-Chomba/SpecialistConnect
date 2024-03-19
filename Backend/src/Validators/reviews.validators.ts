import joi from "joi";

export const registerReviewSchema = joi.object({
  order_id: joi.string().required(),
  review_desc: joi.string().required(),
});

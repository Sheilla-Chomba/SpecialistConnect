import joi from "joi";

export const registerOrderSchema = joi.object({
  spec_id: joi.string().required(),
  user_id: joi.string().required(),
  order_desc: joi.string().required(),
  status: joi.string()
});

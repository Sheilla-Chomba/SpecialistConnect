import joi from "joi";

export const registerSpecSchema = joi.object({
  job_title: joi.string().min(3).required(),
  spec_loc: joi.string().min(3).required(),
  spec_desc: joi.string().required(),
  ratings: joi.number().required(),
  prof_image:joi.string()
});

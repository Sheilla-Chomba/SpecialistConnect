import joi from 'joi'

export const registerUserSchema = joi.object({
  f_name: joi.string().min(3).required(),
  l_name: joi.string().min(3).required(),
  email: joi.string().email().required(),
  password: joi.string().required()
});
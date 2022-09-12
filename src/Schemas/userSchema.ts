import joi from "joi";

const userSchema = joi.object({
    email: joi.string().regex(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i).required(),
    password: joi.string().min(10).required()
});

export default userSchema;
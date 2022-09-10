import joi from "joi";

const cardSchema = joi.object({
    title: joi.string().required(),
    number: joi.number().required(),
    name: joi.string().required(),
    cvc: joi.number().max(3).required(),
    date: joi.string().pattern(/^[0-9]{1,2}[\/][0-9]{2}$/).required(),
    password: joi.string().required(),
    isVirtual: joi.boolean().required(),
    type: joi.string().valid('credit','debit','creditAndDebit').required()
});

export default cardSchema;
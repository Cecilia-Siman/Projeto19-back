import joi from "joi";

const noteSchema = joi.object({
    title: joi.string().max(50).required(),
    noteText: joi.string().max(1000).required()
});

export default noteSchema;
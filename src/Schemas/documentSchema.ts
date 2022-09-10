import joi from "joi";

const docSchema = joi.object({
    type: joi.string().valid('rg','cpf').required(),
	fullName: joi.string().required(),
	issueDate: joi.string().pattern(/^[0-9]{1,2}[\/][0-9]{2}$/).required(),
	expirationDate: joi.string().pattern(/^[0-9]{1,2}[\/][0-9]{2}$/).required(),
	number: joi.number().required(),
	issueInstitution: joi.string().required()
});

export default docSchema;
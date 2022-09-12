"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var joi_1 = __importDefault(require("joi"));
var docSchema = joi_1["default"].object({
    type: joi_1["default"].string().valid('rg', 'cpf').required(),
    fullName: joi_1["default"].string().required(),
    issueDate: joi_1["default"].string().pattern(/^[0-9]{1,2}[\/][0-9]{2}$/).required(),
    expirationDate: joi_1["default"].string().pattern(/^[0-9]{1,2}[\/][0-9]{2}$/).required(),
    number: joi_1["default"].number().required(),
    issueInstitution: joi_1["default"].string().required()
});
exports["default"] = docSchema;

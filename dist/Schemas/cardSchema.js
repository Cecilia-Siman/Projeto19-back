"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var joi_1 = __importDefault(require("joi"));
var cardSchema = joi_1["default"].object({
    title: joi_1["default"].string().required(),
    number: joi_1["default"].number().required(),
    name: joi_1["default"].string().required(),
    cvc: joi_1["default"].number().max(3).required(),
    date: joi_1["default"].string().pattern(/^[0-9]{1,2}[\/][0-9]{2}$/).required(),
    password: joi_1["default"].string().required(),
    isVirtual: joi_1["default"].boolean().required(),
    type: joi_1["default"].string().valid('credit', 'debit', 'creditAndDebit').required()
});
exports["default"] = cardSchema;

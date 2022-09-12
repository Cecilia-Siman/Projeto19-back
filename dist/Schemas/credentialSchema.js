"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var joi_1 = __importDefault(require("joi"));
var credentialSchema = joi_1["default"].object({
    title: joi_1["default"].string().required(),
    url: joi_1["default"].string().pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/).required(),
    userName: joi_1["default"].string().required(),
    password: joi_1["default"].string().required()
});
exports["default"] = credentialSchema;

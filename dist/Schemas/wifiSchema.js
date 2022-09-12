"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var joi_1 = __importDefault(require("joi"));
var wifiSchema = joi_1["default"].object({
    name: joi_1["default"].string().required(),
    password: joi_1["default"].string().required()
});
exports["default"] = wifiSchema;

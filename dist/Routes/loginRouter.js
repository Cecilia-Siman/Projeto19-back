"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var loginController_1 = require("../Controllers/loginController");
var schemaValidator_1 = require("../Middlewares/schemaValidator");
var userSchema_1 = __importDefault(require("../Schemas/userSchema"));
var loginRouter = (0, express_1.Router)();
loginRouter.post('/login', (0, schemaValidator_1.validateSchema)(userSchema_1["default"]), loginController_1.login);
exports["default"] = loginRouter;

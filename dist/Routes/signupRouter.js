"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var signupController_1 = require("../Controllers/signupController");
var schemaValidator_1 = require("../Middlewares/schemaValidator");
var userSchema_1 = __importDefault(require("../Schemas/userSchema"));
var signUpRouter = (0, express_1.Router)();
signUpRouter.post('/signup', (0, schemaValidator_1.validateSchema)(userSchema_1["default"]), signupController_1.signUp);
exports["default"] = signUpRouter;

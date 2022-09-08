"use strict";
exports.__esModule = true;
var express_1 = require("express");
var signupController_1 = require("../Controllers/signupController");
var signUpRouter = (0, express_1.Router)();
signUpRouter.post('/signup', signupController_1.signUp);
exports["default"] = signUpRouter;

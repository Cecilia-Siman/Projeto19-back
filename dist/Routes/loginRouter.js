"use strict";
exports.__esModule = true;
var express_1 = require("express");
var loginController_1 = require("../Controllers/loginController");
var loginRouter = (0, express_1.Router)();
loginRouter.post('/login', loginController_1.login);
exports["default"] = loginRouter;

"use strict";
exports.__esModule = true;
var express_1 = require("express");
var credentialsController_1 = require("../Controllers/credentialsController");
var credentialRouter = (0, express_1.Router)();
credentialRouter.post('/create', credentialsController_1.createCredential);
credentialRouter.get('/find/:id', credentialsController_1.findCredential);
credentialRouter["delete"]('/delete/:id', credentialsController_1.deleteCredential);
exports["default"] = credentialRouter;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var credentialsController_1 = require("../Controllers/credentialsController");
var schemaValidator_1 = require("../Middlewares/schemaValidator");
var credentialSchema_1 = __importDefault(require("../Schemas/credentialSchema"));
var credentialRouter = (0, express_1.Router)();
credentialRouter.post('/create', (0, schemaValidator_1.validateSchema)(credentialSchema_1["default"]), credentialsController_1.createCredential);
credentialRouter.get('/find/:id', credentialsController_1.findCredential);
credentialRouter["delete"]('/delete/:id', credentialsController_1.deleteCredential);
exports["default"] = credentialRouter;

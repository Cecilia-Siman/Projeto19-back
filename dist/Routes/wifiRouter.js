"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var wifiController_1 = require("../Controllers/wifiController");
var schemaValidator_1 = require("../Middlewares/schemaValidator");
var wifiSchema_1 = __importDefault(require("../Schemas/wifiSchema"));
var wifiRouter = (0, express_1.Router)();
wifiRouter.post('/create', (0, schemaValidator_1.validateSchema)(wifiSchema_1["default"]), wifiController_1.createWifi);
wifiRouter.get('/find/:id', wifiController_1.findWifi);
wifiRouter.get('find/', wifiController_1.findAllWifi);
wifiRouter["delete"]('/delete/:id', wifiController_1.deleteWifi);
exports["default"] = wifiRouter;

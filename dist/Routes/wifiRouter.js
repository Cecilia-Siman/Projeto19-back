"use strict";
exports.__esModule = true;
var express_1 = require("express");
var wifiController_1 = require("../Controllers/wifiController");
var wifiRouter = (0, express_1.Router)();
wifiRouter.post('/create', wifiController_1.createWifi);
wifiRouter.get('/find/:id', wifiController_1.findWifi);
wifiRouter["delete"]('/delete/:id', wifiController_1.deleteWifi);
exports["default"] = wifiRouter;

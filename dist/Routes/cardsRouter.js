"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var cardsController_1 = require("../Controllers/cardsController");
var schemaValidator_1 = require("../Middlewares/schemaValidator");
var cardSchema_1 = __importDefault(require("../Schemas/cardSchema"));
var cardRouter = (0, express_1.Router)();
cardRouter.post('/create', (0, schemaValidator_1.validateSchema)(cardSchema_1["default"]), cardsController_1.createCard);
cardRouter.get('/find/:id', cardsController_1.findCard);
cardRouter["delete"]('/delete/:id', cardsController_1.deleteCard);
exports["default"] = cardRouter;

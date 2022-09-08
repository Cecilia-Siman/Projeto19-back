"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cardsController_1 = require("../Controllers/cardsController");
var cardRouter = (0, express_1.Router)();
cardRouter.post('/create', cardsController_1.createCard);
cardRouter.get('/find/:id', cardsController_1.findCard);
cardRouter["delete"]('/delete/:id', cardsController_1.deleteCard);
exports["default"] = cardRouter;

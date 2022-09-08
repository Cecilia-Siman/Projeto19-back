"use strict";
exports.__esModule = true;
var express_1 = require("express");
var safeNotesController_1 = require("../Controllers/safeNotesController");
var noteRouter = (0, express_1.Router)();
noteRouter.post('/create', safeNotesController_1.createNote);
noteRouter.get('/find/:id', safeNotesController_1.findNote);
noteRouter["delete"]('/delete/:id', safeNotesController_1.deleteNote);
exports["default"] = noteRouter;

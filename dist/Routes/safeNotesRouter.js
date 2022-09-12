"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var safeNotesController_1 = require("../Controllers/safeNotesController");
var schemaValidator_1 = require("../Middlewares/schemaValidator");
var noteSchema_1 = __importDefault(require("../Schemas/noteSchema"));
var noteRouter = (0, express_1.Router)();
noteRouter.post('/create', (0, schemaValidator_1.validateSchema)(noteSchema_1["default"]), safeNotesController_1.createNote);
noteRouter.get('/find/:id', safeNotesController_1.findNote);
noteRouter.get('/find', safeNotesController_1.findAllNotes);
noteRouter["delete"]('/delete/:id', safeNotesController_1.deleteNote);
exports["default"] = noteRouter;

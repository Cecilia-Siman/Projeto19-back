import { Router } from "express";
import {
    createNote,
    findNote,
    findAllNotes,
    deleteNote 
} from "../Controllers/safeNotesController"
import { validateSchema } from "../Middlewares/schemaValidator";
import noteSchema from "../Schemas/noteSchema";

const noteRouter = Router();

noteRouter.post('/create', validateSchema(noteSchema), createNote);
noteRouter.get('/find/:id', findNote);
noteRouter.get('/find',findAllNotes);
noteRouter.delete('/delete/:id', deleteNote);

export default noteRouter;
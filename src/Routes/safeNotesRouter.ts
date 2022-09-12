import { Router } from "express";
import {
    createNote,
    findNote,
    deleteNote 
} from "../Controllers/safeNotesController"
import { validateSchema } from "../Middlewares/schemaValidator";
import noteSchema from "../Schemas/noteSchema";

const noteRouter = Router();

noteRouter.post('/create', validateSchema(noteSchema), createNote);
noteRouter.get('/find/:id', findNote);
noteRouter.delete('/delete/:id', deleteNote);

export default noteRouter;
import { Router } from "express";
import {
    createNote,
    findNote,
    findAllNotes,
    deleteNotes 
} from "../Controllers/safeNotesController"
import { validateSchema } from "../Middlewares/schemaValidator";
import { tokenValidator } from "../Middlewares/tokenValidator";
import noteSchema from "../Schemas/noteSchema";

const noteRouter = Router();

noteRouter.post('/create', tokenValidator, validateSchema(noteSchema), createNote);
noteRouter.get('/find/:id', tokenValidator, findNote);
noteRouter.get('/find', tokenValidator, findAllNotes);
noteRouter.delete('/delete/:id', tokenValidator, deleteNotes);

export default noteRouter;
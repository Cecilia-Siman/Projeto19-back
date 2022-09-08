import { Router } from "express";
import {
    createNote,
    findNote,
    deleteNote 
} from "../Controllers/safeNotesController"

const noteRouter = Router();

noteRouter.post('/create', createNote);
noteRouter.get('/find/:id', findNote);
noteRouter.delete('/delete/:id', deleteNote);

export default noteRouter;
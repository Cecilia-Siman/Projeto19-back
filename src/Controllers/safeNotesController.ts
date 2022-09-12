import { Request, Response } from "express";
import { 
    newNote,
    findOneNote,
    findUserNotes,
    deleteNote
} from "../Services/notesService";


export async function createNote(req:Request, res:Response) {
    const userId = res.locals.userId;
    try{
        const note = {...req.body,userId};
        await newNote(note, userId);
        res.sendStatus(201);
    }
    catch(error){
        console.log(error);
    }
    
}

export async function findNote(req:Request, res:Response) {
    const id = Number(req.params.id);
    const userId = res.locals.userId;
    try{
        const note = await findOneNote(id, userId);
        res.send(note).status(200);
    }
    catch(error){
        console.log(error);
    }
}

export async function findAllNotes(req:Request, res:Response) {
    const userId = res.locals.userId;
    try{
        const listNotes = await findUserNotes(userId);
        res.send(listNotes).status(200);
    }
    catch(error){
        console.log(error);
    }
}

export async function deleteNotes(req:Request, res:Response) {
    const id = Number(req.params.id);
    const userId = res.locals.userId;
    try{
        await deleteNote(id, userId);
        res.sendStatus(200);
    }
    catch(error){
        console.log(error);
    }
}
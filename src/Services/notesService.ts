import { notes } from "@prisma/client";
import { 
    insertNotes,
    findNotes,
    findAllNotes,
    deleteNotes
 } from "../Repositories/notesRepository";

export async function newNote(note:notes,userId:number) {
    try {
        const newNote = {...note, userId}
        console.log(newNote);
        await (insertNotes(newNote));
        return;
    } catch (error) {
        console.log(error);
    }
}

export async function findOneNote(id:number,userId:number) {
    try {
        const note = await (findNotes(id));
        if (note.userId !== userId){
            throw{code:"Unauthorized", message:"Note does not belong to user"};
        }
        else{
            return note;
        }
    } catch (error) {
        console.log(error);
    }
}

export async function findUserNotes(userId: number){
    try {
        const notes = await (findAllNotes(userId));
        return notes;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteNote(id: number, userId: number){
    try {
        const note = await (findNotes(id));
        if (note.userId !== userId){
            throw{code:"Unauthorized", message:"Note does not belong to user"};
        }
        else{
            await deleteNotes(id);
        }
    } catch (error) {
        console.log(error);
    }
}
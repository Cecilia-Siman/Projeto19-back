import { prisma } from "../Config/database"
import { notes } from "@prisma/client";

export async function insertNotes(notes:notes) {
    await prisma.notes.create({
        data: notes
    });
}

export async function findNotes(id:number) {
    const data = await prisma.notes.findUnique({
        where: {id}
    });    
    return data;
}

export async function findAllNotes(userId:number) {
    const data = await prisma.notes.findMany({
        where: {userId}
    });    
    return data;
}

export async function deleteNotes(id:number) {
    await prisma.notes.delete({
        where: {id}
    });
}
import { prisma } from "../Config/database"
import { credentials } from "@prisma/client";

export async function insertCredentials(credentials: credentials) {
    await prisma.credentials.create({
        data: credentials
    });
}

export async function findCredentials(id:number) {
    const data = await prisma.credentials.findUnique({
        where: {id}
    });    
    return data;
}

export async function findAllCredentials(userId:number) {
    const data = await prisma.credentials.findMany({
        where: {userId}
    });    
    return data;
}

export async function deleteCredentials(id:number) {
    await prisma.credentials.delete({
        where: {id}
    });
}
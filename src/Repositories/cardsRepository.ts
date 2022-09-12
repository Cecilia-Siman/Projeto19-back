import { prisma } from "../Config/database"
import { cards } from "@prisma/client";

export async function insertCard(card: cards) {
    await prisma.cards.create({
        data: card
    });
}

export async function findCard(id:number) {
    const data = await prisma.cards.findUnique({
        where: {id}
    });    
    return data;
}

export async function findAllCards(userId:number) {
    const data = await prisma.cards.findMany({
        where: {userId}
    });    
    return data;
}

export async function deleteCards(id:number) {
    await prisma.cards.delete({
        where: {id}
    });
}
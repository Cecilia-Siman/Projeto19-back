import { prisma } from "../Config/database"

export async function insertCard(card) {
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

export async function deleteCard(id:number) {
    await prisma.cards.delete({
        where: {id}
    });
}
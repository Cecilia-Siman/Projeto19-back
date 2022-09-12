import { cards } from "@prisma/client";
import { 
    insertCard,
    findCard,
    findAllCards,
    deleteCards
 } from "../Repositories/cardsRepository";

export async function newCard(card:cards,userId:number) {
    try {
        const newCard = {...card, userId}
        console.log(newCard);
        await (insertCard(newCard));
        return;
    } catch (error) {
        console.log(error);
    }
}

export async function findOneCard(id:number,userId:number) {
    try {
        const card = await (findCard(id));
        if (card.userId !== userId){
            throw{code:"Unauthorized", message:"Card does not belong to user"};
        }
        else{
            return card;
        }
    } catch (error) {
        console.log(error);
    }
}

export async function findUserCards(userId: number){
    try {
        const cards = await (findAllCards(userId));
        return cards;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteCard(id: number, userId: number){
    try {
        const card = await (findCard(id));
        if (card.userId !== userId){
            throw{code:"Unauthorized", message:"Card does not belong to user"};
        }
        else{
            await deleteCards(id);
        }
    } catch (error) {
        console.log(error);
    }
}
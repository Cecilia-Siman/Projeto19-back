import { Request, Response } from "express";
import { 
    newCard,
    findOneCard,
    findUserCards,
    deleteCard 
} from "../Services/cardService";


export async function createCard(req:Request, res:Response) {
    const userId = res.locals.userId;
    try{
        const card = {...req.body,userId};
        await newCard(card, userId);
        res.sendStatus(201);
    }
    catch(error){
        console.log(error);
    }
}

export async function findCard(req:Request, res:Response) {
    const id = Number(req.params.id);
    const userId = res.locals.userId;
    try{
        const card = await findOneCard(id, userId);
        res.send(card).status(200);
    }
    catch(error){
        console.log(error);
    }
}

export async function findAllCards(req:Request, res:Response) {
    const userId = res.locals.userId;
    try{
        const listCards = await findUserCards(userId);
        res.send(listCards).status(200);
    }
    catch(error){
        console.log(error);
    }
}

export async function deleteCards(req:Request, res:Response) {
    const id = Number(req.params.id);
    const userId = res.locals.userId;
    try{
        await deleteCard(id,userId);
        res.sendStatus(200);
    }
    catch(error){
        console.log(error);
    }
}
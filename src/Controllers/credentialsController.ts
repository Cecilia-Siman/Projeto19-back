import { Request, Response } from "express";
import { 
    newCredential,
    findOneCredential,
    findUserCredentials,
    deleteCredential 
} from "../Services/credentialService";


export async function createCredential(req:Request, res:Response) {
    const userId = res.locals.userId;
    try{
        const credential = {...req.body,userId};
        await newCredential(credential, userId);
        res.sendStatus(201);
    }
    catch(error){
        console.log(error);
    }
}

export async function findCredential(req:Request, res:Response) {
    const id = Number(req.params.id);
    const userId = res.locals.userId;
    try{
        const credential = await findOneCredential(id, userId);
        res.send(credential).status(200);
    }
    catch(error){
        console.log(error);
    }
}

export async function findAllCredentials(req:Request, res:Response) {
    const userId = res.locals.userId;
    try{
        const listCredentials = await findUserCredentials(userId);
        res.send(listCredentials).status(200);
    }
    catch(error){
        console.log(error);
    }
}

export async function deleteCredentials(req:Request, res:Response) {
    const id = Number(req.params.id);
    const userId = res.locals.userId;
    try{
        await deleteCredential(id, userId);
        res.sendStatus(200);
    }
    catch(error){
        console.log(error);
    }   
}

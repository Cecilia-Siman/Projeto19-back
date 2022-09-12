import { Request, Response } from "express";
import { 
    newWifi,
    findOneWifi,
    findUserWifi,
    deleteWifi 
} from "../Services/wifiService";


export async function createWifi(req:Request, res:Response) {
    const userId = res.locals.userId;
    try{
        const wifi = {...req.body,userId};
        await newWifi(wifi, userId);
        res.sendStatus(201);
    }
    catch(error){
        console.log(error);
    }
}

export async function findWifi(req:Request, res:Response) {
    const id = Number(req.params.id);
    const userId = res.locals.userId;
    try{
        const wifi = await findOneWifi(id, userId);
        res.send(wifi).status(200);
    }
    catch(error){
        console.log(error);
    }   
}

export async function findAllWifi(req:Request, res:Response) {
    const userId = res.locals.userId;
    try{
        const listWifi = await findUserWifi(userId);
        res.send(listWifi).status(200);
    }
    catch(error){
        console.log(error);
    }
}

export async function deleteWifis(req:Request, res:Response) {
    const id = Number(req.params.id);
    const userId = res.locals.userId;
    try{
        await deleteWifi(id, userId);
        res.sendStatus(200);
    }
    catch(error){
        console.log(error);
    }
}
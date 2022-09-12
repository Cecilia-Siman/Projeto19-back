import { Request, Response } from "express";
import { register } from "../Services/usersService";

export async function signUp(req: Request,res: Response){
    const user = req.body;
    const registered = register(user);
    res.send(registered).status(201);
}
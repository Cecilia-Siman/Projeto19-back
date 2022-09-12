import { Request, Response } from "express";
import { 
    userLogin,
    createToken
} from "../Services/usersService";

export async function login(req:Request, res: Response) {
    await userLogin(req.body);
    const token = createToken(req.body.email);
    res.send(token).status(200);
}
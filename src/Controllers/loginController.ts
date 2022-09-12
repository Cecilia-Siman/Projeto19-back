import { Request, Response } from "express";
import { userLogin } from "../Services/usersService";

export async function login(req:Request, res: Response) {
    const token = await userLogin(req.body);
    res.send(token).status(200);
}
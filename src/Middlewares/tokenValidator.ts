import { Request, Response, NextFunction } from "express";
import { prisma } from "../Config/database"
import jwt from "jsonwebtoken";
import { findUser } from "../Repositories/usersRepository";

import dotenv from 'dotenv';
dotenv.config();

export async function tokenValidator(req:Request,res:Response,next:NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '')

    const secretkey = process.env.JWT_SECRET;

    if (!token) {
        return res.sendStatus(401);
    }

    try {
        const dados = jwt.verify(token, secretkey);
        
        const userInfo = await findUser(dados.email)
    
        if (!userInfo) {
            return res.sendStatus(404);
        }
        console.log(userInfo);
        res.locals.userId = userInfo.id;

        next();
    }   catch (error) {
        res.sendStatus(401);
        
    }
}
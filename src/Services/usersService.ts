import { 
    insertUser,
    findUser 
} from "../Repositories/usersRepository";
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

export async function register(user) {
    try {
        const userData = await findUser(user.email);
        if (userData){
            console.log(userData);
            throw {code:"Unauthorized", message:"Email already registered"};
        }
        try {
            await insertUser(user);
        } catch (error) {
            console.log(error);
        }
    
        return
    } catch (error) {
        console.log(error);
    }
    
}

export async function userLogin(user) {
    try{
        const userData = await findUser(user.email);
        if (!userData){
            throw{code:"Not Found" , message: "Email not registered"};
        }
        if (userData.password !== user.password){
            throw{code:"Unauthorized" , message: "Password does not correspond"};
        }
    }
    catch (error){
        console.log(error);
    }
}

export function createToken(email:string):string{
    const dados = { email };
    const chaveSecreta = process.env.JWT_SECRET;
    const token = jwt.sign(dados, chaveSecreta);
    console.log(token);
    return token;
}
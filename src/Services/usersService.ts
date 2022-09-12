import { 
    insertUser,
    findUser 
} from "../Repositories/usersRepository";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

import dotenv from 'dotenv';
import { users } from "@prisma/client";
import { tokenValidator } from "../Middlewares/tokenValidator";
dotenv.config();

export async function register(user:users) {
    try {
        const userData = await findUser(user.email);
        if (userData){
            console.log(userData);
            throw {code:"Unauthorized", message:"Email already registered"};
        }
        try {
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(user.password, salt);
            const newUser = ({email:user.email, password:hashedPassword})
            await insertUser(newUser);
        } catch (error) {
            console.log(error);
        }
    
        return
    } catch (error) {
        console.log(error);
    }
    
}

export async function userLogin(user: users) {
    try{
        const userData = await findUser(user.email);
        if (!userData){
            throw{code:"Not Found" , message: "Email not registered"};
        }
        if (!bcrypt.compareSync(user.password,userData.password)) {
            throw{code:"Unauthorized" , message: "Password does not correspond"};
        }
        const token = createToken(user.email);
        return token;
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
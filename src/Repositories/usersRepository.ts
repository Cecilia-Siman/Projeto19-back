import { prisma } from "../Config/database"

export async function insertUser(user) {
    await prisma.users.create({
        data: user
    });
}

export async function findUser(email:string) {
    const data = await prisma.users.findUnique({
        where: {email: email}
    });    
    return data;
}


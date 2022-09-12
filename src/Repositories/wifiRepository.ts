import { prisma } from "../Config/database"
import { wifi } from "@prisma/client";

export async function insertWifi(wifi:wifi) {
    await prisma.wifi.create({
        data: wifi
    });
}

export async function findWifi(id:number) {
    const data = await prisma.wifi.findUnique({
        where: {id}
    });    
    return data;
}

export async function findAllWifi(userId:number) {
    const data = await prisma.wifi.findMany({
        where: {userId}
    });    
    return data;
}

export async function deleteWifis(id:number) {
    await prisma.wifi.delete({
        where: {id}
    });
}
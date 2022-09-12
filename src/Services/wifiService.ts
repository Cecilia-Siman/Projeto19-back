import { wifi } from "@prisma/client";
import { 
    insertWifi,
    findWifi,
    findAllWifi,
    deleteWifis
 } from "../Repositories/wifiRepository";

export async function newWifi(wifi:wifi,userId:number) {
    try {
        const newWifi = {...wifi, userId}
        console.log(newWifi);
        await (insertWifi(newWifi));
        return;
    } catch (error) {
        console.log(error);
    }
}

export async function findOneWifi(id:number,userId:number) {
    try {
        const wifi = await (findWifi(id));
        if (wifi.userId !== userId){
            throw{code:"Unauthorized", message:"Wifi does not belong to user"};
        }
        else{
            return wifi;
        }
    } catch (error) {
        console.log(error);
    }
}

export async function findUserWifi(userId: number){
    try {
        const wifi = await (findAllWifi(userId));
        return wifi;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteWifi(id: number, userId: number){
    try {
        const wifi = await (findWifi(id));
        if (wifi.userId !== userId){
            throw{code:"Unauthorized", message:"Wifi does not belong to user"};
        }
        else{
            await deleteWifis(id);
        }
    } catch (error) {
        console.log(error);
    }
}
import { credentials } from "@prisma/client";
import { 
    insertCredentials,
    findCredentials,
    findAllCredentials,
    deleteCredentials
 } from "../Repositories/credentialsRepository";

export async function newCredential(credential:credentials,userId:number) {
    try {
        const newCredential = {...credential, userId}
        console.log(newCredential);
        await (insertCredentials(newCredential));
        return;
    } catch (error) {
        console.log(error);
    }
}

export async function findOneCredential(id:number,userId:number) {
    try {
        const credential = await (findCredentials(id));
        if (credential.userId !== userId){
            throw{code:"Unauthorized", message:"Credential does not belong to user"};
        }
        else{
            return credential;
        }
    } catch (error) {
        console.log(error);
    }
}

export async function findUserCredentials(userId: number){
    try {
        const credentials = await (findAllCredentials(userId));
        return credentials;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteCredential(id: number, userId: number){
    try {
        const credential = await (findCredentials(id));
        if (credential.userId !== userId){
            throw{code:"Unauthorized", message:"Credential does not belong to user"};
        }
        else{
            await deleteCredentials(id);
        }
    } catch (error) {
        console.log(error);
    }
}
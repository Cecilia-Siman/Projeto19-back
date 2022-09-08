import { Router } from "express";
import {
    createCredential,
    findCredential,
    deleteCredential
} from "../Controllers/credentialsController";

const credentialRouter = Router();

credentialRouter.post('/create', createCredential);
credentialRouter.get('/find/:id', findCredential);
credentialRouter.delete('/delete/:id', deleteCredential);

export default credentialRouter;
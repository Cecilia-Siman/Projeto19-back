import { Router } from "express";
import {
    createCredential,
    findCredential,
    deleteCredential
} from "../Controllers/credentialsController";
import { validateSchema } from "../Middlewares/schemaValidator";
import credentialSchema from "../Schemas/credentialSchema";

const credentialRouter = Router();

credentialRouter.post('/create',validateSchema(credentialSchema), createCredential);
credentialRouter.get('/find/:id', findCredential);
credentialRouter.delete('/delete/:id', deleteCredential);

export default credentialRouter;
import { Router } from "express";
import {
    createCredential,
    findCredential,
    findAllCredentials,
    deleteCredentials
} from "../Controllers/credentialsController";
import { validateSchema } from "../Middlewares/schemaValidator";
import { tokenValidator } from "../Middlewares/tokenValidator";
import credentialSchema from "../Schemas/credentialSchema";

const credentialRouter = Router();

credentialRouter.post('/create',tokenValidator,validateSchema(credentialSchema), createCredential);
credentialRouter.get('/find/:id',tokenValidator, findCredential);
credentialRouter.get('/find',tokenValidator, findAllCredentials);
credentialRouter.delete('/delete/:id', tokenValidator,deleteCredentials);

export default credentialRouter;
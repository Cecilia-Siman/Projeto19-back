import { Router } from "express";
import { login } from "../Controllers/loginController";
import { validateSchema } from "../Middlewares/schemaValidator";
import userSchema from "../Schemas/userSchema";

const loginRouter = Router();

loginRouter.post('/login',validateSchema(userSchema), login);

export default loginRouter;
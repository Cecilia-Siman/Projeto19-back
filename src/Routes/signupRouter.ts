import { Router } from "express";
import { signUp } from "../Controllers/signupController";
import { validateSchema } from "../Middlewares/schemaValidator";
import userSchema from "../Schemas/userSchema";

const signUpRouter = Router();

signUpRouter.post('/signup',validateSchema(userSchema), signUp);

export default signUpRouter;
import { Router } from "express";
import { signUp } from "../Controllers/signupController";

const signUpRouter = Router();

signUpRouter.post('/signup', signUp);

export default signUpRouter;
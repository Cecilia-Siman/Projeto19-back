import { Router } from "express";
import { login } from "../Controllers/loginController";

const loginRouter = Router();

loginRouter.post('/login', login);

export default loginRouter;
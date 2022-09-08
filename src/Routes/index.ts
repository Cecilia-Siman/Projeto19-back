import { Router } from "express";
import signUpRouter from "./signupRouter";
import loginRouter from "./loginRouter";
import credentialRouter from "./credentialsRouter";
import cardRouter from "./cardsRouter";
import wifiRouter from "./wifiRouter";
import noteRouter from "./safeNotesRouter";

const router = Router();

router.use(signUpRouter);
router.use(loginRouter);
router.use('/credential', credentialRouter);
router.use('/card', cardRouter);
router.use('/note', noteRouter);
router.use('/wifi', wifiRouter);

export default router;
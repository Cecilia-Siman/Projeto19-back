import { Router } from "express";
import {
    createCard,
    findCard,
    deleteCard 
} from "../Controllers/cardsController"
import { validateSchema } from "../Middlewares/schemaValidator";
import cardSchema from "../Schemas/cardSchema";

const cardRouter = Router();

cardRouter.post('/create',validateSchema(cardSchema), createCard);
cardRouter.get('/find/:id', findCard);
cardRouter.delete('/delete/:id', deleteCard);

export default cardRouter;
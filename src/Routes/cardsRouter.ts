import { Router } from "express";
import {
    createCard,
    findCard,
    findAllCards,
    deleteCards
} from "../Controllers/cardsController"
import { validateSchema } from "../Middlewares/schemaValidator";
import { tokenValidator } from "../Middlewares/tokenValidator";
import cardSchema from "../Schemas/cardSchema";

const cardRouter = Router();

cardRouter.post('/create',tokenValidator,validateSchema(cardSchema), createCard);
cardRouter.get('/find/:id', tokenValidator,findCard);
cardRouter.get('/find/', tokenValidator,findAllCards);
cardRouter.delete('/delete/:id', tokenValidator,deleteCards);

export default cardRouter;
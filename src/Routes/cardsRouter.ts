import { Router } from "express";
import {
    createCard,
    findCard,
    deleteCard 
} from "../Controllers/cardsController"

const cardRouter = Router();

cardRouter.post('/create', createCard);
cardRouter.get('/find/:id', findCard);
cardRouter.delete('/delete/:id', deleteCard);

export default cardRouter;
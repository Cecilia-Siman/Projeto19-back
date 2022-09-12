import { Router } from "express";
import {
    createWifi,
    findWifi,
    deleteWifi 
} from "../Controllers/wifiController"
import { validateSchema } from "../Middlewares/schemaValidator";
import wifiSchema from "../Schemas/wifiSchema";

const wifiRouter = Router();

wifiRouter.post('/create', validateSchema(wifiSchema), createWifi);
wifiRouter.get('/find/:id', findWifi);
wifiRouter.delete('/delete/:id', deleteWifi);

export default wifiRouter;
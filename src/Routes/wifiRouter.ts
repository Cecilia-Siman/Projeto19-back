import { Router } from "express";
import {
    createWifi,
    findWifi,
    findAllWifi,
    deleteWifis 
} from "../Controllers/wifiController"
import { validateSchema } from "../Middlewares/schemaValidator";
import { tokenValidator } from "../Middlewares/tokenValidator";
import wifiSchema from "../Schemas/wifiSchema";

const wifiRouter = Router();

wifiRouter.post('/create',tokenValidator, validateSchema(wifiSchema), createWifi);
wifiRouter.get('/find/:id',tokenValidator, findWifi);
wifiRouter.get('find/',tokenValidator, findAllWifi);
wifiRouter.delete('/delete/:id',tokenValidator, deleteWifis);

export default wifiRouter;
import { Router } from "express";
import {
    createWifi,
    findWifi,
    deleteWifi 
} from "../Controllers/wifiController"

const wifiRouter = Router();

wifiRouter.post('/create', createWifi);
wifiRouter.get('/find/:id', findWifi);
wifiRouter.delete('/delete/:id', deleteWifi);

export default wifiRouter;
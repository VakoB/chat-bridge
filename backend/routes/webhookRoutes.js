import express from "express";
import { webhookHandler } from "../controllers/webhookController.js";

const webhookRouter = express.Router();

webhookRouter.post('/send', webhookHandler);

export default webhookRouter;
import express from "express"
import { getCreditPackages, purchaseCredits } from "../controllers/creditController.js";
import { protect } from "../middlewares/auth.js";

const creditRouter = express.Router();

creditRouter.get('/all', getCreditPackages);
creditRouter.post('/purchase', protect, purchaseCredits);

export default creditRouter;
import express from 'express';
import { addOrder } from '../controllers/orders';

const router = express.Router();

router.post("/add-order", addOrder);

export default router;


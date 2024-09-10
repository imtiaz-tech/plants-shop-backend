import express from 'express';
import { addOrder,getOrders,getSingleOrder,updateOrderStatus } from '../controllers/orders';

const router = express.Router();

router.post("/add-order", addOrder);
router.get("/get-orders", getOrders);
router.get("/get-single-order/:id", getSingleOrder);
router.post("/update-order-status/:id", updateOrderStatus);

export default router;


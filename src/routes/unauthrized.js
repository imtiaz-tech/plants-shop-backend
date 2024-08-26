import express from "express";
import { getCategories,getProducts } from "../controllers/products1";


const router = express.Router();

router.get("/get-categories", getCategories);
router.get("/get-products", getProducts);


export default router;


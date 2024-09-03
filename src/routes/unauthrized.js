import express from "express";
import { getCategories,getProducts,getSingleProduct } from "../controllers/unauthrized";


const router = express.Router();

router.get("/get-categories", getCategories);
router.get("/get-products", getProducts);
router.get("/get-single-product/:id", getSingleProduct);


export default router;


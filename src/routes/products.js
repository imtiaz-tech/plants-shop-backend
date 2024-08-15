import express from 'express'

import { addCategory } from "../controllers/products";
import { getCategories } from "../controllers/products";

const router = express.Router();

router.post("/add-category", addCategory);
router.get("/get-categories", getCategories);

export default router;

import express from 'express'

import { addCategory } from "../controllers/products";
import { getCategories } from "../controllers/products";
import {getSingleCategory} from "../controllers/products";
import {updateSingleCategory} from "../controllers/products";
const router = express.Router();

router.post("/add-category", addCategory);
router.get("/get-categories", getCategories);
router.get("/get-single-category/:id", getSingleCategory);
router.patch("/update-single-category/:id",updateSingleCategory)

export default router;

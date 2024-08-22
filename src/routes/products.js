import express from "express";

import {
  addCategory,
  getProducts,
  getCategories,
  getSingleCategory,
  updateSingleCategory,
  deleteSingleCategory,
  addProduct,
  deleteSingleProduct,
} from "../controllers/products";

const router = express.Router();

router.post("/add-category", addCategory);
router.get("/get-categories", getCategories);
router.get("/get-single-category/:id", getSingleCategory);
router.patch("/update-single-category/:id", updateSingleCategory);
router.delete("/delete-single-category/:id", deleteSingleCategory);
router.post("/add-product", addProduct);
router.get("/get-products", getProducts);
router.delete("/delete-single-product/:id", deleteSingleProduct);

export default router;

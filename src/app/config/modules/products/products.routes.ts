import express from "express";
import { productController } from "./product.controller";
const router = express.Router();

//create product
router.post("/", productController.handleAddProduct);

//Get all products and search by query
router.get("/", productController.handleGetAllProducts);

// Get products bu specific id
router.get("/:productId", productController.handleGetSingleProduct);

// update specific data by id

router.put("/:productId", productController.handleUpdateProduct);

//delete by id
router.delete("/:productId", productController.handleDeleteSingleProduct);

// get data search by query
// router.get("/", productController.getProductsBySearch);

export const productRoutes = router;

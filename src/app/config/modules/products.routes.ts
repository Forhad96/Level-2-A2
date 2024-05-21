import express from "express";
import { productController } from "./product.controller";
const router = express.Router();

//create product
router.post("/", productController.addProduct);

//Get all products
router.get("/", productController.getAllProducts);

// Get products bu specific id
router.get("/:productId", productController.getSingleProduct);

// update specific data by id

router.put('/:productId',productController.updateProduct)

//delete by id 
router.delete("/:productId",productController.deleteSingleProduct)

export const productRoutes = router;

import express from 'express';
import { productController } from './product.controller';
const router = express.Router()


//create product
router.post('/',productController.createProduct)

//Get all products
router.get('/',productController.getAllProducts)


export const productRoutes = router;
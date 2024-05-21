import express from 'express';
import { productController } from './product.controller';
const router = express.Router()


//create product
router.post('/',productController.createProduct)



export const productRoutes = router;
import express from 'express';
import { orderController } from './order.controller';
const router = express.Router()


// create order
router.post('/',orderController.handleCreateOrder)

// get all order
router.get('/',orderController.handleGetAllOrders)






export const orderRouter = router;
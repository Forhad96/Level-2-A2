import { Request, Response } from "express";
import { orderServices } from "./order.service";

const handleCreateOrder = async (req: Request, res: Response) => {
  try {
    const { order } = req.body;
    // Call the createOrder service with the order from the request body
    const result = await orderServices.createOrder(order)

    // Send a response to the client with the result of the order creation
    res.status(200).json({
        success:true,
        message:"order created successfully",
        data:result,
    })
    
  } catch (error:any) {
    // Log the error and send a response to the client with an error message
    console.log(error);
    res.status(500).json({
        success:false,
        message:"An error occurred while creating the order",
        error: error.message,
    })
  }
};

export const orderController = {
  handleCreateOrder,
};

import { NextFunction, Request, Response } from "express";
import { orderServices } from "./order.service";
import { zOrderSchema } from "./order.validation";

const handleCreateOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { order } = req.body;
    // Call the createOrder service with the order from the request body
    // const result = await orderServices.createOrderAndUpdateInventory(order);
    const validatedOrder = await zOrderSchema.parse(order) 

    // Send a response to the client with the result of the order creation
    res.status(200).json({
      success: true,
      message: "order created successfully",
      data: validatedOrder,
    });
  } catch (error: any) {
    // Log the error and send a response to the client with an error message
    console.log(error);
    next(error);
  }
};

const handleGetAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.query;
    let query = {};
    if (email) {
      query = { email: email };
    }
    // Attempt to retrieve all orders using the orderServices.
    const orders = await orderServices.getAllOrders(query);

    // Send the orders as a response.
    res.status(200).json({
      success: true,
      message: "Orders retrieved successfully",
      data: orders,
    });
  } catch (error: any) {
    next(error);
  }
};

export const orderController = {
  handleCreateOrder,
  handleGetAllOrders,
};

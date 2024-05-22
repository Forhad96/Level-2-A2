import { Request, Response } from "express";
import { orderServices } from "./order.service";

const handleCreateOrder = async (req: Request, res: Response) => {
  try {
    const { order } = req.body;
    // Call the createOrder service with the order from the request body
    const result = await orderServices.createOrder(order);

    // Send a response to the client with the result of the order creation
    res.status(200).json({
      success: true,
      message: "order created successfully",
      data: result,
    });
  } catch (error: any) {
    // Log the error and send a response to the client with an error message
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the order",
      error: error.message,
    });
  }
};

const handleGetAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    let query = {};
    if (email) {
      query= { email: email };
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
    // Handle any errors that occur during the retrieval of orders.
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving orders.",
      error: error.message,
    });
  }
};

export const orderController = {
  handleCreateOrder,
  handleGetAllOrders,
};

import { FilterQuery } from "mongoose";
import { OrderModel } from "./order.model";
import { TOrder } from "./orders.interface";

const createOrder = async (orderData: TOrder): Promise<TOrder> => {
  const order = OrderModel.create(orderData);
  return order;
};

const getAllOrders = (query:object): Promise<TOrder[]> => {
  const orders = OrderModel.find(query);

  return orders;
};
export const orderServices = {
  createOrder,
  getAllOrders,
};

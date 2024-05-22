import { OrderModel } from "./order.model";
import { TOrders } from "./orders.interface";

const createOrder = async (orderData: TOrders): Promise<TOrders> => {
  const order = OrderModel.create(orderData);
  return order;
};

export const orderServices = {
  createOrder,
};

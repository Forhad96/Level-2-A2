import { OrderModel } from "./order.model";
import { TOrders } from "./orders.interface";


const createOrder = async (orderData: TOrders): Promise<TOrders> => {
  const order = OrderModel.create(orderData);
  return order;
};


const getAllOrders = ():Promise<Array<Object>> =>{
    const orders = OrderModel.find({})

    return orders
}
export const orderServices = {
  createOrder,
  getAllOrders
};

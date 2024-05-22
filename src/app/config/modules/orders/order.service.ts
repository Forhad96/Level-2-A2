import { FilterQuery } from "mongoose";
import { OrderModel } from "./order.model";
import { TOrder } from "./orders.interface";
import { ProductModel } from "../products/products.model";

/**
 * This function creates a new order.
 * @param {TOrder} orderData - The data for the order to be created.
 * @returns {Promise<TOrder>} - A promise that resolves to the created order.
 * @throws {Error} - Throws an error if the product is not found or if the product is out of stock.
 */
const createOrderAndUpdateInventory = async (
  orderData: TOrder
): Promise<TOrder> => {
  // Extract product id and orderedQuantity from order data
  const { productId, quantity: orderedQuantity } = orderData;

  // Find product by id
  const product = await ProductModel.findById(productId, {
    inventory: 1,
    name: 1,
  });
  if (!product) throw new Error("Product not found");

  // Check if the product is out of stock
  if (product.inventory.quantity < orderedQuantity)
    throw new Error("Product out of stock");

  // Reduce product quantity in inventory
  product.inventory.quantity -= orderedQuantity;
  product.inventory.inStock = product.inventory.quantity > 0;
  await product.save();

  // Create a new order
  const order = await OrderModel.create(orderData);
  return order;
};

const getAllOrders = (query: object): Promise<TOrder[]> => {
  const orders = OrderModel.find(query);

  return orders;
};
export const orderServices = {
  createOrderAndUpdateInventory,
  getAllOrders,
};

import { TProduct } from "./products.interface";
import { Product } from "./products.model";

/**
 * This function is used to create a new product in the database.
 * @async
 * @function createProductIntoDB
 * @param {TProduct} product - The product object to be added to the database.
 * @returns {Promise<Object>} Returns a promise that resolves with the result of the database operation.
 */
const createProductIntoDB = async (product: TProduct): Promise<object> => {
  const result = await Product.create(product);
  return result;
};



const getAllProductsFormDB = async ()=>{
  const result = await Product.find()
  return result
}



export const productServices = {
    createProductIntoDB,
    getAllProductsFormDB,
}

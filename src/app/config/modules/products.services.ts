import { TProduct } from "./products.interface";
import { Product } from "./products.model";


const createProductIntoDB = async (product: TProduct): Promise<object> => {
  const result = await Product.create(product);
  console.log(product);
  return result;
};



const getAllProductsFormDB = async ()=>{
  const result = await Product.find()
  return result
}



const getSingleProductFormDB = async(id:string)=>{
  const result = await Product.findById(id)
  return result;
} 


export const productServices = {
    createProductIntoDB,
    getAllProductsFormDB,
    getSingleProductFormDB
}

import { TProduct } from "./products.interface";
import { Product } from "./products.model";

//get
const findAllProduct = async () => {
  const result = await Product.find();
  return result;
};

const findProductById = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

// update

const updateProductById = async (id: string,data:TProduct) => {
  const result = await Product.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// post

 const createProduct = async (productData: TProduct) => {
  try {
    const result = await Product.create(productData);
    return result;
  } catch (error: any) {
    throw new Error("Error creating product: " + error.message);
  }
};




//delete 

const deleteProductById = async (id:string)=>{
  const result = await Product.findByIdAndDelete(id)
  return result;
}






export const productServices = {
  createProduct,
  findAllProduct,
  findProductById,
  updateProductById,
  deleteProductById,
};

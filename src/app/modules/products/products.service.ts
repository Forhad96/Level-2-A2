import { TProduct } from "./products.interface";
import { ProductModel } from "./products.model";

//get all data and also get data by search query
const findAllProduct = async (query: object) => {
    const result = await ProductModel.find(query);
    return result;

};

const findProductById = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

// update

const updateProductById = async (id: string, data: TProduct) => {
  const result = await ProductModel.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// post

const createProduct = async (productData: TProduct) => {
    const result = await ProductModel.create(productData);
    return result;

};

//delete

const deleteProductById = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

//get data by query search
const searchProductByQuery = async (searchTerm: any) => {
  const result = await ProductModel.find(searchTerm);
  return result;
};

export const productServices = {
  createProduct,
  findAllProduct,
  findProductById,
  updateProductById,
  deleteProductById,
  searchProductByQuery,
};

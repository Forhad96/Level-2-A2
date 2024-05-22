import { TProduct } from "./products.interface";
import { ProductModel } from "./products.model";

//get all data and also get data by search query
const findAllProduct = async (searchTerm: string) => {
  let query = {};
  console.log(searchTerm);
  if (searchTerm) {
    query = {
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
        { tags: { $regex: searchTerm, $options: "i" } },
      ],
    };
  }
  try {
    const result = await ProductModel.find(query);
    return result;
  } catch (error: any) {
    throw new Error("Error retrieving products: " + error.message);
  }
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
  try {
    const result = await ProductModel.create(productData);
    return result;
  } catch (error: any) {
    throw new Error("Error creating product: " + error.message);
  }
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

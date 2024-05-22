import { Request, Response } from "express";
import { productServices } from "./products.service";
import { ok } from "assert";

const handleGetSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.findProductById(productId);

    res.status(200).json({
      success: true,
      message: "Product retrieve successfully",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "There was an error retrieving the product",
      error: error.message,
    });
  }
};

const handleGetAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await productServices.findAllProduct(searchTerm as string);
    res.status(200).json({
      success: true,
      message: "Product retrieve successfully",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "There was an error retrieving the product",
      error: error.message,
    });
  }
};

const handleAddProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { product } = req.body;
    const result = await productServices.createProduct(product);

    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "There was an error creating the product",
      error: error.message,
    });
  }
};

const handleUpdateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const { data } = req.body;

    const result = await productServices.updateProductById(productId, data);
    if (result) {
      console.log("ok", result);
      return res.status(200).json({ success: true, data: result });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: "Error updating product",
      error: error.message,
    });
  }
};

const handleDeleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.deleteProductById(productId);
    if (result) {
      console.log("ok", result);
      return res.status(200).json({
        success: true,
        message: "Product deleted successful",
        data: result,
      });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error deleting product",
      error: error.message,
    });
  }
};

const handleGetProductsBySearch = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    if (typeof searchTerm !== "string") {
      return res
        .status(400)
        .json({ success: false, message: "Invalid search term." });
    }
    const regex = new RegExp(searchTerm, "i");
    const product = await productServices.searchProductByQuery({ name: regex });

    res.status(200).json({ success: true, data: product });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: "Error searching product.",
      error: error.message,
    });
  }
};

export const productController = {
  handleAddProduct,
  handleGetAllProducts,
  handleGetSingleProduct,
  handleUpdateProduct,
  handleDeleteSingleProduct,
  handleGetProductsBySearch,
};

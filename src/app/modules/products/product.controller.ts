import { NextFunction, Request, Response } from "express";
import { productServices } from "./products.service";
import { zProductSchema } from "./product.validation";


const handleGetSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId } = req.params;
    const result = await productServices.findProductById(productId);

    res.status(200).json({
      success: true,
      message: "Product retrieve successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
next(error)
  }
};

const handleGetAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
let query = {};
if (searchTerm) {
  query = {
    $or: [
      { name: { $regex: searchTerm, $options: "i" } },
      { description: { $regex: searchTerm, $options: "i" } },
      { tags: { $regex: searchTerm, $options: "i" } },
    ],
  };
}

    const result = await productServices.findAllProduct(query);
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

const handleAddProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product  = req.body;
    const validatedProduct = zProductSchema.parse(product);
    const result = await productServices.createProduct(validatedProduct);

    res.status(200).json({
      success: true,
      message: `Product ${validatedProduct.name} created successfully`,
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

const handleUpdateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    next(error);
  }
};

const handleDeleteSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId } = req.params;
    const result = await productServices.deleteProductById(productId);
    if (result) {
      return res.status(200).json({
        success: true,
        message: "Product deleted successful",
        data: null,
      });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};

const handleGetProductsBySearch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
next(error)
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

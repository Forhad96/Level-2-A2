import { Request, Response } from "express";
import { productServices } from "./products.services";
import { ok } from "assert";




const getSingleProduct = async(req:Request,res:Response)=>{
  try {
    const {productId} = req.params
        const result = await productServices.findProductById(productId)

        res.status(200).json({
          success: true,
          message: "Product retrieve successfully",
          data: result,
        });
  } catch (error:any) {
        console.log(error);
        res.status(500).json({
          success: false,
          message: "There was an error retrieving the product",
          error: error.message,
        });
    
  }
}

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.findAllProduct();

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


const addProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { product } = req.body;
    console.log("ok 51");
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

const updateProduct = async (req:Request,res:Response)=>{
  try {
    const {productId} = req.params;
    const {data} = req.body


    const result = await productServices.updateProductById(productId,data)
    if (result) {
         console.log("ok",result);
         return res.status(200).json({ success: true, data: result });
       } else {
         return res
           .status(404)
           .json({ success: false, message: "Product not found" });
       }
  } catch (error:any) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Error updating product",
        error: error.message,
      });
  }
}

export const productController = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct
};

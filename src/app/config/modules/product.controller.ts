import { Request, Response } from "express";
import { productServices } from "./products.services";




const getSingleProduct = async(req:Request,res:Response)=>{
  try {
    const {productId} = req.params
        const result = await productServices.getSingleProductFormDB(productId)

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
    const result = await productServices.getAllProductsFormDB();

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


const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { product } = req.body;
    console.log("ok 51");
    const result = await productServices.createProductIntoDB(product);
    
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


export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
};

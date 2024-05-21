import { Request, Response } from "express";
import { productServices } from "./products.services";

/**
 * This function creates a new product in the database.
 * It first extracts the product details from the request body.
 * Then it calls the productServices.createProductIntoDB() function to create the product in the database.
 * If the product is created successfully, it sends a response with status 200 and a success message.
 * If there is an error during the process, it catches the error and logs it.
 *
 * @param {Request} req - The request object, containing the product details in the body.
 * @param {Response} res - The response object, used to send the response back to the client.
 */
const createProduct = async(req: Request, res: Response) => {
  try {
    const { product } = req.body;
    const result =await productServices.createProductIntoDB(product)
    res.status(200).json({
        success:true,
        message:'Product created successfully',
        data:result,
    })
  } catch (error) {
    console.log(error);
  }
};

export const productController = {
  createProduct,
}
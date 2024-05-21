import { Request, Response } from "express";
import { productServices } from "./products.services";







/**
 * This function is an asynchronous function that retrieves all products from the database.
 * It uses the productServices.getAllProductsFormDB() method to fetch the data.
 * If the operation is successful, it sends a response with a status of 200 and the retrieved data.
 * If there is an error, it logs the error and sends a response with a status of 500 and the error message.
 *
 * @param {Request} req - The request object from the client.
 * @param {Response} res - The response object to be sent to the client.
 */
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

/**
 * This function creates a new product in the database.
 * It first extracts the product details from the request body.
 * Then it calls the productServices.createProductIntoDB() method to insert the product into the database.
 * If the product is successfully created, it sends a response with a success message and the product details.
 * If there is an error during the process, it sends an error response back to the client.
 *
 * @param {Request} req - The request object, containing the product details in the body.
 * @param {Response} res - The response object, used to send the response back to the client.
 * @returns {Promise<void>} - A Promise that resolves when the function has completed.
 */
const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { product } = req.body;
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
};

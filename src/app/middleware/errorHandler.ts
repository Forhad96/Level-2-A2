import { Request, Response, NextFunction } from 'express';

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  // Check if the error is an instance of ZodError
  if (error.name === 'ZodError') {
    // Handle Zod validation errors
    return res.status(400).json({
      success: false,
      message: 'Validation failed'|| error.message,
      errors: error
    });
  }

  // Handle other errors
  console.error('Internal server error:', error);
  res.status(500).json({
    success: false,
    message: 'An error occurred while processing your request',
    error:error
  });
};


const routeNotFoundError = (req: Request, res: Response) => {
  res.status(404).send({
    success: false,
    message: "Route not found",
  });
};


export  {errorHandler,routeNotFoundError};

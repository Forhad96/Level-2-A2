import express, { Application, Request, Response } from "express";
import { productRoutes } from "./app/modules/products/products.routes";
const app: Application = express();
import cors from "cors";
import { orderRouter } from "./app/modules/orders/order.routes";
import {
  errorHandler,
  routeNotFoundError,
} from "./app/middleware/errorHandler";

//parser
app.use(express.json());
app.use(cors());

// router
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRouter);

//global error handling middleware
app.use(errorHandler);
app.all("*", routeNotFoundError);

app.get("/", (req: Request, res: Response) => {
  res.send("Assignment server is running");
});

export default app;

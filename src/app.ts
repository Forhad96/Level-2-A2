import express, { Application, Request, Response } from "express";
import { productRoutes } from "./app/config/modules/products/products.routes";
const app: Application = express();
import cors from "cors";
import { orderRouter } from "./app/config/modules/orders/order.routes";

//parser
app.use(express.json());
app.use(cors());

// router
app.use("/api/products", productRoutes);
app.use("/api/orders",orderRouter)

app.get("/", (req: Request, res: Response) => {
  res.send("Assignment server is running");
});

export default app;

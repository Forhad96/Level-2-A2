import express, { Application, Request, Response } from "express";
import { productRoutes } from "./app/config/modules/products.routes";
const app: Application = express();
import cors from 'cors';


//parser
app.use(express.json())
app.use(cors())

// router
app.use('/api/products',productRoutes)


app.get("/", (req: Request, res: Response) => {
  res.send("Assignment server is running");
});

export default app;

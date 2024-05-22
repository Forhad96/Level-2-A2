import { z } from "zod";
import { ObjectId } from "mongodb";

const zOrderSchema = z.object({
  email: z.string().email(),
  productId: z.string().refine((value) => ObjectId.isValid(value), {
    message: "Invalid MongoDB ObjectId",
  }),
  price: z.number(),
  quantity: z.number(),
});


export {zOrderSchema}
import { z } from "zod";

// Define the Zod schema for the product
const zProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0, "Price must be a non-negative number"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  variants: z.array(
    z.object({
      type: z.string().min(1, "Variant type is required"),
      value: z.string().min(1, "Variant value is required"),
    })
  ),
  inventory: z.object({
    quantity: z.number().min(0, "Quantity must be a non-negative number"),
    inStock: z.boolean(),
  }),
});

export { zProductSchema };

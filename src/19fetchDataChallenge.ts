import { z } from "zod";

const url = "https://dummyjson.com/products";

// type Product = {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   brand: string;
//   category: string;
//   thumbnail: string;
//   images: string[];
// };

const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discountPercentage: z.number(),
  rating: z.number(),
  stock: z.number(),
  brand: z.string(),
  category: z.string(),
  thumbnail: z.string(),
  images: z.string().array(),
});

// extract the inferred type
type Product = z.infer<typeof productSchema>;

async function fetchData(url: string): Promise<Product[]> {
  try {
    const response = await fetch(url);

    // Check if the request was successful.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const productRawArray: Product[] = data.products;
    const result = productSchema.array().safeParse(productRawArray);

    console.log(result);

    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`);
    }
    return result.data;
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "there was an error...";
    console.error(errMsg);

    // Return an empty array to indicate error
    return [];
  }
}

const products = await fetchData(url);

console.log(products);

products.map(({ title }) => console.log(title));

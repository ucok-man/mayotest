import { ProductRepository } from "./product.implementation";

export const repository = {
  product: new ProductRepository(),
};

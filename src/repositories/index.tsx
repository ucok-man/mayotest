import { OrderRepository } from "./order.implementation";
import { ProductRepository } from "./product.implementation";

export const repository = {
  product: new ProductRepository(),
  order: new OrderRepository(),
};

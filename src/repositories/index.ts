import { OrderRepository } from "./order.implementation";
import { ProductRepository } from "./product.implementation";
import { TestimoniRepository } from "./testimoni.implementation";

export const repository = {
  product: new ProductRepository(),
  order: new OrderRepository(),
  testimoni: new TestimoniRepository(),
};

import type { Statistics } from "~/types/domain";
import type { IOrderRepository } from "./interfaces";

export class OrderRepository implements IOrderRepository {
  getStatistics(): Promise<Statistics> {
    return Promise.resolve({
      totalOrders: 268_190,
      totalRobuxSold: 73_703_644,
      totalRobuxOrders: 0,
    });
  }
}

import type { OrderStatistic, RecentlySold } from "~/types/domain.new";
import type { IOrderRepository } from "./interfaces";

export class OrderRepository implements IOrderRepository {
  getStatistics(): Promise<OrderStatistic> {
    return Promise.resolve({
      amountOfOrder: 268_190,
      amountRobuxSold: 73_703_644,
    });
  }

  getNewestSold(): Promise<RecentlySold[]> {
    const items: RecentlySold[] = Array.from({ length: 10 }, (_, i) => ({
      item: {
        product: {
          id: `${i + 1}`,
          priceIdr: 850,
          type: "robux-login",
          robuxAmount: 1053,
        },
        quantity: 1,
      },
      order: {
        id: `${i + 1}`,
        productId: `${i + 1}`,
        robuxAccount: {
          avatar: "/assets/placeholder/mayo-sad.png",
          username: "Mayo Sad",
        },
        totalPrice: 144_261,
      },
    }));

    return Promise.resolve(items);
  }
}

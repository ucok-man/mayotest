export type ProductBase = {
  id: number | string;
  priceIdr: number;
  robuxAmount: number;
};

export type ProductTypeRobuxGamepass = {
  type: "robux-gamepass";
} & ProductBase;

export type ProductTypeRobuxLogin = {
  type: "robux-login";
} & ProductBase;

export type ProductTypeItem = {
  type: "item";
  name: string;
  image: string;
  totalSold: number;
} & ProductBase;

export type Product =
  | ProductTypeRobuxGamepass
  | ProductTypeRobuxLogin
  | ProductTypeItem;

export type RobuxAccount = {
  username: string;
  avatar: string;
};

export type Order = {
  id: number | string;
  productId: number | string;
  robuxAccount: RobuxAccount;
  totalPrice: number;
};

export type OrderStatistic = {
  amountRobuxSold: number;
  amountOfOrder: number;
};

export type RecentlySold = {
  item: {
    product: Product;
    quantity: number;
  };
  order: Order;
};

export type Testimoni = {
  id: number | string;
  image: string;
  icon: string;
  username: string;
  city: string;
  content: string;
};

// Domain Types - Following SOLID: Single Responsibility Principle
// Each interface has one clear responsibility

// export interface Product {
//   id: string;
//   name: string;
//   image: string;
//   price: number;
//   category: string;
//   description?: string;
// }

// export interface RobuxProduct {
//   id: string;
//   type: "gamepass-po" | "instant" | "login";
//   name: string;
//   description: string;
//   price: number;
//   pricePerRobux: number;
//   minOrder: number;
//   features: string[];
//   image: string;
//   badge?: string;
//   estimatedDelivery?: string;
//   isAvailable: boolean;
// }

// export interface RecentlySoldProduct {
//   id: string;
//   username: string;
//   avatar?: string;
//   productName: string;
//   quantity: number;
//   timestamp: Date;
//   type: "robux" | "item";
//   price?: number;
// }

// export interface Testimonial {
//   id: string;
//   username: string;
//   avatar: string;
//   rating: number;
//   comment: string;
//   date: Date;
// }

// export interface FAQ {
//   id: string;
//   question: string;
//   answer: string;
// }

// export interface Statistics {
//   totalRobuxSold: number;
//   totalRobuxOrders: number;
//   totalOrders: number;
// }

// export interface RobuxStock {
//   available: number;
//   maxAvailable: number;
// }

// export interface OrderForm {
//   gamepassUrl: string;
//   quantity: number;
//   robloxUsername: string;
//   email: string;
//   notes?: string;
// }

// export interface OrderStep {
//   number: number;
//   title: string;
//   subtitle: string;
//   isActive: boolean;
//   isCompleted: boolean;
// }

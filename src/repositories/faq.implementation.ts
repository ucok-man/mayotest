import type { Faq } from "~/types/domain.new";
import type { IFAQRepository } from "./interfaces";

export class FAQRepository implements IFAQRepository {
  getAll(): Promise<Faq[]> {
    const items: Faq[] = [
      {
        id: "770e8400-e29b-41d4-a716-446655440001",
        question: "How long does it take to receive my Robux after payment?",
        displayOrder: 1,
        answers: [
          {
            id: "880e8400-e29b-41d4-a716-446655440001",
            short: "Usually 5-15 minutes",
            long: "Most orders are processed automatically and delivered within 5-15 minutes after payment confirmation. During peak hours, it may take up to 30 minutes.",
            displayOrder: 1,
          },
          {
            id: "880e8400-e29b-41d4-a716-446655440002",
            short: "Instant for most cases",
            long: "We use an automated system that delivers your Robux instantly in most cases. However, manual verification may be required for first-time buyers or large orders, which can take up to 1 hour.",
            displayOrder: 2,
          },
        ],
      },
      {
        id: "770e8400-e29b-41d4-a716-446655440002",
        question: "What payment methods do you accept?",
        displayOrder: 2,
        answers: [
          {
            id: "880e8400-e29b-41d4-a716-446655440003",
            short: "Bank Transfer, E-Wallet, Credit/Debit Card",
            long: "We accept various payment methods including Bank Transfer (BCA, Mandiri, BNI, BRI), E-Wallets (GoPay, OVO, DANA, ShopeePay), and Credit/Debit Cards (Visa, Mastercard).",
            displayOrder: 1,
          },
          {
            id: "880e8400-e29b-41d4-a716-446655440004",
            short: "QRIS also available",
            long: "You can also pay using QRIS for a quick and easy transaction. Simply scan the QR code with your banking app or e-wallet and complete the payment.",
            displayOrder: 2,
          },
        ],
      },
      {
        id: "770e8400-e29b-41d4-a716-446655440003",
        question: "Is it safe to buy Robux from Mayobox?",
        displayOrder: 3,
        answers: [
          {
            id: "880e8400-e29b-41d4-a716-446655440005",
            short: "Yes, 100% safe and legal",
            long: "Mayobox only uses official Roblox methods to deliver Robux. We never ask for your password and all transactions are protected with SSL encryption. Your account safety is our priority.",
            displayOrder: 1,
          },
          {
            id: "880e8400-e29b-41d4-a716-446655440006",
            short: "Trusted by thousands",
            long: "We have served thousands of satisfied customers with a 4.9/5 rating. All our processes comply with Roblox Terms of Service, ensuring your account remains safe.",
            displayOrder: 2,
          },
        ],
      },
      {
        id: "770e8400-e29b-41d4-a716-446655440004",
        question: "What should I do if I do not receive my order?",
        displayOrder: 4,
        answers: [
          {
            id: "880e8400-e29b-41d4-a716-446655440007",
            short: "Contact our customer support",
            long: "If you have not received your order within the estimated time, please contact our customer support through WhatsApp or email with your order ID. We will check and resolve the issue immediately.",
            displayOrder: 1,
          },
          {
            id: "880e8400-e29b-41d4-a716-446655440008",
            short: "Check your spam folder",
            long: "Sometimes, order confirmation emails may land in your spam folder. Please check there first. Also, ensure you provided the correct Roblox username during checkout.",
            displayOrder: 2,
          },
        ],
      },
      {
        id: "770e8400-e29b-41d4-a716-446655440005",
        question: "Can I get a refund if I change my mind?",
        displayOrder: 5,
        answers: [
          {
            id: "880e8400-e29b-41d4-a716-446655440009",
            short: "Refunds available before delivery",
            long: "You can request a refund if the Robux has not been delivered yet. Once delivered, refunds are not possible as Robux cannot be reversed. Please contact support within 1 hour of purchase.",
            displayOrder: 1,
          },
          {
            id: "880e8400-e29b-41d4-a716-446655440010",
            short: "Store credit as alternative",
            long: "If you are not eligible for a refund, we can offer store credit that you can use for future purchases. This credit never expires and can be used for any product on Mayobox.",
            displayOrder: 2,
          },
        ],
      },
    ];

    return Promise.resolve(items);
  }
}

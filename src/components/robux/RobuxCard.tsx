// Robux Card Component

import type { RobuxProduct } from "../../types/domain";
import { Card, CardHeader, CardFooter } from "../ui/Card";
import { BadgeLabel } from "../ui/Badge";
import { ButtonGradient } from "../ui/Button";

interface RobuxCardProps {
  product: RobuxProduct;
  onSelect: (productId: string) => void;
}

export const RobuxCard = ({ product, onSelect }: RobuxCardProps) => {
  return (
    <Card className="flex-1">
      <CardHeader>
        {product.badge && (
          <div className="mb-4">
            <BadgeLabel>{product.badge}</BadgeLabel>
          </div>
        )}
        <h2 className="text-2xl font-bold text-primary">{product.name}</h2>
      </CardHeader>

      {/* Character Image */}
      <div className="relative h-40 bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/400x300/FFB6C1/FFFFFF?text=Mayo";
          }}
        />
      </div>

      <CardFooter>
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-1">Mulai dari harga</p>
          <p className="text-3xl font-bold text-primary">
            Rp {product.price.toLocaleString("id-ID")}{" "}
            <span className="text-base text-gray-500">/ 100R$</span>
          </p>
        </div>

        <div className="mb-6">
          <p className="font-semibold text-gray-800 mb-3">Yang didapatkan:</p>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start text-sm text-gray-700"
              >
                <svg
                  className="w-5 h-5 text-primary mr-2 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {product.isAvailable ? (
          <ButtonGradient onClick={() => onSelect(product.id)}>
            Beli Sekarang
          </ButtonGradient>
        ) : (
          <ButtonGradient disabled={true}>Stok Habis</ButtonGradient>
        )}
      </CardFooter>
    </Card>
  );
};

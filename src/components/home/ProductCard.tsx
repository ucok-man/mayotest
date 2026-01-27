// Product Card Component - Reusable product display

import type { Product } from "../../types/domain";
import { Card, CardBody, CardFooter } from "../ui/Card";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card>
      <div className="relative h-48 bg-gradient-to-br from-pink-200 to-pink-300">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = `https://via.placeholder.com/400x300/FFB6C1/FFFFFF?text=${encodeURIComponent(
              product.name
            )}`;
          }}
        />
      </div>

      <CardBody>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        <div className="text-2xl font-bold text-primary">
          Rp {product.price.toLocaleString("id-ID")}
        </div>
      </CardBody>

      <CardFooter>
        <button className="w-full py-3 bg-gradient-to-r from-pink-400 to-pink-600 text-white font-semibold rounded-full hover:from-pink-500 hover:to-pink-700 transition-all duration-300 hover:shadow-lg">
          Beli Sekarang
        </button>
      </CardFooter>
    </Card>
  );
};

import { useProductBestSeller } from "~/hooks/use-product-bestseller";
import { cn, formatCurrency } from "~/lib/utils";
import { repository } from "~/repositories";
import ProductCard from "./product-card";

export default function ProductCardList() {
  const { data, error, isPending } = useProductBestSeller(repository.product);

  // TODO: handle this
  if (isPending) return null;
  if (error) return null;

  return (
    <div className="w-full grid grid-cols-2 place-items-center gap-4">
      {data.map((item, idx) => (
        <ProductCard
          key={item.id}
          imgSrc={item.image}
          imgAlt={item.name}
          name={item.name}
          priceIdr={formatCurrency(item.priceIdr)}
          robuxAmount={formatCurrency(item.robuxAmount)}
          totalSold={`${item.totalSold}`}
          className={cn("", idx >= 4 && "hidden")}
        />
      ))}
    </div>
  );
}

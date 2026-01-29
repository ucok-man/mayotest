import Badge from "~/components/common/badge";
import MaxWidthWrapper from "~/components/common/max-width-wrapper";
import ProductCardList from "./product-card-list";

export default function ProductRecommendationSection() {
  return (
    <section className="space-y-6">
      <MaxWidthWrapper>
        <header className="flex flex-col items-center justify-center gap-3">
          <Badge>Rekomendasi Produk</Badge>
          <h3 className="font-cherry-h3-mobile text-gradient-primary text-center">
            Product Of The Day
          </h3>
        </header>
      </MaxWidthWrapper>

      <ProductCardList />
    </section>
  );
}

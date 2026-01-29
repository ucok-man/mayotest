import Badge from "~/components/common/badge";
import MaxWidthWrapper from "~/components/common/max-width-wrapper";
import ProductCardList from "./product-card-list";

export default function ProductNewestSoldSection() {
  return (
    <section className="space-y-6">
      <MaxWidthWrapper>
        <header className="flex flex-col items-center justify-center gap-3">
          <Badge>Item Terjual</Badge>
          <h3 className="font-cherry-h3-mobile text-gradient-primary text-center">
            Item Baru Saja Terjual
          </h3>
        </header>
      </MaxWidthWrapper>

      <ProductCardList />
    </section>
  );
}

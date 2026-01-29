import Badge from "~/components/common/badge";
import { Button } from "~/components/common/button";
import MaxWidthWrapper from "~/components/common/max-width-wrapper";
import ProductCardList from "./product-card-list";

export default function ProductNewestSoldSection() {
  return (
    <section className="space-y-8">
      <MaxWidthWrapper>
        <header className="flex flex-col items-center justify-center gap-3">
          <Badge>Item Terjual</Badge>
          <h3 className="font-cherry-h3-mobile text-gradient-primary text-center">
            Item Baru Saja Terjual
          </h3>
          <p className="font-jakarta-body-large-mobile text-text">
            Produk yang baru saja terjual
          </p>
        </header>
      </MaxWidthWrapper>

      <ProductCardList />

      <div className="w-full flex items-center justify-center">
        <Button
          variant={"primary"}
          size={"mobile-normal"}
          className="max-w-[175px]"
        >
          Selengkapnya
        </Button>
      </div>
    </section>
  );
}

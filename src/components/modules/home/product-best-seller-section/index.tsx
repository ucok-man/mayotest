import { Image } from "@imagekit/react";
import Badge from "~/components/common/badge";
import { Button } from "~/components/common/button";
import MaxWidthWrapper from "~/components/common/max-width-wrapper";
import ProductCardList from "./product-card-list";

export default function ProductBestSellerSection() {
  return (
    <section className="space-y-8">
      <MaxWidthWrapper className="w-full sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center">
          {/* Icon */}
          <div className="w-[249px] h-[269px]">
            <Image
              src="mayoblox/mayo-money.png"
              alt="Mayo Money"
              className="size-full object-contain object-center"
              loading="eager"
            />
          </div>

          <header className="flex flex-col items-center justify-center gap-3 sm:items-start">
            <Badge>Paling Banyak Dibeli Sobatmayo</Badge>
            <h3 className="font-cherry-h3-mobile text-gradient-primary text-center sm:font-cherry-h3-desktop">
              Produk Item Best Seller
            </h3>
            <p className="font-jakarta-body-large-mobile text-text">
              Produk favorit Sobat Mayo
            </p>
          </header>
        </div>

        <Button size={"desktop-normal"} className="w-fit">
          Selengkapnya
        </Button>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <ProductCardList />
      </MaxWidthWrapper>

      <div className="w-full flex items-center justify-center sm:hidden">
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

import { Image } from "@imagekit/react";
import Badge from "~/components/common/badge";
import { Button } from "~/components/common/button";
import MaxWidthWrapper from "~/components/common/max-width-wrapper";
import ProductCardList from "./product-card-list";

export default function ProductNewestSoldSection() {
  return (
    <section className="space-y-8">
      <MaxWidthWrapper className="w-full sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center">
          {/* Icon */}
          <div className="w-[249px] h-[269px]">
            <Image
              src="mayoblox/mayo-metal.png"
              alt="Mayo Metal"
              className="size-full object-contain object-center"
              loading="eager"
            />
          </div>

          <header className="flex flex-col items-center justify-center gap-3 sm:items-start">
            <Badge>Item Terjual</Badge>
            <h3 className="font-cherry-h3-mobile text-gradient-primary text-center sm:font-cherry-h3-desktop">
              Item Baru Saja Terjual
            </h3>
            <p className="font-jakarta-body-large-mobile text-text sm:font-jakarta-body-large-desktop">
              Produk yang baru saja terjual
            </p>
          </header>
        </div>

        <Button size={"desktop-normal"} className="w-fit">
          Selengkapnya
        </Button>
      </MaxWidthWrapper>

      <ProductCardList />

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

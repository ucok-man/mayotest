import { useMediaQuery } from "usehooks-ts";
import { Button } from "~/components/common/button";
import Icons from "~/components/common/icons";
import { cn } from "~/lib/utils";

type Props = {
  imgSrc: string;
  imgAlt: string;
  name: string;
  robuxAmount: string;
  totalSold: string;
  priceIdr: string;
  className?: string;
};

export default function ProductCard({
  imgSrc,
  imgAlt,
  name,
  robuxAmount,
  priceIdr,
  totalSold,
  className,
}: Props) {
  const isSm = useMediaQuery("(max-width: 640px)");

  return (
    <article
      className={cn(
        "border-gradient-primary border-g-2 rounded-3xl w-full max-w-64 h-full bg-primary-20",
        className,
      )}
    >
      <div className="flex flex-col items-center justify-center gap-3 px-3 py-4 size-full sm:px-6 sm:py-6">
        {/* Image */}
        <div className="rounded-full overflow-hidden border-gradient-primary border-g-5 size-28 max-[360px]:size-24 bg-gradient-primary sm:size-[164px]">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="object-cover object-center size-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 w-full">
          <h3 className="font-chillax-link-normal-mobile text-center text-dark sm:font-chillax-link-normal-desktop">
            {name}
          </h3>

          <div className="w-full h-px bg-primary-40" />

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-1 font-chillax-link-small-mobile max-[360px]:hidden sm:font-chillax-link-small-desktop">
              <span className="text-primary">R$ {robuxAmount}</span>
              <span className="text-primary">.</span>
              <span className="text-dark">{totalSold}x Terjual</span>
            </div>

            <p className="font-chillax-h6-mobile text-primary text-center sm:font-chillax-h6-desktop">
              Rp. {priceIdr}
            </p>
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-1 sm:flex-row sm:justify-between sm:gap-2">
            <Button
              variant={"primary"}
              size={isSm ? "mobile-small" : "desktop-small"}
              className="max-[390px]:text-xs max-[390px]:px-2 sm:w-fit"
            >
              Beli Sekarang
            </Button>

            <Button
              variant={"secondary"}
              size={isSm ? "mobile-small" : "mobile-icon"}
              className="max-[390px]:text-xs max-[390px]:px-2"
            >
              <span className="sm:hidden">Keranjang</span>
              <span>
                <Icons.cart className="stroke-white fill-none hidden sm:block size-5" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

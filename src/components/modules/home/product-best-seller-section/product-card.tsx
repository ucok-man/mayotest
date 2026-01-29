import { Button } from "~/components/common/button";
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
  return (
    <article
      className={cn(
        "border-gradient-primary border-g-2 rounded-3xl w-full max-w-64 h-full bg-primary-20",
        className,
      )}
    >
      <div className="flex flex-col items-center justify-center gap-3 px-3 py-4 size-full">
        {/* Image */}
        <div className="rounded-full overflow-hidden border-gradient-primary border-g-5 size-28 max-[360px]:size-24 bg-gradient-primary">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="object-cover object-center size-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4">
          <h3 className="font-chillax-link-normal-mobile text-center text-dark">
            {name}
          </h3>

          <div className="w-full h-px bg-primary-40" />

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-1 font-chillax-link-small-mobile max-[360px]:hidden">
              <span className="text-primary">R$ {robuxAmount}</span>
              <span className="text-primary">.</span>
              <span className="text-dark">{totalSold}x Terjual</span>
            </div>

            <p className="font-chillax-h6-mobile text-primary text-center">
              Rp. {priceIdr}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <Button
              variant={"primary"}
              size={"mobile-small"}
              className="max-[390px]:text-xs max-[390px]:px-2"
            >
              Beli Sekarang
            </Button>
            <Button
              variant={"secondary"}
              size={"mobile-small"}
              className="max-[390px]:text-xs max-[390px]:px-2"
            >
              Keranjang
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

type Props = {
  imgSrc: string;
  imgAlt: string;
  robuxAmount: string;
  priceIdr: string;
};

export default function ProductCard({
  imgSrc,
  imgAlt,
  robuxAmount,
  priceIdr,
}: Props) {
  return (
    <article className="border-gradient-primary border-g-2 rounded-full w-full max-w-60 h-full bg-primary-20 sm:max-w-[302px]">
      <div className="flex items-center justify-start gap-3 px-2.5 py-2 size-full sm:px-3 sm:py-3 sm:gap-6">
        {/* Image */}
        <div className="rounded-full overflow-hidden border-gradient-primary border-g-2 size-10 bg-gradient-primary sm:size-[64px]">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="object-cover object-center size-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <h5 className="font-chillax-h5-mobile text-primary line-clamp-1 sm:font-chillax-h5-desktop">
            {robuxAmount} R$
          </h5>
          <p className="font-chillax-link-large-mobile text-text/80 sm:font-chillax-link-large-desktop">
            <span className="text-text/90 font-normal">Sold for </span> Rp.
            {priceIdr}
          </p>
        </div>
      </div>
    </article>
  );
}

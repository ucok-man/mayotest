type Props = {
  imgSrc: string;
  imgAlt: string;
  name: string;
  robuxAmount: string;
};

export default function ProductCard({
  imgSrc,
  imgAlt,
  name,
  robuxAmount,
}: Props) {
  return (
    <article className="border-2 border-border rounded-full w-full max-w-55 h-full sm:max-w-[302px]">
      <div className="flex items-center justify-start gap-3 px-2.5 py-2 size-full sm:py-2.5 sm:px-3">
        {/* Image */}
        <div className="rounded-full overflow-hidden border-gradient-primary border-g-2 size-13 sm:size-16">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="object-cover object-center size-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <h5 className="font-chillax-link-small-mobile text-text line-clamp-1 sm:font-chillax-link-small-desktop">
            {name}
          </h5>
          <p className="font-chillax-link-large-mobile text-primary sm:font-chillax-link-large-desktop">
            {robuxAmount}
          </p>
        </div>
      </div>
    </article>
  );
}

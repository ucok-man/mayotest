type Props = {
  imgSrc: string;
  imgAlt: string;
  label: string;
  price: string;
};

export default function ProductCard({ imgSrc, imgAlt, label, price }: Props) {
  return (
    <article className="border-2 border-border rounded-full w-full max-w-55 h-full">
      <div className="flex items-center justify-start gap-3 px-2.5 py-2 size-full">
        {/* Image */}
        <div className="rounded-full overflow-hidden border-gradient-primary border-g-2 size-13">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="object-cover object-center size-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1">
          <h5 className="font-chillax-link-small-mobile text-text line-clamp-1">
            {label}
          </h5>
          <p className="font-chillax-link-large-mobile text-primary">{price}</p>
        </div>
      </div>
    </article>
  );
}

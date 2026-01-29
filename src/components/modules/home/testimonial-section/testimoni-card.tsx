import { Image } from "@imagekit/react";

type Props = {
  id: number | string;
  image: string;
  icon: string;
  username: string;
  city: string;
  content: string;
};

export default function TestimoniCard({
  image,
  icon,
  username,
  city,
  content,
}: Props) {
  return (
    <article className="relative rounded-2xl p-4 border-gradient-primary border-g-1 size-full max-w-[330px] max-[320px]:w-[86%] max-[350px]:w-[90%] max-[350px]:mx-auto">
      <div className="overflow-hidden size-[104px] absolute -right-4 -top-4 rotate-9 shrink-0">
        <Image
          src={icon}
          alt="Mayo Icon"
          className="object-cover object-center size-full"
          loading="eager"
        />
      </div>

      <div className="flex flex-col items-start gap-4">
        <div className="rounded-full overflow-hidden border-gradient-primary border-g-2 size-16 bg-white">
          <img
            src={image}
            alt={username}
            className="object-cover object-center size-full"
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="font-chillax-h6-mobile text-primary">
            @{username}
          </span>

          <span className="font-chillax-link-large-mobile text-text/80">-</span>
          <span className="font-chillax-link-large-mobile text-text/80">
            {city}
          </span>
        </div>

        <div className="font-jakarta-body-normal-mobile text-text italic">
          {content}
        </div>
      </div>
    </article>
  );
}

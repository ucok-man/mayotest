import { Image } from "@imagekit/react";
import { useMediaQuery } from "usehooks-ts";
import { Button } from "~/components/common/button";
import { useOrderStats } from "~/hooks/use-order-stats";
import { cn, formatCurrency } from "~/lib/utils";
import { repository } from "~/repositories";

export default function BentoList() {
  const max360 = useMediaQuery("(max-width: 360px)");
  const sm = useMediaQuery("(max-width: 640px)");
  const { data, isPending, error } = useOrderStats(repository.order);

  // TODO: handle this
  if (isPending) return null;
  if (error) return null;

  return (
    <div className="grid gap-4 size-full place-items-center sm:grid-cols-2 sm:grid-rows-2">
      {/* First Bento */}
      <article className="relative overflow-hidden size-full max-w-[360px] max-h-[232px] rounded-2xl p-6 sm:row-span-2 sm:max-w-full sm:max-h-full sm:h-[500px] sm:rounded-3xl sm:p-10">
        <Image
          src="mayoblox/bg-card-stat.png"
          alt="Background Image"
          className="absolute inset-0 size-full object-cover object-center"
          loading="eager"
        />
        <div className="relative z-10 space-y-6 size-full flex flex-col items-center justify-center sm:gap-[44px]">
          <h1 className="font-cherry-h1-mobile text-center text-gradient-primary text-outline uppercase max-[300px]:text-[36px] sm:font-cherry-h1-desktop sm:leading-[80px]">
            Statistik <br /> Mayoblox
          </h1>

          {/* <div className="border-gradient-primary border-g-2 rounded-full"> */}
          <div className="w-full flex items-center justify-center">
            <Button
              variant={"primary"}
              size={(() => {
                if (sm && max360) return "mobile-normal";
                if (sm && !max360) return "mobile-large";
                return "desktop-large";
              })()}
              className="border-gradient-primary border-g-2 shadow mx-auto max-[320px]:text-[15px] border-l border-white"
            >
              Top Up Robux Sekarang
            </Button>
          </div>
          {/* </div> */}
        </div>
      </article>

      {/* Second Bento */}
      <article className="relative overflow-hidden size-full max-w-[360px] rounded-2xl py-6 px-4 bg-gradient-primary sm:max-w-full sm:rounded-3xl sm:py-[40px] sm:px-[40px]">
        <div className="flex max-[384px]:flex-col items-center justify-center gap-4 sm:gap-[32px]">
          <Image
            src="mayoblox/robux-icon-rounded.png"
            alt="Robux Icon"
            className="size-[60px] object-cover object-center sm:size-[120px]"
            loading="eager"
          />

          <div className="flex flex-col gap-3 sm:gap-6">
            <h6 className="font-chillax-h6-mobile text-white text-left max-[384px]:text-center sm:font-chillax-h5-desktop">
              Robux Terjual di Mayoblox
            </h6>
            <p className="font-cherry-h3-mobile text-primary text-outline max-[384px]:text-center sm:font-cherry-h2-desktop">
              {formatCurrency(data.amountRobuxSold)} R$
            </p>
          </div>
        </div>
      </article>

      {/* Third Bento */}
      <article className="relative overflow-hidden size-full max-w-[360px] rounded-2xl py-6 px-4 bg-tertiary-20 sm:max-w-full sm:max-h-full sm:rounded-3xl sm:py-[40px] sm:px-[40px]">
        <div className="flex flex-col items-center justify-center gap-3 w-full sm:gap-[22px]">
          <h6 className="font-cherry-h1-mobile text-gradient-primary text-outline sm:font-cherry-h1-desktop sm:leading-[80px]">
            {formatCurrency(data.amountOfOrder)}
          </h6>
          <p
            className={cn(
              "font-chillax-h5-mobile text-primary text-center sm:font-chillax-h5-desktop",
              max360 && "font-chillax-h6-mobile",
            )}
          >
            Total Order SobatMayo
          </p>
        </div>
      </article>
    </div>
  );
}

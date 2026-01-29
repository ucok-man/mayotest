import { Image } from "@imagekit/react";
import { useMediaQuery } from "usehooks-ts";
import { Button } from "~/components/common/button";
import { useOrderStats } from "~/hooks/use-order-stats";
import { cn, formatCurrency } from "~/lib/utils";
import { repository } from "~/repositories";

export default function BentoList() {
  const max360 = useMediaQuery("(max-width: 360px)");
  const { data, isPending, error } = useOrderStats(repository.order);

  // TODO: handle this
  if (isPending) return null;
  if (error) return null;

  return (
    <div className="grid gap-4 size-full place-items-center">
      {/* First Bento */}
      <article className="relative overflow-hidden size-full max-w-[360px] max-h-[232px] rounded-2xl p-6">
        <Image
          src="mayoblox/bg-card-stat.png"
          alt="Background Image"
          className="absolute inset-0 size-full object-cover object-center"
          loading="eager"
        />
        <div className="relative z-10 space-y-6">
          <h1 className="font-cherry-h1-mobile text-center text-gradient-primary text-outline uppercase max-[300px]:text-[36px]">
            Statistik Mayoblox
          </h1>

          {/* <div className="border-gradient-primary border-g-2 rounded-full"> */}
          <div className="w-full flex items-center justify-center">
            <Button
              variant={"primary"}
              size={max360 ? "mobile-normal" : "mobile-large"}
              className="border-gradient-primary border-g-2 shadow mx-auto max-[320px]:text-[15px]"
            >
              Top Up Robux Sekarang
            </Button>
          </div>
          {/* </div> */}
        </div>
      </article>

      {/* Second Bento */}
      <article className="relative overflow-hidden size-full max-w-[360px]  rounded-2xl py-6 px-4 bg-gradient-primary">
        <div className="flex max-[384px]:flex-col items-center justify-center gap-4">
          <Image
            src="mayoblox/robux-icon-rounded.png"
            alt="Robux Icon"
            className="size-[60px] object-cover object-center"
            loading="eager"
          />

          <div className="flex flex-col gap-3">
            <h6 className="font-chillax-h6-mobile text-white text-left max-[384px]:text-center">
              Robux Terjual di Mayoblox
            </h6>
            <p className="font-cherry-h3-mobile text-primary text-outline max-[384px]:text-center">
              {formatCurrency(data.amountRobuxSold)} R$
            </p>
          </div>
        </div>
      </article>

      {/* Third Bento */}
      <article className="relative overflow-hidden size-full max-w-[360px] max-h-[132px] rounded-2xl p-6 bg-tertiary-20">
        <div className="flex flex-col items-center justify-center gap-3 w-full">
          <h6 className="font-cherry-h1-mobile text-gradient-primary text-outline">
            {formatCurrency(data.amountOfOrder)}
          </h6>
          <p
            className={cn(
              "font-chillax-h5-mobile text-primary text-center",
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

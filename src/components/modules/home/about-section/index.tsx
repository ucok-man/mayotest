import { Image } from "@imagekit/react";
import Badge from "~/components/common/badge";
import { Button } from "~/components/common/button";
import MaxWidthWrapper from "~/components/common/max-width-wrapper";
import { useOrderStats } from "~/hooks/use-order-stats";
import { formatCurrency } from "~/lib/utils";
import { repository } from "~/repositories";

export default function AboutSection() {
  const { data, isPending, error } = useOrderStats(repository.order);

  // TODO: handle this
  if (isPending) return null;
  if (error) return null;

  return (
    <section>
      <MaxWidthWrapper className="space-y-8">
        <div className="space-y-3">
          <header className="flex flex-col items-center justify-center gap-3">
            <Badge>Tentang Mayoblox</Badge>
            <h3 className="font-cherry-h3-mobile text-gradient-primary text-center">
              Butuh bantuan cepat atau pertanyaan? kirimkan pesan kamu dibawah
            </h3>
          </header>

          <p className="font-jakarta-body-normal-mobile text-text-10 text-center">
            Nikmati proses pengaturan yang mudah dan mulai mengelola rumah
            pintar Anda dengan beberapa ketukan fleksibel, cepat, dan dirancang
            untuk gaya hidup Anda.
          </p>
        </div>

        {/* Bento */}
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
              <h1 className="font-cherry-h1-mobile text-center text-gradient-primary text-outline uppercase">
                Statistik Mayoblox
              </h1>

              {/* <div className="border-gradient-primary border-g-2 rounded-full"> */}
              <Button
                variant={"primary"}
                size={"mobile-large"}
                className="border-gradient-primary border-g-2 shadow"
              >
                Top Up Robux Sekarang
              </Button>
              {/* </div> */}
            </div>
          </article>

          {/* Second Bento */}
          <article className="relative overflow-hidden size-full max-w-[360px] max-h-[120px] rounded-2xl py-6 px-4 bg-gradient-primary">
            <div className="flex items-center justify-center gap-4">
              <Image
                src="mayoblox/robux-icon-rounded.png"
                alt="Robux Icon"
                className="size-[60px] object-cover object-center"
                loading="eager"
              />

              <div className="flex flex-col gap-3">
                <h6 className="font-chillax-h6-mobile text-white text-left">
                  Robux Terjual di Mayoblox
                </h6>
                <p className="font-cherry-h3-mobile text-primary text-outline">
                  {formatCurrency(data.totalRobuxSold)} R$
                </p>
              </div>
            </div>
          </article>

          {/* Third Bento */}
          <article className="relative overflow-hidden size-full max-w-[360px] max-h-[132px] rounded-2xl p-6 bg-tertiary-20">
            <div className="flex flex-col items-center justify-center gap-3 w-full">
              <h6 className="font-cherry-h1-mobile text-gradient-primary text-outline">
                {formatCurrency(data.totalOrders)}
              </h6>
              <p className="font-chillax-h5-mobile text-primary text-center">
                Total Order SobatMayo
              </p>
            </div>
          </article>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

import { Image } from "@imagekit/react";
import { useMediaQuery } from "usehooks-ts";
import Badge from "~/components/common/badge";
import { Button } from "~/components/common/button";
import Icons from "~/components/common/icons";
import MaxWidthWrapper from "~/components/common/max-width-wrapper";
import TestimoniCardList from "./testimoni-card-list";

export default function TestimonialSection() {
  const max360 = useMediaQuery("(max-width: 360px)");
  const isSm = useMediaQuery("(max-width: 640px)");

  return (
    <section className="space-y-8 relative overflow-hidden">
      <div className="absolute inset-0 hidden sm:flex sm:items-center sm:justify-between">
        <Image
          src={"mayoblox/mayo-party.png"}
          alt="Mayo Party"
          className="object-cover object-center w-[528px] h-[520px] relative -top-11 -left-[8%]"
          loading="eager"
        />
        <Image
          src={"mayoblox/mayo-sailor.png"}
          alt="Mayo Sailor"
          className="object-cover object-center h-full w-[611px] h-[595px]"
          loading="eager"
        />
      </div>

      <MaxWidthWrapper className="space-y-6 pb-3 mb-44 relative z-10">
        <header className="flex flex-col items-center justify-center gap-3">
          <Badge>Testimoni Sobatmayo</Badge>
          <h3 className="font-cherry-h3-mobile text-gradient-primary text-center sm:font-cherry-h3-desktop">
            Apa Kata SobatMayo
          </h3>
        </header>

        <p className="font-jakarta-body-normal-mobile text-text-10 text-center max-w-md mx-auto sm:font-jakarta-body-normal-desktop">
          Mayoblox pilihan nomor satu untuk jadi teman robloxmu! Kebutuhan
          roblox apapun pasti ada di Mayoblox!
        </p>

        <div className="w-full flex items-center justify-center sm:mt-9">
          <Button
            variant={"primary"}
            size={
              isSm
                ? max360
                  ? "mobile-normal"
                  : "mobile-large"
                : "desktop-large"
            }
            className="max-w-[360px] sm:max-w-[402px]"
            contentClass="flex items-center gap-2"
          >
            <Icons.video className="size-12 max-[360px]:size-9" />
            <span>Lihat Video Testimoni</span>
          </Button>
        </div>
      </MaxWidthWrapper>

      <TestimoniCardList />
    </section>
  );
}

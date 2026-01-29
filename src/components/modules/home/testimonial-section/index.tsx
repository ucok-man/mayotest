import Badge from "~/components/common/badge";
import { Button } from "~/components/common/button";
import Icons from "~/components/common/icons";
import MaxWidthWrapper from "~/components/common/max-width-wrapper";
import TestimoniCardList from "./testimoni-card-list";

export default function TestimonialSection() {
  return (
    <section className="space-y-8 overflow-hidden">
      <MaxWidthWrapper className="space-y-6 mb-9">
        <header className="flex flex-col items-center justify-center gap-3">
          <Badge>Testimoni Sobatmayo</Badge>
          <h3 className="font-cherry-h3-mobile text-gradient-primary text-center">
            Apa Kata SobatMayo
          </h3>
        </header>

        <p className="font-jakarta-body-normal-mobile text-text-10 text-center">
          Mayoblox pilihan nomor satu untuk jadi teman robloxmu! Kebutuhan
          roblox apapun pasti ada di Mayoblox!
        </p>

        <div className="w-full flex items-center justify-center">
          <Button
            variant={"primary"}
            size={"mobile-large"}
            className="max-w-[360px]"
            contentClass="flex items-center gap-2"
          >
            <Icons.video className="size-12" />
            <span>Lihat Video Testimoni</span>
          </Button>
        </div>
      </MaxWidthWrapper>

      <TestimoniCardList />
    </section>
  );
}

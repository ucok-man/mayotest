import { Image } from "@imagekit/react";
import Badge from "~/components/common/badge";
import MaxWidthWrapper from "~/components/common/max-width-wrapper";
import FaqAccordionList from "./faq-accordion-list";

export default function FAQSection() {
  return (
    <section>
      <MaxWidthWrapper className="sm:flex sm:items-center sm:justify-between sm:gap-16">
        <div className="space-y-6">
          <header className="flex flex-col items-start justify-center gap-3">
            <Badge>Frequently Ask Question (FAQ)</Badge>
            <h3 className="font-cherry-h3-mobile text-gradient-primary text-left sm:font-cherry-h3-desktop">
              Kumpulan pertanyaan paling sering ditanyakan oleh pengguna kami.
            </h3>
          </header>

          <FaqAccordionList />
        </div>

        <div className="hidden sm:block w-[654px] h-[660px] rounded-[32px] overflow-hidden shrink-0">
          <Image
            src="mayoblox/mayo-real-gift.png"
            alt="Mayo Gift"
            className="size-full object-cover object-center"
            loading="eager"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

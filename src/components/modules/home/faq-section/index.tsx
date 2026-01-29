import Badge from "~/components/common/badge";
import MaxWidthWrapper from "~/components/common/max-width-wrapper";
import FaqAccordionList from "./faq-accordion-list";

export default function FAQSection() {
  return (
    <section>
      <MaxWidthWrapper className="space-y-5">
        <header className="flex flex-col items-start justify-center gap-3">
          <Badge>Frequently Ask Question (FAQ)</Badge>
          <h3 className="font-cherry-h3-mobile text-gradient-primary text-left">
            Kumpulan pertanyaan paling sering ditanyakan oleh pengguna kami.
          </h3>
        </header>

        <FaqAccordionList />
      </MaxWidthWrapper>
    </section>
  );
}

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/common/accordion";
import { useGetFaqs } from "~/hooks/use-get-faqs";
import { repository } from "~/repositories";

export default function FaqAccordionList() {
  const { data, isPending, error } = useGetFaqs(repository.faq);

  // TODO: handle this
  if (isPending) return null;
  if (error) return null;

  const faqs = data.sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <Accordion collapsible type="single" defaultValue="0">
      {faqs.map((item, idx) => (
        <AccordionItem key={idx} value={`${idx}`}>
          <AccordionTrigger className="font-chillax-link-normal-mobile sm:font-chillax-link-normal-desktop">
            {item.question}
          </AccordionTrigger>

          <AccordionContent className="flex flex-col gap-6">
            {item.answers.map(({ short, long }, idx) => (
              <div key={idx} className="flex gap-2">
                <div className="font-chillax-link-normal-mobile sm:font-chillax-link-normal-desktop">
                  {idx + 1}.
                </div>

                <div className="flex flex-col gap-2">
                  <p className="font-chillax-link-normal-mobile sm:font-chillax-link-normal-desktop">
                    {short}
                  </p>
                  <p className="font-jakarta-body-normal-mobile text-text sm:font-jakarta-body-normal-desktop">
                    {long}
                  </p>
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

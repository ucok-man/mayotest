// FAQ Section Component - Matching Laravel Blade version

import { useState } from "react";
import type { FAQ } from "../../types/domain";
import { BadgeLabel } from "../common/BadgeLabel";

interface FAQSectionProps {
  faqs: FAQ[];
}

export const FAQSection = ({ faqs }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Section with Left Content and Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: FAQ Content */}
          <div>
            {/* Section Header */}
            <div className="mb-8">
              <BadgeLabel className="mb-4">
                FREQUENTLY ASK QUESTION (FAQ)
              </BadgeLabel>
              <h2
                className="text-5xl font-bold mb-4"
                style={{
                  color: "#FF7797",
                  fontFamily: "Cherry Bomb One, cursive",
                }}
              >
                Kumpulan pertanyaan paling sering ditanyakan oleh pengguna kami.
              </h2>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="faq-item rounded-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="faq-button w-full text-left py-4 px-0 flex items-center justify-between transition-all duration-300 group rounded-lg cursor-pointer"
                  >
                    <span
                      className="faq-title font-semibold pr-4 transition-all duration-300"
                      style={{
                        color: openIndex === index ? "#FF7797" : "#333333",
                        fontFamily: "Chillax, sans-serif",
                        fontSize: "16px",
                      }}
                    >
                      {faq.question}
                    </span>
                    <div className="faq-icon flex items-center justify-center w-6 h-6 transition-all duration-300">
                      <i
                        className={`fas ${
                          openIndex === index ? "fa-minus" : "fa-plus"
                        } text-base transition-all duration-300`}
                        style={{
                          color: openIndex === index ? "#FF7797" : "#333333",
                        }}
                      ></i>
                    </div>
                  </button>
                  <div
                    className={`faq-content overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-4 pt-2 px-4">
                      <div
                        className="text-gray-600 leading-relaxed"
                        style={{
                          fontFamily: "Chillax, sans-serif",
                          fontSize: "14px",
                        }}
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mayo Real Gift Image */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <img
                src="/assets/images/mayo-real-gift.png"
                alt="Mayo Real Gift"
                className="w-full max-w-lg h-auto object-contain rounded-3xl shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/500x500/FFE1E8/FF7797?text=Mayo+Gift";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

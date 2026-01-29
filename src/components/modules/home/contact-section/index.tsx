import Badge from "~/components/common/badge";
import MaxWidthWrapper from "~/components/common/max-width-wrapper";
import ContactForm from "./contact-form";

export default function ContactSection() {
  return (
    <section>
      <MaxWidthWrapper className="space-y-8">
        <header className="flex flex-col items-center justify-center gap-3">
          <Badge>Kontak Kami</Badge>
          <h3 className="font-cherry-h3-mobile text-gradient-primary text-center">
            Butuh bantuan cepat atau pertanyaan? kirimkan pesan kamu dibawah
          </h3>
        </header>

        <ContactForm />
      </MaxWidthWrapper>
    </section>
  );
}

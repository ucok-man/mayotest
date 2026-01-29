import Badge from "~/components/common/badge";
import MaxWidthWrapper from "~/components/common/max-width-wrapper";
import BentoList from "./bento-list";

export default function AboutSection() {
  return (
    <section>
      <MaxWidthWrapper className="space-y-8">
        <div className="space-y-6">
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

        <BentoList />
      </MaxWidthWrapper>
    </section>
  );
}

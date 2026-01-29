import { Image } from "@imagekit/react";
import { Link } from "react-router";
import { Button } from "~/components/common/button";
import Icons from "~/components/common/icons";
import MaxWidthWrapper from "~/components/common/max-width-wrapper";
import FeatureCard from "./feature-card";

export default function HeroSection() {
  return (
    <section>
      {/* Image */}
      <div className="w-full relative overflow-hidden max-h-screen aspect-16/10 min-h-[348px]">
        <Image
          src="mayoblox/hero-background.png"
          alt="Hero background"
          className="size-full object-cover object-center"
          loading="eager"
          transformation={[
            {
              height: "0.99",
              width: "0.99",
              cropMode: "extract",
              focus: "center",
              y: 500,
            },
          ]}
        />

        <Image
          src="mayoblox/bubble-robux.png"
          alt="Bubble Robux"
          loading="eager"
          className="absolute z-10 top-[24%] left-[15%] size-[66px] object-cover object-center"
          transformation={[
            {
              width: "200", // 2x for retina displays
              height: "200",
              quality: 100,
            },
          ]}
        />

        <Image
          src="mayoblox/bubble-money.png"
          alt="Bubble Robux"
          loading="eager"
          className="absolute z-10 top-[28%] right-[15%] size-[66px] object-cover object-center"
          transformation={[
            {
              width: "200", // 2x for retina displays
              height: "200",
              quality: 100,
            },
          ]}
        />

        {/* Gradient Overlay - Transition from image to content */}
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-t from-white via-white/80 to-transparent z-20" />
      </div>

      {/* Content */}
      <MaxWidthWrapper className="-mt-30 relative z-20 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="font-cherry-h1-mobile text-transparent tracking-p1 bg-gradient-primary bg-clip-text text-center text-outline">
            Mayoblox <br /> Sahabat Robloxmu
          </h1>

          <div className="flex items-center justify-center gap-3">
            <FeatureCard className="py-3 px-2 h-29.75 w-26 hover:translate-y-[-5%] transition-all duration-300 flex flex-col items-center">
              <Link to={"#"} className="flex items-center">
                <Icons.iglink className="size-5 max-[365px]:hidden" />

                <Image
                  src="mayoblox/mayo-account-link.png"
                  alt="Mayo Akun Link"
                  loading="eager"
                  className="w-17 h-10.5 object-cover"
                />
              </Link>

              <Link to={"#"} className="flex items-center">
                <Icons.iglink className="size-5 max-[365px]:hidden" />

                <Image
                  src="mayoblox/bocil-mayo-link.png"
                  alt="Mayo Akun Link"
                  loading="eager"
                  className="w-17 h-10.5 object-cover"
                />
              </Link>
            </FeatureCard>

            <FeatureCard className="h-29.75 w-26 group hover:translate-y-[-5%] transition-all duration-300">
              <Link
                to={"#"}
                className="flex flex-col justify-center items-center py-3 px-2 size-full gap-2"
              >
                <div className="relative flex items-center justify-center w-full h-[52px]">
                  <Image
                    src="mayoblox/bocil-mayo-link.png"
                    alt="Mayo Akun Link"
                    loading="eager"
                    className="transition-all duration-300 object-cover grayscale-100 group-hover:grayscale-0 absolute size-full"
                  />
                  <Image
                    src="mayoblox/mayo-negatif-avatar.png"
                    alt="Mayo Akun Link"
                    loading="eager"
                    className="transition-all duration-300 object-cover grayscale opacity-100 group-hover:opacity-0 absolute size-full"
                  />
                  <Image
                    src="mayoblox/mayo-positif-avatar.png"
                    alt="Mayo Akun Link"
                    loading="eager"
                    className="transition-all duration-300 object-cover opacity-0 group-hover:opacity-100 absolute size-full"
                  />
                </div>

                <p className="relative font-chillax font-bold text-[12px] leading-3 tracking-n2 text-primary text-center">
                  Top Up <span className="max-[340px]:hidden">Game</span> <br />{" "}
                  Lainnya
                </p>
              </Link>
            </FeatureCard>

            <FeatureCard className="h-29.75 w-26 group hover:translate-y-[-5%] transition-all duration-300">
              <Link
                to={"#"}
                className="flex flex-col justify-center items-center py-3 px-2 size-full gap-2"
              >
                <div className="relative flex items-center justify-center w-full h-[52px]">
                  <Image
                    src="mayoblox/bocil-mayo-link.png"
                    alt="Mayo Akun Link"
                    loading="eager"
                    className="transition-all duration-300 object-cover grayscale-100 group-hover:grayscale-0 absolute size-full"
                  />
                  <Image
                    src="mayoblox/mayo-negatif-avatar.png"
                    alt="Mayo Akun Link"
                    loading="eager"
                    className="transition-all duration-300 object-cover grayscale opacity-100 group-hover:opacity-0 absolute size-full"
                  />
                  <Image
                    src="mayoblox/mayo-positif-avatar.png"
                    alt="Mayo Akun Link"
                    loading="eager"
                    className="transition-all duration-300 object-cover opacity-0 group-hover:opacity-100 absolute size-full"
                  />
                </div>

                <p className="relative font-chillax font-bold text-[12px] leading-3 tracking-n2 text-primary text-center">
                  Beli Item <br /> Gamepass
                </p>
              </Link>
            </FeatureCard>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center text-center">
            <h6 className="font-chillax-h6-mobile text-primary">
              Pilih layanan yang kamu butuhkan
            </h6>
            <p className="font-jakarta-body-normal-mobile text-dark">
              Berbagai layanan terbaik untuk kebutuhan Robloxmu
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <Button size={"mobile-large"} variant={"primary"}>
            Top Up Robux Sekarang
          </Button>
          <Button size={"mobile-large"} variant={"secondary"}>
            Cek Pesanan disini
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

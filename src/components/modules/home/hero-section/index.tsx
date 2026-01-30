import { Image } from "@imagekit/react";
import { Link } from "react-router";
import { useMediaQuery } from "usehooks-ts";
import { Button } from "~/components/common/button";
import Icons from "~/components/common/icons";
import MaxWidthWrapper from "~/components/common/max-width-wrapper";
import FeatureCard from "./feature-card";

export default function HeroSection() {
  const sm = useMediaQuery("(max-width: 640px)");
  const md = useMediaQuery("(max-width: 768px)");
  const lg = useMediaQuery("(max-width: 1024px)");

  const btnsize = () => {
    return sm
      ? "mobile-large"
      : md
        ? "desktop-normal"
        : lg
          ? "desktop-normal"
          : "desktop-large";
  };

  return (
    <section>
      {/* Image */}
      <div className="w-full relative overflow-hidden max-h-screen aspect-16/10 min-h-[348px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px]">
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
          className="absolute z-10 top-[24%] left-[15%] size-[66px] object-cover object-center md:size-[90px] lg:size-[110px] xl:size-[130px]"
          transformation={[
            {
              width: "260",
              height: "260",
              quality: 100,
            },
          ]}
        />

        <Image
          src="mayoblox/bubble-money.png"
          alt="Bubble Money"
          loading="eager"
          className="absolute z-10 top-[28%] right-[15%] size-[66px] object-cover object-center md:size-[90px] lg:size-[110px] xl:size-[130px]"
          transformation={[
            {
              width: "260",
              height: "260",
              quality: 100,
            },
          ]}
        />

        {/* Gradient Overlay - Transition from image to content */}
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-t from-white via-white/80 to-transparent z-20" />
      </div>

      {/* Content */}
      <MaxWidthWrapper className="-mt-30 relative z-20 flex flex-col gap-8 sm:-mt-[34%] md:-mt-[32%] lg:-mt-[34%] xl:-mt-[34%]">
        <div className="flex flex-col gap-3 sm:gap-[30px] md:gap-8 lg:gap-10">
          {/* Title - centered until lg, then left-aligned */}
          <h1 className="font-cherry-h1-mobile text-transparent tracking-p1 bg-gradient-primary bg-clip-text text-center text-outline sm:text-[64px] lg:text-left sm:leading-[80px] md:text-[64px] md:leading-[70px] lg:text-[76px] lg:leading-[78px] xl:font-cherry-h1-desktop xl:leading-[88px]">
            Mayoblox <br className="sm:-mb-20 md:-mb-16 lg:-mb-18 xl:-mb-20" />{" "}
            Sahabat Robloxmu
          </h1>

          {/* Main content - stacked until lg, then row */}
          <div className="flex flex-col gap-8 lg:flex-row  lg:justify-between md:gap-10 lg:gap-16">
            {/* Left side - Feature cards and description */}
            <div className="flex flex-col gap-8 md:gap-9 lg:gap-10">
              {/* Feature Cards - centered until lg, then left-aligned */}
              <div className="flex items-center justify-center gap-3 lg:justify-start md:gap-4 lg:gap-5 xl:gap-6">
                <FeatureCard className="py-3 px-2 h-29.75 w-26 hover:translate-y-[-5%] transition-all duration-300 flex flex-col justify-center items-center  sm:w-[170px] sm:h-[200px] lg:w-[185px] lg:h-[215px] xl:w-[200px] xl:h-[230px]">
                  <Link to={"#"} className="flex items-center gap-0.5 md:gap-1">
                    <Icons.iglink className="size-5 max-[365px]:hidden sm:size-8 lg:size-9 xl:size-10" />
                    <Image
                      src="mayoblox/mayo-account-link.png"
                      alt="Mayo Akun Link"
                      loading="eager"
                      className="w-17 h-10.5 object-cover object-center sm:w-[100px] sm:h-[65px] lg:w-[110px] lg:h-[70px] xl:w-[119px] xl:h-[75px]"
                    />
                  </Link>

                  <Link to={"#"} className="flex items-center gap-0.5 md:gap-1">
                    <Icons.iglink className="size-5 max-[365px]:hidden sm:size-8 lg:size-9 xl:size-10" />
                    <Image
                      src="mayoblox/bocil-mayo-link.png"
                      alt="Bocil Mayo Link"
                      loading="eager"
                      className="w-17 h-10.5 object-cover object-center sm:w-[100px] sm:h-[65px] lg:w-[110px] lg:h-[70px] xl:w-[119px] xl:h-[75px]"
                    />
                  </Link>
                </FeatureCard>

                <FeatureCard className="h-29.75 w-26 group hover:translate-y-[-5%] transition-all duration-300 sm:w-[170px] sm:h-[200px] lg:w-[185px] lg:h-[215px] xl:w-[200px] xl:h-[230px]">
                  <Link
                    to={"#"}
                    className="flex flex-col justify-center items-center py-3 px-2 size-full gap-2 md:gap-1.5 lg:gap-2"
                  >
                    <div className="relative flex items-center justify-center w-full h-[52px] sm:h-[95px] lg:h-[102px] xl:h-[110px]">
                      <Image
                        src="mayoblox/bocil-mayo-link.png"
                        alt="Background"
                        loading="eager"
                        className="transition-all duration-300 object-cover grayscale-100 group-hover:grayscale-0 absolute size-full"
                      />
                      <Image
                        src="mayoblox/mayo-negatif-avatar.png"
                        alt="Mayo Avatar"
                        loading="eager"
                        className="transition-all duration-300 object-cover grayscale opacity-100 group-hover:opacity-0 absolute size-full"
                      />
                      <Image
                        src="mayoblox/mayo-positif-avatar.png"
                        alt="Mayo Avatar Hover"
                        loading="eager"
                        className="transition-all duration-300 object-cover opacity-0 group-hover:opacity-100 absolute size-full"
                      />
                    </div>

                    <p className="relative font-chillax font-bold text-[12px] leading-3 tracking-n2 text-primary text-center sm:text-[20px] sm:leading-[24px] md:text-[17px] md:leading-[20px] lg:text-[18px] lg:leading-[22px] xl:text-[20px] xl:leading-[24px]">
                      Top Up <span className="max-[340px]:hidden">Game</span>{" "}
                      <br /> Lainnya
                    </p>
                  </Link>
                </FeatureCard>

                <FeatureCard className="h-29.75 w-26 group hover:translate-y-[-5%] transition-all duration-300 sm:w-[170px] sm:h-[200px] lg:w-[185px] lg:h-[215px] xl:w-[200px] xl:h-[230px]">
                  <Link
                    to={"#"}
                    className="flex flex-col justify-center items-center py-3 px-2 size-full gap-2 md:gap-1.5 lg:gap-2"
                  >
                    <div className="relative flex items-center justify-center w-full h-[52px] sm:h-[107px] md:h-[95px] lg:h-[102px] xl:h-[110px]">
                      <Image
                        src="mayoblox/bocil-mayo-link.png"
                        alt="Background"
                        loading="eager"
                        className="transition-all duration-300 object-cover grayscale-100 group-hover:grayscale-0 absolute size-full"
                      />
                      <Image
                        src="mayoblox/mayo-negatif-avatar.png"
                        alt="Mayo Avatar"
                        loading="eager"
                        className="transition-all duration-300 object-cover grayscale opacity-100 group-hover:opacity-0 absolute size-full"
                      />
                      <Image
                        src="mayoblox/mayo-positif-avatar.png"
                        alt="Mayo Avatar Hover"
                        loading="eager"
                        className="transition-all duration-300 object-cover opacity-0 group-hover:opacity-100 absolute size-full"
                      />
                    </div>

                    <p className="relative font-chillax font-bold text-[12px] leading-3 tracking-n2 text-primary text-center sm:text-[20px] sm:leading-[24px] md:text-[17px] md:leading-[20px] lg:text-[18px] lg:leading-[22px] xl:text-[20px] xl:leading-[24px]">
                      Beli Item <br /> Gamepass
                    </p>
                  </Link>
                </FeatureCard>
              </div>

              {/* Description - centered until lg, then left-aligned */}
              <div className="flex flex-col gap-2 items-center justify-center text-center lg:items-start lg:justify-start lg:text-left sm:-mt-1 md:gap-2.5 lg:gap-3">
                <h6 className="font-chillax-h6-mobile text-primary sm:font-cherry-h3-mobile md:text-[26px] lg:text-[30px] xl:text-[32px]">
                  Pilih layanan yang kamu butuhkan
                </h6>
                <p className="font-jakarta-body-normal-mobile text-dark sm:font-jakarta-body-normal-desktop md:text-[17px] lg:text-[18px]">
                  Berbagai layanan terbaik untuk kebutuhan Robloxmu
                </p>
              </div>
            </div>

            {/* Right side - Buttons (centered until lg) */}
            <div className="flex flex-col gap-2 items-center justify-center sm:gap-2.5 lg:w-[380px] xl:w-[402px] lg:-mt-[5%] relative">
              <Button
                size={btnsize()}
                variant={"primary"}
                className="md:max-h-[60px] lg:max-h-[68px]"
              >
                Top Up Robux Sekarang
              </Button>

              <Button
                size={btnsize()}
                variant={"secondary"}
                className="md:max-h-[60px] lg:max-h-[68px]"
              >
                Cek Pesanan disini
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

import { Mousewheel, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "usehooks-ts";
import { useProductRecommendation } from "~/hooks/use-product-recommendation";
import { formatCurrency } from "~/lib/utils";
import { repository } from "~/repositories";
import ProductCard from "./product-card";

export default function ProductCardList() {
  const sm = useMediaQuery("(max-width: 640px)");
  const { data, error, isPending } = useProductRecommendation(
    repository.product,
  );

  // TODO: handle this
  if (isPending) return null;
  if (error) return null;

  return (
    <Swiper
      className="cursor-grab"
      slidesPerView="auto"
      modules={[Mousewheel, Scrollbar]}
      mousewheel
      scrollbar={false}
      spaceBetween={sm ? 12 : 16}
      loop={true}
      autoplay={false}
      centeredSlides={true}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} className="w-[220px]! sm:w-[302px]!">
          <ProductCard
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            name={item.name}
            robuxAmount={`R$ ${formatCurrency(item.robuxAmount)}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

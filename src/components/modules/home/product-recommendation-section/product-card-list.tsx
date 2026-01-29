import { Mousewheel, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useProductRecommendation } from "~/hooks/use-product-recommendation";
import { repository } from "~/repositories";
import ProductCard from "./product-card";

export default function ProductCardList() {
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
      spaceBetween={12}
      loop={true}
      autoplay={false}
      centeredSlides={true}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id} className="w-[220px]!">
          <ProductCard
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            label={item.label}
            price={`R$ ${item.price}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

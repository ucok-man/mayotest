import { Mousewheel, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useProductNewestSold } from "~/hooks/use-product-newest-sold";
import { formatCurrency } from "~/lib/utils";
import { repository } from "~/repositories";
import ProductCard from "./product-card";

export default function ProductCardList() {
  const { data, error, isPending } = useProductNewestSold(repository.order);

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
        <SwiperSlide key={item.id} className="w-[240px]! sm:w-[302px]!">
          <ProductCard
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            priceIdr={formatCurrency(item.priceIdr)}
            robuxAmount={formatCurrency(item.robuxAmount)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

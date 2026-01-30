import { Mousewheel, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetTestimonials } from "~/hooks/use-get-testimonials";
import { hideUsername } from "~/lib/utils";
import { repository } from "~/repositories";
import TestimoniCard from "./testimoni-card";

export default function TesmimoniCardList() {
  const { data, error, isPending } = useGetTestimonials(repository.testimoni);

  // TODO: handle this
  if (isPending) return null;
  if (error) return null;

  return (
    <Swiper
      className="cursor-grab overflow-visible!"
      slidesPerView="auto"
      modules={[Mousewheel, Scrollbar]}
      mousewheel
      scrollbar={false}
      spaceBetween={16}
      loop={true}
      autoplay={false}
      centeredSlides={true}
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
          className="max-w-[330px]! max-[350px]:w-auto! sm:max-w-[514px]!"
        >
          <TestimoniCard
            id={item.id}
            username={hideUsername(item.username)}
            image={item.image}
            icon={item.icon}
            city={item.city}
            content={item.content}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

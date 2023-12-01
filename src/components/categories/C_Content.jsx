import { Swiper, SwiperSlide } from "swiper/react";
import { C_Card_Image, C_H2 } from "./";

import "swiper/css";

export const C_Content = () => {
  return (
    <section className="flex flex-col gap-8 w-[375px] py-10 px-4 md:w-[960px] md:py-0 md:px-20 xl:min-w-[1440px]">
      <C_H2 />
      <div className="min-w-[1464px] h-[200px] select-none">
        <Swiper
          spaceBetween={-12}
          grabCursor={true}
          loop={true}
          breakpoints={{
            375: {
              slidesPerView: 2,
            },
            960: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 5,
            },
          }}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <SwiperSlide key={`key-${index}`}>
              <C_Card_Image url="bg-[url('./assets/desktop/CAT1.jpeg')]" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { GL_Black_Button } from "../global";
import { C_H3, C_NTF_Card, C_P } from "./";
import NTF2 from "../../assets/desktop/NTF2.jpeg";

import "swiper/css";
import "swiper/css/navigation";

export const C_Content = () => {
  return (
    <section className="min-w-full sm:w-[341px] flex flex-col py-10 px-6 gap-8 content-center md:py-16 md:pr-0 md:pl-10 md:flex-row rounded-3xl md:w-full md:h-[440px] xl:w-[1280px] xl:h-[530px] xl:py-16 xl:pl-16 xl:pr-0 bg-light-surface-purple">
      <div className="flex flex-col items-start gap-8 self-stretch md:w-[267px] md:h-[200px] md:self-center md:gap-10">
        <div className="md:flex md:flex-col md:gap-3">
          <C_H3 />
          <C_P />
        </div>
        <div className="w-full md:w-[113px]">
          <GL_Black_Button content="Explore" />
        </div>
      </div>
      <div className="md:relative md:self-center md:w-[541px] md:h-[402px] xl:w-[917px]">
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={12}
            modules={[Navigation]}
            loop={true}
            navigation={{
              enabled: false,
            }}
            breakpoints={{
              375: {
                slidesPerView: 2,
                navigation: {
                  enabled: false,
                },
                spaceBetween: 270,
              },
              960: {
                slidesPerView: 2,
                spaceBetween: 130,
                nextEl: null,
                navigation: {
                  enabled: true,
                },
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 90,
                navigation: {
                  enabled: true,
                },
              },
            }}
            className="mySwiper"
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <SwiperSlide key={index}>
                <C_NTF_Card url={NTF2} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

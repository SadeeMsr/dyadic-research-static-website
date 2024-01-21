"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/HeroBgCarousel.module.css";

// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function HeroBgCarousel() {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade,Autoplay, Pagination]}
      className="mySwiper"
    >
   <SwiperSlide>
      <div className="flex justify-center items-center relative overflow-hidden" style={{height: "100vh"}}>
          <Image
            src="/assets/aeroponics2.jpg"
            fill
            sizes="100vw"
            className="hover:scale-125 duration-[5000ms]"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="flex justify-center items-center relative overflow-hidden" style={{height: "100vh"}}>
          <Image
            src="/assets/aeroponics.jpg"
            fill
            sizes="100vw"
            className="hover:scale-125 duration-[5000ms]"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="flex justify-center items-center relative overflow-hidden" style={{height: "100vh"}}>
          <Image
            src="/assets/aeroponics3.jpg"
            fill
            sizes="100vw"
            className="hover:scale-125 duration-[5000ms]"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

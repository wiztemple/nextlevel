/* eslint-disable @next/next/no-img-element */
"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const HomeCarousel = () => {
  return (
    <section className="bg-white">
      <div className="pt-[120px] md:px-[150px] px-5">
        <h1 className="uppercase text-gray-1 sm:text-lg text-sm sm:tracking-[10px] tracking-[3px] leading-6 font-medium">
          UNSERE ERLEBNISSE
        </h1>
        <h2 className="tracking-[5px] uppercase sm:text-[54px] text-4xl font-bold sm:leading-[72px] text-dark-1 pt-5">
          ENTDECKE UNSERE WELTEN
        </h2>
      </div>
      <div className="bg-white pt-10 slick-mode2 px-5">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          // slidesPerView={4}
          // centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <Link
              className="block w-full"
              href="https://sandboxvr.com/zurich"
            >
              <img
                src="/ambersky-poster.webp"
                className="h-[420px] object-cover w-full"
                alt="Slider Image"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              className="block w-full"
              href="https://sandboxvr.com/zurich"
            >
              <img
                src="/deadwoodmansion-poster.webp"
                className="h-[420px] object-cover w-full"
                alt="Slider Image"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              className="block w-full"
              href="https://sandboxvr.com/zurich"
            >
              <img
                src="/startrek-poster.webp"
                className="h-[420px] object-cover w-full"
                alt="Slider Image"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              className="block w-full"
              href="https://sandboxvr.com/zurich"
            >
              <img
                src="/ufl-poster.webp"
                className="h-[420px] object-cover w-full"
                alt="Slider Image"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              className="block w-full"
              href="https://sandboxvr.com/zurich"
            >
              <img
                src="/squidgame-poster.webp"
                className="h-[420px] object-cover w-full"
                alt="Slider Image"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              className="block w-full"
              href="https://sandboxvr.com/zurich"
            >
              <img
                src="/dragonfire-poster.webp"
                className="h-[420px] object-cover w-full"
                alt="Slider Image"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              className="block w-full"
              href="https://sandboxvr.com/zurich"
            >
              <img
                src="/deadwoodvalley-poster.webp"
                className="h-[420px] object-cover w-full"
                alt="Slider Image"
              />
            </Link>
          </SwiperSlide>
        </Swiper>
        <div className="pt-[45px] pb-24 [180px] flex justify-center">
          <Link
            href="https://sandboxvr.com/zurich/"
            className="transition sm:text-base text-sm w-fit delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110  py-4 sm:px-8 px-5 leading-5 sm:tracking-[7px] rounded-md text-white bg-[#0076FF] border border-[#0076FF]"
          >
            BUCHEN
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCarousel;

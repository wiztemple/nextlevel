/* eslint-disable @next/next/no-img-element */
"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-white">
      <div className="pt-[120px] sm:px-[150px] px-5">
        <h1 className="uppercase text-gray-1 sm:text-lg text-sm sm:tracking-[10px] tracking-[3px] leading-6 font-medium">
          UNSERE ERLEBNISSE
        </h1>
        <h2 className="tracking-[5px] uppercase sm:text-[54px] text-4xl font-bold sm:leading-[72px] text-dark-1 pt-5">
          ENTDECKE UNSERE WELTEN
        </h2>
      </div>
      <div className="bg-white pt-10 px-8">
        <Slider {...settings}>
          <div className="px-10">
            <a href="/">
              <img
                src="/ambersky-poster.webp"
                className="h-[420px] object-cover"
                alt="Slider Image"
              />
            </a>
          </div>
          <div className="px-10">
            <a href="/">
              <img
                src="/deadwoodmansion-poster.webp"
                className="h-[420px] object-cover"
                alt="Slider Image"
              />
            </a>
          </div>
          <div className="px-10">
            <a href="/">
              <img
                src="/startrek-poster.webp"
                className="h-[420px] object-cover"
                alt="Slider Image"
              />
            </a>
          </div>
          <div className="px-10">
            <a href="/">
              <img
                src="/ufl-poster.webp"
                className="h-[420px] object-cover"
                alt="Slider Image"
              />
            </a>
          </div>
          <div className="px-10">
            <a href="/">
              <img
                src="/squidgame-poster.webp"
                className="h-[420px] object-cover"
                alt="Slider Image"
              />
            </a>
          </div>
          <div className="px-10">
            <a href="/">
              <img
                src="/dragonfire-poster.webp"
                className="h-[420px] object-cover"
                alt="Slider Image"
              />
            </a>
          </div>
          <div className="px-10">
            <a href="/">
              <img
                src="/deadwoodvalley-poster.webp"
                className="h-[420px] object-cover"
                alt="Slider Image"
              />
            </a>
          </div>
        </Slider>
        <div className="pt-[94px] pb-24 [180px] flex justify-center">
          <button
            type="button"
            className="transition sm:text-base text-sm w-fit delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 sm:py-5 py-4 sm:px-10 px-5 leading-5 sm:tracking-[7px] rounded-md text-white bg-[#0076FF] border border-[#0076FF]"
          >
            BUCHEN
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeCarousel;

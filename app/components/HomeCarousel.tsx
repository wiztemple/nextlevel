/* eslint-disable @next/next/no-img-element */
"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    >
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 13L7 7L1 1"
          stroke="#BCBDC5"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "", background: "transparent" }}
      onClick={onClick}
    >
      <svg
        width="9"
        height="17"
        viewBox="0 0 9 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.52934 0.21934C8.66979 0.359965 8.74868 0.550589 8.74868 0.74934C8.74868 0.948091 8.66979 1.13871 8.52934 1.27934L1.80934 7.99934L8.52934 14.7193C8.60303 14.788 8.66213 14.8708 8.70312 14.9628C8.74411 15.0548 8.76616 15.1541 8.76793 15.2548C8.76971 15.3555 8.75118 15.4555 8.71346 15.5489C8.67574 15.6423 8.6196 15.7272 8.54838 15.7984C8.47716 15.8696 8.39233 15.9257 8.29894 15.9635C8.20555 16.0012 8.10552 16.0197 8.00482 16.0179C7.90412 16.0162 7.8048 15.9941 7.7128 15.9531C7.6208 15.9121 7.538 15.853 7.46934 15.7793L0.21934 8.52934C0.0788894 8.38871 0 8.19809 0 7.99934C0 7.80059 0.0788894 7.60997 0.21934 7.46934L7.46934 0.21934C7.60997 0.0788894 7.80059 0 7.99934 0C8.19809 0 8.38871 0.0788894 8.52934 0.21934Z"
          fill="#BCBDC5"
        />
      </svg>
    </div>
  );
}
const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // className: "center",
    // centerMode: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

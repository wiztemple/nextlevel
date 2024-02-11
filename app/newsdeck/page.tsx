"use client";

import { Navigation, Parallax } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NewsdeckAccordion from "../components/NewsdeckAccordion";
import Link from "next/link";
import SliderItem from "../components/SliderItem";

const NewsDeck = () => {
  return (
    <main className="break-words">
      <Navbar />
      <Hero className="flex relative sm:h-screen h-[550px] justify-center items-center w-screen transition duration-300 ease-in-out sm:bg-[url('/sbvr-grey.webp')] bg-[url('/unbenannt-2.webp')] bg-cover sm:bg-left bg-negative bg-no-repeat">
        <div className="absolute top-0 left-0 right-0 bg-dark-1/60 h-full"></div>
        <div className="relative z-50">
          <h1 className="sm:text-[28px] text-[15px] text-white uppercase leading-8 text-center tracking-[4.3px]">
            PRESSE, MEDIAS & FAQ
          </h1>
          <h2 className="text-white sm:text-[76px] text-3xl sm:pt-5 font-semibold text-center tracking-[10px] leading-[80px] uppercase">
            NEWSDECK
          </h2>
        </div>
      </Hero>
      <section className="sm:px-[150px] px-5 pt-[70px] pb-[50px]">
        <h1 className="text-gray-1 uppercase text-lg sm:tracking-[5px] tracking-widest leading-5 font-medium">
          HIER GIBTS WAS ZUM LESEN
        </h1>
        <h2 className="uppercase text-dark-1 sm:text-[54px] text-3xl py-5 tracking-[10px] sm:leading-[72px] leading-snug font-extrabold">
          Pressebereich
        </h2>
        <div className="slick-mode">
          <Swiper
            modules={[Navigation, Parallax]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
          >
            <SwiperSlide>
              <SliderItem className="bg-[url('/unbenannt-2.webp')]">
                <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
                  <div
                    className={`absolute sm:px-[200px] px-12 transform duration-500`}
                  >
                    <h1
                      className="text-center text-white sm:text-[27px] tracking-[4.5px]"
                      data-swiper-parallax="-23%"
                    >
                      Mit 100.000 Euro zum Greenwich
                    </h1>
                    <p
                      className="text-white text-xs text-center sm:leading-5 pt-5"
                      data-swiper-parallax="-200"
                    >
                      Es soll der erste Standort in Deutschland werden, einer
                      von nur zwei in ganz Europa, inmitten <br /> des kleinen
                      Vogelsbergs – und in Alsfeld wird dafür schon seit Monaten
                      kräftig gewerkelt..
                    </p>
                    <div className="flex justify-center pt-5">
                      <Link
                        href="/"
                        className="text-gray-8 block w-fit py-2 px-4 rounded-[3px] border border-gray-8 leading-5 text-xs relative"
                      >
                        Weiterlesen auf Oberhessen-Live
                      </Link>
                    </div>
                  </div>
                </div>
              </SliderItem>
            </SwiperSlide>
            <SwiperSlide>
              <SliderItem className="bg-[url('/sandboxvr-alsfeld.webp')]">
                <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
                  <div
                    className={`absolute sm:px-[200px] px-12 transform duration-500`}
                  >
                    <h1 className="text-center text-white sm:text-[27px] tracking-[4.5px]">
                      Mit 100.000 Euro zum Greenwich
                    </h1>
                    <p className="text-white text-xs text-center sm:leading-5 pt-5">
                      Es soll der erste Standort in Deutschland werden, einer
                      von nur zwei in ganz Europa, inmitten <br /> des kleinen
                      Vogelsbergs – und in Alsfeld wird dafür schon seit Monaten
                      kräftig gewerkelt..
                    </p>
                    <div className="flex justify-center pt-5">
                      <Link
                        href="/"
                        className="text-gray-8 block w-fit py-2 px-4 rounded-[3px] border border-gray-8 leading-5 text-xs relative"
                      >
                        Weiterlesen auf Oberhessen-Live
                      </Link>
                    </div>
                  </div>
                </div>
              </SliderItem>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="bg-dark-1 sm:px-[150px] px-5 pt-[70px] pb-[50px]">
        <h1 className="text-gray-1 sm:tracking-[5px] tracking-[2px] leading-6 text-lg">
          BLEIBT AUF DEM LAUFENDEN!
        </h1>
        <h2 className="uppercase text-white sm:text-[53px] text-[40px] tracking-[10px] sm:leading-[72px] leading-snug pt-5 font-bold">
          MEDIAKIT
        </h2>
        <div className="h-[400px] w-full calc(5000ms*1.2) overflow-hidden sm:mt-0 mt-5">
          <div className="min-w-full min-h-full relative bg-[url('/unbenannt-2.webp')] mt-5 bg-[#833ca3] scale-bg">
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
              <div>
                <h1 className="text-center text-white sm:text-3xl text-xl tracking-[4.5px]">
                  SandboxVR
                </h1>
                <div className="flex justify-center">
                  <Link
                    href="/"
                    className="text-gray-8 block w-fit py-2.5 px-4 rounded-[3px] border border-gray-8 sm:tracking-[4px] tracking-[2px] leading-5 text-sm relative mt-5"
                  >
                    Zum Mediakit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsdeckAccordion />
      <section className="bg-[#D1DDE8] bg-cover sm:px-[150px] px-5 sm:pt-[70px] pt-[60px] pb-[50px]">
        <h1 className="text-gray-1 uppercase text-lg sm:tracking-[5px] tracking-widest leading-5 font-medium">
          NOCH WEITERE FRAGEN?
        </h1>
        <h2 className="uppercase text-dark-1 sm:text-[56px] text-4xl pt-6 sm:tracking-[10px] sm:leading-[54px] leading-snug font-bold">
          NIMM KONTAKT MIT UNS AUF!
        </h2>
        <div className="bg-white py-7 px-5 mt-6 shadow">
          <Image
            className=" bg-[#D1DDE8]"
            src="/applogo.svg"
            alt=""
            width={147}
            height={58}
          />
          <p className="text-[15px] pt-[26px]">
            Greenwich Erlebnisse GmbH <br />
            Ludwigsplatz 1, 36304 Alsfeld
          </p>
          <p className="text-[15px] pt-7">
            zurich@sandboxvr.com <br />
            +41 43 311 9906
          </p>
        </div>
      </section>
      <section className="bg-dark-1 sm:px-[150px] px-10 sm:py-[60px] py-20">
        <div className="sm:flex">
          <div className="sm:w-3/5 w-full">
            <h1 className="text-gray-1 sm:tracking-[5px] tracking-[2px] leading-6 text-lg">
              BLEIBT AUF DEM LAUFENDEN!
            </h1>
            <h2 className="uppercase text-white sm:text-[53px] text-[40px] sm:tracking-[10px] tracking-[2px] sm:leading-[72px] leading-snug pt-5 font-bold">
              PRESSEVERTEILER
            </h2>
          </div>
          <div className="sm:w-2/5 w-full">
            <Image
              src="/vr-glasses.webp"
              width={438}
              height={290}
              className="trns transform rotate-[9deg] object-cover"
              alt="VR glasses"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default NewsDeck;

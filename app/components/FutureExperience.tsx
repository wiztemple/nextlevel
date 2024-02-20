"use client";

import Link from "next/link";

const FutureExperience = () => {
  return (
    <section className="sm:bg-section2 bg-section2-mobile bg-bottom sm:h-[776px] h-full bg-cover sm:px-[180px] px-5 sm:py-[200px] py-16">
      <h1 className="sm:tracking-[10px] tracking-[2px] sm:text-xl text-[13px] text-gray-1 font-light uppercase sm:leading-6">
        TAUCHE EIN IN NEUE WELTEN
      </h1>
      <h2 className="tracking-widest sm:text-6xl text-4xl font-bold sm:leading-[60px] text-white uppercase pt-5">
        Erlebe die Zukunft
      </h2>
      <p className="leading-6 sm:text-base text-sm text-[#EFF3F7] pt-6 font-normal">
        Sandbox VR ist ein hyperreales VR Erlebnis für bis zu 6 Spieler
        gleichzeitig, in dem ihr euch sehen und miteinander interagieren könnt –
        genau so, wie in der realen Welt.
      </p>
      <p className="leading-6 text-[#EFF3F7] sm:text-base text-sm pt-7 font-normal">
        Inspiriert von Star Treks Holodeck, geben euch die Spielwelten das
        Gefühl, als würdet ihr Teil des Spiels oder eines Films sein.
      </p>
      <div className="sm:pt-[94px] pt-[200px] sm:block flex justify-center">
        <Link
          href="https://sandboxvr.com/zurich/"
          className="transition sm:text-base text-sm w-fit delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 sm:py-5 py-4 sm:px-10 px-5 leading-5 sm:tracking-[7px] rounded-md text-white bg-[#0076FF] border border-[#0076FF]"
        >
          JETZT BUCHEN
        </Link>
      </div>
    </section>
  );
};

export default FutureExperience;

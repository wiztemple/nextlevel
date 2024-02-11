"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PressSection from "./components/PressSection";
import MoveExperiences from "./components/MoveExperiences";
import TeamExperience from "./components/TeamExperience";
import FactsSection from "./components/FactsSection";
import FutureExperience from "./components/FutureExperience";
import VirtualRealityVideo from "./components/VirtualRealityVideo";
import FurtherQuestions from "./components/FurtherQuestions";
import AdventuresSection from "./components/AdventuresSection";
import HomeCarousel from "./components/HomeCarousel";
import Link from "next/link";

export default function Home() {
  return (
    <main className="break-words">
      <Navbar />
      <Hero className="sm:h-screen h-[70vh] w-screen relative transition duration-300 ease-in-out bg-[url(https://nextlevel-erlebnisse.de/wp-content/uploads/2023/12/SB-Experience_DeadWoodValley_4.webp)] bg-cover bg-center bg-no-repeat">
        <div className="">
          <div className="absolute bg-dark-1/50 w-full sm:h-screen h-full top-0 left-0 flex justify-center items-center">
            <div className="z-50 relative">
              <Image
                className="sm:block hidden"
                src="/sanndbox_logo_white.webp"
                width={768}
                height={118}
                alt="Sandbox Logo"
              />
              <Image
                className="block sm:hidden"
                src="/logo-vertical.webp"
                width={258}
                height={227}
                alt="Sandbox Logo"
              />
              <div className="flex justify-center w-full sm:pt-[65px] pt-10">
                <div className="flex sm:flex-row flex-col items-center sm:gap-24">
                  <Link
                    href="https://sandboxvr.com/zurich/"
                    target="_blank"
                    className="block w-fit transition delay-100 duration-300 text-center ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 sm:py-5 py-4 sm:px-10 px-5 leading-5 sm:tracking-[7px] tracking-[1px] rounded-md text-white bg-appblue border-2 border-appblue"
                  >
                    BUCHEN
                  </Link>

                  <Link
                    href="/sandboxvr/voucher"
                    className="block w-fit mt-8 sm:mt-0 transition delay-100 duration-300 ease-in-out text-center hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 sm:py-5 py-4 sm:px-10 px-5 leading-5 sm:tracking-[7px] tracking-[1px] rounded-md text-white bg-appred border-2 border-appred"
                  >
                    GUTSCHEINE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero>
      <VirtualRealityVideo />
      <FutureExperience />
      <section className="py-[50px] sm:px-[150px] px-5 flex justify-center bg-[#161617]">
        {/* <h1 className="text-[#CCCBC9] sm:leading-[78px] sm:text-[60px] text-4xl font-medium uppercase tracking-[5px] py-1">
          Hier wird es
        </h1> */}
        <div className="font-medium uppercase md:leading-[78px] py-[15px] text-center text-4xl md:text-[60px] tracking-[5px] [text-wrap:balance] bg-clip-text text-[#CCCBC9] bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
          Hier wird es
          <span className="text-[#9E9C97] pl-3 uppercase font-bold inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.6xl)*theme(lineHeight.snug))] overflow-hidden">
            <ul className="block animate-text-slide-5 text-left md:leading-[78px] [&_li]:block">
              <li>FANTASTISCH</li>
              <li>ERSTAUNLICH </li>
              <li>ABGEFAHREN</li>
              <li>GROSSARTIG</li>
              <li>SPANNEND</li>
              <li aria-hidden="true">INTENSIV</li>
            </ul>
          </span>
        </div>
      </section>
      <FactsSection />
      <HomeCarousel />
      <TeamExperience />
      <MoveExperiences />
      <section className="sm:pt-[90px] pt-[70px] sm:px-[150px] px-5 bg-gray-8 pb-[30px]">
        <h1 className="uppercase text-gray-1 sm:text-lg text-sm sm:tracking-[10px] tracking-widest leading-[26px] font-medium">
          Unsere Sandbox VR Locations
        </h1>
        <h2 className="tracking-[5px] uppercase sm:text-[54px] text-4xl font-bold sm:leading-[72px] leading-snug text-dark-1 pt-5">
          Hier findet ihr uns
        </h2>
        <div className="grid sm:grid-cols-2">
          <div className="sm:p-[30px]">
            <h1 className="uppercase text-[#57BFC7] sm:text-[22px] text-xl leading-8 pb-5 sm:pt-0 pt-8">
              Alsfeld (Mittelhessen)
            </h1>
            <p className="text-dark-1 text-[15px] leading-5">
              Unsere Sandbox VR Location in Alsfeld befindet sich in unserem{" "}
              <strong>Greenwich Erlebnisse Headquarter.</strong> Im
              wunderschönen Städtchen Alsfeld in Hessen findet ihr außerdem
              viele <strong>weitere Greenwich Erlebnisse</strong> und unsere
              Verwaltung. Direkt an der A5 gelegen, seid ihr schnell aus allen
              Richtungen bei uns. Wir haben genügend kostenlose Parkplätze
              direkt auf unserem Gelände.
            </p>
            <p className="pt-5 text-[15px] text-dark-1">
              Adresse für das Navi:{" "}
              <strong>
                Swiss Life Arena, West Arkade, Vulkanstrasse 130i, 8048 Zürich,
                Switzerland
              </strong>
            </p>
            <div className="pt-8 w-full">
              <iframe
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Swiss%20Life%20Arena,%20West%20Arkade,%20Vulkanstrasse%20130i,%208048%20Z%C3%BCrich,%20Switzerland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/population/">
                  Find Population on Map
                </a>
              </iframe>
            </div>
          </div>
          {/* <div className="sm:p-[30px]">
            <h1 className="uppercase text-[#57BFC7] text-[22px] leading-8 pb-5 sm:pt-0 pt-8">
              Wiesbaden
            </h1>
            <p className="text-dark-1 text-[15px] leading-5">
              Unsere Sandbox VR Location in Wiesbaden befindet sich im{" "}
              <strong>Lili Shopping Center</strong>. Das Lili ist derekt neben
              dem Hauptbahnhof, so dass ihr mit Bus & Bahn einfach anreisen
              könnt. Darüber hinaus verfügt das Lili über eine Tiefgarage, in
              der ihr zahlreiche kostengünstige Parkplätze findet. Der Weg zu
              uns ist dann komplett überdacht und nur wenige Meter lang.
            </p>
            <p className="pt-[44px] text-[15px] text-dark-1">
              Adresse für das Navi:{" "}
              <strong>Bahnhofsplatz 3, 65189 Wiesbaden</strong>
            </p>
            <div className="w-full pt-8">
              <iframe
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Bahnhofsplatz%203,%2065189%20Wiesbaden+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/population/">Population mapping</a>
              </iframe>
            </div>
          </div> */}
        </div>
      </section>
      <PressSection />
      <FurtherQuestions />
      <AdventuresSection />
      <Footer />
    </main>
  );
}

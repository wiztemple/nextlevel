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

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero className="h-screen w-screen transition duration-300 ease-in-out  hover:rounded-lg bg-[url(https://nextlevel-erlebnisse.de/wp-content/uploads/2023/12/SB-Experience_DeadWoodValley_4.webp)] bg-cover bg-center bg-no-repeat">
        <div className="">
          <div className="absolute bg-dark-1/50 w-full h-screen top-0 left-0 flex justify-center items-center">
            <div className="z-50 relative">
              <Image
                src="/sanndbox_logo_white.webp"
                width={768}
                height={118}
                alt="Sandbox Logo"
              />
              <div className="flex justify-center w-full sm:pt-[65px]">
                <div className="flex sm:gap-24">
                  <a
                    href="https://nextlevel-erlebnisse.de/sandboxvr/gutschein"
                    className="block transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 py-5 px-10 leading-5 tracking-[7px] rounded-md text-white bg-appblue border-2 border-appblue"
                  >
                    BUCHEN
                  </a>

                  <a
                    href="https://nextlevel-erlebnisse.de/sandboxvr/gutschein"
                    className="block transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 py-5 px-10 leading-5 tracking-[7px] rounded-md text-white bg-appred border-2 border-appred"
                  >
                    GUTSCHEINE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero>
      <VirtualRealityVideo />
      <FutureExperience />
      <section className="sm:py-[50px] flex justify-center">
        <h1 className="text-[#CCCBC9] leading-[78px] text-[60px] font-medium uppercase tracking-[5px] py-1">
          Hier wird es
        </h1>
      </section>
      <FactsSection />
      <section className="bg-white">
        <div className="sm:pt-[120px] sm:pl-[150px]">
          <h1 className="uppercase text-gray-1 text-lg tracking-[10px] leading-[26px] font-medium">
            UNSERE ERLEBNISSE
          </h1>
          <h2 className="tracking-[5px] uppercase text-[54px] font-bold leading-[72px] text-dark-1 pt-5">
            ENTDECKE UNSERE WELTEN
          </h2>
        </div>
      </section>
      <TeamExperience />
      <MoveExperiences />
      <section className="sm:pt-[90px] sm:px-[150px] bg-gray-8">
        <h1 className="uppercase text-gray-1 text-lg tracking-[10px] leading-[26px] font-medium">
          Unsere Sandbox VR Locations
        </h1>
        <h2 className="tracking-[5px] uppercase text-[54px] font-bold leading-[72px] text-dark-1 pt-5">
          Hier findet ihr uns
        </h2>
        <div className="grid sm:grid-cols-2">
          <div className="sm:p-[30px]">
            <h1 className="uppercase text-[#57BFC7] text-[22px] leading-8 pb-5">
              Alsfeld (Mittelhessen)
            </h1>
            <p className="text-dark-1 text-[15px] leading-5">
              Unsere Sandbox VR Location in Alsfeld befindet sich in unserem{" "}
              <strong>Next Level Erlebnisse Headquarter.</strong> Im
              wunderschönen Städtchen Alsfeld in Hessen findet ihr außerdem
              viele <strong>weitere Next Level Erlebnisse</strong> und unsere
              Verwaltung. Direkt an der A5 gelegen, seid ihr schnell aus allen
              Richtungen bei uns. Wir haben genügend kostenlose Parkplätze
              direkt auf unserem Gelände.
            </p>
            <p className="pt-[20px] text-[15px] text-dark-1">
              Adresse für das Navi: <strong>Im Grund 3, 36304 Alsfeld</strong>
            </p>
          </div>
          <div className="sm:p-[30px]">
            <h1 className="uppercase text-[#57BFC7] text-[22px] leading-8 pb-5">
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
          </div>
        </div>
      </section>
      <PressSection />
      <FurtherQuestions />
      <AdventuresSection />
      <Footer />
    </main>
  );
}

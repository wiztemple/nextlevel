import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import SecondaryHero from "@/app/components/SecondaryHero";

const ChildrenBirthday = () => {
  return (
    <main>
      <Navbar />
      <Hero className="h-[760px] flex justify-center items-center w-screen transition duration-300 ease-in-out  hover:rounded-lg bg-[url('/kindergeburtstag.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="sm:pt-64">
          <h1 className="text-center text-[19px] leading-6 tracking-[5px] uppercase">
            SPASS UND ACTION GARANTIERT
          </h1>
          <h2 className="text-center text-[71px] font-medium uppercase tracking-[2.1px] sm:pt-10 leading-[80px] text-white">
            NEXTLEVEL KINDER-
            <br /> GEBURTSTAGE
          </h2>
          <p className="pt-[22px] text-[15px] leading-5 text-center sm:px-[160px]">
            Ein Kindergeburtstag bei NextLevel Erlebnisse ist garantiert ein
            unvergessliches Abenteuer. Egal ob ihr Euch in der Lasertag Arena
            battelt, virtuelle Welten im Hologate erlebt oder im Escaperoom mal
            eben kurz die Welt rettet – unsere Erlebnisse sind das Highlight
            jedes Kindergeburtstags!
          </p>
        </div>
      </Hero>
      <SecondaryHero>
        <h1 className="text-xl font-medium">
        DU SUCHST NACH EINEM UNVERGESSLICHEN KINDERGEBURTSTAG?
        </h1>
        <h2 className="uppercase text-[40px] font-medium tracking-[2px] text-white leading-[54px] pt-5">
        DEIN KINDERGEBURTSTAG. <br />
BEI UNS IN BESTEN HÄNDEN.
        </h2>
        <p className="pt-[22px] text-white text-base">
        Dann bist Du bei Next Level Erlebnisse in Alsfeld genau richtig! Wir bieten Dir und Deinen kleinen Gästen die ultimativen Abenteuer, die jedes Kinderherz höher schlagen lassen. Entdecke unsere vielfältigen Erlebnisangebote wie Lasertag, Escaperoom, Hologate und Lü, und lass den besonderen Tag zu einem unvergesslichen Erlebnis werden:
        </p>
      </SecondaryHero>
      <Footer />
    </main>
  );
};

export default ChildrenBirthday;

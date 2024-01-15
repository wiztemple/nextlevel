import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SecondaryHero from "../components/SecondaryHero";
import UnforgetableEvents from "../components/UnforgetableEvents";

const Events = () => {
  return (
    <main>
      <Navbar />
      <Hero className="h-[760px] flex justify-center items-center w-screen transition duration-300 ease-in-out  hover:rounded-lg bg-[url('/sandboxvr-header.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="sm:pt-64">
          <h1 className="text-center text-[19px] leading-6 tracking-[5px] uppercase">
            Für Unvergessliche Momente
          </h1>
          <h2 className="text-center text-[71px] font-medium uppercase tracking-[2.1px] sm:pt-10 leading-[80px] text-white">
            Erlebe Top-Events in <br />
            Alsfeld
          </h2>
          <p className="pt-[22px] text-[15px] leading-5 text-center sm:px-[160px]">
            Egal ob kleiner Kindergeburtstag oder großer Firmenevent – wir
            gestalten jede Veranstaltung ganz individuell und einzigartig. Wir
            bieten maßgeschneiderte Konzepte und setzen unser Know-how und
            unsere Erfahrung ein, um jedes Event unvergesslich zu machen. Next
            Level eben.
          </p>
        </div>
      </Hero>
      <SecondaryHero>
        <h1 className="text-xl font-medium">
          OB GESCHÄFTLICH ODER PRIVAT, GROSS ODER KLEI
        </h1>
        <h2 className="uppercase text-[40px] font-medium tracking-[2px] text-white leading-[54px] pt-5">
          SPASS GARANTIERT!
        </h2>
        <p className="pt-[22px] text-white text-base">
          Wir von Next Level Erlebnisse haben uns auf außergewöhnliche und
          unvergessliche Erlebnisse spezialisiert. Ob für dein Team, dein
          Unternehmen oder deine private Feier – wir bieten maßgeschneiderte
          Konzepte, die auf deine individuellen Bedürfnisse und Wünsche
          zugeschnitten sind. Unsere Events sind einzigartig und abenteuerlich
          und garantieren dir und deinen Gästen eine unvergessliche Zeit. Wir
          sind stolz darauf, unser Know-how und unsere Erfahrung einzusetzen, um
          dir ein Event zu bieten, das du nicht so schnell vergessen wirst. Lass
          uns gemeinsam das nächste Level erreichen!
        </p>
        <a href="/" className="font-medium text-white pt-5 block underline">
          Next Level Erlebnisse ist perfekt für:
        </a>
        <p>
          (Kinder-)Geburtstage, Junggesellenabschiede, Mädelsabende,
          Stammtischausflüge, Teambuildings, Firmenfeiern und vieles mehr.{" "}
          <br />
          Hier kommt garantiert jeder auf seine Kosten, denn es wird definitiv
          nicht langweilig.
        </p>
      </SecondaryHero>
      <UnforgetableEvents />
      <Footer />
    </main>
  );
};

export default Events;

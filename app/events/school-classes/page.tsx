import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import SecondaryHero from "@/app/components/SecondaryHero";

const SchoolClasses = () => {
  return (
    <main>
      <Navbar />
      <Hero className="sm:h-[681px] h-[545px] flex justify-center items-center w-screen transition duration-300 ease-in-out  hover:rounded-lg bg-[url('/schulklassen.webp')] bg-cover bg-center bg-no-repeat">
        <div className="sm:pt-64">
          <h1 className="text-center sm:text-[19px] text-[15px] leading-6 tracking-[5px] uppercase">
            Unsere Angebote für Schulklassen
          </h1>
          <h2 className="text-center sm:text-[71px] sm:px-0 px-5 text-[28px] font-medium uppercase tracking-[2.1px] sm:pt-10 pt-5 sm:leading-[80px] text-white">
            Ein toller Ausflug für <br />
            deine Schulklasse
          </h2>
          <p className="pt-[22px] text-[15px] leading-5 text-center sm:px-[160px] px-5">
            Suchst du nach dem perfekten Abenteuer für deine Schulklasse? Bei
            NextLevel Erlebnisse erwartet euch ein unvergesslicher Ausflug
            voller Spaß, Teamwork und aufregender Herausforderungen. Entdeckt
            Lasertag, meistert Mini-Games im Hologate und stärkt das Teamgefühl
            in eurer Klasse. Erfahrene Guides begleiten euch  und sorgen dafür,
            dass jeder eine großartige Zeit hat. Plant jetzt euren
            unvergesslichen Tag bei NextLevel Erlebnisse!
          </p>
        </div>
      </Hero>
      <SecondaryHero>
        <h1 className="text-xl font-medium leading-5">
          Raus aus dem Klassenzimmer
        </h1>
        <h2 className="uppercase sm:text-[40px] text-[30px] font-medium tracking-[2px] text-white sm:leading-[54px] pt-5">
          Hey liebe Lehrerinnen und Lehrer,
        </h2>
        <p className="pt-[22px] text-white text-base">
          plant ihr gerade einen spannenden Ausflug für eure Schulklasse? Wie
          wäre es mit einem unvergesslichen Abenteuer bei NextLevel Erlebnisse?
          Wir haben die perfekte Mischung aus Spaß, Teamwork und aufregenden
          Herausforderungen für euch!
        </p>
        <p className="pt-[29px] text-white text-base">
          Bei NextLevel Erlebnisse könnt ihr eure Schülerinnen und Schüler aus
          dem Klassenzimmer holen und in die Welt des Abenteuers eintauchen. Ob
          als Kennenlern- Ausflug, zum Teamgeist stärken oder als Abschluss
          eines tollen Schuljahres!
        </p>
        <p className="pt-[29px] text-white text-base">
          Unser Ziel ist es, nicht nur das Teamgefühl zu stärken, sondern auch
          den Zusammenhalt in der Klasse zu fördern. Durch unsere interaktiven
          Spiele und Herausforderungen lernen die Schülerinnen und Schüler, wie
          wichtig es ist, gemeinsam als Team zu arbeiten und sich aufeinander zu
          verlassen.
        </p>
        <p className="pt-[29px] text-white text-base">
          Und das Beste ist: Bei NextLevel Erlebnisse steht der Spaß immer an
          erster Stelle. Wir sorgen dafür, dass alle Teilnehmerinnen und
          Teilnehmer eine großartige Zeit haben und sich noch lange an diesen
          Ausflug erinnern werden.
        </p>
        <p className="pt-[29px] text-white text-base">
          Also, liebe Lehrerinnen und Lehrer, lasst uns gemeinsam einen
          unvergesslichen Tag bei NextLevel Erlebnisse planen! Kontaktiert uns
          noch heute und wir helfen euch dabei, den perfekten Ausflug für eure
          Schulklasse zu gestalten.
        </p>
      </SecondaryHero>
      <section className="sm:px-[150px] px-5 sm:pt-[70px] pt-[50px]">
        <h1 className="uppercase text-appviolet text-lg font-medium leading-5 tracking-[2.5px]">
          Lasertag
        </h1>
        <h2 className="sm:text-[40px] sm:px-0 px-5 text-[28px] font-medium uppercase tracking-[2px] pt-5 sm:leading-[54px] text-white">
          Lasertag Paket
        </h2>
        <p className="pt-5 leading-5 text-[15px] text-white">
          Ihr wollt ein Lasertag-Event veranstalten? Dann ist dieses Paket genau
          das, wonach du gesucht hast!
        </p>
        <p className="pt-[26px] leading-5 text-[15px] text-white">
          Je nachdem mit wie vielen Schüler*innen du zu uns kommt, empfehlen wir
          einen längeren Aufenthalt. Spezielles Angebot für Schulklassen  ab 12
          Personen. Nur gültig Montag bis Donnerstag von 8-20 Uhr und Freitag
          8-14 Uhr.
        </p>
        <div className="grid sm:grid-cols-5 grid-cols-1 sm:pt-[56px] sm:pb-[95px]">s</div>
      </section>
      <Footer />
    </main>
  );
};

export default SchoolClasses;

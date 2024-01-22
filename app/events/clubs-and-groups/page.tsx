import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import SecondaryHero from "@/app/components/SecondaryHero";

const ClubsAndGroups = () => {
  return (
    <main>
      <Navbar />
      <Hero className="sm:h-[681px] h-[545px] flex justify-center items-center w-screen transition duration-300 ease-in-out  hover:rounded-lg bg-[url('/vereine.webp')] bg-cover bg-center bg-no-repeat">
        <div className="sm:pt-64">
          <h1 className="text-center sm:text-[19px] text-[15px] leading-6 tracking-[5px] uppercase text-white">
            Spezial Paketpreise für Vereine
          </h1>
          <h2 className="text-center sm:text-[71px] sm:px-0 px-5 text-[28px] font-medium uppercase tracking-[2.1px] sm:pt-10 pt-5 sm:leading-[80px] text-white">
            Ausflug für Vereine
          </h2>
          <p className="pt-[22px] text-[15px] leading-5 text-center sm:px-[160px] px-5 text-white">
            Das ultimative Gruppenevent voller Action und virtueller Realität.
            Verstärkt den Teamgeist und erlebt unvergessliche Momente in unserer
            Lasertag- und HOLOGATE Arena. Ob unsere Gruppenevents oder
            individuelle Anfragen – wir helfen Euch das perfekte Event zu
            planen!
          </p>
        </div>
      </Hero>
      <SecondaryHero>
        <h1 className="text-xl font-medium leading-5 text-white">Stärke den Teamgeist</h1>
        <h2 className="uppercase sm:text-[40px] text-[30px] font-medium tracking-[2px] text-white sm:leading-[54px] pt-5">
          Actionreicher Ausflug für Vereine
        </h2>
        <p className="pt-[22px] text-white text-base">
          Hey, du leitest einen coolen Jugendfußballverein oder eine
          Jugendgruppe und suchst nach einem aufregenden Ausflugsziel? Dann
          schnapp deine Crew und komm zu uns in die NextLevel Area in Alsfeld!
          Hier gibt’s Action, Spaß und jede Menge Adrenalin, versprochen! Hier
          könnt ihr den ultimativen Action- Doppelschlag erleben und
          gleichzeitig euren Teamgeist stärken.
        </p>
        <p className="pt-[29px] text-white text-base">
          In der Lasertag Arena werdet ihr in eine adrenalingeladene Welt des
          Teamkampfes eintauchen. Lasertag ist das perfekte Spiel für alle, die
          gerne in Teams gegeneinander antreten und ihre strategischen
          Fähigkeiten unter Beweis stellen wollen. Bei uns findest du eine
          topmoderne Arena mit vielen spannenden Spielmodi, die genau auf eure
          Gruppe zugeschnitten sind. Egal, ob ihr eine entspannte Runde spielen
          wollt oder ein kompetitives Turnier veranstalten möchtet – bei uns
          seid ihr genau richtig. Mit unseren Lasern, die wie aus einer anderen
          Welt wirken, werdet ihr euch wie echte Actionhelden fühlen. Lasst
          euren inneren Krieger raus und erobert die Arena!
        </p>
        <p className="pt-[29px] text-white text-base">
          Aber damit nicht genug! Das Hologate-Erlebnis wird euch in eine
          virtuelle Realität entführen, in der ihr in spannenden VR-Minigames
          euer Geschick unter Beweis stellt. Ob ihr gegen außerirdische
          Kreaturen kämpft, eine Schneeballschlacht erlebt oder auf eine
          fantastische Reise durch surreale Welten geht – eure Vorstellungskraft
          wird übertroffen und der Spaß ist garantiert.
        </p>
        <p className="pt-[29px] text-white text-base">
          Also, worauf wartet ihr noch? Buche jetzt euren Ausflug zur NextLevel
          Area in Alsfeld und erlebt einen actiongeladenen Tag, den ihr so
          schnell nicht vergessen werdet. Zeigt, was ihr draufhabt und lasst uns
          gemeinsam den Spaß starten!
        </p>
      </SecondaryHero>
      <Footer />
    </main>
  );
};

export default ClubsAndGroups;

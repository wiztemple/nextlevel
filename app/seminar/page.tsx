import Footer from "@/app/components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard";
import PricingCardListItem from "../components/PricinCardListItem";
import SeminarContact from "../components/SeminarContact";

const Seminar = () => {
  return (
    <main>
      <Navbar />
      <Hero className="h-[605px] relative flex justify-center items-center w-screen transition duration-300 ease-in-out  hover:rounded-lg bg-[url('/seminar-vr.jpg')] bg-fixed bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-dark-1/70 flex justify-center items-center">
          <div>
            <h1 className="text-[22px] text-[#57BFC7] uppercase leading-8 tracking-[1px] text-center">
              BRINGE DEIN UNTERNEHMEN AUF DAS NÄCHSTE LEVEL
            </h1>
            <h2 className="text-white font-medium text-[72px] leading-[80px] text-center uppercase tracking-[2.1px] pt-5">
              VR-SEMINARE ZUM <br />
              METAVERSE & TEAMBUILDING
            </h2>
          </div>
        </div>
      </Hero>
      <section className="sm:px-[150px] px-5 sm:pt-[70px] bg-black">
        <h1 className="text-lg uppercase font-medium leading-5 tracking-[2.5px]">
          Erleben sie das Metaverse
        </h1>
        <h2 className="text-[40px] font-medium uppercase tracking-[1.8px] leading-[54px] text-white pt-5">
          Metaverse Erlebnis seminare
        </h2>
        <p className="pt-[22px] text-[15px] leading-5 text-white">
          Du willst herausfinden, ob die Metaverse (XR/VR/AR) Technologien
          für Dein Unternehmen relevant sind oder werden können? Dann entdecken
          und erlebe mit Deinem Team die Welt von VR/XR/AR in unseren
          Metaverse-Erlebnis-Seminaren mit Praxisbezug.
        </p>
        <p className="pt-[28px] text-[15px] leading-5 text-white">
          Alle Seminare und Workshops werden von erfahrenden Unternehmern 
          und/oder von wissenschaftlichen Mitarbeitern aus der
          Technologie-Branche geleitet. Als Highlight und exklusiv bei uns könnt
          ihr die Immersion am eigenen Körper spüren und so ein Gefühl für das
          Potential dieser Technologie entwicklen.
        </p>
        <p className="pt-[29px] text-[15px] leading-5 text-white">
          Wir freuen uns auf Deine Anfrage.
        </p>
        <div className="grid sm:grid-cols-3 grid-cols-1 p-2.5 mt-[57px] gap-5">
          <PricingCard
            header1="Metaverse"
            header2="Experience Day"
            price="199"
            numberOfPeople="für 4 - 24 Personen"
            bookLink=""
            subheading="Halbtägiges Erlebnis Seminar, um die Welt des Metaverse kennenzulernen und mögliche Geschäftsfelder zu indentifizieren"
          >
            <PricingCardListItem title="Theoretischer und praktischer Teil" />
            <PricingCardListItem title="Einführung in das Metaverse" />
            <PricingCardListItem title="Erkundung potentieller Geschäftsfelder" />
            <PricingCardListItem title="Inkl. Sandbox VR Erlebnis" />
            <PricingCardListItem title="Inkl. Snacks und Getränke" lastItem />
          </PricingCard>
          <PricingCard
            header1="Metaverse"
            header2="Discovery Day"
            price="279"
            bookLink="/"
            numberOfPeople="für 4 - 24 Personen"
            showRibbon
            subheading="Ganztägiges Erlebnis Seminar, um in verschiedene Dimensionen von XR/VR/AR einzutauchen und das Potenzial dieser Technolgien zu erkunden"
          >
            <PricingCardListItem title="Theoretischer und praktischer Teil" />
            <PricingCardListItem title="Umfassende Einführung in das Metaverse" />
            <PricingCardListItem
              title="Praktische Erfahrungen in verschiedenen
Dimensionen von XR/VR/AR"
            />
            <PricingCardListItem title="Erkundung potentieller Geschäftsfelder" />
            <PricingCardListItem title="Inkl. Sandbox VR Erlebnis" />
            <PricingCardListItem
              title="Inkl. Mittagspause, Snacks und Getränken"
              lastItem
            />
          </PricingCard>
          <PricingCard
            header1="Metaverse"
            header2="STRATEGY WORKSHOP"
            price="1.159"
            bookLink="/"
            numberOfPeople="für 2 - 8 Personen"
            subheading="Zweitägiger Workshop für ein umfassendes Verständnis des Metaverse und zur Erarbeitung und Identifikation einer maßgeschneiderten XR-Unternehmensstrategie"
          >
            <PricingCardListItem
              title="Vermittlung eines fundierten Verständnisses der
verschiedenen Dimensionen von XR/VR/AR"
            />
            <PricingCardListItem
              title="Praktische Erfahrungen durch die Nutzung
verschiedener VR/XR/AR Anwendungen."
            />
            <PricingCardListItem
              title="Entwicklung einer Unternehmensstrategie zum
Umgang mit der Entwicklung im Bereich XR,
Metaverse und Künstliche Intelligenz (KI)"
            />
            <PricingCardListItem title="Inkl. Sandbox VR und Hologate VR Erlebnis" />
            <PricingCardListItem title="Inkl. Mittagspausen, Snacks und Getränken" />
          </PricingCard>
        </div>
        <div className="sm:pt-[150px]">
          <h1 className="text-lg uppercase font-medium leading-5 tracking-[2.5px]">
            Potentiale für Ihr unterNehmen
          </h1>
          <h2 className="text-[40px] font-medium uppercase tracking-[1.8px] leading-[54px] text-white pt-5">
            VR-Teambuilding seminare
          </h2>
          <p className="pt-[22px] text-[15px] leading-5 text-white">
            Sie wollen herausfinden, ob die XR/VR/AR Technologien für Ihr
            Unternehmen relevant sein können? Dann entdecken und erleben Sie die
            Welt von XR/VR/AR mit unseren VR-Erlebnis-Seminaren mit Praxisbezug:
          </p>
          <div className="grid sm:grid-cols-3 grid-cols-1 p-2.5 pt-[57px] pb-[60px] gap-5">
          <PricingCard
            header1="VR-TeamEvent"
            price="79"
            numberOfPeople="für 4 - 36 Personen"
            bookLink=""
            heroSize
            subheading="2-stündiges VR-Teamevent mit immersiven VR-Team-Erlebnis, das Verbesserungspotentiale für die Zusammenarbeit und Kommunikation aufzeigt."
          >
            <PricingCardListItem title="Sandbox VR Team-Erlebnis" />
            <PricingCardListItem title="Gemeinsame Reflexion mit Identifizierung von Verbesserungspotenzialen" />
            <PricingCardListItem title="Inkl. Getränke" lastItem  />
          </PricingCard>
          <PricingCard
            header1="VR-Teambuilding"
            price="179"
            numberOfPeople="für 4 - 24 Personen"
            bookLink=""
            heroSize
            showRibbon
            subheading="Halbtägiges VR-Teambuilding Seminar für Teams, die ihre Zusammenarbeit, Kommunikation und Teamdynamik verbessern möchten."
          >
            <PricingCardListItem title="Theoretische Grundlagen effektiver Zusammenarbeit und Kommunikation" />
            <PricingCardListItem title="Zwei Sandbox VR Team-Erlebnisse mit Vorher/Nachher Vergleich" />
            <PricingCardListItem title="Gemeinsame Teamreflexion und Erkenntnisgewinn" />
            <PricingCardListItem title="Inkl. Mittagspause, Snacks und Getränken" lastItem  />
          </PricingCard>
          <PricingCard
            header1="VR-Teamtraining"
            price="399"
            numberOfPeople="für 4 - 12 Personen"
            bookLink=""
            heroSize
            subheading="Ganztägiges Highlevel VR-Teamtraining mit zertifizierten Trainern für Teams, die ihre Teamdynamik nachhaltig stärken möchten."
          >
            <PricingCardListItem title="Theoretische Grundlagen effektiver Zusammenarbeit und Kommunikation" />
            <PricingCardListItem title="Zwei Sandbox VR Team-Erlebnisse mit Vorher/Nachher Vergleich" />
            <PricingCardListItem title="Teamstärkende Aktivitäten zur Verbesserung der Zusammenarbeit" />
            <PricingCardListItem title="Gemeinsame Teamreflexion und Erkenntnisgewinn" />
            <PricingCardListItem title="Inkl. Mittagspause, Snacks und Getränken" lastItem  />
          </PricingCard>
        </div>
        </div>
      </section>
      <SeminarContact />
      <Footer />
    </main>
  );
};

export default Seminar;

import Footer from "@/app/components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard";
import SeminarContact from "../components/SeminarContact";
import PricingCardListItem from "../components/PricingCardListItem";

const Seminar = () => {
  return (
    <main className="over overflow-x-hidden">
      <Navbar />
      <Hero className="h-[605px] sm:px-0 px-5 relative flex justify-center items-center w-screen transition duration-300 ease-in-out bg-[url('/seminar-vr.jpg')] sm:bg-fixed bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-dark-1/70 flex justify-center items-center">
          <div>
            <h1 className="sm:text-[22px] text-[#57BFC7] uppercase sm:leading-8 tracking-[1px] text-center">
              BRINGE DEIN UNTERNEHMEN AUF DAS NÄCHSTE LEVEL
            </h1>
            <h2 className="text-white font-medium sm:text-[72px] text-[22px] sm:leading-[80px] text-center uppercase tracking-[2.1px] pt-5">
              VR-SEMINARE ZUM <br />
              METAVERSE & TEAMBUILDING
            </h2>
          </div>
        </div>
      </Hero>
      <section className="sm:px-[150px] px-5 sm:pt-[70px] pt-10 bg-black">
        <h1 className="text-lg uppercase font-medium sm:leading-5 tracking-[2.5px]">
          Erleben sie das Metaverse
        </h1>
        <h2 className="sm:text-[40px] text-[22px] font-medium uppercase tracking-[1.8px] sm:leading-[54px] text-white pt-5">
          Metaverse Erlebnis seminare
        </h2>
        <p className="pt-[22px] sm:text-[15px] text-sm leading-5 text-white">
          Du willst herausfinden, ob die Metaverse (XR/VR/AR) Technologien
          für Dein Unternehmen relevant sind oder werden können? Dann entdecken
          und erlebe mit Deinem Team die Welt von VR/XR/AR in unseren
          Metaverse-Erlebnis-Seminaren mit Praxisbezug.
        </p>
        <p className="pt-[28px] sm:text-[15px] text-sm leading-5 text-white">
          Alle Seminare und Workshops werden von erfahrenden Unternehmern 
          und/oder von wissenschaftlichen Mitarbeitern aus der
          Technologie-Branche geleitet. Als Highlight und exklusiv bei uns könnt
          ihr die Immersion am eigenen Körper spüren und so ein Gefühl für das
          Potential dieser Technologie entwicklen.
        </p>
        <p className="pt-[29px] text-[15px] leading-5 text-white">
          Wir freuen uns auf Deine Anfrage.
        </p>
        <div className="grid sm:grid-cols-3 grid-cols-1 sm:p-2.5 mt-[57px] gap-5">
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
        <div className="sm:pt-[150px] pt-20">
          <h1 className="text-lg uppercase font-medium leading-5 tracking-[2.5px]">
            Potentiale für Ihr unterNehmen
          </h1>
          <h2 className="sm:text-[40px] text-[22px] font-medium uppercase tracking-[1.8px] sm:leading-[54px] text-white pt-5">
            VR-Teambuilding seminare
          </h2>
          <p className="pt-[22px] sm:text-[15px] text-sm sm:leading-5 text-white">
            Sie wollen herausfinden, ob die XR/VR/AR Technologien für Ihr
            Unternehmen relevant sein können? Dann entdecken und erleben Sie die
            Welt von XR/VR/AR mit unseren VR-Erlebnis-Seminaren mit Praxisbezug:
          </p>
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:p-2.5 mt-[57px] pb-[60px] gap-5">
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
              <PricingCardListItem title="Inkl. Getränke" lastItem />
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
              <PricingCardListItem
                title="Inkl. Mittagspause, Snacks und Getränken"
                lastItem
              />
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
              <PricingCardListItem
                title="Inkl. Mittagspause, Snacks und Getränken"
                lastItem
              />
            </PricingCard>
          </div>
        </div>
      </section>
      <SeminarContact />
      <section className="sm:px-[150px] sm:pt-[60px] pt-12 px-5 sm:pb-[55px] pb-5 bg-black">
        <h2 className="uppercase text-white sm:text-[22px] text-lg text-center sm:leading-8 pt-5 pb-10 sm:pb-0 tracking-[1px]">
          ODER SCHREIBT, RUFT AN UND MAILT UNS DIREKT.
        </h2>
        <div className="grid grid-cols-2 sm:gap-0 gap-8 sm:pt-[25px]">
          <div className="flex justify-center">
            <div className="w-full">
              <div className="flex justify-center">
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48.6824 35.791C49.4637 36.1816 50.0496 37.0605 50.0496 38.0371C50.0496 38.1348 50.0496 38.3301 50.0496 38.5254L47.7059 48.6816C47.4129 49.7559 46.534 50.4395 45.4598 50.4395C20.3621 50.4395 0.147266 30.2246 0.147266 5.12695C0.147266 4.05273 0.83086 3.17383 1.90508 2.88086L12.0613 0.537109C12.2566 0.537109 12.452 0.439453 12.5496 0.439453C13.5262 0.439453 14.4051 1.02539 14.7957 1.9043L19.4832 12.8418C19.5809 13.1348 19.6785 13.4277 19.6785 13.7207C19.6785 14.502 19.2879 15.1855 18.7996 15.5762L12.8426 20.459C16.4559 28.0762 22.5105 34.1309 30.1277 37.7441L35.0105 31.7871C35.4012 31.2988 36.0848 30.9082 36.7684 30.9082C37.159 30.9082 37.452 31.0059 37.7449 31.1035L48.6824 35.791Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="block text-center sm:text-base text-sm text-white tracking-[5px] uppercase leading-5 pt-6">
                TELEFON
              </span>
              <span className="block text-center text-whit font-bold text-white text-sm leading-5 pt-[11px]">
              +41433119906
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full">
              <div className="flex justify-center">
                <svg
                  width="52"
                  height="54"
                  viewBox="0 0 52 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.0965 2.12305C47.4168 0.169922 51.616 3.00195 51.0301 6.9082L45.2684 44.7012C44.9754 46.166 44.1941 47.3379 42.9246 48.1191C42.1434 48.5098 41.3621 48.7051 40.5809 48.7051C39.9949 48.7051 39.409 48.6074 38.823 48.3145L27.8855 43.8223L23.5887 49.584C20.952 53.1973 15.1902 51.3418 15.1902 46.752V38.5488L3.95977 33.959C0.346485 32.4941 0.0535164 27.5137 3.47149 25.5605L44.0965 2.12305ZM19.8777 46.752L23.3934 41.9668L19.8777 40.502V46.752ZM40.5809 44.0176L46.4402 6.12695L5.81524 29.5645L16.2645 33.959L36.9676 15.9902C38.3348 14.7207 40.2879 16.4785 39.3113 18.041L25.5418 37.7676L40.5809 44.0176Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="block text-center sm:text-base text-sm tracking-[5px] text-white uppercase leading-5 pt-6">
                E-MAIL
              </span>
              <span className="block text-center text-white text-sm font-bold leading-5 pt-[11px] break-words">
              zurich@sandboxvr.com
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Seminar;

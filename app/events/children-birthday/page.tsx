/* eslint-disable @next/next/no-img-element */
import Accordion from "@/app/components/Accordion";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import PackageCard from "@/app/components/PackageCard";
import SecondaryHero from "@/app/components/SecondaryHero";
import Image from "next/image";
import Link from "next/link";

const ChildrenBirthday = () => {
  const faqs = [
    {
      title: "DIE ARENA NUR FÜR EUCH",
      text: "Kindergeburtstage in unseren Arenen und im Escaperoom finden immer privat statt – sprich ihr seid unter Euch, ohne fremde Spieler. Daher können Kindergeburtstage mit bis zu 18 Kindern gefeiert werden. Dabei gilt: umso mehr Kinder teilnehmen, umso länger sollte für den Aufenthalt eingeplant werden. Nach unserer Erfahrung sind 1,5 Stunden eine gute Aufenthaltsdauer und die Kids danach ordentlich ausgepowert und glücklich. Ab 12 Kindern sind 2 Stunden eine gute Wahl, da wir mit wechselnden Teams spielen.",
      active: false,
    },
    {
      title: "LIEBE ELTERN - SPIELT DOCH MIT!",
      text: "Während die Kinder Lasertag spielen können die Eltern im Wartebereich bei einem Getränke (Kalte Getränke und eine Nespresso-Maschine sind vor Ort) die Spiele  verfolgen – oder sie greifen als Überraschungs-Highlight in die Lasertag-Games ein. Ein “Kinder gegen Eltern Spiel” ist oft der heimliche Höhepunkt des Geburtstags – und macht garantiert auch den Eltern Spaß… 😉",
      active: false,
    },
    {
      title: "GETRÄNKE & SNACKS",
      text: "Wir haben kalte Getränke (3€), eine Nespresso-Maschine für Kaffee/Espresso (2€) sowie im Sommer eine Langnese Eistruhe (ab 1€). Zu den Erlebnissen selbst könnt ihr nichts zu Essen mitbringen – dafür haben wir einen coolen Partyraum in den ihr Kuchen/Snacks selbst mitbringen und verzehren könnt. Bitte beachtet, dass ihr die Nutzung des Partyraums separat hinzu buchen müsst. Der Preis liegt inkl. Getränken bei 50 Euro.",
      active: false,
    },
    {
      title: "EIN RUNDUM-PAKET",
      text: "Um das Kindergeburtstag-Erlebnis abzurunden, bekommt ihr nach der Buchung coole Einladungskarten zum Ausdrucken (Im Anhang der Buchungsbestätigung) und zum Abschluss und als Erinnerung nach dem Lasertag-Spiel bekommt jedes Kind eine Urkunde mit der besten Platzierung.",
      active: true,
    },
    {
      title: "FAIRPLAY IST UNS SEHR WICHTIG!",
      text: "Lasertag ist ein taktisches Spiel, bei dem jegliche Aggressivität verboten ist. Ziel ist es durch cleveres und taktisches Vorgehen das gegnerische Team öfter zu treffen als man selbst getroffen wird. Ganz ähnlich wie bei Völkerball – nur modern und komplett kontakt- und aggressionslos. In unserer Arena ist deshalb sowohl aggressives Verhalten als auch Gewalt-Sprache mit Begriffen wie „erschießen“, „töten“, etc. sowie Beleidigungen absolutes Tabu – sowohl in den Gruppen untereinander als auch in unserer Ansprache. Das Lasertag-System verfügt darüber hinaus über Sensoren, die aggressives Spielen gezielt verhindern, bzw. erst gar nicht ermöglichen.",
      active: false,
    },
    {
      title: "AUFSICHTSPFLICHT",
      text: "Unsere Erlebnisse sind geeignet für Kindergeburtstage ab 8 Jahren. Es muss auf jeden Fall zu jedem Zeitpunkt ein Elternteil anwesend sein – wir übernehmen explizit nicht die Aufsicht über die Kinder.",
      active: false,
    },
    {
      title: "EINLADUNGSKARTEN",
      text: "Um die Kinder zu Eurem NextLevel Geburtstag einzuladen, haben wir Einladungskarten gestaltet, die ihr zuhause selbst ausdrucken (und anpassen) könnt. Hier sind die Download-Links:",
      active: false,
    },
  ];
  return (
    <main className="break-words">
      <Navbar />
      <Hero className="sm:h-[760px] h-[582px] flex justify-center items-center w-screen transition duration-300 ease-in-out bg-[url('/kindergeburtstag.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="sm:pt-64 pt-32 sm:px-0 px-5">
          <h1 className="text-center sm:text-[19px] text-sm leading-6 tracking-[5px] uppercase text-white">
            SPASS UND ACTION GARANTIERT
          </h1>
          <h2 className="text-center sm:text-[71px] text-[28px] font-medium uppercase tracking-[2.1px] pt-10 sm:leading-[80px] leading-snug text-white">
            NEXTLEVEL KINDER-
            <br /> GEBURTSTAGE
          </h2>
          <p className="pt-[22px] text-[15px] leading-5 text-center sm:px-[160px] text-white">
            Ein Kindergeburtstag bei NextLevel Erlebnisse ist garantiert ein
            unvergessliches Abenteuer. Egal ob ihr Euch in der Lasertag Arena
            battelt, virtuelle Welten im Hologate erlebt oder im Escaperoom mal
            eben kurz die Welt rettet – unsere Erlebnisse sind das Highlight
            jedes Kindergeburtstags!
          </p>
        </div>
      </Hero>
      <SecondaryHero>
        <h1 className="sm:text-xl text-[15px] font-medium text-white pt-10 sm:pt-0">
          DU SUCHST NACH EINEM UNVERGESSLICHEN KINDERGEBURTSTAG?
        </h1>
        <h2 className="uppercase sm:text-[40px] text-3xl font-medium tracking-[2px] text-white sm:leading-[54px] leading-snug pt-5">
          DEIN KINDERGEBURTSTAG. <br />
          BEI UNS IN BESTEN HÄNDEN.
        </h2>
        <p className="pt-[22px] text-white text-base">
          Dann bist Du bei Next Level Erlebnisse in Alsfeld genau richtig! Wir
          bieten Dir und Deinen kleinen Gästen die ultimativen Abenteuer, die
          jedes Kinderherz höher schlagen lassen. Entdecke unsere vielfältigen
          Erlebnisangebote wie Lasertag, Escaperoom, Hologate und Lü, und lass
          den besonderen Tag zu einem unvergesslichen Erlebnis werden:
        </p>
      </SecondaryHero>
      {/* <section className="bg-black pt-5 sm:px-[150px] px-5">
        <div className="grid sm:grid-cols-2 gap-[30px]">
          <Link
            href="/"
            className="group overflow-hidden relative block h-[340px] rounded-[20px] mt-5"
          >
            <div className="overflow-hidden rounded-[20px]">
              <img
                className="object-cover h-[340px] rounded-[20px] rounded-tr-[10px] w-full group-hover:scale-[1.2] transition-all duration-1000 ease-in-out transform"
                src={`/altiers.webp`}
                alt="blog image"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/15 transition-all p-9">
                <div className="flex justify-center ">
                  <img
                    src="/Logo_Escape_Room_black.webp"
                    className="w-[141px] h-[49px]"
                    alt="client logo"
                  />
                </div>
                <h1 className="uppercase text-dark-4 text-center tracking-[2.5px] text-lg leading-5 font-medium pt-5">
                  Knifflige Rätsel und spannende Abenteuer
                </h1>
                <p className="pt-[17px] text-center text-dark-4 text-[15px] leading-5">
                  Für Rätsel- und Knobelfreunde haben wir unsere spannenden
                  Escaperooms im Angebot. Hier können die Kids gemeinsam
                  knifflige Aufgaben lösen und ihre Köpfchen anstrengen, um
                  rechtzeitig den Blutsplitter zu finden und damit die magische
                  Welt zu retten. Dabei sind Teamwork und Kreativität gefragt -
                  genau das Richtige für einen aufregenden Kindergeburtstag! Ein
                  aufregendes und lehrreiches Erlebnis für alle Altersgruppen!
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/"
            className="group overflow-hidden relative block h-[370px] rounded-[20px]"
          >
            <div className="overflow-hidden rounded-[20px]">
              <img
                className="object-cover h-[370px] rounded-[20px] rounded-tr-[10px] w-full group-hover:scale-[1.2] transition-all duration-1000 ease-in-out transform"
                src={`/bg-hd.webp`}
                alt="blog image"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/15 transition-all p-9">
                <div className="flex justify-center ">
                  <img
                    src="/lasertag.webp"
                    className="w-[141px] h-[79px]"
                    alt="client logo"
                  />
                </div>
                <h1 className="uppercase text-white tracking-[2.5px] text-center text-lg leading-5 font-medium pt-5">
                  Action Pur und jede Menge Spass
                </h1>
                <p className="pt-[17px] text-center text-white text-[15px] leading-5">
                  Unser Lasertag ist besonders beliebt. Die Kinder tauchen in
                  eine futuristische Welt ein, in der sie spielerisch ihre
                  Geschicklichkeit und Teamgeist unter Beweis stellen können.
                  Ausgestattet mit High-Tech-Westen und Lasern, ist es das Ziel,
                  die gegnerischen Teams zu besiegen und dabei jede Menge Spaß
                  zu haben. Die speziell gestaltete Arena mit Hindernissen und
                  Verstecken auf mehreren Ebenen macht das Spiel noch
                  aufregender. Es fördert Teamgeist und sorgt für eine Menge
                  Adrenalin!
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/"
            className="group overflow-hidden relative block h-[299px] rounded-[20px] mt-5"
          >
            <div className="overflow-hidden rounded-[20px]">
              <img
                className="object-cover h-[299px] rounded-[20px] rounded-tr-[10px] w-full group-hover:scale-[1.2] transition-all duration-1000 ease-in-out transform"
                src={`/hol-bg.webp`}
                alt="blog image"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/15 transition-all p-9">
                <div className="flex justify-center ">
                  <img
                    src="/hologate.webp"
                    className="w-[141px] h-[49px]"
                    alt="client logo"
                  />
                </div>
                <h1 className="uppercase text-white text-center tracking-[2.5px] text-lg leading-5 font-medium pt-5">
                  Eintauchen in VR Welten
                </h1>
                <p className="pt-[17px] text-center text-white text-[15px] leading-5">
                  Hologate, unsere Virtual-Reality-Attraktion, entführt die
                  Geburtstagsgäste in faszinierende Welten. Ob atemberaubende
                  Abenteuer oder lustige Minispiele, hier ist für jeden etwas
                  dabei. Die Kinder werden begeistert sein, wenn sie gemeinsam
                  in die virtuelle Realität eintauchen und dort spannende
                  Erlebnisse teilen.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section> */}
      {/* <section className="py-[65px] sm:px-[185px] px-5 bg-black">
        <div className="grid sm:grid-cols-2 grid-cols-1">
          <div>
            <Image
              src="/nextLevel_partyr.jpg"
              alt="Next Level Party"
              width={500}
              height={500}
            />
          </div>
          <div>
            <h1 className="leading-8 sm:text-[22px] text-xl text-white tracking-[1px] uppercase sm:pt-14 pt-10">
              Feiern ohne stress
            </h1>
            <h2 className="uppercase sm:text-[40px] text-[24px] font-medium leading-[54px] psm:t-[28.5px] pt-3 tracking-[2px] text-white">
              NEXTLEVEL PARTYRAUM
            </h2>
            <p className="text-white sm:pt-[27px] pt-3 text-[15px] leading-5">
              Zusätzlich bieten wir Dir bei Next Level Erlebnisse in Alsfeld
              einen liebevoll gestalteten Partyraum, in dem Du gemeinsam mit den
              Kindern feiern kannst. Getränke sind dabei selbstverständlich
              inklusive. So kannst Du entspannt den Geburtstag genießen, während
              wir uns um alles andere kümmern. Für  Unterhaltung ist bestens
              gesorgt: Im Partyraum findet ihr ein Whiteboard mit Stiften, eine
              Nintendo Switch mit 8 Controllern und coolen Spielen sowie weitere
              coole Geburtstagsangebote.
            </p>
            <p className="text-white pt-[29px] text-[15px] leading-5">
              Bei Next Level Erlebnisse ist Dein Kindergeburtstag in besten
              Händen. Unser abwechslungsreiches Programm sorgt dafür, dass
              Langeweile gar nicht erst aufkommt und die Kids den Tag noch lange
              in Erinnerung behalten werden. Erlebe das Nonplusultra der
              Kindergeburtstage und buche noch heute bei Next Level Erlebnisse
              in Alsfeld!
            </p>
          </div>
        </div>
      </section> */}
      <section className="sm:h-[440px] bg-mesh-gradient bg-cover bg-no-repeat bg-fixed sm:px-[150px] px-5 py-[50px]">
        <h1 className="text-white leading-8 tracking-[1px] uppercase sm:text-xl text-lg">
          STEP BY STEP
        </h1>
        <h2 className="uppercase pt-5 tracking-[2px] leading-[54px] sm:text-[41px] text-2xl font-medium text-white">
          Wie buche ich?
        </h2>
        <div className="grid sm:grid-cols-4 grid-cols-1 sm:pt-[35px] sm:gap-8 sm:gap-y-0 gap-y-6">
          <div>
            <span className="flex justify-center w-full">
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9578 1.99414C15.6609 0.587891 17.6531 0.646484 18.2977 1.99414L22.1648 9.78711L30.7195 11.0176C32.243 11.252 32.8289 13.127 31.7156 14.2402L25.5633 20.2754L27.0281 28.7715C27.2625 30.2949 25.6219 31.4668 24.2742 30.7637L16.657 26.7207L8.98125 30.7637C7.63359 31.4668 5.99297 30.2949 6.22734 28.7715L7.69219 20.2754L1.53984 14.2402C0.426563 13.127 1.0125 11.252 2.53594 11.0176L11.1492 9.78711L14.9578 1.99414Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="block pt-5 tracking-[2.5px] uppercase font-medium text-lg leading-5 text-center text-white">
              Paket auswählen
            </span>
            <p className="text-[15px] leading-5 text-white pt-[15px] text-center">
              Was genau wollt ihr an dem Kindergeburtstag erleben? Dafür haben
              wir verschiedene Pakete für Euch – ob ein Erlebnis einzeln oder in
              Kombinationen, bis All-Inklusive.
            </p>
          </div>
          <div>
            <span className="flex justify-center w-full">
              <svg
                width="24"
                height="31"
                viewBox="0 0 24 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.44844 5.1582C7.44844 2.87305 9.32344 0.939453 11.6672 0.939453C13.9523 0.939453 15.8859 2.87305 15.8859 5.1582C15.8859 7.50195 13.9523 9.37695 11.6672 9.37695C9.32344 9.37695 7.44844 7.50195 7.44844 5.1582ZM22.3313 5.27539C23.093 5.97852 23.093 7.20898 22.3313 7.91211L16.8234 13.4785V29.0645C16.8234 30.1191 15.9445 30.9395 14.9484 30.9395H14.0109C12.9563 30.9395 12.1359 30.1191 12.1359 29.0645V22.502H11.1984V29.0645C11.1984 30.1191 10.3195 30.9395 9.32344 30.9395H8.38594C7.33125 30.9395 6.51094 30.1191 6.51094 29.0645V13.4785L0.944531 7.91211C0.182813 7.20898 0.182813 5.97852 0.944531 5.27539C1.64766 4.51367 2.87813 4.51367 3.58125 5.27539L8.67891 10.3145H14.5969L19.6945 5.27539C20.3977 4.51367 21.6281 4.51367 22.3313 5.27539Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="block pt-5 tracking-[2.5px] uppercase font-medium text-lg leading-5 text-center text-white">
              Eckdaten
            </span>
            <p className="text-[15px] leading-5 text-white pt-[15px] text-center">
              Was genau wollt ihr an dem Kindergeburtstag erleben? Dafür haben
              wir verschiedene Pakete für Euch – ob ein Erlebnis einzeln oder in
              Kombinationen, bis All-Inklusive.
            </p>
          </div>
          <div>
            <span className="flex justify-center w-full">
              <svg
                width="27"
                height="31"
                viewBox="0 0 27 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.23164 17.8145H6.88789C6.47773 17.8145 6.18477 17.5215 6.18477 17.1113V14.7676C6.18477 14.416 6.47773 14.0645 6.88789 14.0645H9.23164C9.5832 14.0645 9.93477 14.416 9.93477 14.7676V17.1113C9.93477 17.5215 9.5832 17.8145 9.23164 17.8145ZM15.5598 17.1113C15.5598 17.5215 15.2082 17.8145 14.8566 17.8145H12.5129C12.1027 17.8145 11.8098 17.5215 11.8098 17.1113V14.7676C11.8098 14.416 12.1027 14.0645 12.5129 14.0645H14.8566C15.2082 14.0645 15.5598 14.416 15.5598 14.7676V17.1113ZM21.1848 17.1113C21.1848 17.5215 20.8332 17.8145 20.4816 17.8145H18.1379C17.7277 17.8145 17.4348 17.5215 17.4348 17.1113V14.7676C17.4348 14.416 17.7277 14.0645 18.1379 14.0645H20.4816C20.8332 14.0645 21.1848 14.416 21.1848 14.7676V17.1113ZM15.5598 22.7363C15.5598 23.1465 15.2082 23.4395 14.8566 23.4395H12.5129C12.1027 23.4395 11.8098 23.1465 11.8098 22.7363V20.3926C11.8098 20.041 12.1027 19.6895 12.5129 19.6895H14.8566C15.2082 19.6895 15.5598 20.041 15.5598 20.3926V22.7363ZM9.93477 22.7363C9.93477 23.1465 9.5832 23.4395 9.23164 23.4395H6.88789C6.47773 23.4395 6.18477 23.1465 6.18477 22.7363V20.3926C6.18477 20.041 6.47773 19.6895 6.88789 19.6895H9.23164C9.5832 19.6895 9.93477 20.041 9.93477 20.3926V22.7363ZM21.1848 22.7363C21.1848 23.1465 20.8332 23.4395 20.4816 23.4395H18.1379C17.7277 23.4395 17.4348 23.1465 17.4348 22.7363V20.3926C17.4348 20.041 17.7277 19.6895 18.1379 19.6895H20.4816C20.8332 19.6895 21.1848 20.041 21.1848 20.3926V22.7363ZM26.8098 7.50195V28.127C26.8098 29.709 25.5207 30.9395 23.9973 30.9395H3.37227C1.79023 30.9395 0.559766 29.709 0.559766 28.127V7.50195C0.559766 5.97852 1.79023 4.68945 3.37227 4.68945H6.18477V1.64258C6.18477 1.29102 6.47773 0.939453 6.88789 0.939453H9.23164C9.5832 0.939453 9.93477 1.29102 9.93477 1.64258V4.68945H17.4348V1.64258C17.4348 1.29102 17.7277 0.939453 18.1379 0.939453H20.4816C20.8332 0.939453 21.1848 1.29102 21.1848 1.64258V4.68945H23.9973C25.5207 4.68945 26.8098 5.97852 26.8098 7.50195ZM23.9973 27.7754V10.3145H3.37227V27.7754C3.37227 28.0098 3.48945 28.127 3.72383 28.127H23.6457C23.8215 28.127 23.9973 28.0098 23.9973 27.7754Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="block pt-5 tracking-[2.5px] uppercase font-medium text-lg leading-5 text-center text-white">
              Buchung
            </span>
            <p className="text-[15px] leading-5 text-white pt-[15px] text-center">
              In unserem Buchungs-System könnt ihr direkt den Kalender sehen mit
              allen verfügbaren Terminen. Bucht einfach ganz bequem online. 😊
            </p>
          </div>
          <div>
            <span className="flex justify-center w-full">
              <svg
                width="31"
                height="32"
                viewBox="0 0 31 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.4719 1.34961C28.4641 0.177734 30.9836 1.87695 30.632 4.2207L27.175 26.8965C26.9992 27.7754 26.5305 28.4785 25.7688 28.9473C25.3 29.1816 24.8313 29.2988 24.3625 29.2988C24.0109 29.2988 23.6594 29.2402 23.3078 29.0645L16.7453 26.3691L14.1672 29.8262C12.5852 31.9941 9.12813 30.8809 9.12813 28.127V23.2051L2.38984 20.4512C0.221875 19.5723 0.0460939 16.584 2.09688 15.4121L26.4719 1.34961ZM11.9406 28.127L14.05 25.2559L11.9406 24.377V28.127ZM24.3625 26.4863L27.8781 3.75195L3.50313 17.8145L9.77266 20.4512L22.1945 9.66992C23.0148 8.9082 24.1867 9.96289 23.6008 10.9004L15.3391 22.7363L24.3625 26.4863Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="block pt-5 tracking-[2.5px] uppercase font-medium text-lg leading-5 text-center text-white">
              Einladungen
            </span>
            <p className="text-[15px] leading-5 text-white pt-[15px] text-center">
              Passende Einladungskarten zum Ausdrucken findest Du weiter unten
              sowie als Download-Link in der Bestätigungsmail.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black sm:px-[150px] px-5 sm:pt-[70px] pt-14 sm:pb-[70px] pb-14">
        {/* <h1 className="leading-8 text-[22px] uppercase text-white tracking-[1px]">
          DIE PAKETE
        </h1>
        <h2 className="uppercase pt-5 tracking-[2px] leading-[54px] sm:text-[41px] text-2xl font-medium text-white">
          HIER KÖNNT IHR BUCHEN
        </h2> */}
        {/* <div className="grid sm:grid-cols-3 grid-cols-1 sm:pt-20 pt-12 sm:p-10 gap-10">
          <PackageCard
            imgUrl="lasertag--kindergeburtstag-172ee.jpg"
            title="Lasertag | Kindergeburtstag"
            description="Mit einem Kindergeburtstag bei uns in der Lasertag Arena, wir der Tag auf jeden Fall unvergesslich! Ein Kindergeburtstag ist bei uns immer ganz exklusiv."
            location="Alsfeld"
            price="99,00 €"
          />
          <PackageCard
            imgUrl="escaperoom--kindergeburtstag-11b46.jpg"
            title="Escaperoom | Kindergeburtstag"
            description="Feiert doch den Kindergeburtstag bei uns im
Escaperoom! Ein tolles Abenteuer, das Du und
Deine Gäste garantiert nicht so schnell
vergessen werden."
            location="Alsfeld"
            price="99,00 €"
          />
          <PackageCard
            imgUrl="kindergeburtstag--spezial-1ad9b.jpg"
            title="KINDERGEBURTSTAG | Spezial"
            description="Der Kindergeburtstag Spezial beinhaltet eine
Stunde Lasertag und eine Stunde Hologate.
Gespielt werden die beiden Erlebnisse direkt
hintereinander. Der komplette Aufenthalt bei"
            location="Alsfeld"
            price="50,00 €"
          />
          <PackageCard
            imgUrl="l-interaktives-spielfeld-kindergeburtstag-1861e.jpg"
            title="Lasertag | Kindergeburtstag"
            description="Mit einem Kindergeburtstag bei uns in der Lasertag Arena, wir der Tag auf jeden Fall unvergesslich! Ein Kindergeburtstag ist bei uns immer ganz exklusiv."
            location="Alsfeld"
            price="99,00 €"
          />
          <PackageCard
            imgUrl="escaperoom--kindergeburtstag-11b46.jpg"
            title="Escaperoom | Kindergeburtstag"
            description="Feiert doch den Kindergeburtstag bei uns im
Escaperoom! Ein tolles Abenteuer, das Du und
Deine Gäste garantiert nicht so schnell
vergessen werden."
            location="Alsfeld"
            price="99,00 €"
          />
          <PackageCard
            imgUrl="kindergeburtstag--spezial-1ad9b.jpg"
            title="KINDERGEBURTSTAG | Spezial"
            description="Der Kindergeburtstag Spezial beinhaltet eine
Stunde Lasertag und eine Stunde Hologate.
Gespielt werden die beiden Erlebnisse direkt
hintereinander. Der komplette Aufenthalt bei"
            location="Alsfeld"
            price="50,00 €"
          />
        </div> */}
        <p className="text-white text-[15px] sm:pt-[22px] pt-14 leading-5">
          Wir haben nicht nur Lasertag als Kindergeburtstags-Paket, sondern auch
          den Escaperoom, Hologate und Lü. Und wer den Kindergeburtstag auf das
          nächste Level heben will, der bucht unser{" "}
          <strong>Spezialpaket!</strong> Hier wartet eine Stunde Lasertag und
          eine Stunde Hologate. Ganz NEU ist unser{" "}
          <strong>Next Level Partyraum</strong> mit Nintendo Switch Konsole,
          Whiteboard, Tischen und Stühle und einer Miniküche. Der Clou: Die
          Getränke sind im Preis inklusive. Wer einen ganzen Tag bei uns
          verbringen, für den ist unser <strong>All-Inclusive Paket</strong> das
          richtige. Zwei Erlebnisse, der Partyraum inklusive Getränken zum
          attraktiven Kombipreis.
        </p>
      </section>
      <section className="bg-mesh-gradient bg-center pt-[70px] pb-20 sm:bg-fixed bg-no-repeat bg-cover sm:px-[150px] px-5">
        <h1 className="leading-8 text-[22px] tracking-[1px] uppercase text-white">
          Wichtiges für eure Planung
        </h1>
        <h2 className="py-5 text-[41px] leading-[54px] tracking-[2px] uppercase text-white font-medium">
          Infos & Hinweise
        </h2>
        <div className="divide-y divide-slate-200">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              title={faq.title}
              id={`faqs-${index}`}
              active={faq.active}
            >
              {faq.text}
            </Accordion>
          ))}
        </div>
      </section>
      <section className="sm:px-[150px] px-5 sm:pt-[70px] pt-[50px] pb-[55px] bg-black">
        <h2 className="uppercase text-white sm:text-[40px] text-3xl sm:leading-[72px] leading-snug font-bold pt-5 tracking-[10px]">
          Ihr braucht dabei Hilfe?
        </h2>
        <p className="pt-5 text-[15px] left-5 text-white">
          Natürlich könnt ihr uns auch sehr gerne kontaktieren, falls noch
          Fragen offen sind oder ihr bei der Planung noch Hilfe braucht.
        </p>
        <div className="sm:grid grid-cols-3 hidden pt-20">
          <p className="uppercase leading-6 tracking-[2px] font-medium text-center pt-6 text-white">
            Schreib uns, ruf uns an <br /> oder schick eine Mail. <br /> ✌
          </p>
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
              <span className="block text-center tracking-[5px] uppercase leading-5 pt-6 text-white">
                TELEFON
              </span>
              <span className="block text-center text-sm leading-5 pt-[11px] text-white">
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
              <span className="block text-center tracking-[5px] uppercase leading-5 pt-6 text-white">
                E-MAIL
              </span>
              <span className="block text-center text-white text-sm leading-5 pt-[11px]">
              zurich@sandboxvr.com
              </span>
            </div>
          </div>
        </div>
        <div className="sm:hidden block">
          <p className="uppercase leading-6 sm:text-base text-xl tracking-[2px] font-medium text-center pt-16 text-white">
            Schreib uns, ruf uns an <br /> oder schick eine Mail. ✌
          </p>
          <div className="grid grid-cols-2 sm:pt-8 pt-10 items-center gap-5">
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
                <span className="block text-center uppercase leading-5 pt-6 text-white">
                  TELEFON
                </span>
                <span className="block text-center text-sm leading-5 pt-[11px] text-white">
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
                <span className="block text-center uppercase leading-5 pt-6 text-white">
                  E-MAIL
                </span>
                <span className="block text-center text-white text-sm leading-5 pt-[11px]">
                zurich@sandboxvr.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ChildrenBirthday;

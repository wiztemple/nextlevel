/* eslint-disable @next/next/no-img-element */
"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import LasertagCard from "@/app/components/LasertagCard";
import Navbar from "@/app/components/Navbar";
import SecondaryHero from "@/app/components/SecondaryHero";
import Slider from "react-slick";
import SchoolAccordion from "@/app/components/SchoolAccordion";
import Image from "next/image";
import CorporateContact from "@/app/components/CorporateContact";

const ClubsAndGroups = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <main>
      <Navbar />
      <Hero className="sm:h-[681px] h-[545px] flex justify-center items-center w-screen transition duration-300 ease-in-out bg-[url('/vereine.webp')] bg-cover bg-center bg-no-repeat">
        <div className="sm:pt-64 pt-40">
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
        <h1 className="text-xl font-medium leading-5 text-white">
          Stärke den Teamgeist
        </h1>
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
      <section className="sm:px-[150px] px-5 sm:pt-[70px] pt-[50px] bg-black">
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
        <div className="sm:grid sm:grid-cols-5 hidden gap-10 grid-cols-1 sm:px-[30px] sm:pt-[56px] sm:pb-[95px]">
          <LasertagCard
            className="bg-appviolet/90 rounded-tl-[20px] rounded-tr-[20px]"
            header="Lasertag"
            subHeader="(bis max. 16 Personen)"
            price="150"
            oldPrice="320"
            numberOfStudents="1"
            hoverClass="hover:bg-appviolet hover:border-appviolet"
          />
          <LasertagCard
            className="bg-appviolet/90 rounded-tl-[20px] rounded-tr-[20px]"
            header="Lasertag"
            subHeader="(bis max. 20 Personen)"
            price="200"
            oldPrice="400"
            numberOfStudents="1,5"
            hoverClass="hover:bg-appviolet hover:border-appviolet"
          />
          <LasertagCard
            className="bg-appviolet/90 rounded-tl-[20px] rounded-tr-[20px]"
            header="Lasertag"
            subHeader="(bis max. 24 Personen)"
            price="250"
            oldPrice="480"
            numberOfStudents="3"
            hoverClass="hover:bg-appviolet hover:border-appviolet"
          />
          <LasertagCard
            className="bg-appviolet/90 rounded-tl-[20px] rounded-tr-[20px]"
            header="Lasertag"
            subHeader="(bis max. 40 Personen)"
            price="350"
            oldPrice="800"
            numberOfStudents="3"
            hoverClass="hover:bg-appviolet hover:border-appviolet"
          />
          <LasertagCard
            className="bg-appviolet/90 rounded-tl-[20px] rounded-tr-[20px]"
            header="Lasertag"
            subHeader="(bis max. 60 Personen)"
            price="450"
            oldPrice="1200"
            numberOfStudents="4"
            hoverClass="hover:bg-appviolet hover:border-appviolet"
          />
        </div>
        <div className="bg-black py-20 px-8 sm:hidden block">
          <Slider {...settings}>
            <LasertagCard
              className="bg-appviolet/90 rounded-tl-[20px] rounded-tr-[20px]"
              header="Lasertag"
              subHeader="(bis max. 16 Personen)"
              price="150"
              oldPrice="320"
              numberOfStudents="1"
              hoverClass="hover:bg-appviolet hover:border-appviolet"
            />
            <LasertagCard
              className="bg-appviolet/90 rounded-tl-[20px] rounded-tr-[20px]"
              header="Lasertag"
              subHeader="(bis max. 20 Personen)"
              price="200"
              oldPrice="400"
              numberOfStudents="1,5"
              hoverClass="hover:bg-appviolet hover:border-appviolet"
            />
            <LasertagCard
              className="bg-appviolet/90 rounded-tl-[20px] rounded-tr-[20px]"
              header="Lasertag"
              subHeader="(bis max. 24 Personen)"
              price="250"
              oldPrice="480"
              numberOfStudents="3"
              hoverClass="hover:bg-appviolet hover:border-appviolet"
            />
            <LasertagCard
              className="bg-appviolet/90 rounded-tl-[20px] rounded-tr-[20px]"
              header="Lasertag"
              subHeader="(bis max. 40 Personen)"
              price="350"
              oldPrice="800"
              numberOfStudents="3"
              hoverClass="hover:bg-appviolet hover:border-appviolet"
            />
            <LasertagCard
              className="bg-appviolet/90 rounded-tl-[20px] rounded-tr-[20px]"
              header="Lasertag"
              subHeader="(bis max. 60 Personen)"
              price="450"
              oldPrice="1200"
              numberOfStudents="4"
              hoverClass="hover:bg-appviolet hover:border-appviolet"
            />
          </Slider>
        </div>
      </section>
      <section className="sm:px-[150px] px-5 sm:pt-[70px] pt-[50px] bg-black">
        <h1 className="uppercase text-[#6EC1E4] text-lg font-medium leading-5 tracking-[2.5px]">
          Lasertag + HOLOGATE
        </h1>
        <h2 className="sm:text-[40px] sm:px-0 px-5 text-[28px] font-medium uppercase tracking-[2px] pt-5 sm:leading-[54px] text-white">
          Lasertag + VR Paket
        </h2>
        <p className="pt-5 leading-5 text-[15px] text-white">
          Ihr wollt das volle Programm bei uns und das noch zum besten Preis?
          Dann ist das Paket genau das, wonach du gesucht hast!
        </p>
        <p className="pt-[26px] leading-5 text-[15px] text-white">
          Je nachdem mit wie viele Schüler*innen ihr zu uns kommt, empfehlen wir
          einen längeren Aufenthalt. Spezielles Angebot für Schulklassen und
          Vereine ab 12 Personen. Nur gültig Montag bis Donnerstag von 8-20 Uhr
          und Freitag 8-14 Uhr.
        </p>
        <div className="sm:grid sm:grid-cols-5 hidden gap-10 grid-cols-1 sm:px-[30px] sm:pt-[56px] sm:pb-[95px]">
          <LasertagCard
            className="bg-aquagreen/50 rounded-tl-[20px] rounded-tr-[20px]"
            header="Lasertag +
            Hologate"
            subHeader="(bis max. 16 Personen)"
            price="250"
            extraItem="VR-Minispiele im HOLOGATE"
            oldPrice="420"
            numberOfStudents="1"
            hoverClass="hover:bg-aquagreen hover:border-aquagreen"
          />
          <LasertagCard
            className="bg-aquagreen/50 rounded-tl-[20px] rounded-tr-[20px]"
            header="Lasertag +
            Hologate"
            subHeader="(bis max. 20 Personen)"
            price="325"
            extraItem="VR-Minispiele im HOLOGATE"
            oldPrice="550"
            numberOfStudents="1,5"
            hoverClass="hover:bg-aquagreen hover:border-aquagreen"
          />
          <LasertagCard
            className="bg-aquagreen/50 rounded-tl-[20px] rounded-tr-[20px]"
            header="Lasertag +
            Hologate"
            subHeader="(bis max. 24 Personen)"
            price="400"
            extraItem="VR-Minispiele im HOLOGATE"
            oldPrice="680"
            numberOfStudents="2"
            hoverClass="hover:bg-aquagreen hover:border-aquagreen"
          />
          <LasertagCard
            className="bg-aquagreen/50 rounded-tl-[20px] rounded-tr-[20px]"
            header="Lasertag +
            Hologate"
            subHeader="(bis max. 40 Personen)"
            price="550"
            extraItem="VR-Minispiele im HOLOGATE"
            oldPrice="1000"
            numberOfStudents="3"
            hoverClass="hover:bg-aquagreen hover:border-aquagreen"
          />
          <LasertagCard
            className="bg-aquagreen/50 rounded-tl-[20px] rounded-tr-[20px]"
            header="Lasertag +
            Hologate"
            subHeader="(bis max. 60 Personen)"
            price="700"
            extraItem="VR-Minispiele im HOLOGATE"
            oldPrice="1500"
            numberOfStudents="4"
            hoverClass="hover:bg-aquagreen hover:border-aquagreen"
          />
        </div>
        <div className="bg-black py-20 px-8 sm:hidden block">
          <Slider {...settings}>
            <LasertagCard
              className="bg-aquagreen/50 rounded-tl-[20px] rounded-tr-[20px]"
              header="Lasertag +
            Hologate"
              subHeader="(bis max. 16 Personen)"
              price="250"
              extraItem="VR-Minispiele im HOLOGATE"
              oldPrice="420"
              numberOfStudents="1"
              hoverClass="hover:bg-aquagreen hover:border-aquagreen"
            />
            <LasertagCard
              className="bg-aquagreen/50 rounded-tl-[20px] rounded-tr-[20px]"
              header="Lasertag +
            Hologate"
              subHeader="(bis max. 20 Personen)"
              price="325"
              extraItem="VR-Minispiele im HOLOGATE"
              oldPrice="550"
              numberOfStudents="1,5"
              hoverClass="hover:bg-aquagreen hover:border-aquagreen"
            />
            <LasertagCard
              className="bg-aquagreen/50 rounded-tl-[20px] rounded-tr-[20px]"
              header="Lasertag +
            Hologate"
              subHeader="(bis max. 24 Personen)"
              price="400"
              extraItem="VR-Minispiele im HOLOGATE"
              oldPrice="680"
              numberOfStudents="2"
              hoverClass="hover:bg-aquagreen hover:border-aquagreen"
            />
            <LasertagCard
              className="bg-aquagreen/50 rounded-tl-[20px] rounded-tr-[20px]"
              header="Lasertag +
            Hologate"
              subHeader="(bis max. 40 Personen)"
              price="550"
              extraItem="VR-Minispiele im HOLOGATE"
              oldPrice="1000"
              numberOfStudents="3"
              hoverClass="hover:bg-aquagreen hover:border-aquagreen"
            />
            <LasertagCard
              className="bg-aquagreen/50 rounded-tl-[20px] rounded-tr-[20px]"
              header="Lasertag +
            Hologate"
              subHeader="(bis max. 60 Personen)"
              price="700"
              extraItem="VR-Minispiele im HOLOGATE"
              oldPrice="1500"
              numberOfStudents="4"
              hoverClass="hover:bg-aquagreen hover:border-aquagreen"
            />
          </Slider>
        </div>
        <p className="text-white sm:pb-14 pb-10 sm:px-8">
          Spezielles Angebot für Schulklassen und Vereine ab 12 Personen. Nur
          gültig Montag bis Donnerstag von 8-20 Uhr und Freitag 8-14 Uhr.
        </p>
      </section>
      <SchoolAccordion />
      <section className="bg-black w-full">
        <div className="grid sm:grid-cols-6 grid-cols-1">
          <img
            className="object-cover h-[288px] w-full sm:block hidden"
            src="/hologate_event.jpg"
            alt="Hologate event"
          />
          <img
            className="object-cover h-[288px] w-full sm:block hidden"
            src="/lue-image.jpg"
            alt="Lue event"
          />
          <img
            className="object-cover h-[288px] w-full sm:block hidden"
            src="/toys2.png"
            alt="VR Event"
          />
          <img
            className="object-cover h-[288px] w-full sm:block hidden"
            src="/vr-event2.jpg"
            alt="VR Event 2"
          />
          <img
            className="object-cover h-[288px] w-full"
            src="/vr-book.jpg"
            alt="VR Book"
          />
          <img
            className="object-cover h-[288px] w-full"
            src="/toys.jpeg"
            alt="VR Book"
          />
        </div>
      </section>
      <section className="bg-black sm:px-[150px] px-5 py-[70px]">
        <h1 className="uppercase text-lg tracking-[2.5px] font-medium text-white leading-[54px]">
          Unsere ERlebnisse
        </h1>
        <h2 className="uppercase sm:text-[39px] text-3xl tracking-[2px] font-medium text-white leading-[54px]">
          Wir haben da noch mehr! 😎
        </h2>
        <p className="pt-5 text-white leading-5 text-[15px]">
          Du denkst darüber nach, deinen Ausflug auf ein neues Level zu heben?
          Dann haben wir gute Nachrichten für dich! Neben der aufregenden
          Lasertag Arena und dem faszinierenden Hologate-Erlebnis bieten wir
          noch weitere NextLevel Erlebnisse, die deinen Ausflug unvergesslich
          machen. Wie wäre es zum Beispiel mit einem Abstecher in unseren Escape
          Room? Tauche ein in eine mysteriöse Welt voller Rätsel und
          Geheimnisse, die es zu lösen gilt. Hier könnt ihr eure
          Detektivfähigkeiten unter Beweis stellen und als Team knifflige
          Herausforderungen meistern. Oder wie wäre es mit einer Reise in die
          virtuelle Realität von Sandbox VR? Hier könnt ihr in immersive Welten
          eintauchen und als Team epische Abenteuer erleben. Bei uns findet ihr
          europaweit die einzige Sandbox VR Location – damit wird euer Ausflug
          zu einem wahrhaft atemberaubenden Erlebnis.
        </p>
        <p className="pt-5 text-white leading-5 text-[15px]">
          Um mehr über unsere weiteren NextLevel Erlebnisse zu erfahren, klicke
          einfach auf unser Logo und entdecke alle Informationen, die du
          brauchst. Von Preisen über Verfügbarkeiten bis hin zu detaillierten
          Beschreibungen der einzelnen Angebote – wir haben alles für dich
          zusammengestellt, um deinen Ausflug zu einem unvergesslichen Highlight
          zu machen. Also nutze die Chance, deinen Ausflug zu upgraden und mit
          unseren zusätzlichen NextLevel Erlebnissen für noch mehr Spannung und
          Unterhaltung zu sorgen.
        </p>
        <p className="pt-5 text-white leading-5 text-[15px] font-bold">
          Klicke auf ein Logo und lasse dich von all den aufregenden
          Möglichkeiten inspirieren. Das Abenteuer wartet auf dich:
        </p>
        <div className="grid sm:grid-cols-4 grid-cols-2 sm:pt-[60px] pt-[45px] gap-8 sm:gap-0">
          <div className="flex justify-center">
            <Image
              src="/sbvr-logo.webp"
              className="opacity-30 transition-all duration-1000 hover:opacity-100 object-contain"
              width={137.5}
              height={121}
              alt="SandboxVR logo"
            />
          </div>
        </div>
        <p className="font-bold text-white text-[15px] sm:pt-[62px] pt-12">Du brauchst ein individuelles Angebot für deinen geplanten Ausflug? Dann schreib uns, ruf an oder hinterlass uns einfach mit dem Kontaktformular eine
Nachricht. Wir melden uns dann bei dir zurück!</p>
      </section>
      <CorporateContact />
      <section className="sm:px-[150px] px-5 sm:pt-[70px] pt-10 sm:pb-[109px] pb-[100px] bg-black">
        <div className="sm:grid grid-cols-3 hidden">
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
          <p className="uppercase leading-6 tracking-[2px] font-medium text-center pt-6">
            Schreib uns, ruf uns an <br /> oder schick eine Mail. ✌
          </p>
          <div className="grid grid-cols-2 pt-8 items-center gap-5">
            {/* <div className="flex justify-center">
              <div className="w-full">
                <div className="flex justify-center">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.3855 7.00977C41.4871 11.1113 44.0262 16.4824 44.0262 22.3418C44.0262 34.2559 34.0652 44.0215 22.0535 44.0215C18.4402 44.0215 14.9246 43.0449 11.702 41.3848L0.276173 44.3145L3.30352 33.084C1.44805 29.8613 0.373829 26.1504 0.373829 22.2441C0.373829 10.3301 10.1395 0.564453 22.0535 0.564453C27.9129 0.564453 33.3816 2.9082 37.3855 7.00977ZM22.0535 40.3105C32.0145 40.3105 40.3152 32.2051 40.3152 22.3418C40.3152 17.459 38.2645 12.9668 34.8465 9.54883C31.4285 6.13086 26.9363 4.27539 22.1512 4.27539C12.1902 4.27539 4.08477 12.3809 4.08477 22.2441C4.08477 25.6621 5.06133 28.9824 6.81914 31.9121L7.30742 32.5957L5.45195 39.2363L12.2879 37.3809L12.8738 37.7715C15.7059 39.4316 18.8309 40.3105 22.0535 40.3105ZM32.0145 26.834C32.5027 27.127 32.8934 27.2246 32.991 27.5176C33.1863 27.7129 33.1863 28.7871 32.698 30.0566C32.2098 31.3262 30.0613 32.498 29.0848 32.5957C27.327 32.8887 25.9598 32.791 22.5418 31.2285C17.073 28.8848 13.5574 23.416 13.2645 23.123C12.9715 22.7324 11.116 20.1934 11.116 17.459C11.116 14.8223 12.4832 13.5527 12.9715 12.9668C13.4598 12.3809 14.0457 12.2832 14.4363 12.2832C14.7293 12.2832 15.1199 12.2832 15.4129 12.2832C15.8035 12.2832 16.1941 12.1855 16.6824 13.2598C17.073 14.334 18.2449 16.9707 18.3426 17.2637C18.4402 17.5566 18.5379 17.8496 18.3426 18.2402C17.366 20.291 16.1941 20.1934 16.7801 21.1699C18.9285 24.7832 20.9793 26.0527 24.202 27.6152C24.6902 27.9082 24.9832 27.8105 25.3738 27.5176C25.6668 27.127 26.741 25.8574 27.034 25.3691C27.4246 24.7832 27.8152 24.8809 28.3035 25.0762C28.7918 25.2715 31.4285 26.541 32.0145 26.834Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="block text-center uppercase leading-5 pt-6">
                  WHATSAPP
                </span>
                <span className="block text-center text-white text-sm leading-5 pt-[11px]">
                  (06631) 7882663
                </span>
              </div>
            </div> */}
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
                <span className="block text-center text-white text-sm leading-5 pt-[11px]">
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

export default ClubsAndGroups;

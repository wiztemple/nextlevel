/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import CorporateContact from "@/app/components/CorporateContact";
import Link from "next/link";

const BachelorParty = () => {
  return (
    <main className="break-words">
      <Navbar />
      <Hero className="sm:h-[780px] h-[582px] bg-black flex justify-center items-center w-screen transition duration-300 ease-in-out bg-[url('/jga.webp')] bg-cover bg-bottom bg-no-repeat">
        <div className="sm:pt-64 pt-28">
          <h1 className="text-center sm:text-[19px] text-[15px] leading-6 sm:tracking-[5px] sm:px-0 px-5 uppercase text-white">
            Ein legendärer Tag
          </h1>
          <h2 className="text-center sm:text-[37px] text-2xl font-bold uppercase sm:tracking-[10px] pt-10 sm:px-0 px-5 sm:leading-[80px] text-white">
            NextLevel JGA - <br />
            Junggesellen-abschied
          </h2>
          <p className="pt-[22px] text-[15px] leading-5 text-center sm:px-[160px] px-5 text-white">
            Seid ihr bereit für den Junggesellenabschied (JGA) des Jahrhunderts?
            Möchtet ihr einen Tag erleben, der für immer in eurer Erinnerung
            bleiben wird? Dann seid ihr hier genau richtig! Next Level
            Erlebnisse bietet die perfekte Kombination aus Spaß, Spannung und
            Teamerlebnis für euren unvergesslichen Tag! Ob als Auftakt,
            Zwischenstation oder das volle Programm – Euer Besuch bei Next Level
            und damit Euer JGA wird auf jeden Fall legendär! 
          </p>
        </div>
      </Hero>
      {/* <SecondaryHero>
        <h1 className="text-xl sm:font-medium leading-5 text-white">
          IHR HABT DIE QUAL DER WAHL FÜR EUREN JGA
        </h1>
        <h2 className="uppercase sm:text-[40px] text-[30px] font-medium tracking-[2px] text-white sm:leading-[54px] pt-5">
          VIRTUAL REALITY, LASERTAG ODER ESCAPEROOM
        </h2>
        <p className="pt-[22px] text-white text-base">
          Ein Aufenthalt in der NextLevel Area in Alsfeld ist ein Highlight auf
          jedem Junggesellenabschied (JGA). Das gilt gleichermaßen für Damen wie
          für Herren. Idealerweise startet ihr den JGA bei uns, um im Anschluss
          dann weiter zu ziehen oder ihr bleibt einfach direkt bei uns. Ob
          Lasertag, Escapegame oder Virtual Reality Gaming – hier warten Sport,
          Fun und Action auf Euch. Quasi eine Spaßgarantie für jeden JGA. Gerade
          wenn sich evtl. noch nicht alle Teilnehmer des Junggesellenabschieds
          persönlich kennen.
        </p>
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:pt-[77px] pt-28">
          <div className="flex justify-center">
            <div className="">
              <CountUp
                className="text-[62px] text-white font-semibold leading-[69px]"
                end={5}
              />
              <div className="text-white text-lg text-center leading-[47px]">
                Erlebnisse
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="">
              <CountUp
                className="text-[62px] text-white font-semibold leading-[69px]"
                end={110}
              />
              <div className="text-white text-lg text-center leading-[47px]">
                Prozent Spaß
              </div>
            </div>
          </div>
          <div className="sm:flex justify-center hidden">
            <div className="">
              <CountUp
                className="text-[62px] text-white font-semibold leading-[69px]"
                end={45868}
              />
              <div className="text-white text-lg text-center leading-[47px]">
                JGAs done 😉
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:hidden pt-12">
          <div className="flex justify-center">
            <div className="">
              <CountUp
                className="text-[62px] text-white font-semibold leading-[69px]"
                end={45868}
              />
              <div className="text-white text-lg text-center leading-[47px]">
                JGAs done 😉
              </div>
            </div>
          </div>
        </div>
      </SecondaryHero> */}
      <CorporateContact />
      <section className="bg-black sm:px-[150px] px-5 sm:pt-[120px] pt-16 pb-16">
        <h1 className="text-lg font-medium tracking-[2.5px] uppercase leading-5 text-white">
          BEHAUPTET EUCH GEGEN ZOMBIES, ALIENS ODER PIRATEN
        </h1>
        <h2 className="sm:text-[42px] text-[30px] font-medium leading-[54px] uppercase tracking-[2px] pt-5 text-white">
          Sandbox VR
        </h2>
        <p className="pt-[22px] leading-5 text-[15px] text-white">
          Unser Premium Erlebnis Sandbox VR gibt es bisher nur einmal in
          Deutschland und der ganzen Europäischen Union: bei uns in Alsfeld! 
        </p>
        <p className="pt-[28px] leading-5 text-[15px] text-white">
          Stellt euch vor: Ihr und eure besten Freunde taucht ein in eine völlig
          neue Welt voller virtueller Abenteuer. Mit modernster Motion-Capturing
          Technologie und High-End VR-Brillen bringt{" "}
          <strong className="text-[#A6519A]">Sandbox VR</strong> eure Fantasie
          zum Leben und katapultiert euch in ein actiongeladenes Erlebnis, das
          ihr nie vergessen werdet. Macht euch bereit für ein völlig neues Level
          an Junggesellenabschieden! Bei Sandbox VR werdet ihr Teil einer
          spannenden virtuellen Realität, in der ihr gemeinsam gegen Zombies,
          Aliens oder Piraten kämpfen, aufregende Abenteuer bestehen und eure
          Geschicklichkeit unter Beweis stellen müsst. Hier ist Teamwork
          gefragt, denn nur zusammen werdet ihr es schaffen, die
          Herausforderungen in der virtuellen Welt zu meistern.
        </p>
        <p className="pt-[28px] leading-5 text-[15px] text-white">
          Andrenalin, Panik und auch ein paar Schreie sind garantiert. Dabei ist
          es egal, ob ich euch mit Eurem Squad in einem unserer Zombie-Abenteuer
          „Deadwood Mansion“ oder „Deadwood Valley“ gegen eine Horde Zombies
          stellt oder in Amber Sky in Hong Kong im Jahr 2088 die Erde gegen eine
          außerirdische Invasion verteidigen müsst. Wenn ihr es etwas weniger
          panisch angehen lassen wollt, haben wir mit unserem Piratenabenteuer
          „Davy Jones“ oder „Star Trek“ die richtigen Erlebnisse im Programm.
          Eins haben sie alle gemeinsam: Sie schaffen unvergessliche
          Erinnerungen – die ihr sogar in Form von zwei Best-Of Movies
          mitbekommt.
        </p>
        <div className="sm:mt-[76px] mt-12 bg-dark-1">
          <iframe
            width="100%"
            height="642"
            src="https://www.youtube.com/embed/-5x74pzVRHU"
            title="Sandbox VR - Alsfeld"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:pt-20 pt-10 w-full">
          <div>
            <h1 className="uppercase text-white sm:text-[40px] text-3xl leading-[54px] font-medium tracking-[2px]">
              Schon überzeugt?
            </h1>
            <h2 className="sm:pt-5 pt-3 text-white font-medium tracking-[2.5px] sm:text-lg text-[15px] uppercase">
              Hier geht es direkt zur Buchung:
            </h2>
          </div>
          <div className="flex justify-center">
          <Link
            href="https://sandboxvr.com/zurich/"
            target="_blank"
            className="text-gray-8 block w-fit h-fit py-5 px-8 rounded-[3px] border border-gray-8 tracking-[5px] leading-5 text-[15px] relative mt-5 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:text-dark-1 hover:scale-110 hover:bg-white hover:border-white"
          >
            BUCHEN
          </Link>
          </div>
        </div>
      </section>
      {/* <section className="bg-mesh-gradient bg-top sm:bg-fixed bg-no-repeat bg-cover sm:px-[150px] px-5 sm:pt-[90px] pt-16 sm:pb-[53px] pb-16">
        <h1 className="text-lg font-medium tracking-[2.5px] uppercase leading-5 text-white">
          WIR HABEN NOCH MEHR ERLEBNISSE
        </h1>
        <h2 className="sm:text-[41px] text-[30px] font-medium sm:leading-[54px] uppercase sm:tracking-[2px] pt-6 text-white">
          LASERTAG, ESCAPEROOM UND HOLOGATE
        </h2>
        <p className="pt-[27px] leading-5 text-[15px] text-white">
          Wenn Euch Sandbox VR zu extrem ist oder ihr Eure Sandbox VR Erfahrung
          abrunden wollt, haben wir natürlich auch die richtigen Erlebnisse für
          Euch:
        </p>
        <p className="pt-6 leading-5 text-[15px] text-white">
          <span className="text-[#A6519A]">Lasertag,</span>{" "}
          <span className="text-[#A6519A]">Hologate</span> und unser
          <span className="text-[#A6519A]"> Escaperoom</span> lassen keine
          Wünsche offen. Beim Lasertag könnt ihr Euch mit bis zu 20 Personen
          gleichzeitig und exklusiv in unserer Arena austoben. In unserem
          Escaperoom könnt ihr mit bis zu 10 Personen versuchen die magische
          Welt von Crailsfelden zu retten. In unserer Hologate VR-Arena könnt
          ihr abwechselnd mit 4 Spielern gleichzeitig kurze 5 Minuten-Minispiele
          spielen, währen der Rest zuschaut und sich köstlich amüsiert. Die
          einzelnen Erlebnisse bei den Junggesellenabschieden finden immer
          exklusiv statt, sprich ihr seid im Erlebnis selbst unter Euch ohne
          fremde Spieler. Für die Zeitplanung gilt: umso mehr Personen
          teilnehmen, umso länger sollte für den Aufenthalt eingeplant werden.
          Nach unserer Erfahrung sind 1,5 Stunden eine gute Aufenthaltsdauer für
          bis zu 10 Personen. Wenn ihr Lust auf mehrere Erlebnisse habt,
          solltest ihr mindestens 2-3 Stunden einplanen.
        </p>
      </section> */}
      {/* <section className="bg-black w-full">
        <div className="grid sm:grid-cols-4 grid-cols-1">
          <img
            className="object-cover h-[288px] w-full"
            src="/hologate_event.jpg"
            alt="Hologate event"
          />
          <img
            className="object-cover h-[288px] w-full"
            src="/vr-event.jpg"
            alt="VR Event"
          />
          <img
            className="object-cover h-[288px] w-full"
            src="/vr-event2.jpg"
            alt="VR Event 2"
          />
          <img
            className="object-cover h-[288px] w-full"
            src="/vr-book.jpg"
            alt="VR Book"
          />
        </div>
        <div className="sm:px-[150px] px-5 pb-[76px] pt-[120px]">
          <h1 className="text-lg uppercase font-medium leading-5 tracking-[2.5px] text-white">
            Das rundum-Paket
          </h1>
          <h2 className="uppercase sm:text-[40px] text-[30px] text-white sm:tracking-[2px] sm:leading-[54px] pt-5 font-medium">
            Spannung, Spiel und Kaltgetränke!
          </h2>
          <p className="pt-[22px] leading-5 text-[15px] text-white">
            Natürlich sitzt ihr bei uns mit Eurem JGA auch nicht auf dem
            Trockenen. Wir haben gut gekühlte Getränke für Euch am Start.
            Softdrinks für den Durst nach der Bewegung und Bier, Radler und Sekt
            zum Anstoßen danach.
          </p>
          <p className="pt-[28px] leading-5 text-[15px] text-white">
            In Pausen oder zum Abschluss könnt ihr Euer Können bei einer Runde
            Mario-Kart, Smash Bros oder Mario Strikers auf der Nintendo Switch
            in unserem Partyraum beweisen. Auch hier könnt ihr die „Bride to be“
            oder „Groom to be“ vor Herausforderungen stellen.Euer
            Junggesellenabschied soll einzigartig und unvergesslich sein – und
            mit bei Next Level Erlebnisse wird er genau das! Verabschiedet das
            Single-Dasein mit einem Knall und taucht gemeinsam mit euren besten
            Freunden in eine neue Dimension des Feierns ein. Das ultimative
            Sandbox VR Erlebnis wartet auf euch – seid ihr bereit, eure Grenzen
            zu sprengen?
          </p>
          <p className="pt-[28px] leading-5 text-[15px] text-white">
            Bucht noch heute euren Junggesellenabschied bei Next Level
            Erlebnisse in Alsfeld und sichert euch das Highlight eures Lebens.
            Wir freuen uns darauf, euch in der Welt von Sandbox VR willkommen zu
            heißen und euren Tag unvergesslich zu machen!
          </p>
        </div>
      </section> */}
      <section className="sm:px-[150px] px-5 sm:pt-[70px] sm:pb-[109px] pb-[100px] bg-black">
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
          <p className="uppercase leading-6 tracking-[2px] font-medium text-center pt-6 text-white">
            Schreib uns, ruf uns an <br /> oder schick eine Mail. ✌
          </p>
          <div className="grid grid-cols-2 pt-8 items-center gap-5">
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
                <span className="block text-center uppercase leading-5 pt-6">
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
                <span className="block text-center uppercase leading-5 pt-6">
                  E-MAIL
                </span>
                <span className="block text-center text-white text-sm leading-5 pt-[11px]">
                zurich@sandboxvr.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-aquagreen sm:block hidden text-center uppercase tracking-[10px] leading-[30px] font-medium text-[22px] sm:pt-[89px]">
          WIR FREUEN UNS AUF EURE ANFRAGE!
        </h1>
      </section>
      <Footer />
    </main>
  );
};

export default BachelorParty;

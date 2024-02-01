/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import BasicCard from "../components/BasicCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SecondaryHero from "../components/SecondaryHero";
import CorporateContact from "../components/CorporateContact";
import Link from "next/link";

const CorporateEvents = () => {
  return (
    <main className="break-words">
      <Navbar />
      <Hero className="min-h-[702px] flex justify-center items-center w-screen transition duration-300 ease-in-out bg-[url('/firmenevents.webp')] bg-cover bg-top sm:bg-center bg-no-repeat">
        <div className="sm:pt-64 pt-20 sm:px-0 px-5 sm:pb-0 pb-10">
          <h1 className="text-center text-[19px] leading-6 sm:tracking-[5px] tracking-widest uppercase text-aquagreen">
            Die besten events für Dich und dein team
          </h1>
          <h2 className="text-center sm:text-[71px] text-3xl font-medium uppercase tracking-[2.1px] pt-10 sm:leading-[80px] leading-snug text-white">
            Erfolgreiche <br />
            Firmenevents
          </h2>
          <p className="pt-[22px] sm:text-[15px] text-sm leading-5 text-center sm:px-[160px] text-white">
            Erfolgreiche Firmenevents sind für dein Unternehmen von großer
            Bedeutung, denn sie fördern nicht nur das Zusammengehörigkeitsgefühl
            und die Motivation deiner Mitarbeiterinnen und Mitarbeiter, sondern
            stärken auch das Image deines Unternehmens. 
          </p>
        </div>
      </Hero>
      <SecondaryHero>
        <h1 className="text-xl sm:text-[22px] leading-8 tracking-[1px] uppercase pt-10 sm:pt-0 text-white">
          WARUM BEI UNS?
        </h1>
        <h2 className="uppercase sm:text-[40px] text-3xl font-medium sm:tracking-[2px] text-white sm:leading-[54px] leading-snug pt-5">
          WEIL'S UNVERGESSLICH WIRD
        </h2>
        <p className="pt-[22px] text-white sm:text-[15px] text-sm">
          Ein gut geplantes und durchgeführtes Event kann das Vertrauen in deine
          Marke und dein Unternehmen erhöhen und dich als attraktiven
          Arbeitgeber positionieren. Investiere in erfolgreiche Firmenevents und
          zeige deinen Mitarbeiterinnen und Mitarbeitern sowie deinen Kundinnen
          und Kunden, dass du ein Unternehmen bist, das nicht nur auf
          wirtschaftlichen Erfolg, sondern auch auf das Wohlbefinden und die
          Zufriedenheit seiner Stakeholder Wert legt.
        </p>
        <Link href="/" className=" text-white pt-[29px] block sm:text-[15px] text-sm">
          Stärke den Zusammenhalt Deiner Kollegen in unserer Lasertag Arena und
          tretet an im Lasertag-Turnier.  Danach tauchen Ihr in unsere Virtual
          Reality-Welten ein, in der Ihr unsere Highscores nur knacken könnt,
          wenn ihr als Gruppe gut zusammenspielt. Zwischen den Spielen könnt Ihr
          epische Roboter-Battles bestreiten oder ganz entspannt nach einem
          kühlen Getränk greifen. Davor oder danach besteht die Möglichkeit, mit
          der gesamten Belegschaft die Rätsel in unserem 60-minütigen Escaperoom
          zu lösen und herauszufinden wer die Nerven behält oder wer aufgibt!
        </Link>
        <p className="text-white pt-12 block sm:text-[15px] text-sm">
          Ob Weihnachtsfeier, Sommerfest, Betriebsausflug und Teambuilding –{" "}
          <br />
          bei uns sind Sie definitiv an der richtigen Adresse für ein
          unvergessliches Event!
        </p>
      </SecondaryHero>
      <section className="bg-black sm:block hidden">
        <div className="grid sm:grid-cols-6 grid-cols-1">
          <img
            className="object-cover h-[288px] w-full"
            src="/hologate_event.jpg"
            alt="Hologate event"
          />
          <img
            className="object-cover h-[288px] w-full"
            src="/lue-image.jpg"
            alt="Lue event"
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
          <img
            className="object-cover h-[288px] w-full"
            src="/vr-event2.jpg"
            alt="VR Event 2"
          />
        </div>
      </section>
      <section className="bg-black sm:px-[150px] px-5 sm:pt-[100px] pt-20 sm:pb-[85px] pb-[50px]">
        <h1 className="uppercase sm:text-lg text-sm text-white">IHR HABT GROSSES VOR?</h1>
        <h2 className="uppercase sm:text-[40px] text-3xl font-medium leading-[54px] tracking-[2px] text-white pt-5">
          Events für Firmen
        </h2>
        <p className="pt-[22px] leading-6 sm:text-base text-sm text-white">
          Wir stellen für deine Firmenfeier oder Teambuildings gerne ein tolles
          Programm zusammen, bei dem jeder Spaß hat! Dafür füllst du uns am
          besten das Kontaktformular aus oder rufst uns direkt an, damit wir mit
          dir zusammen ein Programm erstellen können. Grundsätzlich haben wir
          auch Platz für große Event mit bis zu 500 Personen. 
        </p>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-[30px] sm:mt-[52px] mt-16 p-[15px]">
          <BasicCard
            className=""
            img="cardimage-1.jpg"
            color="#F8A120"
            title="Weihnachtsfeier"
            description="Jeder kennt und fürchtet sie: öde und
            langweilige Weihnachtsfeiern, bei
            denen jeder nur darauf achtet, nicht
            als erster gehen zu wollen. Das gibt es
            bei uns aber nicht!"
          />
          <BasicCard
            className=""
            img="cardimage-1.jpg"
            color="#F8A120"
            title="Tagung / Seminar"
            description="Bei uns bekommt ihr auch ein Rundum-
            Sorglos-Paket für eure Weiterbildung,
            Seminar oder Tagung - mit unseren
            Seminarräumen, Catering und unseren
            Erlebnissen ein tolles Zusammenspiel."
          />
          <BasicCard
            className=""
            img="cardimage-1.jpg"
            color="#F8A120"
            title="TEAMBUILDING"
            description="Zusammenhalt, Kommunikation und
            Teamstärke! Genau das braucht es bei
            unseren Events und das mit einer
            großen Portion Spaß und
            Abenteuer!"
          />
        </div>
      </section>
      <section className="bg-mesh-gradient sm:bg-fixed sm:bg-center bg-bottom bg-cover bg-no-repeat sm:py-20">
        <h1 className="uppercase hidden sm:block tracking-[10px] leading-5 font-medium text-[30px] text-center text-white">
          TEAMWORK, ACTION, SPASS!
        </h1>
        <h1 className="uppercase tracking-[10px] sm:hidden block leading-[50px] py-7 font-bold text-[22px] text-center text-white">
          TEAMWORK, <br /> ACTION, <br /> SPASS!
        </h1>
      </section>
      <section className="bg-black sm:px-[150px] px-5 py-[70px]">
        <h1 className="uppercase sm:text-[39px] text-3xl tracking-[2px] font-medium text-white sm:leading-[54px] leading-snug">
          Unsere ERlebnisse
        </h1>
        <p className="pt-5 text-white leading-5 sm:text-[15px] text-sm">
          Falls ihr mehr über unsere Erlebnisse wissen wollt, dann drückt auf
          das jeweilige Logo:
        </p>
        <div className="grid sm:grid-cols-4 grid-cols-2 pt-[60px] sm:gap-0 gap-8">
          <div className="flex justify-center">
            <Image
              src="/lasertag.webp"
              className="opacity-30 transition-all duration-1000 hover:opacity-100 object-contain"
              width={220}
              height={124}
              alt="Laser tag logo"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/hologate.webp"
              className="opacity-30 transition-all duration-1000 hover:opacity-100 object-contain"
              width={192.5}
              height={67.38}
              alt="Hologate logo"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/logo_Escape_Room.webp"
              className="opacity-30 transition-all duration-1000 hover:opacity-100 object-contain"
              width={195.25}
              height={68.33}
              alt="Escape Room logo"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/sbvr-logo.webp"
              className="opacity-30 transition-all duration-1000 hover:opacity-100 object-contain"
              width={137.5}
              height={121}
              alt="Escape Room logo"
            />
          </div>
        </div>
      </section>
      <CorporateContact />
      <Footer />
    </main>
  );
};

export default CorporateEvents;

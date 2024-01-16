/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import BasicCard from "../components/BasicCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SecondaryHero from "../components/SecondaryHero";
import CorporateContact from "../components/CorporateContact";

const CorporateEvents = () => {
  return (
    <main>
      <Navbar />
      <Hero className="h-[702px] flex justify-center items-center w-screen transition duration-300 ease-in-out  hover:rounded-lg bg-[url('/firmenevents.webp')] bg-cover bg-center bg-no-repeat">
        <div className="sm:pt-64">
          <h1 className="text-center text-[19px] leading-6 tracking-[5px] uppercase text-aquagreen">
            Die besten events für Dich und dein team
          </h1>
          <h2 className="text-center text-[71px] font-medium uppercase tracking-[2.1px] sm:pt-10 leading-[80px] text-white">
            Erfolgreiche <br />
            Firmenevents
          </h2>
          <p className="pt-[22px] text-[15px] leading-5 text-center sm:px-[160px]">
            Erfolgreiche Firmenevents sind für dein Unternehmen von großer
            Bedeutung, denn sie fördern nicht nur das Zusammengehörigkeitsgefühl
            und die Motivation deiner Mitarbeiterinnen und Mitarbeiter, sondern
            stärken auch das Image deines Unternehmens. 
          </p>
        </div>
      </Hero>
      <SecondaryHero>
        <h1 className="text-xl sm:text-[22px] leading-8 tracking-[1px] uppercase">
          WARUM BEI UNS?
        </h1>
        <h2 className="uppercase text-[40px] font-medium tracking-[2px] text-white leading-[54px] pt-5">
          WEIL'S UNVERGESSLICH WIRD
        </h2>
        <p className="pt-[22px] text-white text-[15px]">
          Ein gut geplantes und durchgeführtes Event kann das Vertrauen in deine
          Marke und dein Unternehmen erhöhen und dich als attraktiven
          Arbeitgeber positionieren. Investiere in erfolgreiche Firmenevents und
          zeige deinen Mitarbeiterinnen und Mitarbeitern sowie deinen Kundinnen
          und Kunden, dass du ein Unternehmen bist, das nicht nur auf
          wirtschaftlichen Erfolg, sondern auch auf das Wohlbefinden und die
          Zufriedenheit seiner Stakeholder Wert legt.
        </p>
        <a href="/" className=" text-white pt-[29px] block text-[15px]">
          Stärke den Zusammenhalt Deiner Kollegen in unserer Lasertag Arena und
          tretet an im Lasertag-Turnier.  Danach tauchen Ihr in unsere Virtual
          Reality-Welten ein, in der Ihr unsere Highscores nur knacken könnt,
          wenn ihr als Gruppe gut zusammenspielt. Zwischen den Spielen könnt Ihr
          epische Roboter-Battles bestreiten oder ganz entspannt nach einem
          kühlen Getränk greifen. Davor oder danach besteht die Möglichkeit, mit
          der gesamten Belegschaft die Rätsel in unserem 60-minütigen Escaperoom
          zu lösen und herauszufinden wer die Nerven behält oder wer aufgibt!
        </a>
        <p className="text-white pt-12 block text-[15px]">
          Ob Weihnachtsfeier, Sommerfest, Betriebsausflug und Teambuilding –{" "}
          <br />
          bei uns sind Sie definitiv an der richtigen Adresse für ein
          unvergessliches Event!
        </p>
      </SecondaryHero>
      <section className="bg-black">
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
      <section className="bg-black sm:px-[150px] sm:pt-[125px] sm:pb-[85px]">
        <h1 className="uppercase text-[40px] font-medium leading-[54px] tracking-[2px] text-white">
          Events für Firmen
        </h1>
        <p className="pt-[22px] leading-5 text-[15px] text-white">
          Wir stellen für deine Firmenfeier oder Teambuildings gerne ein tolles
          Programm zusammen, bei dem jeder Spaß hat! Dafür füllst du uns am
          besten das Kontaktformular aus oder rufst uns direkt an, damit wir mit
          dir zusammen ein Programm erstellen können. Grundsätzlich haben wir
          auch Platz für große Event mit bis zu 500 Personen. 
        </p>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-[30px] sm:mt-[52px] p-[15px]">
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
      <section className="bg-mesh-gradient bg-fixed bg-cover bg-no-repeat sm:py-20">
        <h1 className="uppercase hidden sm:block tracking-[10px] leading-5 font-medium text-[30px] text-center text-white">
          TEAMWORK, ACTION, SPASS!
        </h1>
        <h1 className="uppercase tracking-[10px] sm:hidden block leading-[50px] pb-7 font-bold text-[22px] text-center text-white">
          TEAMWORK, <br /> ACTION, <br /> SPASS!
        </h1>
      </section>
      <section className="bg-black sm:px-[150px] sm:py-[70px]">
        <h1 className="uppercase text-[39px] tracking-[2px] font-medium text-white leading-[54px]">
          Unsere ERlebnisse
        </h1>
        <p className="pt-5 text-white leading-5 text-[15px]">
          Falls ihr mehr über unsere Erlebnisse wissen wollt, dann drückt auf
          das jeweilige Logo:
        </p>
        <div className="grid grid-cols-4 sm:pt-[60px]">
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

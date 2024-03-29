/* eslint-disable @next/next/no-img-element */
import BasicCard from "./BasicCard";

const UnforgetableEvents = () => {
  return (
    <section className="bg-black sm:pt-[100px] pt-20">
      <div className="sm:px-[150px] px-5 sm:pb-[105px]">
        <h1 className="text-white text-lg font-medium uppercase tracking-[2.5px] leading-5">
          Das Passende Angebot
        </h1>
        <h2 className="pt-5 uppercase tracking-[2px] sm:text-[40px] text-[24px] sm:leading-[54px]">
          Unvergessliche Events
        </h2>
        <p className="leading-5 text-[15px] pt-[22px] sm:pb-0 pb-10 text-white">
          Erfolgreiches Teambuilding, unvergessliche Firmenevents,
          JGA-Highlights und Geburtstagsfeiern der Extraklasse. Ob eins unserer
          Pakete zum Buchen, oder ein individuelles Angebot für dein
          maßgeschneidertes Event – wir haben immer das passende Angebot zu
          jedem Anlass.
        </p>
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-[10px] sm:gap-y-0 gap-y-10 sm:mt-[52px] px-[15px]">
          <BasicCard
            className=""
            img="cardimage-1.jpg"
            color="#A6519A"
            title="Teambuilding"
            description="Zusammenhalt, Kommunikation und Teamstärke! Genau das braucht es bei unseren Events und das mit einer großen Portion Spaß!"
          />
          <BasicCard
            className=""
            color="#F8A120"
            img="cardimage-1.jpg"
            ribbonText="Highlight"
            showRibbon
            ribbonTextColor="#fff"
            title="Firmenevent"
            description="Sommerfest,Weihnachtsfeier, Betriebsausflug oder Incentive. Mach Dein nächstes Firmenevent zu etwas Besonderem."
          />
          <BasicCard
            className=""
            color="#FF1482"
            img="cardimage-1.jpg"
            title="Junggesellen- abschied"
            description="Das unvergessliche Highlight jedes JGAs – obals Abstecher oder das All-Inclusive Paket. Es wird auf jeden Fall legendär!"
          />
          <BasicCard
            className=""
            color="#57BFC7"
            img="card-img-2.webp"
            showRibbon
            ribbonText="Paketpreise"
            ribbonTextColor="#57BFC7"
            title="Kinder- Geburtstag"
            description="Mach Deinen Geburtstag zu einem unvergesslichen Tag! Mit Freunden gemeinsam Abenteuer erleben und Erinnerungen schaffen."
          />
        </div>
      </div>
      <div className="sm:block hidden">
        <div className="grid sm:grid-cols-5 grid-cols-1">
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
        </div>
      </div>
      <div className="sm:px-[150px] px-5 pb-16">
        <h2 className="sm:pt-[125px] pt-14 uppercase tracking-[2px] sm:text-[40px] text-[22px] sm:leading-[54px] text-white">
          Events für Firmen und Vereine
        </h2>
        <p className="leading-5 text-[15px] pt-[22px] sm:pb-0 pb-8 text-white">
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
            title="Firmenevents"
            description="Egal ob Weihnachtsfeier, Teambuilding oder einfach etwas Spaß nach Feierabend mit der gesamten Belegschaft. Gemeinsam planen wir Euer nächstes Erlebnis."
          />
          <BasicCard
            className=""
            img="cardimage-1.jpg"
            color="#F8A120"
            title="Tagung / Seminar"
            description="Egal ob Weihnachtsfeier, Teambuilding oder einfach etwas Spaß nach Feierabend mit der gesamten Belegschaft. Gemeinsam planen wir Euer nächstes Erlebnis."
          />
          <BasicCard
            className=""
            img="cardimage-1.jpg"
            color="#F8A120"
            title="Vereine"
            description="Egal ob Weihnachtsfeier, Teambuilding oder einfach etwas Spaß nach Feierabend mit der gesamten Belegschaft. Gemeinsam planen wir Euer nächstes Erlebnis."
          />
        </div>
      </div>
    </section>
  );
};

export default UnforgetableEvents;

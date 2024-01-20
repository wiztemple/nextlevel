import Link from "next/link";

const TeamExperience = () => {
  return (
    <section className="bg-section3 sm:h-[718px] bg-cover sm:pt-[200px] sm:pb-[130px] sm:px-[180px]">
      <h1 className="tracking-[10px] text-xl font-medium text-gray-1 uppercase leading-6">
        DAS GIBTS NUR BEI UNS
      </h1>
      <h2 className="tracking-widest text-6xl font-bold leading-[60px] text-white uppercase pt-5">
        EIN ERLEBNIS ALS TEAM
      </h2>
      <p className="leading-6 text-[#EFF3F7] sm:pt-6 font-normal text-[15px]">
        Unsere reale Welt erleben wir mit anderen Menschen zusammen – <br />
        und deswegen erlebt man eine Reise ins Weltall oder das Überleben eines
        Zombie-Angriffs bei Sandbox VR auch gemeinsam.
      </p>
      <p className="leading-6 text-[#EFF3F7] sm:pt-7 font-normal text-[15px]">
        Es sind Erlebnisse, die Beziehungen zwischen Freunden, Familien,
        Arbeitskollegen stärken und für immer als gemeinsame Erinnerung bleiben.
      </p>
      <p className="leading-6 text-[#EFF3F7] sm:pt-6 font-normal text-[15px]">
        Buchungen sind auch für größere Gruppe, Firmenevents und Geburtstage
        möglich.
      </p>
      <div className="pt-[44px]">
        <Link
          href="/eventrequest"
          className="transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 py-5 px-10 leading-5 tracking-[7px] rounded-md text-white bg-[#0076FF] border border-[#0076FF]"
        >
          FÜR GRUPPEN BUCHEN
        </Link>
      </div>
    </section>
  );
};

export default TeamExperience;

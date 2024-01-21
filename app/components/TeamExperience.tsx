import Link from "next/link";

const TeamExperience = () => {
  return (
    <section className="sm:bg-section3 bg-section3-mobile bg-bottom sm:h-[718px] bg-cover sm:pt-[200px] pt-[100px] sm:pb-[130px] pb-12 sm:px-[180px] px-5">
      <h1 className="sm:tracking-[10px] tracking-[2px] sm:text-xl text-sm font-medium text-gray-1 uppercase leading-6">
        DAS GIBTS NUR BEI UNS
      </h1>
      <h2 className="tracking-widest sm:text-6xl text-4xl font-bold sm:leading-[60px] leading-snug text-white uppercase pt-5">
        EIN ERLEBNIS ALS TEAM
      </h2>
      <p className="leading-6 text-[#EFF3F7] pt-6 font-normal sm:text-[15px] text-sm">
        Unsere reale Welt erleben wir mit anderen Menschen zusammen – <br />
        und deswegen erlebt man eine Reise ins Weltall oder das Überleben eines
        Zombie-Angriffs bei Sandbox VR auch gemeinsam.
      </p>
      <p className="leading-6 text-[#EFF3F7] pt-7 font-normal sm:text-[15px] text-sm">
        Es sind Erlebnisse, die Beziehungen zwischen Freunden, Familien,
        Arbeitskollegen stärken und für immer als gemeinsame Erinnerung bleiben.
      </p>
      <p className="leading-6 text-[#EFF3F7] pt-6 font-normal sm:text-[15px] text-sm">
        Buchungen sind auch für größere Gruppe, Firmenevents und Geburtstage
        möglich.
      </p>
      <div className="sm:pt-[44px] pt-[210px] sm:block flex justify-center">
        <Link
          href="/eventrequest"
          className="block w-fit transition delay-100 text-center sm:text-base text-sm duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 py-5 px-10 leading-5 sm:tracking-[7px] rounded-md text-white bg-[#0076FF] border border-[#0076FF]"
        >
          FÜR GRUPPEN BUCHEN
        </Link>
      </div>
    </section>
  );
};

export default TeamExperience;

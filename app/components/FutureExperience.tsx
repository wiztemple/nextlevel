const FutureExperience = () => {
  return (
    <section className="bg-section2 sm:h-[776px] bg-cover sm:px-[180px] sm:py-[200px]">
      <h1 className="tracking-[10px] text-xl text-gray-1 font-light uppercase leading-6">
        TAUCHE EIN IN NEUE WELTEN
      </h1>
      <h2 className="tracking-widest text-6xl font-bold leading-[60px] text-white uppercase pt-5">
        Erlebe die Zukunft
      </h2>
      <p className="leading-6 text-[#EFF3F7] sm:pt-6 font-normal">
        Sandbox VR ist ein hyperreales VR Erlebnis für bis zu 6 Spieler
        gleichzeitig, in dem ihr euch sehen und miteinander interagieren könnt –
        genau so, wie in der realen Welt.
      </p>
      <p className="leading-6 text-[#EFF3F7] sm:pt-7 font-normal">
        Inspiriert von Star Treks Holodeck, geben euch die Spielwelten das
        Gefühl, als würdet ihr Teil des Spiels oder eines Films sein.
      </p>
      <div className="pt-[94px]">
        <button
          type="button"
          className="transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 py-5 px-10 leading-5 tracking-[7px] rounded-md text-white bg-[#0076FF] border border-[#0076FF]"
        >
          JETZT BUCHEN
        </button>
      </div>
    </section>
  );
};

export default FutureExperience;

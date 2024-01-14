const PressSection = () => {
  return (
    <section className="sm:pt-[120px] sm:pb-20 sm:px-[150px] bg-dark-1">
      <h1 className="uppercase text-gray-1 text-lg tracking-[10px] leading-[26px]">
        PRESSE, INFLUENCER UND STREAMER
      </h1>
      <h2 className="uppercase text-[55px] text-gray-8 pt-5 font-bold tracking-[5px] leading-[72px]">
        Hi, wir haben was für euch!
      </h2>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:pt-[60px] gap-5">
        <div className="bg bg-sectionCard1 bg-cover h-[515px] hover:bg-sectionCardHover rounded-[30px] relative shadow-cardXl2 sm:py-[70px] sm:px-10">
          <div className="absolute bg-black/15 top-0 left-0 right-0 bottom-0 transition-background transition-border transition-opacity duration-300 rounded-[30px]"></div>
          <h1 className="text-[#57BFC7] text-[15px] tracking-[5px] leading-5 uppercase relative z-50">
            PRESSEBEREICH, MEDIAS & FAQ
          </h1>
          <h2 className="text-[53px] text-gray-8 font-semibold uppercase leading-[53px] tracking-[5px] relative z-50 pt-5">
            NEWSDECK
          </h2>
          <a
            href="/"
            className="text-gray-8 block w-fit py-3 px-6 rounded-[3px] border border-gray-8 tracking-[5px] leading-5 text-[15px] relative mt-5 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 hover:bg-appblue hover:border-appblue"
          >
            MEHR INFOS
          </a>
        </div>
        <div className="bg bg-sectionCard2 bg-cover h-[515px] hover:bg-sectionCard2Hover rounded-[30px] relative shadow-cardxl sm:py-[70px] sm:px-10">
          <div className="absolute bg-black/15 top-0 left-0 right-0 bottom-0 transition-background transition-border transition-opacity duration-300 rounded-[30px]"></div>
          <h1 className="text-white text-[15px] tracking-[5px] leading-5 uppercase relative z-50">
            BE PART OF THE HYPE
          </h1>
          <h2 className="text-[44px] text-gray-8 font-semibold uppercase leading-[53px] tracking-[10px] relative z-50 pt-5">
            COOPS
          </h2>
          <p className="text-[15px] leading-5 text-gray-8 pt-5 relative z-50">
            Du bist Influencer, Streamer, Blogger, Youtuber? ✌️
          </p>
          <a
            href="/"
            className="text-gray-8 block w-fit py-3 px-6 rounded-[3px] border border-gray-8 tracking-[5px] leading-5 text-[15px] relative mt-11 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 hover:bg-appblue hover:border-appblue"
          >
            DANN HIER LANG!
          </a>
        </div>
      </div>
    </section>
  );
};

export default PressSection;

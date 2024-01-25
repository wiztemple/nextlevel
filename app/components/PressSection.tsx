import Link from "next/link";

const PressSection = () => {
  return (
    <section className="sm:pt-[120px] pt-20 sm:pb-20 sm:px-[150px] px-5 bg-dark-1">
      <h1 className="uppercase text-gray-1 sm:text-lg text-base sm:tracking-[10px] tracking-widest leading-[26px]">
        PRESSE, INFLUENCER UND STREAMER
      </h1>
      <h2 className="uppercase sm:text-[55px] text-4xl text-gray-8 pt-5 font-bold tracking-[5px] sm:leading-[72px] leading-snug">
        Hi, wir haben was für euch!
      </h2>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:pt-[60px] pt-12 gap-5 sm:pb-0 pb-12">
        <div className="bg bg-sectionCard1 bg-cover sm:h-[515px] h-[300px] hover:bg-sectionCardHover rounded-[30px] relative shadow-cardXl2 py-[70px] sm:px-10 px-5">
          <div className="absolute bg-black/15 top-0 left-0 right-0 bottom-0 transition-background transition-border transition-opacity duration-300 rounded-[30px]"></div>
          <h1 className="text-[#57BFC7] text-[15px] sm:tracking-[5px] tracking-widest leading-5 uppercase relative z-50">
            PRESSEBEREICH, MEDIAS & FAQ
          </h1>
          <h2 className="sm:text-[53px] text-4xl text-gray-8 font-semibold uppercase leading-[53px] tracking-[5px] relative z-50 pt-5">
            NEWSDECK
          </h2>
          <a
            href="/"
            className="text-gray-8 block w-fit py-3 px-6 rounded-[3px] border border-gray-8 tracking-[5px] leading-5 text-[15px] relative mt-5 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 hover:bg-appblue hover:border-appblue"
          >
            MEHR INFOS
          </a>
        </div>
        <div className="bg bg-sectionCard2 bg-cover sm:h-[515px] h-[356px] hover:bg-sectionCard2Hover rounded-[30px] relative shadow-cardxl py-[70px] sm:px-10 px-5">
          <div className="absolute bg-black/15 top-0 left-0 right-0 bottom-0 transition-background transition-border transition-opacity duration-300 rounded-[30px]"></div>
          <h1 className="text-white text-[15px] tracking-[5px] leading-5 uppercase relative z-50">
            BE PART OF THE HYPE
          </h1>
          <h2 className="sm:text-[44px] text-4xl text-gray-8 font-semibold uppercase leading-[53px] tracking-[10px] relative z-50 pt-5">
            COOPS
          </h2>
          <p className="sm:text-[15px] text-sm leading-5 text-gray-8 pt-5 relative z-50">
            Du bist Influencer, Streamer, Blogger, Youtuber? ✌️
          </p>
          <Link
            href="/coorperation"
            className="text-gray-8 block w-fit py-3 px-6 rounded-[3px] border border-gray-8 tracking-[5px] leading-5 text-[15px] relative mt-11 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 hover:bg-appblue hover:border-appblue"
          >
            DANN HIER LANG!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PressSection;

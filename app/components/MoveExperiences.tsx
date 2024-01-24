import Link from "next/link";

const MoveExperiences = () => {
  return (
    <section className="sm:px-[150px] px-5 sm:pt-[150px] pt-[100px] pb-[50px] bg-[url(https://nextlevel-erlebnisse.de/wp-content/uploads/2022/10/sandboxvr-header.jpg)] sm:h-[470px] bg-cover bg-center">
      <h1 className="uppercase text-white">ERLEBNISSE VERSCHENKEN</h1>
      <h2 className="uppercase sm:text-[55px] text-4xl font-bold text-white sm:leading-[72px] leading-snug tracking-[10px] pt-5">
        Ein besonderes Geschenk.
      </h2>
      <p className="pt-5 leading-5 text-[15px] text-white">
        Verschenke nicht einfach irgendwas! Mit einem Gutschein für ein VR
        Erlebnis in einer unserer Sandbox VR Locations, hast du definitiv das
        coolste Geschenk. 
      </p>
      <div className="sm:pt-[44px] pt-20 flex justify-center">
        <Link
          href="/sandboxvr/voucher"
          className="block transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 py-5 px-10 leading-5 sm:tracking-[7px] rounded-md text-white bg-[#C54245] border-2 border-[#C54245]"
        >
          ZUM GUTSCHEIN
        </Link>
      </div>
    </section>
  );
};

export default MoveExperiences;

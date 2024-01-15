import Image from "next/image";

const AdventuresSection = () => {
  return (
    <section className="bg-mesh-gradient sm:h-[856px] bg-cover bg-no-repeat bg-fixed sm:px-[150px] sm:pt-[150px] sm:pb-[110px]">
      <Image
        className="-rotate-6"
        src="/NextLevel.webp"
        width={300}
        height={118}
        alt="next level logo"
      />
      <h1 className="uppercase font-medium text-xl text-[#6F6F6F] tracking-[10px] leading-6 pt-5">
        WEITERE ERLEBNISSE
      </h1>
      <h2 className="pt-5 tracking-[10px] leading-[72px] text-[54px] font-bold uppercase">
        Unsere Abenteuer
      </h2>
      <p className="pt-6 leading-6 text-white text-[15px]">
        Erlebe weitere Abenteuer in unserer NextLevel Area. Du kannst die
        Erlebnisse auch als Paket buchen und habt zusammen einen unvergesslichen
        tollen Tag! Ob völlig neue Spielmodi im Lasertag, Rätselspass der
        anderen Art im Escaperoom oder VR-Minigames in der HOLOGATE-Arena –
        bleibende Erinnerungen und tolle Erlebnisse sind garantiert!
      </p>
      <p className="font-bold leading-6 text-[15px] pt-8 text-white">Klick auf das Erlebnis und erfahre mehr:</p>
      <div className="grid grid-cols-4 sm:pt-[84px]">
        <a href="https://escaperoom-alsfeld.de/" className="flex">
          <Image className="object-contain transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110" src="/Logo_Escape_Room_Alsfeld_weiss_print-600x210.webp" width={285} height={100} alt="Escape Room Logo" />
        </a>
        <a href="https://nextlevel-erlebnisse.de/lue" className="flex justify-center">
          <Image className="object-contain transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110" src="/lu.webp" width={125} height={113} alt="LU Logo" />
        </a>
        <a href="https://nextlevel-erlebnisse.de/lue" className="flex justify-center">
          <Image className="object-contain transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110" src="/hologate.webp" width={285} height={100} alt="Hologate Logo" />
        </a>
        <a href="https://nextlevel-erlebnisse.de/lue" className="flex justify-center">
          <Image className="object-contain transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110" src="/lasertag.webp" width={285} height={160.5} alt="Lasergate Logo" />
        </a>
      </div>
    </section>
  );
};

export default AdventuresSection;

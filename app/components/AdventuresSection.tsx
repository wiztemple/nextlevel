import Image from "next/image";

const AdventuresSection = () => {
  return (
    <section className="bg-mesh-gradient sm:h-[856px] bg-cover bg-no-repeat bg-fixed sm:px-[150px] px-5 sm:pt-[150px] pt-20 sm:pb-[110px] pb-20">
      <div className="sm:block flex justify-center">
        <Image
          className="-rotate-6 sm:block hidden"
          src="/NextLevel.webp"
          width={300}
          height={118}
          alt="next level logo"
        />
        <Image
          className="-rotate-6 sm:hidden block"
          src="/NextLevel.webp"
          width={200}
          height={90}
          alt="next level logo"
        />
      </div>
      <h1 className="uppercase font-medium sm:text-xl text-sm text-[#6F6F6F] sm:tracking-[10px] tracking-[3px] leading-6 sm:pt-5 pt-8">
        WEITERE ERLEBNISSE
      </h1>
      <h2 className="pt-5 sm:tracking-[10px] tracking-[5px] sm:leading-[72px] leading-snug sm:text-[54px] text-4xl font-bold uppercase text-white">
        Unsere Abenteuer
      </h2>
      <p className="pt-6 leading-6 text-white text-[15px]">
        Erlebe weitere Abenteuer in unserer NextLevel Area. Du kannst die
        Erlebnisse auch als Paket buchen und habt zusammen einen unvergesslichen
        tollen Tag! Ob völlig neue Spielmodi im Lasertag, Rätselspass der
        anderen Art im Escaperoom oder VR-Minigames in der HOLOGATE-Arena –
        bleibende Erinnerungen und tolle Erlebnisse sind garantiert!
      </p>
      <p className="font-bold leading-6 text-[15px] pt-8 text-white">
        Klick auf das Erlebnis und erfahre mehr:
      </p>
      <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-0 gap-10 sm:pt-[84px] pt-16 sm:px-0 px-10">
        <a href="https://escaperoom-alsfeld.de/" className="flex">
          <Image
            className="object-contain transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110"
            src="/escaperoom.jpg"
            width={285}
            height={100}
            alt="Escape Room Logo"
          />
        </a>
        <a
          href="https://nextlevel-erlebnisse.de/lue"
          className="flex justify-center"
        >
          <Image
            className="object-contain transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110"
            src="/lu.webp"
            width={125}
            height={113}
            alt="LU Logo"
          />
        </a>
        <a
          href="https://nextlevel-erlebnisse.de/lue"
          className="flex justify-center"
        >
          <Image
            className="object-contain transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110"
            src="/hologate.webp"
            width={285}
            height={100}
            alt="Hologate Logo"
          />
        </a>
        <a
          href="https://nextlevel-erlebnisse.de/lue"
          className="flex justify-center"
        >
          <Image
            className="object-contain transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110"
            src="/lasertag.webp"
            width={285}
            height={160.5}
            alt="Lasergate Logo"
          />
        </a>
      </div>
    </section>
  );
};

export default AdventuresSection;

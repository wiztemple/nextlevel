import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="h-[72px] fixed z-50 min-h-[72px] w-full top-0 left-0 right-0 bg-transparent border-b border-b-white/10">
      <div className="flex justify-between items-center h-full sm:px-[75px]">
        <a href="/">
          <Image
            className=""
            src="/applogo.svg"
            alt="Sponsor"
            width={70}
            height={27.6}
            priority
          />
        </a>
        <div className="flex items-center gap-[18px]">
          <div className="flex gap-[33px]">
            <span>Erlebnisse</span>
            <span>Events</span>
          </div>
          <a href="/" className="bg-[#CB3078] text-white font-medium rounded-[5px] px-3 py-1.5">
            Buchen
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

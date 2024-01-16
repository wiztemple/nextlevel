import Image from "next/image";
import Link from 'next/link'

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
            <span className="group relative">
              Erlebnisse
              <div className="absolute hidden group-hover:block z-50 w-56 float-left top-[100%]">
                <div className="shadow-lg bg-gray-9 mt-4">
                  <a
                    href="/about-us"
                    className="text-[13px] py-3.5 uppercase px-3 block text-dark-2 border-b border-[#191919]/5"
                  >
                    SANDBOXVR
                  </a>
                </div>
              </div>
            </span>
            <Link href="/events" className="relative group">
              Events
              <div className="absolute hidden group-hover:block z-50 w-56 float-left top-[100%]">
                <div className="shadow-lg bg-gray-9 mt-4">
                  <Link
                    href="/events/children-birthday"
                    className="text-[13px] py-3.5 uppercase px-3 block text-dark-2 border-b border-[#191919]/5"
                  >
                    {`CHILDREN'S BIRTHDAY`}
                  </Link>
                  <a
                    href="/careers"
                    className="py-3 text-[13px] uppercase px-3 block text-dark-2 border-b border-[#191919]/5"
                  >
                    BACHELOR PARTY
                  </a>
                  <a
                    href="/careers"
                    className="py-3 text-[13px] uppercase px-3 block text-dark-2 border-b border-[#ebebeb]"
                  >
                    COMPANY EVENT
                  </a>
                  <a
                    href="/careers"
                    className="py-3 text-[13px] uppercase px-3 block text-dark-2 border-b border-[#ebebeb]"
                  >
                    CLUBS & GROUPS
                  </a>
                  <Link
                    href="/seminar"
                    className="py-3 text-[13px] uppercase px-3 block text-dark-2 border-b border-[#ebebeb]"
                  >
                    VR SEMINARS
                  </Link>
                  <a
                    href="/careers"
                    className="py-3 text-[13px] uppercase px-3 block text-dark-2 border-b border-[#ebebeb]"
                  >
                    SCHOOL CLASSES
                  </a>
                  <a
                    href="/careers"
                    className="py-3 text-[13px] uppercase px-3 block text-dark-2 border-b border-[#ebebeb]"
                  >
                    NEXTLEVEL CLUB
                  </a>
                </div>
              </div>
            </Link>
          </div>
          <a
            href="/"
            className="bg-[#CB3078] text-white font-medium rounded-[5px] px-3 py-1.5"
          >
            Buchen
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="h-[72px] sm:fixed z-[100] min-h-[72px] w-full top-0 left-0 right-0 sm:bg-transparent bg-black border-b border-b-white/10">
      <div className="sm:flex z-50 hidden justify-between items-center h-full sm:px-[75px]">
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
                  <Link
                    href="/events/bachelor-party"
                    className="py-3 text-[13px] uppercase px-3 block text-dark-2 border-b border-[#191919]/5"
                  >
                    BACHELOR PARTY
                  </Link>
                  <Link
                    href="/corporate-events"
                    className="py-3 text-[13px] uppercase px-3 block text-dark-2 border-b border-[#ebebeb]"
                  >
                    COMPANY EVENT
                  </Link>
                  <Link
                    href="/events/clubs-and-groups"
                    className="py-3 text-[13px] uppercase px-3 block text-dark-2 border-b border-[#ebebeb]"
                  >
                    CLUBS & GROUPS
                  </Link>
                  <Link
                    href="/seminar"
                    className="py-3 text-[13px] uppercase px-3 block text-dark-2 border-b border-[#ebebeb]"
                  >
                    VR SEMINARS
                  </Link>
                  <Link
                    href="/events/school-classes"
                    className="py-3 text-[13px] uppercase px-3 block text-dark-2 border-b border-[#ebebeb]"
                  >
                    SCHOOL CLASSES
                  </Link>
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
      <div className="sm:hidden flex justify-between items-center h-full w-full px-5">
        <a href="/">
          <Image
            className="block"
            src="/applogo.svg"
            alt="Sponsor"
            width={70}
            height={27.6}
            priority
          />
        </a>
        <button
          className="w-14 h-14 relative focus:outline-none bg-transparent rounded"
          onClick={handleClick}
        >
          <div className="block w-5 absolute left-6 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
            <span
              className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-500 ease-in-out ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`block absolute  h-0.5 w-5 text-white bg-current   transform transition duration-500 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block absolute  h-0.5 w-7 text-white bg-current transform  transition duration-500 ease-in-out ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

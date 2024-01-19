"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = ({ className = "bg-black" }: { className?: string }) => {
  const [header, setHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sandbox, setSandbox] = useState(false);
  const [events, setEvents] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <nav
      className={`${
        header ? className : "bg-transparent"
      } h-[72px] sm:fixed relative z-[1000] min-h-[72px] w-full top-0 left-0 right-0 border-b border-b-white/10`}
    >
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
                  <Link
                    href="/"
                    className="text-[13px] py-3.5 uppercase px-3 block text-dark-2 border-b border-[#191919]/5"
                  >
                    SANDBOXVR
                  </Link>
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
                  <Link
                    href="/nextlevelclub"
                    className="py-3 text-[13px] uppercase px-3 block text-dark-2 border-b border-[#ebebeb]"
                  >
                    NEXTLEVEL CLUB
                  </Link>
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
      {isOpen && (
        <div className="absolute w-full top-16 left-0 right-0 bottom-0 bg-dark-3 h-screen z-50 transition-opacity duration-500 ease-in-out">
          <button
            type="button"
            onClick={() => setSandbox(!sandbox)}
            className="block w-full text-white text-center bg-dark-3 py-4 border-y border-y-white relative transition-all duration-300 ease-in-out"
          >
            Erlebnisse
            <span className="absolute text-white right-5">{sandbox ? '-':'+'}</span>
          </button>
          {sandbox && (
            <Link
              href="/"
              className="text-[13px] py-4 uppercase px-3 text-center block bg-white text-dark-2 my-0.5 mx-auto"
            >
              SANDBOXVR
            </Link>
          )}
          <button
            type="button"
            onClick={() => setEvents(!events)}
            className="block w-full text-white text-center bg-dark-3 py-4 border-b border-b-white relative transition-all duration-300 ease-in-out"
          >
            Events
            <span className="absolute text-white right-5">{events ? '-':'+'}</span>
          </button>
          {events && (
            <div>
              <Link
                href="/events/children-birthday"
                className="text-[13px] py-4 uppercase px-3 text-center block bg-white text-dark-2 my-0.5 mx-auto"
              >
                {`CHILDREN'S BIRTHDAY`}
              </Link>
              <Link
                href="/events/bachelor-party"
                className="py-4 text-[13px] text-center uppercase px-3 block bg-white text-dark-2 my-0.5 mx-auto"
              >
                BACHELOR PARTY
              </Link>
              <Link
                href="/corporate-events"
                className="py-4 text-[13px] text-center uppercase px-3 block bg-white text-dark-2 my-0.5 mx-auto"
              >
                COMPANY EVENT
              </Link>
              <Link
                href="/events/clubs-and-groups"
                className="py-4 text-[13px] text-center uppercase px-3 block bg-white text-dark-2 my-0.5 mx-auto"
              >
                CLUBS & GROUPS
              </Link>
              <Link
                href="/seminar"
                className="py-4 text-center text-[13px] uppercase px-3 block bg-white text-dark-2 my-0.5 mx-auto"
              >
                VR SEMINARS
              </Link>
              <Link
                href="/events/school-classes"
                className="py-4 text-[13px] text-center uppercase px-3 block bg-white text-dark-2 my-0.5 mx-auto"
              >
                SCHOOL CLASSES
              </Link>
              <Link
                href="/nextlevelclub"
                className="py-4 text-[13px] text-center uppercase px-3 block bg-white text-dark-2 my-0.5 mx-auto"
              >
                NEXTLEVEL CLUB
              </Link>
            </div>
          )}
          <a
            href="/"
            className="bg-[#CB3078] text-white text-center font-medium px-3 py-3.5 block border-b border-b-white"
          >
            Buchen
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";

import { useState, useEffect } from "react";

type AccordionpProps = {
  children: React.ReactNode;
  title: string;
  id: string;
  active?: boolean;
  typeOne?: boolean;
};

export default function Accordion({
  children,
  title,
  id,
  active = false,
  typeOne = false,
}: AccordionpProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, [active]);

  return (
    <div className="py-2">
      <h2>
        <button
          className="flex items-center w-full font-bold text-left sm:text-lg text-sm py-2 gap-3 tracking-[1px] uppercase leading-5"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          {typeOne ? (
            <svg
              className={`${accordionOpen ? 'fill-[#D1DDE8]':'fill-white'} shrink-0 ml-4`}
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${
                  accordionOpen && "!rotate-180"
                }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                  accordionOpen && "!rotate-180"
                }`}
              />
            </svg>
          ) : (
            <svg
              className={`ml-4 shrink-0 transform origin-center transition duration-200 ease-out ${
                accordionOpen ? "!rotate-90" : ""
              }`}
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 14.4844V1.93555C0 1.05664 1.02539 0.617188 1.66016 1.25195L7.91016 7.50195C8.30078 7.89258 8.30078 8.52734 7.91016 8.91797L1.66016 15.168C1.02539 15.8027 0 15.3633 0 14.4844Z"
                fill={
                  accordionOpen ? `${typeOne ? "#D1DDE8" : "#57BFC7"}` : "#FFF"
                }
              />
            </svg>
          )}
          <span
            className={
              accordionOpen
                ? `${typeOne ? "text-[#D1DDE8]" : "text-aquagreen"}`
                : "text-white"
            }
          >
            {title}
          </span>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-sm text-white overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pl-4">
          <p className="py-6 sm:text-base text-sm">{children}</p>
        </div>
      </div>
    </div>
  );
}

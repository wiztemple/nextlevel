"use client";

import { useState, useEffect } from "react";

type AccordionpProps = {
  children: React.ReactNode;
  title: string;
  id: string;
  active?: boolean;
};

export default function NewsAccordion({
  children,
  title,
  id,
  active = false,
}: AccordionpProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, [active]);

  return (
    <div className="py-1.5">
      <h2>
        <button
          className="flex items-center bg-[#D1DDE8] w-full text-left sm:text-lg text-sm py-3 gap-3 tracking-[2px] leading-5"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
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
                fill="#1B242F"
              />
            </svg>
          <span
            className="text-dark-1"
          >
            {title}
          </span>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-sm text-dark-1 overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pl-4 border-b border-b-slate-200">
          <p className="py-6 sm:text-base text-sm">{children}</p>
        </div>
      </div>
    </div>
  );
}

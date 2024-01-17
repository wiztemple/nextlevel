import React from "react";

const SecondaryHero = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-mesh-gradient bg-cover bg-no-repeat bg-fixed relative">
      <div className="absolute left-0 w-full sm:-top-2 -top-6 overflow-hidden h-80">
        <svg
          width="1440"
          height="63"
          className="w-[calc(100%+1.3px)] sm:h-[80px]"
          viewBox="0 0 1440 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M720 62.307L-0.650391 3.843V0H1440.65V3.843L720 62.307Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="sm:px-[150px] px-5 sm:pt-[140px] pt-20 pb-[100px]">
        {children}
      </div>
    </section>
  );
};

export default SecondaryHero;

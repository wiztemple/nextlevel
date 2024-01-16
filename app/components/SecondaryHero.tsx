import React from "react";

const SecondaryHero = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-mesh-gradient bg-cover bg-no-repeat bg-fixed">
      <svg
        width="1440"
        height="63"
        // className="w-screen block"
        viewBox="0 0 1440 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M720 62.307L-0.650391 3.843V0H1440.65V3.843L720 62.307Z"
          fill="black"
        />
      </svg>
      <div className="sm:px-[150px] sm:pt-[80px] sm:pb-[76px]">{children}</div>
    </section>
  );
};

export default SecondaryHero;

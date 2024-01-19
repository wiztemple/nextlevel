import React from "react";

const SecondaryHero = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-mesh-gradient bg-cover bg-center bg-no-repeat sm:bg-fixed relative">
      {/* <div className="w-screen h-80" style={{ clipPath: 'polygon(50% 49%, 100% 50%, 51% 74%, 0% 50%)'}}>
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
      </div> */}
       <div className=" bg-black absolute -top-[92px] sm:-top-[125px] sm:h-[250px] h-[180px] w-full" style={{ clipPath: 'polygon(50% 50%, 100% 50%, 50% 80%, 0% 50%)'}}>
      </div>
      <div className="sm:px-[150px] px-5 sm:pt-[140px] pt-20 pb-[100px]">
        {children}
      </div>
    </section>
  );
};

export default SecondaryHero;

const LasertagCard = ({
  price,
  oldPrice,
  numberOfStudents,
  className,
  header,
  subHeader,
  extraItem,
  hoverClass,
}: {
  price: string;
  oldPrice: string;
  numberOfStudents: string;
  className: string;
  header: string;
  subHeader: string;
  extraItem?: string;
  hoverClass?: string;
}) => {
  return (
    <div className="rounded-[20px] bg-[#F9FAFA]">
      <div className={className}>
        <h1 className="text-xl font-semibold uppercase leading-7 text-center pt-[22px]">{header}</h1>
        <span className="block text-center text-white pt-1 text-xs leading-5 pb-6">{subHeader}</span>
      </div>
      <div className="pt-10 pb-[30px] px-6">
        <span className="text-center block text-[#555] text-sm line-through">
          €{oldPrice}
        </span>
        <div className="pt-2">
          <div className="flex justify-center">
            <div className="flex items-start">
              <sup className="text-base font-extrabold leading-4 text-[#555] pt-2">
                €
              </sup>
              <h1 className="text-[#555] text-[46px] font-extrabold leading-[44px]">
                {price}
              </h1>
            </div>
          </div>
          <span className="block text-center text-[#555] text-[15px]">
            Paketpreis
          </span>
          <span className="block pt-10 pb-[15px] border-b-2 border-b-gray-1/30 text-center text-[#555] font-bold text-[13px] leading-[14px]">
            {numberOfStudents} Stunde Aufenthalt
          </span>
          <span className="text-[13px] block py-[14px] text-[#54595F] text-center">
            Lasertag Turnier
          </span>
          {extraItem && <span className="text-[13px] block pt-[14px] text-[#54595F] text-center border-t-2 border-t-gray-1/30">
            {extraItem}
          </span>}
          <div className="flex justify-center pt-[15px]">
            <a
              href="/"
              className={`${hoverClass} hover:text-white uppercase w-fit transition duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-110 block px-[25px] py-3 rounded-2xl leading-6 text-[#1B1B1B] border border-[#1B1B1B] tracking-[4.3px] text-[15px] text-center`}
            >
              BUCHEN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LasertagCard;

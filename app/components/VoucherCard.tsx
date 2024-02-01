/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function VoucherCard({
  title,
  description,
  img,
  price,
  ribbonText,
}: {
  title: string;
  description: string;
  img: string;
  price: string;
  ribbonText?: string;
}) {
  return (
    <Link href="/" className="bg-[#F9FAFA] block rounded-[20px] relative overflow-hidden shadow-voucherShadow group">
      <div className="overflow-hidden relative">
        <div className="overflow-hidden h-[200px] rounded-tl-[10px] rounded-tr-[10px]">
          <div className="absolute bg-black/20 h-full w-full top-0 right-0 left-0 z-50"></div>
          <img
            className="object-cover h-[200px] rounded-tl-[10px] rounded-tr-[10px] w-full group-hover:scale-125 transition-all duration-1000 ease-in-out transform"
            src={`/${img}`}
            alt="blog image"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 transition-all"></div>
        </div>
        <div className="bg-appblue absolute origin-top sm:top-0 top-[45px] left-0 sm:mt-12 w-72 text-center -translate-x-[50%] -rotate-45">
          <div className="text-[11px] font-extrabold py-1.5 text-center -mr-[4rem] uppercase text-white">
            {ribbonText}
          </div>
        </div>
      </div>
      <div className="p-[35px]">
        <h1
          className="sm:text-2xl text-lg tracking-[1px] uppercase leading-8 text-center text-dark-1"
        >
          {title}
        </h1>
        <p className="text-[#3F444B] pt-[22px]">{description}</p>
        <p className="text-[#3F444B] pt-6 leading-5 text-sm text-center">Preis: {price} €</p>
        <div className="flex justify-center pt-18px]">
            <Link
              href="/"
              className="text-[#3F444B] block w-fit py-3 px-6 rounded-[3px] border-2 border-[#3F444B] tracking-[5px] leading-5 text-[15px] relative mt-6 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:text-white hover:scale-110 hover:bg-appblue hover:border-appblue"
            >
              Jetzt kaufen
            </Link>
          </div>
      </div>
    </Link>
  );
}

/* eslint-disable @next/next/no-img-element */

export default function BookCard({
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
    <a
      href="/"
      className="bg-[#D1DDE8] block rounded-[20px] relative overflow-hidden shadow-voucherShadow group"
    >
      <div className="overflow-hidden relative sm:block hidden">
        <div className="overflow-hidden h-[200px] rounded-tl-[10px] rounded-tr-[10px]">
          <div className="absolute bg-black/20 h-full w-full top-0 right-0 left-0 z-50"></div>
          <img
            className="object-cover h-[200px] rounded-tl-[10px] rounded-tr-[10px] w-full group-hover:scale-125 transition-all duration-1000 ease-in-out transform"
            src={`/${img}`}
            alt="blog image"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 transition-all"></div>
        </div>
      </div>
      <div className="sm:p-[35px] p-3 bg-[#D1DDE8]">
        <h1 className="sm:text-2xl text-lg tracking-[1px] uppercase leading-8 text-center text-dark-1">
          {title}
        </h1>
        <p className="text-[#3F444B] sm:pt-[22px] pt-1 sm:px-10 text-center">
          {description}
        </p>
        <div className="flex justify-center">
          <a
            href="/"
            className="text-appblue block w-fit py-3 px-6 rounded-[3px] border-2 border-appblue leading-5 text-[15px] relative sm:mt-6 mt-2 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:text-white hover:scale-110 hover:bg-appblue hover:border-appblue"
          >
            Jetzt buchen
          </a>
        </div>
      </div>
    </a>
  );
}

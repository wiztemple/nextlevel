/* eslint-disable @next/next/no-img-element */

export default function BasicCard({
  className,
  title,
  description,
  img,
  color,
  showRibbon,
  ribbonText,
  ribbonTextColor
}: {
  className: string;
  title: string;
  description: string;
  img: string;
  color: string;
  showRibbon?: boolean;
  ribbonText?: string;
  ribbonTextColor?: string;
}) {
  return (
    <div className="bg-[#F9FAFA] rounded-[10px] relative overflow-hidden">
      <a href="/" className="group overflow-hidden relative">
        <div className="overflow-hidden h-[200px] rounded-tl-[10px] rounded-tr-[10px]">
          <div className={`${className}`}></div>
          <img
            className="object-cover h-[200px] rounded-tl-[10px] rounded-tr-[10px] w-full group-hover:scale-110 transition-all duration-1000 ease-in-out transform"
            src={`/${img}`}
            alt="blog image"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 transition-all"></div>
        </div>
      </a>
      <div className="p-[35px]">
        <h1
          className="font-medium text-lg tracking-[2.5px] uppercase leading-5 text-center"
          style={{ color: `${color}` }}
        >
          {title}
        </h1>
        <p className="text-[#3F444B] pt-[17px]">{description}</p>
      </div>
      {showRibbon ? (
        <div className=" bg-black absolute origin-top top-0 float-right mt-12 mr-12 w-72 text-center translate-x-[50%] rotate-45">
          <div className="text-xs font-extrabold py-1.5 text-center pr-14 uppercase" style={{ color: `${ribbonTextColor}`}}>
            {ribbonText}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

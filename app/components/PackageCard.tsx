/* eslint-disable @next/next/no-img-element */
const PackageCard = ({
  imgUrl,
  title,
  description,
  location,
  price,
}: {
  imgUrl: string;
  title: string;
  description: string;
  location: string;
  price: string;
}) => {
  return (
    <div className="bg-[#333] shadow-shadowxl4 rounded transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:scale-[1.01]">
      <div className="">
        <img
          src={`/${imgUrl}`}
          className="h-[215px] w-full object-cover rounded-tl-[3px] rounded-tr-[3px]"
          alt=""
        />
      </div>
      <div className="rounded-bl rounded-br">
       <div className="p-4">
       <h1 className="text-white leading-5 font-semibold">{title}</h1>
        <p className="pt-2.5 leading-5 text-white text-sm">{description}</p>
        <span className="flex pt-5 items-center gap-1">
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.99935 1.77637C4.74185 1.77637 2.91602 3.6022 2.91602 5.8597C2.91602 8.9222 6.99935 13.443 6.99935 13.443C6.99935 13.443 11.0827 8.9222 11.0827 5.8597C11.0827 3.6022 9.25685 1.77637 6.99935 1.77637ZM6.99935 7.31803C6.19435 7.31803 5.54102 6.6647 5.54102 5.8597C5.54102 5.0547 6.19435 4.40137 6.99935 4.40137C7.80435 4.40137 8.45768 5.0547 8.45768 5.8597C8.45768 6.6647 7.80435 7.31803 6.99935 7.31803Z"
              fill="white"
            />
          </svg>
          <span className="text-xs text-white leading-3">{location}</span>
        </span>
       </div>
        <div className="pt-4 pb-4 px-4 flex justify-between border-t-2 border-t-black/15">
          <div>
            <span className="block text-xs text-white font-semibold">Ab</span>
            <span className="block text-white text-sm font-semibold">{price}</span>
          </div>
          <a href="/" className="bg-btn-gradient tex-white text-sm font-semibold leading-6 uppercase rounded block px-4 py-[10px]">Hier Buchen</a>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;

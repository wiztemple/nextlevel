const CorporateContact = ({ headerPosition }: { headerPosition?: boolean }) => {
  return (
    <section className="bg-mesh-gradient w-full bg-cover bg-fixed bg-no-repeat relative">
      <div
        className=" bg-black absolute -top-[91px] sm:-top-[125px] sm:h-[250px] h-[180px] w-full"
        style={{ clipPath: "polygon(51% 50%, 100% 50%, 50% 94%, 0% 50%)" }}
      ></div>
      <div className="sm:px-[150px] px-5 sm:pt-[150px] pt-20 pb-[70px]">
        {headerPosition ? (
          <div>
          <span className="block leading-2px] sm:text-lg text-center text-white text-[10px] font-medium uppercase tracking-[10px] pt-10">
            LASS UNS EINE NACHRICHT DA!
          </span>
          <h1 className="sm:text-[60px] text-center text-[22px] font-medium leading-[54px] uppercase pt-5 tracking-[1.8px]">
            KONTAKTFORMULAR
          </h1>
        </div>
        ):(
          <div>
          <span className="block leading-2px] text-white text-[10px] font-medium uppercase tracking-[10px]">
            LASS UNS EINE NACHRICHT DA!
          </span>
          <h1 className="text-start sm:text-[41px] text-[22px] font-medium leading-[54px] uppercase pt-5 tracking-[1.8px]">
            KONTAKTFORMULAR
          </h1>
        </div>
        )}
        <form className="bg-tranparent sm:p-[53px] sm:shadow-shadowForm rounded-[10px] sm:mt-[60px]">
          <p className="text-[15px] text-white leading-5">
            Mit Stern(*) gekennzeichnete Felder, sind Pflichtfelder
          </p>
          <div className="mb-2.5 pt-[26px]">
            <label
              htmlFor=""
              className="block mb-2 text-[15px] text-white leading-5"
            >
              Vor- und Nachname(Ansprechpartner)
            </label>
            <input
              type="text"
              id=""
              className="bg-transparent border border-[#EBEBEB] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              placeholder=""
              required
            />
          </div>
          <div className="mb-2.5">
            <label
              htmlFor=""
              className="block mb-2 text-[15px] text-white leading-5"
            >
              Telefonnummer/Handynummer(*)
            </label>
            <input
              type="text"
              id=""
              className="bg-transparent border border-[#EBEBEB] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              placeholder=""
              required
            />
          </div>
          <div className="mb-2.5">
            <label
              htmlFor=""
              className="block mb-2 text-[15px] text-white leading-5"
            >
              Name der Firma/des Vereins
            </label>
            <input
              type="text"
              id=""
              className="bg-transparent border border-[#EBEBEB] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              placeholder=""
              required
            />
          </div>
          <div className="mb-2.5">
            <label
              htmlFor=""
              className="block mb-2 text-[15px] text-white leading-5"
            >
              E-Mail-Adresse(*)
            </label>
            <input
              type="text"
              id=""
              className="bg-transparent border border-[#EBEBEB] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              placeholder=""
              required
            />
          </div>
          <div className="mb-2.5">
            <label
              htmlFor=""
              className="block mb-2 text-[15px] text-white leading-5"
            >
              Betreff
            </label>
            <input
              type="text"
              id=""
              className="bg-transparent border border-[#EBEBEB] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              placeholder=""
              required
            />
          </div>
          <div className="mb-2.5">
            <label
              htmlFor=""
              className="block mb-2 text-[15px] text-white leading-5"
            >
              Wunschtermin (falls bekannt)
            </label>
            <input
              type="date"
              id=""
              className="bg-transparent border border-[#EBEBEB] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4 placeholder:text-[#666666]"
              placeholder=""
              required
            />
          </div>
          <div className="mb-2.5">
            <label
              htmlFor=""
              className="block mb-2 text-[15px] text-white leading-5"
            >
              Deine Nachricht (optional)
            </label>
            <textarea
              id=""
              className="bg-transparent border border-[#EBEBEB] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
              rows={12}
            />
          </div>
          <button
            type="button"
            className="block w-full bg-[#EAA647] border-2 hover:bg-transparent hover:text-black border-[#EAA647] uppercase text-xs font-semibold leading-5 text-white rounded-full py-4 mt-[50px] mb-[62px]"
          >
            Senden
          </button>
        </form>
      </div>
    </section>
  );
};

export default CorporateContact;

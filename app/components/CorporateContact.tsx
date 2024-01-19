const CorporateContact = () => {
  return (
    <section className="bg-mesh-gradient w-full bg-cover bg-fixed bg-no-repeat relative">
      <div className=" bg-black absolute -top-[92px] sm:-top-[125px] sm:h-[250px] h-[180px] w-full" style={{ clipPath: 'polygon(50% 49%, 100% 50%, 51% 80%, 0% 50%)'}}>
        {/* <svg
          className="relative w-[calc(100vw+40px)] sm:-top-9 -top-8 z-50 left-0 right-0"
          width="1778"
          height="142"
          viewBox="0 0 1778 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M889 142L0 8.75834V0H1778V8.75834L889 142Z" fill="black" />
        </svg> */}

      </div>
      <div className="sm:px-[150px] px-5 sm:pt-[150px] pt-20 pb-[70px]">
        <span className="block leading-2px] text-white text-[10px] font-medium uppercase tracking-[10px]">
          LASS UNS EINE NACHRICHT DA!
        </span>
        <h1 className="text-start sm:text-[41px] text-[22px] font-medium leading-[54px] uppercase pt-5 tracking-[1.8px]">
          KONTAKTFORMULAR
        </h1>
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

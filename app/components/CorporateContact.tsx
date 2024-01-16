const CorporateContact = () => {
  return (
    <section className="bg-mesh-gradient bg-cover bg-fixed bg-no-repeat">
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
      <div className="sm:px-[150px] sm:pt-[113px] sm:pb-[70px]">
        <span className="block leading-2px] text-white text-[10px] font-medium uppercase tracking-[10px]">
          LASS UNS EINE NACHRICHT DA!
        </span>
        <h1 className="text-start sm:text-[41px] text-[22px] font-medium leading-[54px] uppercase pt-5 tracking-[1.8px]">
          KONTAKTFORMULAR
        </h1>
        <form className="bg-tranparent sm:p-[53px] shadow-shadowForm rounded-[10px] sm:mt-[60px]">
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

/* eslint-disable @next/next/no-img-element */
const SeminarContact = () => {
  return (
    <section className="bg-mesh-gradient bg-fixed pt-[70px]">
      <h1 className="uppercase hidden sm:block tracking-[10px] leading-5 font-medium text-[30px] text-center text-white">
        TEAMWORK, ACTION, SPASS!
      </h1>
      <h1 className="uppercase tracking-[10px] sm:hidden block leading-[50px] pb-7 font-bold text-[22px] text-center text-white">
        TEAMWORK, <br /> ACTION, <br /> SPASS!
      </h1>
      <div className="grid sm:grid-cols-5 grid-cols-1 bg-black sm:mt-[70px] sm:px-[150px]">
        <img
          className="object-cover h-[285px] w-full"
          src="/hologate-img.jpg"
          alt="Hologate event"
        />
        <img
          className="object-cover h-[285px] w-full"
          src="/vr-book.jpg"
          alt="VR Book"
        />
        <img
          className="object-cover h-[285px] w-full"
          src="/lue-image.jpg"
          alt="Lue event"
        />
        <img
          className="object-cover h-[285px] w-full"
          src="/vr-event2.jpg"
          alt="VR Event 2"
        />
        <img
          className="object-cover h-[285px] w-full"
          src="/vr-event.jpg"
          alt="VR Event"
        />
      </div>
      <div>
        <h1 className="text-center sm:text-[41px] text-[22px] font-medium leading-[54px] uppercase sm:pt-[85px] pt-14 tracking-[1.8px]">
          KONTAKTFORMULAR
        </h1>
        <div className="flex justify-center px-5 sm:px-0">
          <div className="sm:w-[800px] w-full">
            <h2 className="text-white py-[22px] text-[15px] font-bold leading-5">
              Mit Stern(*) gekennzeichnete Felder, sind Pflichtfelder
            </h2>
            <form>
              <div className="mb-2.5">
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-bold text-white leading-5"
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
                  className="block mb-2 text-sm font-bold text-white leading-5"
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
                  className="block mb-2 text-sm font-bold text-white leading-5"
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
                  className="block mb-2 text-sm font-bold text-white leading-5"
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
                  className="block mb-2 text-sm font-bold text-white leading-5"
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
                  className="block mb-2 text-sm font-bold text-white leading-5"
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
                  className="block mb-2 text-sm font-bold text-white leading-5"
                >
                  Deine Nachricht (optional)
                </label>
                <textarea id="" className="bg-transparent border border-[#EBEBEB] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5" rows={12} />
              </div>
              <button type="button" className="block w-full bg-[#EAA647] border-2 hover:bg-transparent hover:text-black border-[#EAA647] uppercase text-xs font-semibold leading-5 text-white rounded-full py-4 mt-[50px] mb-[62px]">Senden</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeminarContact;

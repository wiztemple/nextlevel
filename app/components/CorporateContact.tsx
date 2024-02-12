"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';
const CorporateContact = ({ headerPosition }: { headerPosition?: boolean }) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      setLoading(true);

      try {
        await emailjs.sendForm(
          "default_service",
          "template_39emn3c",
          form.current,
          {
            publicKey: "GwfgS4S3GAyerKFUz",
          }
        );

        toast.success("Email sent successfully!")
        form.current.reset();
        setLoading(false);
      } catch (error) {
        console.error("Error sending email:", error);
        toast.error("Failed to send email. Please try again")
      } finally {
        setLoading(false);
      }
    } else {
      console.error("Form reference is null.");
    }
  };
  return (
    <section className="bg-mesh-gradient w-full bg-cover sm:bg-fixed bg-no-repeat relative">
      <div
        className=" bg-black absolute -top-[91px] sm:-top-[125px] sm:h-[250px] h-[180px] w-full"
        style={{ clipPath: "polygon(51% 50%, 100% 50%, 50% 94%, 0% 50%)" }}
      ></div>
      <div className="sm:px-[150px] px-5 sm:pt-[170px] pt-20 pb-[70px]">
        {headerPosition ? (
          <div>
            <span className="block leading-2px] sm:text-lg text-center text-white text-[10px] font-medium uppercase tracking-[10px] pt-10">
              LASS UNS EINE NACHRICHT DA!
            </span>
            <h1 className="sm:text-[60px] text-center text-[22px] font-medium leading-[54px] uppercase pt-5 tracking-[1.8px] text-white">
              KONTAKTFORMULAR
            </h1>
          </div>
        ) : (
          <div>
            <span className="block leading-2px] text-white text-[15px] pt-12 sm:pt-0 font-medium uppercase tracking-[10px]">
              LASS UNS EINE NACHRICHT DA!
            </span>
            <h1 className="text-start sm:text-[41px] text-3xl font-medium leading-[54px] uppercase pt-5 tracking-[1.8px] text-white">
              KONTAKTFORMULAR
            </h1>
          </div>
        )}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-tranparent sm:p-[53px] shadow-shadowForm p-7 rounded-[10px] sm:mt-[60px] mt-[50px]"
        >
          <p className="text-[15px] text-white leading-5">
            Mit Stern(*) gekennzeichnete Felder, sind Pflichtfelder
          </p>
          <div className="mb-2.5 pt-[26px]">
            <label
              htmlFor="name"
              className="block mb-2 text-[15px] text-white leading-5"
            >
              Vor- und Nachname(Ansprechpartner)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-transparent border text-white border-[#EBEBEB] text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              placeholder=""
              required
            />
          </div>
          <div className="mb-2.5">
            <label
              htmlFor="telephone"
              className="block mb-2 text-[15px] text-white leading-5"
            >
              Telefonnummer/Handynummer(*)
            </label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              className="bg-transparent border text-white border-[#EBEBEB] text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              placeholder=""
              required
            />
          </div>
          <div className="mb-2.5">
            <label
              htmlFor="company"
              className="block mb-2 text-[15px] text-white leading-5"
            >
              Name der Firma/des Vereins
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="bg-transparent border text-white border-[#EBEBEB] text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              placeholder=""
              required
            />
          </div>
          <div className="mb-2.5">
            <label
              htmlFor="email"
              className="block mb-2 text-[15px] text-white leading-5"
            >
              E-Mail-Adresse(*)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-transparent border text-white border-[#EBEBEB] text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              placeholder=""
              required
            />
          </div>
          <div className="mb-2.5">
            <label
              htmlFor="subject"
              className="block mb-2 text-[15px] text-white leading-5"
            >
              Betreff
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="bg-transparent border text-white border-[#EBEBEB] text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
              placeholder=""
              required
            />
          </div>
          <div className="mb-2.5">
            <label
              htmlFor="date"
              className="block mb-2 text-[15px] text-white leading-5"
            >
              Wunschtermin (falls bekannt)
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="bg-transparent border text-white border-[#EBEBEB] text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4 placeholder:text-[#666666]"
              placeholder=""
              required
            />
          </div>
          <div className="mb-2.5">
            <label
              htmlFor="message"
              className="block mb-2 text-[15px] text-white leading-5"
            >
              Deine Nachricht (optional)
            </label>
            <textarea
              id="message"
              name="message"
              className="bg-transparent border border-[#EBEBEB] text-white text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5"
              rows={12}
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-[#EAA647] border-2 hover:bg-transparent text-white hover:text-black border-[#EAA647] uppercase text-xs font-semibold leading-5 rounded-full py-4 mt-[50px] mb-[62px]"
            disabled={loading}
          >
            {loading ? "Sending..." : "Senden"}
          </button>
        </form>
      </div>
      <Toaster />
    </section>
  );
};

export default CorporateContact;

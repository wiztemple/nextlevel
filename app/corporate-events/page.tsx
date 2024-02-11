/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SecondaryHero from "../components/SecondaryHero";
import CorporateContact from "../components/CorporateContact";

const CorporateEvents = () => {
  return (
    <main className="break-words">
      <Navbar />
      <Hero className="sm:min-h-[702px] min-h-[582px] flex justify-center items-center w-screen transition duration-300 ease-in-out bg-[url('/firmenevents.webp')] bg-cover bg-top sm:bg-center bg-no-repeat">
        <div className="sm:pt-64 pt-20 sm:px-0 px-5 sm:pb-0 pb-10">
          <h1 className="text-center text-[19px] leading-6 sm:tracking-[5px] tracking-widest uppercase text-aquagreen">
            Die besten events für Dich und dein team
          </h1>
          <h2 className="text-center sm:text-[71px] text-3xl font-medium uppercase tracking-[2.1px] pt-10 sm:leading-[80px] leading-snug text-white">
            Erfolgreiche <br />
            Firmenevents
          </h2>
          <p className="pt-[22px] sm:text-[15px] text-sm leading-5 text-center sm:px-[160px] text-white">
            Erfolgreiche Firmenevents sind für dein Unternehmen von großer
            Bedeutung, denn sie fördern nicht nur das Zusammengehörigkeitsgefühl
            und die Motivation deiner Mitarbeiterinnen und Mitarbeiter, sondern
            stärken auch das Image deines Unternehmens. 
          </p>
        </div>
      </Hero>
      {/* <SecondaryHero>
        <h1 className="text-xl sm:text-[22px] leading-8 tracking-[1px] uppercase pt-10 sm:pt-0 text-white">
          WARUM BEI UNS?
        </h1>
        <h2 className="uppercase sm:text-[40px] text-3xl font-medium sm:tracking-[2px] text-white sm:leading-[54px] leading-snug pt-5">
          WEIL'S UNVERGESSLICH WIRD
        </h2>
        <p className="pt-[22px] text-white sm:text-base text-sm">
          Ein gut geplantes und durchgeführtes Event kann das Vertrauen in Ihre
          Marke und Ihr Unternehmen stärken und Sie als attraktiven Arbeitgeber
          positionieren. Investieren Sie in erfolgreiche Firmenevents und zeigen
          Sie Ihren Mitarbeitern und Kunden, dass Sie ein Unternehmen sind, dem
          nicht nur der wirtschaftliche Erfolg, sondern auch das Wohlbefinden
          und die Zufriedenheit seiner Stakeholder wichtig sind.
        </p>
        <p className="text-white pt-12 block sm:text-base text-sm">
        Ob Weihnachtsfeier, Sommerfest, Betriebsausflug oder Teambuilding -bei uns sind Sie auf jeden Fall an der richtigen Adresse für ein
unvergessliches Event!
        </p>
      </SecondaryHero> */}
      {/* <section className="bg-black sm:block hidden">
        <div className="grid sm:grid-cols-6 grid-cols-1">
          <img
            className="object-cover h-[288px] w-full"
            src="/hologate_event.jpg"
            alt="Hologate event"
          />
          <img
            className="object-cover h-[288px] w-full"
            src="/lue-image.jpg"
            alt="Lue event"
          />
          <img
            className="object-cover h-[288px] w-full"
            src="/vr-event.jpg"
            alt="VR Event"
          />
          <img
            className="object-cover h-[288px] w-full"
            src="/vr-event2.jpg"
            alt="VR Event 2"
          />
          <img
            className="object-cover h-[288px] w-full"
            src="/vr-book.jpg"
            alt="VR Book"
          />
          <img
            className="object-cover h-[288px] w-full"
            src="/vr-event2.jpg"
            alt="VR Event 2"
          />
        </div>
      </section> */}
      <SecondaryHero>
        <h1 className="text-xl sm:text-[22px] leading-8 tracking-[1px] uppercase pt-10 sm:pt-0 text-white">
          WARUM BEI UNS?
        </h1>
        <h2 className="uppercase sm:text-[40px] text-3xl font-medium sm:tracking-[2px] text-white sm:leading-[54px] leading-snug pt-5">
          WEIL'S UNVERGESSLICH WIRD
        </h2>
        <p className="pt-[22px] text-white sm:text-base text-sm">
          Ein gut geplantes und durchgeführtes Event kann das Vertrauen in Ihre
          Marke und Ihr Unternehmen stärken und Sie als attraktiven Arbeitgeber
          positionieren. Investieren Sie in erfolgreiche Firmenevents und zeigen
          Sie Ihren Mitarbeitern und Kunden, dass Sie ein Unternehmen sind, dem
          nicht nur der wirtschaftliche Erfolg, sondern auch das Wohlbefinden
          und die Zufriedenheit seiner Stakeholder wichtig sind.
        </p>
        <p className="text-white pt-12 block sm:text-base text-sm">
          Ob Weihnachtsfeier, Sommerfest, Betriebsausflug oder Teambuilding -bei
          uns sind Sie auf jeden Fall an der richtigen Adresse für ein
          unvergessliches Event!
        </p>
      </SecondaryHero>
      <CorporateContact />
      {/* <section className="bg-black sm:px-[150px] px-5 sm:pt-[100px] pt-20 sm:pb-[85px] pb-[50px]">
        <h1 className="uppercase sm:text-lg text-sm text-white">
          IHR HABT GROSSES VOR?
        </h1>
        <h2 className="uppercase sm:text-[40px] text-3xl font-medium leading-[54px] tracking-[2px] text-white pt-5">
          Events für Firmen
        </h2>
        <p className="pt-[22px] leading-6 sm:text-base text-sm text-white">
          Wir stellen für deine Firmenfeier oder Teambuildings gerne ein tolles
          Programm zusammen, bei dem jeder Spaß hat! Dafür füllst du uns am
          besten das Kontaktformular aus oder rufst uns direkt an, damit wir mit
          dir zusammen ein Programm erstellen können. Grundsätzlich haben wir
          auch Platz für große Event mit bis zu 500 Personen. 
        </p>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-[30px] sm:mt-[52px] mt-16 p-[15px]">
          <BasicCard
            className=""
            img="cardimage-1.jpg"
            color="#F8A120"
            title="Weihnachtsfeier"
            description="Jeder kennt und fürchtet sie: öde und
            langweilige Weihnachtsfeiern, bei
            denen jeder nur darauf achtet, nicht
            als erster gehen zu wollen. Das gibt es
            bei uns aber nicht!"
          />
          <BasicCard
            className=""
            img="cardimage-1.jpg"
            color="#F8A120"
            title="Tagung / Seminar"
            description="Bei uns bekommt ihr auch ein Rundum-
            Sorglos-Paket für eure Weiterbildung,
            Seminar oder Tagung - mit unseren
            Seminarräumen, Catering und unseren
            Erlebnissen ein tolles Zusammenspiel."
          />
          <BasicCard
            className=""
            img="cardimage-1.jpg"
            color="#F8A120"
            title="TEAMBUILDING"
            description="Zusammenhalt, Kommunikation und
            Teamstärke! Genau das braucht es bei
            unseren Events und das mit einer
            großen Portion Spaß und
            Abenteuer!"
          />
        </div>
      </section> */}
      {/* <section className="bg-mesh-gradient sm:bg-fixed sm:bg-center bg-bottom bg-cover bg-no-repeat sm:py-20">
        <h1 className="uppercase hidden sm:block tracking-[10px] leading-5 font-medium text-[30px] text-center text-white">
          TEAMWORK, ACTION, SPASS!
        </h1>
        <h1 className="uppercase tracking-[10px] sm:hidden block leading-[50px] py-7 font-bold text-[22px] text-center text-white">
          TEAMWORK, <br /> ACTION, <br /> SPASS!
        </h1>
      </section> */}
      <section className="bg-black sm:px-[150px] px-5 py-[70px]">
        <h1 className="uppercase sm:text-[39px] text-3xl tracking-[2px] font-medium text-white sm:leading-[54px] leading-snug">
          Unsere ERlebnisse
        </h1>
        <p className="pt-5 text-white leading-5 sm:text-[15px] text-sm">
          Falls ihr mehr über unsere Erlebnisse wissen wollt, dann drückt auf
          das jeweilige Logo:
        </p>
        <div className="grid sm:grid-cols-4 grid-cols-2 pt-[60px] sm:gap-0 gap-8">
          <div className="flex justify-center">
            <Image
              src="/sbvr-logo.webp"
              className="opacity-30 transition-all duration-1000 hover:opacity-100 object-contain"
              width={137.5}
              height={121}
              alt="Escape Room logo"
            />
          </div>
        </div>
      </section>
      <section className="sm:px-[150px] px-5 sm:pt-[70px] sm:pb-[109px] pb-[100px] bg-black">
        <div className="sm:grid grid-cols-3 hidden">
          <p className="uppercase leading-6 tracking-[2px] font-medium text-center pt-6 text-white">
            Schreib uns, ruf uns an <br /> oder schick eine Mail. <br /> ✌
          </p>
          <div className="flex justify-center">
            <div className="w-full">
              <div className="flex justify-center">
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48.6824 35.791C49.4637 36.1816 50.0496 37.0605 50.0496 38.0371C50.0496 38.1348 50.0496 38.3301 50.0496 38.5254L47.7059 48.6816C47.4129 49.7559 46.534 50.4395 45.4598 50.4395C20.3621 50.4395 0.147266 30.2246 0.147266 5.12695C0.147266 4.05273 0.83086 3.17383 1.90508 2.88086L12.0613 0.537109C12.2566 0.537109 12.452 0.439453 12.5496 0.439453C13.5262 0.439453 14.4051 1.02539 14.7957 1.9043L19.4832 12.8418C19.5809 13.1348 19.6785 13.4277 19.6785 13.7207C19.6785 14.502 19.2879 15.1855 18.7996 15.5762L12.8426 20.459C16.4559 28.0762 22.5105 34.1309 30.1277 37.7441L35.0105 31.7871C35.4012 31.2988 36.0848 30.9082 36.7684 30.9082C37.159 30.9082 37.452 31.0059 37.7449 31.1035L48.6824 35.791Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="block text-center tracking-[5px] uppercase leading-5 pt-6 text-white">
                TELEFON
              </span>
              <span className="block text-center text-white text-sm leading-5 pt-[11px]">
                +41 43 311 9906
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full">
              <div className="flex justify-center">
                <svg
                  width="52"
                  height="54"
                  viewBox="0 0 52 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.0965 2.12305C47.4168 0.169922 51.616 3.00195 51.0301 6.9082L45.2684 44.7012C44.9754 46.166 44.1941 47.3379 42.9246 48.1191C42.1434 48.5098 41.3621 48.7051 40.5809 48.7051C39.9949 48.7051 39.409 48.6074 38.823 48.3145L27.8855 43.8223L23.5887 49.584C20.952 53.1973 15.1902 51.3418 15.1902 46.752V38.5488L3.95977 33.959C0.346485 32.4941 0.0535164 27.5137 3.47149 25.5605L44.0965 2.12305ZM19.8777 46.752L23.3934 41.9668L19.8777 40.502V46.752ZM40.5809 44.0176L46.4402 6.12695L5.81524 29.5645L16.2645 33.959L36.9676 15.9902C38.3348 14.7207 40.2879 16.4785 39.3113 18.041L25.5418 37.7676L40.5809 44.0176Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="block text-center tracking-[5px] uppercase leading-5 pt-6 text-white">
                E-MAIL
              </span>
              <span className="block text-center text-white text-sm leading-5 pt-[11px]">
                zurich@sandboxvr.com
              </span>
            </div>
          </div>
        </div>
        <div className="sm:hidden block">
          <p className="uppercase leading-6 tracking-[2px] font-medium text-center pt-6 text-white">
            Schreib uns, ruf uns an <br /> oder schick eine Mail. ✌
          </p>
          <div className="grid grid-cols-2 pt-8 items-center gap-5">
            <div className="flex justify-center">
              <div className="w-full">
                <div className="flex justify-center">
                  <svg
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M48.6824 35.791C49.4637 36.1816 50.0496 37.0605 50.0496 38.0371C50.0496 38.1348 50.0496 38.3301 50.0496 38.5254L47.7059 48.6816C47.4129 49.7559 46.534 50.4395 45.4598 50.4395C20.3621 50.4395 0.147266 30.2246 0.147266 5.12695C0.147266 4.05273 0.83086 3.17383 1.90508 2.88086L12.0613 0.537109C12.2566 0.537109 12.452 0.439453 12.5496 0.439453C13.5262 0.439453 14.4051 1.02539 14.7957 1.9043L19.4832 12.8418C19.5809 13.1348 19.6785 13.4277 19.6785 13.7207C19.6785 14.502 19.2879 15.1855 18.7996 15.5762L12.8426 20.459C16.4559 28.0762 22.5105 34.1309 30.1277 37.7441L35.0105 31.7871C35.4012 31.2988 36.0848 30.9082 36.7684 30.9082C37.159 30.9082 37.452 31.0059 37.7449 31.1035L48.6824 35.791Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="block text-center uppercase leading-5 pt-6">
                  TELEFON
                </span>
                <span className="block text-center text-white text-sm leading-5 pt-[11px]">
                  +41 43 311 9906
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full">
                <div className="flex justify-center">
                  <svg
                    width="52"
                    height="54"
                    viewBox="0 0 52 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44.0965 2.12305C47.4168 0.169922 51.616 3.00195 51.0301 6.9082L45.2684 44.7012C44.9754 46.166 44.1941 47.3379 42.9246 48.1191C42.1434 48.5098 41.3621 48.7051 40.5809 48.7051C39.9949 48.7051 39.409 48.6074 38.823 48.3145L27.8855 43.8223L23.5887 49.584C20.952 53.1973 15.1902 51.3418 15.1902 46.752V38.5488L3.95977 33.959C0.346485 32.4941 0.0535164 27.5137 3.47149 25.5605L44.0965 2.12305ZM19.8777 46.752L23.3934 41.9668L19.8777 40.502V46.752ZM40.5809 44.0176L46.4402 6.12695L5.81524 29.5645L16.2645 33.959L36.9676 15.9902C38.3348 14.7207 40.2879 16.4785 39.3113 18.041L25.5418 37.7676L40.5809 44.0176Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="block text-center uppercase leading-5 pt-6">
                  E-MAIL
                </span>
                <span className="block text-center text-white text-sm leading-5 pt-[11px]">
                  zurich@sandboxvr.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-aquagreen sm:block hidden text-center uppercase tracking-[10px] leading-[30px] font-medium text-[22px] sm:pt-[89px]">
          WIR FREUEN UNS AUF EURE ANFRAGE!
        </h1>
      </section>
      <Footer />
    </main>
  );
};

export default CorporateEvents;

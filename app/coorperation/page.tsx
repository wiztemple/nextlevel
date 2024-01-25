import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Coorperations = () => {
  return (
    <main className="break-words">
      <Navbar />
      <Hero className="flex relative sm:h-[797px] h-[400px] justify-center items-center w-screen transition duration-300 ease-in-out sm:bg-[url('/unbenannt-2.webp')] bg-[url('/opening.webp')] bg-cover bg-center bg-no-repeat">
        <div className="absolute top-0 left-0 right-0 bg-black/40 h-full"></div>
        <div className="relative z-50">
          <h1 className="sm:text-lg text-[15px] text-aquagreen uppercase leading-7 text-center">
            LASST UNS REDEN
          </h1>
          <h2 className="text-white sm:text-[57px] text-3xl font-bold text-center tracking-[10px] leading-[80px] uppercase">
            Kooperationen
          </h2>
        </div>
      </Hero>
      <section className="bg-black sm:px-[150px] px-5 sm:pt-[70px] pt-12 pb-10">
        <h1 className="uppercase tracking-[4px] text-sm text-aquagreen leading-5 text-center">
          EINMALIG IN DEUTSCHLAND
        </h1>
        <div className="flex justify-center pt-5 sm:px-0 px-5">
          <Image
            src="/sanndbox_logo_white.webp"
            alt=""
            width={592}
            height={91}
            className="object-contain"
          />
        </div>
        <div className="bg-black mt-10">
          <video
            className="elementor-video"
            src="https://video.sandboxvr.com/hypevideo_1080p.mp4"
            controls
            muted
            controlsList="nodownload"
          ></video>
        </div>
      </section>
      <section className="bg-[#EFF3F7] sm:px-[170px] px-10 sm:pt-[124px] pt-[90px] sm:pb-[78px]">
        <div className="">
          <h1 className="text-dark-1 text-lg">
            DIE 1.
            <span className="font-bold">
              SANDBOX VR LOCATION IN DEUTSCHLAND
            </span>
          </h1>
          <h2 className="uppercase text-dark-1 sm:text-[55px] text-[38px] pt-6 sm:tracking-[10px] tracking-[3px] sm:leading-[72px] leading-snug font-bold">
            Erobert das Holodeck!
          </h2>
          <p className="text-dark-1 pt-6 sm:pt-0 pb-8 text-[15px]">
            In Alsfeld hat jetzt Deutschlands erster Standort von SandboxVR
            eröffnet, in dem die Besucher in ein hyperreales Virtual Reality
            Erlebnis abtauchen können. Auf einer Fläche von über 200
            Quadratmetern befinden sich zwei Holodecks. In diesen warten auf
            Dich, ausgestattet mit modernster Technik, atemberaubende Erlebnisse
            . Eine neue Form der Unterhaltung, die man erlebt haben muss!
          </p>
        </div>
      </section>
      <section className="bg-[#EFF3F7] sm:px-[100px] sm:pt-[60px] pt-10 sm:pb-[100px] pb-[120px]">
        <div className="sm:flex">
          <div className="sm:w-3/5">
            <div className="shad shadow-coopCard sm:p-[50px] p-[30px] ml-16">
              <h1 className="text-dark-1 sm:text-[39px] text-[34px] sm:tracking-[10px] tracking-[5px] font-extrabold uppercase">
                Komm vorbei
              </h1>
              <h2 className="text-dark-1 pt-6 text-[15px] font-bold">
                Ein einzigartiges Erlebnis wartet auf Dich und Deine Begleiter!
              </h2>
              <p className="text-dark-1 pt-8 text-[15px] leading-6">
                Als Streamer, Influencer oder Redakteur aus den Bereichen
                Gaming/VR/etc kannst Du gerne einen Termin mit uns ausmachen.
                Dadurch hast du die Chance, exklusiven Content für deinen Kanal
                zu generieren. Ob du live gehen, ein VLOG / Erfahrungsbericht
                drehen oder darüber schreiben willst – hier lassen wir dir als
                Influencer, Streamer, Youtuber, Tester, etc. freie Hand. 
              </p>
            </div>
          </div>
          <div className="sm:block hidden">
            <Image src="/glasses.png" alt="glasses" width={420} height={176} />
          </div>
        </div>
      </section>
      <section className="bg-[#1B242F] sm:px-[150px]">
        <div className="flex sm:flex-row flex-col-reverse w-full">
          <div className="py-12 sm:w-1/2 w-full">
            <iframe
              width="100%"
              height="410"
              frameBorder="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Im%20Grund%203,%2036304%20Alsfeld+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Find Population on Map
              </a>
            </iframe>
          </div>
          <div className="sm:pt-[80px] pt-10 sm:px-10 px-5 sm:w-1/2 w-full">
            <h1 className="sm:text-[38px] text-3xl font-bold uppercase tracking-[4.5px] sm:leading-[48px] leading-snug">
              Wir laden Dich herzlich ein!
            </h1>
            <p className="text-[15px] pt-6 text-white leading-5">
              Sag uns doch einfach Bescheid, wann du/ihr vorbeikommen wollt. Ein
              Anruf oder eine Mail genügt – wir freuen uns auf Dich!
            </p>
            <div className="grid grid-cols-2 sm:pt-[70px] pt-[50px]">
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
                  <span className="block text-center text-gray-1 text-sm leading-5 pt-[11px]">
                    (+414) 33119906
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
                  <span className="block text-center text-gray-1 text-sm leading-5 pt-[11px]">
                    zurich@sandboxvr.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Coorperations;

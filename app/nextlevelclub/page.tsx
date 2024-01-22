/* eslint-disable @next/next/no-img-element */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const NextLevelClub = () => {
  return (
    <main>
      <Navbar />
      <section className="bg-black sm:px-[150px] px-5">
        <div className="flex justify-center sm:pt-32 pt-40 w-full">
          <img className="object-cover sm:w-[1024px] sm:h-[172px]" src="/nextlevel-club.webp" alt="Next Level Club" />
        </div>
        <div className="sm:pt-[112px] pt-40">
          <h1 className="sm:text-[40px] text-2xl sm:text-left text-center font-medium tracking-[2px] uppercase sm:leading-[54px] text-white">
            DIE 100% ERLEBNIS-FLATRATE FÜR DAS GANZE JAHR!
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:pt-[72px] pt-16 gap-2">
          <div>
            <p className="text-white sm:text-[15px] text-sm leading-5">
              Als Besitzer des NextLevel Jahrespasses kannst Du während unserer
              OPEN ARENA Zeiten kostenfrei LASERTAG, ROBOMASTER BATTLE sowie
              alle HOLOGATE Free Games spielen. Die HOLOGATE Premium Games
              kosten für Dich nur 1,50 Euro pro Spiel. Der Cyberpunk Escape Room
              ist während der Open Arena nicht spielbar. Zeige uns dafür einfach
              Deinen Jahrespass bei Deinem Besuch während der OPEN ARENA und wir
              machen den Rest für Dich.
            </p>
            <p className="text-white sm:text-[15px] text-sm pt-7 leading-5">
              Das ist aber noch nicht alles: Als NextLevel Clubmitglied erhältst
              Du zusätzlich einen exklusiven 10% Rabatt-Gutschein, den Du für
              die Buchung einer PRIVATE ARENA (z.B. für Deinen Geburtstag)
              nutzen kannst!{" "}
            </p>
            <p className="text-white sm:text-[15px] text-sm pt-7 leading-5">
              Last but not least erhältst Du Zugang zu unserem online
              VIP-Bereich, in dem Du exklusive Angebote und Vergünstigungen
              erhältst.
            </p>
          </div>
          <div className="sm:pt-0 pt-5">
            <img src="/nextlevelclub-card.webp" className="sm:w-[570px] sm:h-[384px] object-cover" alt="Next Level Card" />
          </div>
        </div>
        <div className="sm:pt-[70px] pt-10 flex justify-center">
          <img src="/claim.webp" className="sm:w-[1024px] sm:h-[234px] object-cover" alt="Next level claim" />
        </div>
        <div className="bg-bg-pattern sm:pt-[134px] pt-16">
          <h1 className="sm:text-[28px] text-2xl text-white uppercase sm:leading-[54px] font-medium text-center">NEXT LEVEL CLUB <span className="sm:text-[42px] text-2xl">JAHRESPASS</span></h1>
          <p className="text-center pt-6 text-white sm:text-[15px] text-sm">für Kinder und Erwachsene</p>
          <div className="flex justify-center pt-11">
            <img className="sm:w-[1024px] sm:h-[274px] object-cover" src="/card-price.webp" alt="Next level card price" />
          </div>
          <p className="pt-[22px] text-[15px] text-center leading-5 text-white">
           Du kannst 1 Jahr Flatrate spielen während unserer OPEN ARENA Zeiten. <br />
Das Angebot gilt für Lasertag, Robomaster Battle und alle Hologate Free Games. Hologate Premium Games kosten 1,50 EUR Aufpreis.
          </p>
          <p className="pt-7 text-white leading-5 font-bold text-center text-[15px] sm:text-sm">
          Kinder/Jugendliche bis 16 Jahre : 99 € <br />
Erwachsene ab 17 Jahre: 119 €
          </p>
          <h1 className="sm:pt-[77px] pt-10 uppercase sm:text-[40px] text-2xl font-medium sm:leading-[54px] sm:tracking-[2px] text-center text-white">NEXT LEVEL CLUB Family Jahrespass</h1>
          <p className="pt-5 text-[15px] text-center leading-5 text-white">
           für die ganze Familie (Die Eltern sowie alle an der gleichen Adresse wohnenden Kinder unter 18 Jahre)
          </p>
        </div>
        <div className="sm:pt-[70px] pt-10 flex justify-center">
          <img src="/familycard-price.webp" className="sm:w-[1024px] sm:h-[234px] object-cover" alt="Next level claim" />
        </div>
        <p className="pt-[22px] text-[15px] text-center leading-5 text-white">
        Die ganze Familie kann 1 Jahr Flatrate spielen während unserer OPEN ARENA Zeiten. <br />
Das Angebot gilt für Lasertag, Robomaster Battle und alle Hologate Free Games. Hologate Premium Games kosten 1,50 EUR Aufpreis.
          </p>
          <p className="pt-7 text-white leading-5 font-bold text-center text-[15px] sm:text-sm">
          Jahrespreis für die Familie* : 249 €
          </p>
          <span className="block text-white pt-[47px] text-xs leading-5 text-center sm:pb-[200px] pb-[100px]">* Die Eltern sowie alle an der gleichen Adresse lebenden Kinder unter 18 Jahren.</span>
      </section>
      <Footer />
    </main>
  );
};

export default NextLevelClub;

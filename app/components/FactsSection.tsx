import Image from "next/image";

const FactsSection = () => {
  return (
    <section className="sm:px-[150px] px-5 sm:py-[100px] py-10 bg-gray-8 w-full grid sm:grid-cols-2 grid-cols-1">
      <div className="p-[15px]">
        <h1 className="text-gray-1 sm:tracking-[10px] tracking-[3px] uppercase font-medium leading-[26px] text-lg">
          Euer Besuch bei uns
        </h1>
        <h2 className="uppercase leading-[72px] tracking-[5px] font-black text-dark-1 text-[52px] py-[23px]">
          FACTS
        </h2>
        <p className="text-dark-1 leading-5 pb-[29px]">
          Ihr wollt bei uns eine VR-Experience buchen? <br /> Dann haben wir
          hier noch ein paar Infos vorab –
        </p>
        <ul className="text-dark-1 list-disc pl-[35px]">
          <li>
            <strong>die komplette VR Experience dauert eine Stunde!</strong>{" "}
            (Reine Spielzeit mit Tutorial: 40 Minuten)
          </li>
          <li>
            ihr könnt bei uns <strong>nur online buchen</strong>
          </li>
          <li>
            maximale Spieleranzahl pro Experience und Holodeck sind{" "}
            <strong>6 Spieler gleichzeitig</strong>. Größere Gruppen können
            parallel in mehreren Holodecks spielen.
          </li>
          <li>
            wir haben in <strong>Wiesbaden vier Holodecks</strong> und in{" "}
            <strong>Alsfeld zwei Holodecks</strong>{" "}
          </li>
          <li>
            am Ende eurer Experience bekommt ihr eure persönlichen{" "}
            <strong>Highlight-Videos</strong> an eure Buchungsmail geschickt
          </li>
          <li>
            Wir empfehlen Sandbox VR für Jugendliche ab 12 Jahren. Ein
            Erziehungsberechtigter muss anwesend sein.
          </li>
        </ul>
        <p className="text-dark-1 leading-5 pt-5">
          Je nachdem mit wie viel Spielern und an welchem Wochentag ihr bucht,
          ändern sich die Preise: Schaut dafür einfach in die Tabelle:
        </p>
      </div>
      <div className="pt-16 sm:pt-0">
        <Image
          src="https://nextlevel-erlebnisse.de/wp-content/uploads/2023/12/Sandbox_Preisuebersicht_v2_web.png"
          width="1000"
          height="600"
          alt=""
        />
      </div>
    </section>
  );
};

export default FactsSection;

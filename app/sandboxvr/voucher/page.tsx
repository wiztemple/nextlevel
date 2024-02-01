import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import VoucherCard from "@/app/components/VoucherCard";
import Image from "next/image";
import Link from "next/link";

const Voucher = () => {
  return (
    <main className="bg-black break-words">
      <Navbar />
      <Hero className=" bg-black w-screen">
        <div className="px-5 sm:px-[150px] pt-20 sm:pt-[300px] sm:h-[652px] h-[50vh] bg-[url('/sandboxvr-header.jpg')] bg-cover sm:bg-bottom bg-top bg-no-repeat transition duration-300 ease-in-out">
          <div className="sm:block hidden">
            <h1 className="text-center sm:text-2xl text-sm uppercase sm:tracking-[10px] tracking-widest leading-5 sm:leading-[80px] text-aquagreen">
              VERSCHENKE ETWAS BESONDERES
            </h1>
            <h2 className="text-white sm:text-[72px] text-3xl text-center sm:leading-[80px] leading-snug font-medium tracking-[2.1px]">
              SANDBOX VR GUTSCHEIN
            </h2>
          </div>
        </div>
        <div className="relative -mt-28 sm:mt-0 px-5">
          <div className="sm:hidden block">
            <h1 className="text-center sm:text-2xl text-sm uppercase sm:tracking-[10px] tracking-widest leading-5 sm:leading-[80px] text-aquagreen">
              VERSCHENKE ETWAS BESONDERES
            </h1>
            <h2 className="text-white sm:text-[72px] pt-3 text-3xl text-center sm:leading-[80px] leading-snug font-medium tracking-[2.1px]">
              SANDBOX VR GUTSCHEIN
            </h2>
          </div>
          <div className="sm:px-[150px]">
            <h1 className="text-[#D8D8D8] sm:text-[22px] text-lg text-center">
              TEILE DEINE BEGEISTERUNG
            </h1>
            <h2 className="uppercase sm:text-[40px] text-3xl sm:leading-[54px] leading-snug pt-5 text-white font-medium text-center">
              So verschenkst du ein tolles Erlebnis!
            </h2>
            <p className="text-white pt-[22px] leading-5 text-[15px]">
              Für unsere Sandbox VR Erlebnisse kannst du einen digitalen
              Gutschein  kaufen und verschenken. Heißt: Du kaufst ein Guthaben,
              das du bei der Buchung einfach als Zahlungsmethode auswählen und
              den Gutschein Code als Bezahlung eingeben kannst. So kann sich der
              Beschenkte sein VR Erlebnis selbst aussuchen und das Erlebnis
              selbst terminieren. 
            </p>
          </div>
        </div>
      </Hero>
      <section className="bg-black sm:px-[150px] px-5">
        <div className="rounded-[20px] bg-[#1B242F] py-10 sm:px-[50px] px-5 sm:mt-[90px] mt-[70px]">
          <h1 className="text-[#57BFC7] text-[22px] leading-8 tracking-[1px] uppercase">
            DAS PASSENDE GESCHENK
          </h1>
          <h2 className="pt-5 uppercase text-white sm:text-[41px] text-3xl tracking-[2px]">
            Was will ich verschenken?
          </h2>
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:pt-[42px] pt-5 sm:gap-[69px]">
            <div className="">
              <p className="text-white text-[15px] leading-5">
                Ein Sandbox VR Erlebnis kostet – je nach Wochentag und
                Gruppengröße – pro Person zwischen 35 und 60 Euro. Unter der
                Woche ist es günstiger als am Wochenende und bei größeren
                Gruppen ist der Preis pro Person günstiger als bei kleinen
                Gruppen. Um Dir zu erleichtern, was für einen Gutscheinwert Du
                verschenken möchtest, 
              </p>
              <p className="text-white text-[15px] sm:pt-12 pt-10 left-5">
                <strong>
                  Grundsätzlich empfehlen wir einen Gutscheinwert von mindestens
                  50 Euro pro Person
                </strong>
                . Ein Beispiel: Wenn Du Sandbox VR einer Familie mit 4 Personen
                schenken möchtest, solltest du einen Gutschein im Wert von 200
                Euro kaufen. 
              </p>
              <p className="text-white text-[15px] pt-7 leading-5">
                Wenn der Preis bei der konkreten Buchung dann etwas höher oder
                niedriger ist, können Differenzen aufgezahlt werden oder
                Restbeträge ,die nicht aufgebraucht werden, können bei weiteren
                Buchungen eingelöst werden. Eine Barauszahlung der Differenz ist
                leider nicht möglich.
              </p>
            </div>
            <div className="pt-16 sm:pt-0">
              <Image
                className="rounded-[20px]"
                src="https://nextlevel-erlebnisse.de/wp-content/uploads/2023/12/Sandbox_Preisuebersicht_v2_web.png"
                width="510"
                height="306"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="rounded-[20px] bg-[#EFF3F7] pt-[70px] pb-10 sm:px-[50px] px-5 mt-[70px]">
          <h1 className="text-aquagreen tracking-[1px] leading-8 uppercase sm:text-[22px] text-lg">
            Unser Gutscheinkauf Guide
          </h1>
          <h2 className="uppercase sm:text-[40px] text-3xl text-dark-1 pt-5">
            Gutschein online kaufen
          </h2>
          <p className="pt-5 text-dark-1 leading-5">
            Den Sandbox VR Gutschein kannst Du ausschließlich online in unserem
            Buchungssystem kaufen.{" "}
            <strong>
              Um mögliche Fehler beim Gutscheinkauf zu verhindern, lies dir am
              besten erst alle Steps aus unseren Guide durch
            </strong>{" "}
            und klick dann auf den Button um die Gutscheine zu kaufen.
          </p>
          <div className="flex justify-center pt-10 sm:pt-6">
            <Link
              href="/"
              className="text-appblue block w-fit py-3 px-6 rounded-[3px] border-2 border-appblue sm:tracking-[5px] tracking-[1px] leading-5 text-[15px] relative transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:text-white hover:scale-110 hover:bg-appblue hover:border-appblue"
            >
              Gutschein kaufen
            </Link>
          </div>
          <div className="pt-6">
            <h1 className="text-[22px] leading-8 uppercase text-dark-1 tracking-[1px]">
              Schritt 1: <span className="font-bold">Standort</span>
            </h1>
            <p className="pt-6 text-dark-1 text-[15px] leading-5">
              Nachdem du auf den Button geklickt hast, musst du den Standort
              auswählen, für den du den Sandbox VR Gutschein kaufen willst. Die
              Gutscheine sind immer nur für den Standort gültig, für den Du sie
              gekauft hast. Gültig sind sie für 3 Jahre. Um Deinen
              Wunschstandort auszuwählen musst du einfach auf{" "}
              <strong>Standort auswählen </strong>
              klicken und <strong>bestätigen!</strong>.
            </p>
          </div>
          <div className="pt-[50px]">
            <h1 className="text-[22px] leading-8 uppercase text-dark-1 tracking-[1px]">
              Schritt 2: <span className="font-bold">Gutscheinwert</span>
            </h1>
            <p className="pt-6 text-dark-1 text-[15px] leading-5">
              Jetzt kannst du den <strong>Gutschein</strong> mit dem passenden
              Betrag auswählen. Es gibt Gutscheine im Wert von 10, 25 , 50, 100
              und 200 Euro. Weißt du noch nicht genau, wie viel du am besten
              verschenkst? Dann schau nochmal oben in unserer Tabelle. Wenn
              doch, dann klick auf das Bild zum auswählen und dann ganz unten
              auf <strong>Fortfahren</strong>.
            </p>
          </div>
          <div className="pt-[70px] grid sm:grid-cols-2 grid-cols-1">
            <div>
              <h1 className="text-[22px] leading-8 uppercase text-dark-1 tracking-[1px]">
                Schritt 3: <span className="font-bold">BESTELLDATEN</span>
              </h1>
              <p className="pt-6 text-dark-1 text-[15px] leading-5">
                Wie bei jedem Bestellprozess brauchen wir ein paar Daten von
                dir. Hier musst du aber etwas aufpassen, sonst wird nichts aus
                der Überraschung.
              </p>
              <p className="pt-6 text-dark-1 text-[15px] leading-5">
                <strong>WICHTIG:</strong> Es gibt 2 Kontaktfelder zum Ausfüllen
                – Feld 1 ist für die Daten des Beschenkten. Feld 2 ist für DEINE
                Daten. Da in den meisten Fällen das ganze eine Überraschung sein
                soll, musst du in beiden Feldern DEINE E-Mail Adresse angeben.
                So bekommt der andere nichts mit von der Sache.
              </p>
              <p className="pt-6 text-dark-1 text-[15px] leading-5">
                Wenn Du alle Daten ausgefüllt hast, klickst Du unten rechts auf{" "}
                <strong>Checkout</strong>.
              </p>
            </div>
            <div className="flex justify-center sm:pt-0 pt-8">
              <Image
                className="object-cover"
                src="/felder-voucher.webp"
                width={300}
                height={300}
                alt="felder voucher"
              />
            </div>
          </div>
          <div className="pt-[70px] grid sm:grid-cols-2 grid-cols-1">
            <div>
              <h1 className="text-[22px] leading-8 uppercase text-dark-1 tracking-[1px]">
                Schritt 4: <span className="font-bold">DIE BEZAHLUNG</span>
              </h1>
              <p className="pt-6 text-dark-1 text-[15px] leading-5">
                Jetzt kannst du den Gutschein bezahlen – am schnellsten und
                einfachsten mit <strong>Kreditkarte, PayPal</strong> oder{" "}
                <strong>Google-Pay</strong>.
              </p>
              <p className="pt-6 text-dark-1 text-[15px] leading-5">
                Wenn Du weder Paypal noch eine Kreditkarte hast, hast du
                folgende andere Möglichkeiten, um einen Gutschein zu kaufen:
              </p>
              <ol className="pt-6 list-decimal pl-10">
                <li className="text-dark-1 leading-5 text-[15px]">
                  Dann kannst über das Paypal-System auch per{" "}
                  <strong>Lastschrift</strong> bezahlen ohne das du ein PayPal
                  Account aufmachen musst!
                </li>
                <li className="text-dark-1 leading-5 text-[15px]">
                  Du meldest Dich bei uns telefonisch (06631-7882663) und kannst
                  den Gutscheinbetrag in Absprache mit uns per{" "}
                  <strong>Überweisung</strong> bezahlen.
                </li>
                <li className="text-dark-1 leading-5 text-[15px]">
                  Du kommst persönlich in einer unserer Locations in Alsfeld
                  oder Wiesbaden vorbei und zahlst vor Ort mit{" "}
                  <strong>EC-Karte.</strong>
                </li>
              </ol>
            </div>
            <div className="flex justify-center sm:pt-0 pt-5">
              <Image
                className="object-cover"
                src="/voucher-paypal.webp"
                width={280}
                height={383}
                alt="felder voucher"
              />
            </div>
          </div>
          <div className="flex justify-center sm:pt-[120px] pt-[100px]">
            <Link
              href="/"
              className="text-appblue block w-fit py-3 px-6 rounded-[3px] border-2 border-appblue sm:tracking-[5px] tracking-[1px] leading-5 text-[15px] relative mt-6 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:text-white hover:scale-110 hover:bg-appblue hover:border-appblue"
            >
              Gutschein kaufen
            </Link>
          </div>
        </div>
        <div className="rounded-[20px] bg-[#EFF3F7] sm:pt-[70px] pt-[50px] pb-10 mb-20 sm:px-[50px] px-5 mt-[70px]">
          <h1 className="text-aquagreen tracking-[1px] leading-8 uppercase sm:text-[22px] text-lg">
            MACH DEINEN GUTSCHEIN PERSÖNLICHER
          </h1>
          <h2 className="uppercase sm:text-[40px] text-3xl text-dark-1 pt-5">
            VERPACK DEN GUTSCHEIN NEXT LEVEL
          </h2>
          <p className="pt-5 text-dark-1 leading-5">
            Der digitale Sandbox VR Gutschein besteht aus einer PDF mit einem
            Gutscheincode, den Du per E-Mail erhältst. Wenn Du zum Verschenken
            etwas mehr „in der Hand“ haben möchtest, haben wir ein paar
            Möglichkeiten, um dein Geschenk mit kreativen und schönen Add-Ons zu
            verschönern und auf das nächste Level zu bringen. Angefangen beim
            klassischen Papiergutschein, über unsere beliebte „Sandbox“ bis hin
            zur Next Level Lootbox und der Rätselbox hast du zahlreiche
            Möglichkeiten Dein Geschenk zu verschönern.
          </p>
          <p className="pt-5 text-dark-1 leading-5">
            Du erhältst die Gutscheinboxen in unseren Locations oder per
            Online-Bestellung, in dem Du unten auf „Jetzt kaufen“ klickst. Bitte
            beachte, dass wir Boxen klassisch per Paketversand versenden.
          </p>
          <div className="grid sm:grid-cols-2 gap-[30px] pt-[60px] sm:p-[15px]">
            <VoucherCard
              title="Original Gutschein"
              description="Unsere hochwertigen Geschenkgutscheine sind die
perfekte Ergänzung zu unseren digitalen Gutschein. Du
kannst aus 5 verschiedene Designs auswählen: Sandbox
VR, Next Level, Lasertag, Hologate oder Escaperoom."
              img="toys2.png"
              price="3"
              ribbonText="Klassiker"
            />
            <VoucherCard
              img="toys.jpeg"
              title="Lootbox"
              description="Die NextLevel Lootbox ist prall gefüllt mit coolen
Überraschungen: Merchandise, coolen Gimicks,
Rabattcodes und mehr. Jede Lootbox ist ganz indivduell.
Aber der Wert ist auf jeden Fall höher als der Preis."
              price="20"
              ribbonText="mega cool"
            />
            <VoucherCard
              title="SANDBOX"
              description="Unsere 'Sandbox' eignet sich ideal als witzige Verpackung
für Euren Sandbox VR Gutschein. Der Gutscheincode
befindet sich auf dem Boden der Sandbox und die
beschenkte Person, darf diesen aus dem Sand ausgraben!"
              img="seminar-vr.jpg"
              price="10"
              ribbonText="Bestseller"
            />
            <VoucherCard
              title="Rätselbox"
              description="Mit unserer kniffeligen Rätselbox mit vielen Details fängt
das Erlebnis schon beim Auspacken an. Perfekt um
Gutscheine für den Escaperoom - aber auch für alle
anderen Erlebnisse - zu verschenken."
              img="nextLevel_partyr.jpg"
              price="20"
              ribbonText="Kniffelig"
            />
          </div>
          <div className="flex justify-center sm:pt-[65px]">
            <Link
              href="/"
              className="text-appblue block w-fit py-3 px-6 rounded-[3px] border-2 border-appblue tracking-[5px] leading-5 text-[15px] relative mt-6 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:text-white hover:scale-110 hover:bg-appblue hover:border-appblue"
            >
              Gutschein kaufen
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Voucher;

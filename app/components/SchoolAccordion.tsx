import Accordion from "./Accordion";

const SchoolAccordion = () => {
  const faqs = [
    {
      title: "LASERTAG ABLAUF",
      text: (
        <>
          <p className="text-[15px]">
            Bei der Ankunft in der Lasertag Arena werdet ihr von unserem
            freundlichen Team herzlich empfangen. Nach einer kurzen Begrüßung
            und einer Einweisung in die Regeln des Spiels werdet ihr mit euren
            Lasertag-Waffen ausgestattet. Diese modernen Geräte verleihen euch
            das Gefühl, Teil eines actiongeladenen Videospiels zu sein.
          </p>
          <p className="pt-7 text-[15px]">
            Sobald ihr bereit seid, betretet ihr die beeindruckende Arena. Die
            spezielle Beleuchtung und die verwinkelten Gänge schaffen eine
            aufregende Atmosphäre, die euer Adrenalin steigen lässt. Jetzt heißt
            es: Teamwork und Strategie! Ihr könnt euch in verschiedenen
            Spielmodi messen, von klassischen Teamkämpfen bis hin zu taktischen
            Missionen.
          </p>
          <p className="pt-7 text-[15px]">
            Während des Spiels werdet ihr eure Fähigkeiten unter Beweis stellen,
            eure Gegner jagen und euer Team zum Sieg führen. Die Spannung steigt
            mit jedem Moment, während ihr euch durch die Arena bewegt,
            Hindernisse überwindet und auf eure Gegner zielt. Das gemeinsame
            Erleben von Herausforderungen stärkt den Zusammenhalt und den
            Teamgeist eurer Gruppe.
          </p>
          <p className="pt-7 text-[15px]">
            Nach dem aufregenden Spiel werden die Ergebnisse ausgewertet und es
            folgt die mit Spannung erwartete Siegerehrung des Turniers. Die
            besten Spieler oder Teams werden geehrt und erhalten ihre
            wohlverdienten Auszeichnungen. Es ist eine großartige Gelegenheit,
            sich gegenseitig zu loben und gemeinsam über die erlebten Momente zu
            jubeln.
          </p>
          <p className="pt-7 text-[15px]">
            Der Aufenthalt in der Lasertag Arena bietet euch eine unvergessliche
            Erfahrung voller Action, Spaß und Abenteuer. Ihr werdet mit
            positiven Erinnerungen und gestärktem Teamgeist nach Hause
            zurückkehren. Also macht euch bereit für eine einzigartige und
            spannende Zeit, die euch noch lange in Erinnerung bleiben wird!
          </p>
        </>
      ),
      active: false,
    },
    {
      title: "HOLOGATE ABLAUF",
      text: (
        <>
          <p className="text-[15px]">
            Wenn ihr die Hologate Arena besucht, erwartet euch ein fantastisches
            VR-Erlebnis, das von der Ankunft bis zum Ende des Aufenthalts für
            Begeisterung sorgt. Sobald ihr angekommen seid, werdet ihr herzlich
            von unserem freundlichen Team begrüßt. Ihr erhaltet eine kurze
            Einweisung in die VR-Technologie und die Spielregeln, damit ihr
            optimal vorbereitet seid.
          </p>
          <p className="pt-7 text-[15px]">
            Nach der Einweisung werdet ihr in die faszinierende Welt der
            virtuellen Realität entführt. Ihr erhaltet spezielle VR-Brillen und
            Controller, die euch in eine immersive Umgebung eintauchen lassen.
            Nun könnt ihr aus einer Vielzahl von VR-Minispielen auswählen, die
            alle aufregend und einzigartig sind. Ob ihr euch in einer
            futuristischen Alien-Welt bewegt, eine spannende Schneeballschlacht
            erlebt oder euch in einem actiongeladenen Zombie-Szenario bewähren
            müsst – die Auswahl ist groß und für jeden Geschmack etwas dabei.
          </p>
          <p className="pt-7 text-[15px]">
            Während ihr euch in den VR-Spielen austobt und euer Geschick unter
            Beweis stellt, könnt ihr sicher sein, dass auch die Zuschauer voll
            auf ihre Kosten kommen. Sie können das Spielgeschehen auf großen
            Bildschirmen verfolgen und mitfiebern, während sie die Reaktionen
            und Bewegungen der Spieler beobachten. Die Begeisterung überträgt
            sich auf alle und schafft eine mitreißende Atmosphäre, in der sowohl
            Spieler als auch Zuschauer gleichermaßen Spaß haben.
          </p>
          <p className="pt-7 text-[15px]">
            Am Ende eures Aufenthalts könnt ihr eure Erfahrungen teilen und über
            die besten Momente lachen. Die Hologate Arena bietet euch ein
            unvergessliches Abenteuer in der virtuellen Realität, das nicht nur
            für die Spieler, sondern auch für die Zuschauer ein absolutes
            Highlight ist. Es ist eine einzigartige Gelegenheit,
            zusammenzukommen, Spaß zu haben und gemeinsame Erinnerungen zu
            schaffen.
          </p>
          <p className="pt-7 text-[15px]">
            Also taucht ein in die faszinierende Welt der VR-Spiele, erlebt
            spannende Abenteuer und vergesst nicht, dass die Begeisterung und
            der Spaß in der Hologate Arena für alle, sowohl Spieler als auch
            Zuschauer, garantiert sind!
          </p>
        </>
      ),
      active: false,
    },
  ];
  return (
    <section className="bg-mesh-gradient bg-cover sm:px-[150px] px-5 pt-[100px] pb-[50px]">
      <h1 className="text-white uppercase text-lg sm:tracking-[2.5px] tracking-widest leading-5 font-medium">
        SO KÖNNTE DER ABLAUF AUSSEHEN
      </h1>
      <h2 className="uppercase text-white sm:text-[40px] text-3xl pt-5 sm:tracking-[2px] sm:leading-[54px] leading-snug font-medium">
        SCHULKLASSEN ABLAUF
      </h2>
      <div className="divide-y divide-slate-200 border border-white mt-5">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            title={faq.title}
            id={`faqs-${index}`}
            active={faq.active}
            typeOne
          >
            {faq.text}
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default SchoolAccordion;

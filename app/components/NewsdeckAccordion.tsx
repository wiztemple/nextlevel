import Accordion from "./Accordion";
import NewsAccordion from "./NewsAccordion";

const NewsdeckAccordion = () => {
  const faqs = [
    {
      title: "Was verbirgt sich hinter SandboxVR?",
      text: (
        <>
          <p className="text-[15px]">
            Zunächst einmal ein amerikanisches Unternehmen, was sich der Virtual
            Reality (VR) verschrieben hat, und was vereinfacht ausgedrückt,
            virtuelle Erlebnisse anbietet. Das ist eine neue Form der
            Unterhaltung. SandboxVR ist also im Grunde der Name des
            Unternehmens, steht aber auch für das unvergleichliche System, was
            dahintersteckt.
          </p>
        </>
      ),
      active: false,
    },
    {
      title: "Warum ausgerechnet in Alsfeld?",
      text: (
        <>
          <p className="text-[15px]">
            Die gleiche Frage hatte uns Sandbox damals auch gestellt: Warum
            ausgerechnet Alsfeld? Meine Antwort ist damals wie heute die
            gleiche: Wir! Wir sind in Alsfeld und wir leben in Alsfeld.
            Sicherlich wäre für das Unternehmen eine Großstadt erst einmal
            interessanter gewesen, aber dadurch, dass wir hier in Alsfeld leben,
            wird es hier immer das beste Ergebnis geben. Wir können es dadurch
            besser im Blick behalten und schnell reagieren. Wir übersetzen ein
            System aus den USA und China ins Deutsche – das geht mit bekannten
            Firmen und Handwerkern vor Ort einfach besser.
          </p>
          <p className="pt-7 text-[15px]">
            Es sind kurze Wege, wir sind unser eigener Vermieter, kennen die
            Behörden und sind in der Region stark vernetzt – außerdem ist der
            Vogelsberg mit seiner geographischen Lage in der Mitte Deutschlands
            und der direkten Autobahnanbindung gut zu erreichen. Das macht es
            einfacher etwas Unbekanntes zu machen. Hätten wir das gleiche
            Projekt in Frankfurt gestartet, dann wären wir lange nicht so weit
            gewesen, wie wir es jetzt hier in Alsfeld sind und die Eröffnung
            hätte sich weit mehr verzögert.
          </p>
        </>
      ),
      active: false,
    },
    {
      title: "Welche Technik verbrigt sich dahinter?",
      text: (
        <>
          <p className="text-[15px]">
            Hinter SandboxVR steckt ein aufwendiges Kamerasystem, was jegliche
            Bewegung durch Tracking-Points am Körper der Spieler in das Erlebnis
            in Echtzeit überträgt. An den Händen und den Füßen werden also
            Tracking-Points befestigt, das kennt man von Kinofilmen wie
            „Avatar“. Der Körper wird durch eine Weste getrackt und der Kopf
            durch die VR-Brille. Die Kameras laufen über ein
            Outside-In-Tracking, sind also nicht integriert. Sie laufen
            tiefenperspektivisch, nehmen also nicht nur ein Bild auf, sondern
            erfassen die Bewegungen der Spieler und übertragen sie in Echtzeit
            in das Erlebnis. Pro Holodeck gibt es zwölf Kameras, die den ganzen
            Raum erfassen und aufzeichnen. Das ganze bedarf einer hohen
            Rechenleistung, die über eine Art Laptop, den man in einem kleinen
            Rucksack am Rücken trägt, an die Server übertragen werden.
          </p>
        </>
      ),
      active: false,
    },
    {
      title: "Was ist ein Holodeck?",
      text: (
        <>
          <p className="text-[15px]">
            Trekkies dürften schon wissen, was ein Holodeck ist. In der Serie
            ist das Holodeck ein Raum, in dem die Bewohner des Raumschiffes
            gehen konnten und konnten dort virtuell überall dorthin reisen,
            wohin sie reisen wollten – ob in den Wald an den Strand oder sonst
            wohin.
          </p>
          <p className="pt-7 text-[15px]">
            Und genau so heißen auch die Räume bei Sandbox – es ist also
            praktisch das virtuelle Spielfeld, in dem sich die Menschen in
            Realität bewegen. Die Vision des Sandbox-Gründers Steven Zhao ist
            es, dass zukünftig in jeder Nachbarschaft ein Holodeck stehen soll,
            mit dem die Menschen spielen können – und in Zukunft kann man damit
            vielleicht sogar virtuell andere Orte besuchen.
          </p>
          <p className="pt-7 text-[15px]">
            Im Grunde ist ein Holodeck ein jeweils 50 Quadratmeter großer Raum,
            der mit Kameras ausgestattet ist und dem sich die Spieler dann frei
            bewegen. Miteinander sprechen kann man übrigens via Headset.
          </p>
        </>
      ),
      active: false,
    },
    {
      title: "Welche Erlebnisse gibt es zum Start?",
      text: (
        <>
          <p className="text-[15px]">
            Aktuell bietet SandboxVR sechs verschiedene Erlebnisse an, die
            jeweils insgesamt eine Stunde lang gehen. Das ist noch etwas
            überschaubar, aber jedes Jahr sollen zwei neue Erlebnisse an den
            Start gebracht werden, die hier natürlich auch deutsch und auf
            englisch zur Verfügung stehen. Mit etwa 35 Minuten ist ein
            Sandbox-Erlebnis deutlich länger als beispielsweise Hologate, was
            eher kurzweiliger ist. Das ganze virtuelle Erlebnis wird dann noch
            aufgezeichnet – mit Highlights aus dem VR-Erlebnis und der Realität.
            Das bekommen die Spieler dann am Ende noch obendrauf.
          </p>
          <p className="pt-7 text-[15px]">
            Zum Start im Oktober gibt es mit „Deadwood Valley“ und „Deadwood
            Mansion“ zwei Zombiespiele, in denen man eine Zombieinvasion
            überleben muss. „UFL“ ist ein Kampfsimulator im Stil eines
            Street-Fights, während man in „Ambersky 2088“ eine Art Dystopie der
            Zukunft überleben muss. Außerdem gibt es mit „Curse of Davy Jones“
            ein Abenteuer, das im Comic-Stil auf einem Piratenschiff spielt. Das
            Highlight ist aber das patentierte „Star Trek: Discovery“-Erlebnis.
          </p>
          <p className="pt-7 text-[15px]">
            Passend dazu gibt es die entsprechende Ausrüstung: Waffe, Schwert
            oder ein Schild – zusätzlich zu der elementaren Ausrüstung, die man
            immer trägt.
          </p>
        </>
      ),
      active: false,
    },
    {
      title: "Wie groß dürfen die Gruppen sein?",
      text: (
        <>
          <p className="text-[15px]">
            Insgesamt soll es zwei sogenannte Holodecks geben. In jedes Holodeck
            können sechs Leute gleichzeitig. Eine Gruppe kann also aus sechs
            Leuten bestehen, gleichzeitig können insgesamt zwölf Leute spielen.
            Gerade wird daran gearbeitet, dass diese beiden Gruppen in den
            beiden Holodecks auch gegeneinander oder miteinander spielen können.
            In den USA wurde das schon getestet, jetzt müssen nur noch die
            technischen Voraussetzungen geschaffen werden, ehe wir das auch in
            Alsfeld anbieten können. Eine Mindestteilnehmerzahl gibt es nicht:
            Wenn man alleine spielen möchte, ist das auch möglich.
          </p>
        </>
      ),
      active: false,
    },
    {
      title: "Wie groß ist die Gefahr gegen eine Wand zu laufen?",
      text: (
        <>
          <p className="text-[15px]">
            Auch wenn es so wirkt als wäre das möglich, ist das tatsächlich
            unmöglich. Die einzelnen Erlebnisse und virtuellen Spielfelder, also
            das, was man sieht, sind so konzipiert, dass da wo in Wirklichkeit
            eine Wand ist, auch in der virtuellen Welt kein Durchkommen ist. Es
            gibt darüber hinaus auch einen Sicherheitsabstand von knapp einem
            Meter, wo dann das Spielfeld sozusagen aufhört, damit so etwas eben
            nicht passiert.
          </p>
        </>
      ),
      active: false,
    },
    {
      title: "Wer ist die Zielgruppe von Sandbox?",
      text: (
        <>
          <p className="text-[15px]">
            Eigentlich gehört jeder, der gerne im Team zusammen etwas erleben
            möchte, zur Zielgruppe. Also Familien, Vereine, Freunde, aber auch
            Geburtstage, Junggesellenabschiede oder Firmen und Seminare. Immer
            dann, wenn man in der Gruppe etwas erleben und gemeinschaftlich Spaß
            haben möchte, ist man bei Sandbox genau richtig.
          </p>
          <p className="text-[15px]">
            Natürlich sind auch Unternehmen eine Zielgruppe – insbesondere, wenn
            es um Teambuildings geht. In einem weiteren Schritt kann irgendwann
            in der Zukunft sicherlich auch die Technik für andere Dinge genutzt
            werden. Architekten könnten mit ihren Kunden beispielsweise vorher
            virtuell durchs fertig geplante Haus laufen. Man könnte alles
            virtuell darstellen. Das liegt aber erst einmal in der Zukunft –
            zunächst wird virtuell gespielt.
          </p>
        </>
      ),
      active: false,
    },
    {
      title: "Ab wie vielen Jahren darf man SandboxVR spielen?",
      text: (
        <>
          <p className="text-[15px]">
            Sobald einem die Ausrüstung von SandboxVR passt, kann man auch die
            Erlebnisse spielen. Die einzelnen Erlebnisse haben allerdings eine
            Altersbeschränkung – in den USA ist sind sie ab 12 Jahren, in
            Deutschland werde sie derzeit noch eingeordnet. Die Kernzielgruppe
            sind bei Sandbox mit dem derzeitigen Entwicklungsstand aber eher
            Jugendliche und Erwachsene. Das liegt mitunter auch daran, dass die
            Erlebnisse extrem immersiv sind, also wirklich realitätsnah.
          </p>
          <p className="text-[15px]">
            Im Endeffekt ist es aber den Eltern überlassen, was sie ihren
            Kindern erlauben. Wir würden die Kinder ohne Beisein der Eltern die
            Erlebnisse jedenfalls nicht spielen lassen. In Zukunft wird es
            sicherlich aber auch bei SandboxVR Erlebnisse geben, die mehr für
            Kinder gemacht sind – zwischenzeitlich können Kiddies aber Hologate
            spielen. Da gibt es schon jetzt eine größere Auswahl kindgerechter
            VR-Minispiele.
          </p>
        </>
      ),
      active: false,
    },
    {
      title: "Können Menschen mit Brille trotzdem eine VR-Brille tragen?",
      text: (
        <>
          <p className="text-[15px]">
          Das ist möglich und auch gar nicht unbequem, weil die Brillen genügen Platz für die Sehhilfen bieten.
          </p>
        </>
      ),
      active: false,
    }
  ];
  return (
    <section className="bg-white bg-cover sm:px-[150px] px-5 pt-[70px] pb-[50px]">
      <h1 className="text-gray-1 uppercase text-lg sm:tracking-[5px] tracking-widest leading-5 font-medium">
        HÄUFIG GESTELLTE FRAGEN
      </h1>
      <h2 className="uppercase text-dark-1 sm:text-[56px] text-3xl pt-6 sm:tracking-[10px] sm:leading-[54px] leading-snug font-bold">
        FAQ | SANDBOXVR
      </h2>
      <div className="border border-white sm:mt-10 mt-5">
        {faqs.map((faq, index) => (
          <NewsAccordion
            key={index}
            title={faq.title}
            id={`faqs-${index}`}
            active={faq.active}
          >
            {faq.text}
          </NewsAccordion>
        ))}
      </div>
    </section>
  );
};

export default NewsdeckAccordion;

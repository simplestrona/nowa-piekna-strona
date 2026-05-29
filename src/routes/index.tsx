import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpg";
import hero from "@/assets/hero-salon.jpg";
import treatment from "@/assets/treatment-1.jpg";
import atm1 from "@/assets/atmosphere-1.jpg";
import atm2 from "@/assets/atmosphere-2.jpg";
import atm3 from "@/assets/atmosphere-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "New Beauty Aldona Dziuba — Gabinet Kosmetyczny Lublin" },
      {
        name: "description",
        content:
          "Ekskluzywny gabinet kosmetyczny w Lublinie. Profesjonalne zabiegi na twarz, makijaż permanentny, stylizacja brwi i rzęs. Lwowska 6 · +48 884 880 966.",
      },
      { property: "og:title", content: "New Beauty Aldona Dziuba — Lublin" },
      { property: "og:description", content: "Pielęgnacja, piękno i precyzja. Umów wizytę: +48 884 880 966." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const PHONE = "+48 884 880 966";
const PHONE_HREF = "tel:+48884880966";
const ADDRESS = "Lwowska 6, 20-400 Lublin";
const FB = "https://www.facebook.com/new.beauty.lublin";
const MAPS = "https://maps.app.goo.gl/MyeS14cj47GwsLTY7";

const services = [
  { title: "Pielęgnacja twarzy", desc: "Autorskie rytuały oczyszczające, nawilżające i odmładzające dobrane do potrzeb Twojej skóry.", items: ["Oczyszczanie wodorowe", "Mezoterapia mikroigłowa", "Peelingi chemiczne", "Lifting bez skalpela"] },
  { title: "Makijaż permanentny", desc: "Subtelny i naturalny efekt, który podkreśli Twoje rysy każdego dnia.", items: ["Brwi metodą pudrową", "Usta — pełen kolor", "Kreska na powiece", "Korekta i odświeżenie"] },
  { title: "Stylizacja brwi i rzęs", desc: "Perfekcyjna oprawa spojrzenia — od regulacji po laminację i lifting.", items: ["Henna pudrowa & koloryzacja", "Laminacja brwi", "Lifting rzęs", "Przedłużanie 1:1, 2D, 3D"] },
  { title: "Zabiegi na ciało", desc: "Relaks, ujędrnianie i modelowanie sylwetki w kameralnej atmosferze.", items: ["Masaż klasyczny i relaksacyjny", "Drenaż limfatyczny", "Peelingi pielęgnacyjne", "Zabiegi ujędrniające"] },
  { title: "Manicure & Pedicure", desc: "Zadbane dłonie i stopy — klasycznie lub w wersji hybrydowej.", items: ["Manicure japoński", "Hybryda & żel", "Pedicure SPA", "Pedicure leczniczy"] },
  { title: "Depilacja", desc: "Skuteczne i delikatne metody usuwania zbędnego owłosienia.", items: ["Wosk", "Pasta cukrowa", "Depilacja twarzy", "Depilacja ciała"] },
];

const reviews = [
  { name: "Magdalena K.", text: "Pani Aldona to prawdziwa profesjonalistka. Po pierwszej wizycie wiedziałam, że trafiłam idealnie. Skóra wygląda fantastycznie!", rating: 5 },
  { name: "Karolina W.", text: "Najlepszy gabinet w Lublinie. Niesamowita atmosfera, perfekcyjny efekt makijażu permanentnego brwi. Polecam każdej kobiecie.", rating: 5 },
  { name: "Joanna S.", text: "Czuję się tu jak królowa. Indywidualne podejście, ogromna wiedza i precyzja. Wracam regularnie od ponad dwóch lat.", rating: 5 },
  { name: "Aleksandra P.", text: "Laminacja brwi i lifting rzęs — efekt wow! Kameralne wnętrze i wspaniała obsługa. Najlepsze miejsce na sesji odprężenia.", rating: 5 },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#o-nas", label: "O nas" },
    { href: "#uslugi", label: "Usługi" },
    { href: "#galeria", label: "Galeria" },
    { href: "#opinie", label: "Opinie" },
    { href: "#kontakt", label: "Kontakt" },
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="New Beauty Aldona Dziuba logo" className="h-12 w-12 rounded-full object-cover ring-1 ring-[var(--color-gold)]/40" width={48} height={48} />
          <div className="hidden sm:block leading-tight">
            <p className="font-serif text-lg text-foreground">New Beauty</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Aldona Dziuba</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm tracking-wide text-foreground/80 hover:text-[var(--color-gold-warm)] transition-colors">
              {l.label}
            </a>
          ))}
          <a href={PHONE_HREF} className="btn-gold">Umów wizytę</a>
        </nav>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-foreground"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <><path d="M3 7h18" /><path d="M3 12h18" /><path d="M3 17h18" /></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col gap-2 px-6 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-foreground/80">
                {l.label}
              </a>
            ))}
            <a href={PHONE_HREF} className="btn-gold mt-3 justify-center">Umów wizytę</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={hero}
        alt="Wnętrze gabinetu New Beauty"
        className="absolute inset-0 h-full w-full object-cover"
        width={1600}
        height={1100}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/90" />
      <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
        <img src={logo} alt="" className="mx-auto h-28 w-28 rounded-full object-cover shadow-[var(--shadow-soft)] ring-1 ring-[var(--color-gold)]/50" width={112} height={112} />
        <p className="eyebrow mt-8">Gabinet Kosmetyczny · Lublin</p>
        <h1 className="mt-6 font-serif text-5xl sm:text-6xl md:text-7xl text-foreground leading-[1.05]">
          Twoje piękno w rękach <span className="text-gradient-gold italic">prawdziwego</span> mistrza
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground">
          New Beauty Aldona Dziuba to miejsce, gdzie precyzja spotyka się z troską. Profesjonalne zabiegi, kameralna atmosfera i indywidualne podejście do każdej Klientki.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href={PHONE_HREF} className="btn-gold">Umów wizytę</a>
          <a href="#uslugi" className="btn-outline-gold">Poznaj zabiegi</a>
        </div>
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="text-[var(--color-gold-warm)]">★★★★★</span>
          <span>4.8 / 5 na podstawie opinii klientek Google</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="o-nas" className="py-24 sm:py-32 bg-[var(--color-secondary)]/40">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="eyebrow">O nas</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Pasja, doświadczenie i estetyczna precyzja</h2>
          <div className="divider-gold my-8 w-24" />
          <p className="text-foreground/80 leading-relaxed">
            Gabinet <strong>New Beauty</strong> prowadzony przez <strong>Aldonę Dziubę</strong> to wyjątkowe miejsce w sercu Lublina, w którym wieloletnie doświadczenie łączy się z najnowszymi trendami w kosmetologii. Każdy zabieg to autorski rytuał — od chwili powitania, przez konsultację, aż po efekt, który zachwyca.
          </p>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            Wierzymy, że prawdziwa elegancja rodzi się z troski o detal. Dlatego dbamy o najwyższą jakość kosmetyków, sterylność, kameralność i komfort każdej Klientki.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { n: "10+", t: "lat doświadczenia" },
              { n: "4.8★", t: "ocena Google" },
              { n: "100%", t: "indywidualnego podejścia" },
            ].map((s) => (
              <div key={s.t}>
                <p className="font-serif text-3xl text-gradient-gold">{s.n}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.t}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 border border-[var(--color-gold)]/50 rounded-sm -z-10" />
          <img src={treatment} alt="Profesjonalny zabieg pielęgnacyjny" className="w-full h-[560px] object-cover rounded-sm shadow-[var(--shadow-elegant)]" loading="lazy" width={1200} height={1400} />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="uslugi" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Nasza oferta</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Zabiegi dopasowane do Ciebie</h2>
          <div className="divider-gold my-8 w-24 mx-auto" />
          <p className="text-muted-foreground">
            Pełna oferta usług kosmetycznych — od codziennej pielęgnacji po zaawansowane zabiegi i makijaż permanentny.
          </p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="card-luxe flex flex-col">
              <h3 className="font-serif text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {s.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-[6px] inline-block h-1 w-3 bg-[var(--color-gold)]" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href={PHONE_HREF} className="btn-outline-gold">Zapytaj o cennik</a>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [atm1, treatment, atm3, atm2, hero, atm1];
  return (
    <section id="galeria" className="py-24 sm:py-32 bg-[var(--color-secondary)]/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Atmosfera</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Wnętrze, które rozpieszcza zmysły</h2>
          <div className="divider-gold my-8 w-24 mx-auto" />
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {imgs.map((src, i) => (
            <div key={i} className={`overflow-hidden ${i === 0 || i === 4 ? "md:row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-square"}`}>
              <img src={src} alt={`Galeria New Beauty ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="opinie" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Opinie klientek</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Co mówią o nas Klientki</h2>
          <div className="divider-gold my-8 w-24 mx-auto" />
          <p className="text-muted-foreground">Ponad 60 pozytywnych ocen w Google · średnia 4.8 ★</p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <figure key={r.name} className="card-luxe">
              <div className="text-[var(--color-gold-warm)] tracking-widest">{"★".repeat(r.rating)}</div>
              <blockquote className="mt-4 font-serif text-xl leading-snug italic">&bdquo;{r.text}&rdquo;</blockquote>
              <figcaption className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
            Zobacz wszystkie opinie Google
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-[var(--color-secondary)]/40">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Umów się na wizytę</h2>
          <div className="divider-gold my-8 w-24" />
          <p className="text-foreground/80">
            Skontaktuj się z nami telefonicznie, aby ustalić dogodny termin oraz uzyskać szczegóły dotyczące zabiegów i cennika.
          </p>
          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Telefon</dt>
              <dd className="mt-2 font-serif text-2xl"><a href={PHONE_HREF} className="hover:text-[var(--color-gold-warm)]">{PHONE}</a></dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Adres</dt>
              <dd className="mt-2 font-serif text-2xl">{ADDRESS}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Godziny otwarcia</dt>
              <dd className="mt-2 text-foreground/80">Pon. – Sob. · według umówionych wizyt<br />Skontaktuj się telefonicznie, aby zarezerwować dogodną godzinę.</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Social</dt>
              <dd className="mt-2"><a href={FB} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold-warm)]">Facebook · new.beauty.lublin</a></dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={PHONE_HREF} className="btn-gold">Zadzwoń teraz</a>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">Trasa dojazdu</a>
          </div>
        </div>
        <div className="overflow-hidden rounded-sm border border-border shadow-[var(--shadow-soft)] min-h-[480px]">
          <iframe
            title="Lokalizacja New Beauty Aldona Dziuba na mapie"
            src="https://www.google.com/maps?q=Lwowska+6,+20-400+Lublin&output=embed"
            loading="lazy"
            className="h-full w-full min-h-[480px] border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-10 w-10 rounded-full object-cover" width={40} height={40} />
          <div>
            <p className="font-serif text-lg">New Beauty</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Aldona Dziuba · Lublin</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} New Beauty Aldona Dziuba. Wszelkie prawa zastrzeżone.
        </p>
        <div className="flex items-center gap-5 text-sm">
          <a href={PHONE_HREF} className="hover:text-[var(--color-gold-warm)]">{PHONE}</a>
          <a href={FB} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold-warm)]">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

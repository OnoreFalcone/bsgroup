// Shared site-level content: KPIs, leadership, testimonials, logos, culture

export const homeKpis = [
  { num: '30+',     label: 'Jahre am Schweizer Finanzplatz' },
  { num: '80+',     label: 'Beraterinnen und Berater' },
  { num: '95%',     label: 'Wiederbeauftragungsquote' },
  { num: '8+ Jahre', label: 'durchschnittliche Beratertenure' },
];

export const referenzenKpis = [
  { num: '200+', label: 'abgeschlossene Projekte' },
  { num: '95%',  label: 'Wiederbeauftragungsquote' },
  { num: '0',    label: 'öffentlich bekannte Projektabbrüche in 30 Jahren' },
  { num: '30+',  label: 'Jahre am Schweizer Finanzplatz' },
];

export type Leader = {
  role: string;
  context: string;
};

export const leaders: Leader[] = [
  { role: 'CEO · Geschäftsführer',       context: 'Verantwortet Strategie und Beratungsqualität.' },
  { role: 'Head of Project Services',     context: 'Programm- und Projektleitung in regulierten Vorhaben.' },
  { role: 'Head of Solution Services',    context: 'Plattform-Expertise: Avaloq, Finnova, SYRIUS, BSI CRM.' },
  { role: 'Head of Quality Services',     context: 'Seryous-Testing und Schweizer SYRIUS-Marktführerschaft.' },
  { role: 'Head of Software Services',    context: 'Custom Engineering, ALM, Cloud Re-Engineering.' },
  { role: 'Head of People',               context: 'Kultur, Karriere, Beratendenentwicklung.' },
];

export type Testimonial = {
  quote: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: 'BSGroup hat unsere Avaloq-Migration übernommen, nachdem ein anderer Anbieter sechs Monate gebraucht hat, um nicht voranzukommen. Wir waren in 14 Wochen produktiv.',
    role: 'IT-Leiter, Schweizer Privatbank',
  },
  {
    quote: 'Die SYRIUS-Test-Automatisierung hat unsere Release-Zyklen halbiert. Was vorher zwei Wochen dauerte, läuft jetzt über Nacht — und zuverlässiger als das manuelle Vorgehen je war.',
    role: 'Head of Operations, Krankenversicherer',
  },
  {
    quote: 'Die selben drei Personen, vom Kickoff bis Go-Live. Keine Ramp-up-Schleifen, keine Wissens-Lücken zwischen den Phasen. So gehört Beratung gemacht.',
    role: 'CIO, Schweizer Kantonalbank',
  },
];

export type CultureItem = {
  head: string;
  body: string;
};

export const cultureItems: CultureItem[] = [
  { head: 'Wir bleiben.', body: 'Unsere durchschnittliche Beratertenure liegt über acht Jahren. Das ist keine Zahl — das ist eine Strategie. Die Person, die Ihr Projekt aufsetzt, bringt es auch zu Ende.' },
  { head: 'Wir kennen den Markt.', body: 'Jede Beraterin und jeder Berater hat die Karriere im Schweizer Finanzplatz gemacht. Banken, Versicherungen, Krankenversicherer — wir kennen die Plattformen, die Regulatorik, die Kultur.' },
  { head: 'Eigentümergeführt.', body: 'Keine Investoren, kein Quartalsdruck, keine Skalierung um der Skalierung willen. Wir wachsen, wenn die richtigen Leute kommen — nicht wenn die Pipeline es will.' },
  { head: 'Eigene Beratende. Kein Body-Shopping.', body: 'Wer für BSGroup arbeitet, ist bei BSGroup angestellt — keine Subunternehmer, keine Freelancer-Schleifen. Verantwortung lässt sich nicht auslagern.' },
  { head: 'Verbindlich, nicht artig.', body: 'Wenn ein Projekt-Vorgehen falsch ist, sagen wir das. Wenn ein Plan unrealistisch ist, schreiben wir es ins Steering. Wer ehrliche Beratung will, ruft uns. Wer Pleasing will, hat genug Auswahl im Markt.' },
];

export const proofPoints = '30+ Jahre  ·  4 Schweizer Privatbanken  ·  3 Kantonalbanken  ·  6 Krankenversicherer  ·  5 Versicherer  ·  200+ erfolgreich abgeschlossene Projekte';

// Logos for proof bar (7 most-recognisable) and slider (9 financial-services brands)
// Note: served from /public/logos/clients/
export type ClientLogo = {
  name: string;
  filename: string;
  alt: string;
};

export const proofBarLogos: ClientLogo[] = [
  { name: 'UBS',         filename: 'UBS_Logo_SVG.svg.png',                  alt: 'UBS' },
  { name: 'ZKB',         filename: 'Zürcher_Kantonalbank_20xx_logo.svg.png', alt: 'Zürcher Kantonalbank' },
  { name: 'JuliusBaer',  filename: 'Julius_Bär_Logo.svg.png',                alt: 'Julius Bär' },
  { name: 'PostFinance', filename: 'PF_Logo_on_Yellow_RGB.svg.png',          alt: 'PostFinance' },
  { name: 'Swica',       filename: 'Swica.svg.png',                          alt: 'SWICA' },
  { name: 'Visana',      filename: 'Logo_Visana_emblem_RGB.svg.png',         alt: 'Visana' },
  { name: 'Sanitas',     filename: 'sanitas.png',                            alt: 'Sanitas' },
];

export const sliderLogos: ClientLogo[] = [
  { name: 'UBS',         filename: 'UBS_Logo_SVG.svg.png',                  alt: 'UBS' },
  { name: 'Swica',       filename: 'Swica.svg.png',                          alt: 'SWICA' },
  { name: 'ZKB',         filename: 'Zürcher_Kantonalbank_20xx_logo.svg.png', alt: 'Zürcher Kantonalbank' },
  { name: 'Visana',      filename: 'Logo_Visana_emblem_RGB.svg.png',         alt: 'Visana' },
  { name: 'JuliusBaer',  filename: 'Julius_Bär_Logo.svg.png',                alt: 'Julius Bär' },
  { name: 'Sanitas',     filename: 'sanitas.png',                            alt: 'Sanitas' },
  { name: 'BKB',         filename: 'Logo_Basler_Kantonalbank_ab_2016.svg.png', alt: 'Basler Kantonalbank' },
  { name: 'PostFinance', filename: 'PF_Logo_on_Yellow_RGB.svg.png',          alt: 'PostFinance' },
  { name: 'Clientis',    filename: 'logo-clientis.png',                      alt: 'Clientis' },
];

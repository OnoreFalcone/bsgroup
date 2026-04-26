export type ServiceLine =
  | 'Project Services'
  | 'Solution Services'
  | 'Quality Services'
  | 'Software Services';

export type ServiceCapability = {
  num: string;
  name: string;
  desc: string;
};

export type ServiceStep = {
  name: string;
  desc: string;
};

export type Service = {
  slug: string;
  eyebrow: string;
  headline: string;
  sub: string;
  ctaLabel: string;
  ctaHref: string;
  introHeading: string;
  introParagraphs: string[];
  capabilities: ServiceCapability[];
  steps: ServiceStep[];
  image: string;
  /** CSS object-position for the hero crop. Defaults to "center" if omitted. */
  imagePosition?: string;
};

export const services: Service[] = [
  {
    slug: 'project-services',
    eyebrow: 'Project Services',
    headline: 'Aus Plan wird Produktion.',
    sub: 'Projektleitung, PMO und Programm-Management in regulierten Banken- und Versicherungsprojekten — von der Initialisierung bis zum Go-Live.',
    ctaLabel: 'Projekt-Setup besprechen',
    ctaHref: '/kontakt',
    introHeading: 'Wenn das Projekt zählt, holt man uns.',
    introParagraphs: [
      'In Bank- und Versicherungsprojekten zählt nicht, wer das schönste Konzept schreibt — sondern wer es zum Laufen bringt. Unsere Projektleiterinnen und Programmleiter haben ihre Karriere im Schweizer Finanzplatz gemacht und kennen die regulatorische, organisatorische und technische Realität aus eigener Umsetzung.',
      'Das heisst für Sie: weniger Einarbeitungszeit, weniger Reibung mit Ihren Partnern und Lieferanten, schnellere Resultate.',
    ],
    capabilities: [
      { num: '01', name: 'Projektleitung & PMO', desc: 'End-to-End-Verantwortung für regulierte Bank- und Versicherungsprojekte. Klare Steuerung, transparente Reportings, ehrliche Risikoabschätzung.' },
      { num: '02', name: 'Programm-Management', desc: 'Mehrjährige Programme mit parallelen Workstreams, internationalen Lieferanten und politischer Komplexität.' },
      { num: '03', name: 'Regulatorik', desc: 'FINMA, FIDLEG, AIA, Basel IV, MIFID II — wir setzen Compliance-Vorgaben in fristgerechte Umsetzungen um.' },
      { num: '04', name: 'Plattform-Konsolidierungen', desc: 'Mehrere Banken auf einer Plattform, mehrere Mandanten in einem Avaloq, Self-Onboarding über mehrere Tochtergesellschaften.' },
    ],
    steps: [
      { name: 'Discovery', desc: 'Verständnis von Vorhaben, Stakeholdern, Risiken. Realistische Scope-Definition.' },
      { name: 'Setup', desc: 'PMO aufgesetzt, Governance etabliert, Workstreams strukturiert.' },
      { name: 'Steuerung', desc: 'Wöchentlicher Rhythmus, transparente Reportings, frühe Eskalation.' },
      { name: 'Übergabe', desc: 'Sauberer Wissenstransfer, Dokumentation, kein abrupter Cut.' },
    ],
    image: '/images/scenery/ProjectServices.jpg',
    imagePosition: 'center 70%',
  },
  {
    slug: 'solution-services',
    eyebrow: 'Solution Services',
    headline: 'Wir kennen die Plattformen, weil wir sie eingeführt haben.',
    sub: 'Evaluation, Design und Integration von Avaloq, Finnova, Adcubum SYRIUS und BSI CRM — herstellerneutral, weil wir nichts weiterverkaufen.',
    ctaLabel: 'Lösung evaluieren',
    ctaHref: '/kontakt',
    introHeading: 'Plattform-Entscheidungen halten Jahrzehnte.',
    introParagraphs: [
      'Wer eine Plattform-Entscheidung trifft, lebt für die nächsten zehn Jahre damit. Wir kennen Avaloq, Finnova, Adcubum SYRIUS und BSI CRM aus eigenen Einführungen — nicht aus Schulungen, nicht aus Sales-Pitches.',
      'Das macht uns herstellerneutral im wörtlichen Sinn: Wir verkaufen keine Lizenzen. Wenn die richtige Antwort „keine neue Plattform“ ist, sagen wir das auch.',
    ],
    capabilities: [
      { num: '01', name: 'Avaloq Banking Suite', desc: 'Migrationen, Parametrierungen, Release-Begleitung. Erfahrung mit Privatbanken und Kantonalbanken seit den frühen Versionen.' },
      { num: '02', name: 'Finnova', desc: 'Architektur bis Geschäftsregeln. Schweizer Privatbanken-Erfahrung, dokumentiert und übergeben.' },
      { num: '03', name: 'Adcubum SYRIUS', desc: 'Schweizer Krankenversicherer-Spezialist. Releases, Customizing, Integration in bestehende Landschaften.' },
      { num: '04', name: 'BSI CRM', desc: '11-Monate-Einführungen statt mehrjährige Projekte. Klares Datenmodell, klare Prozesse, klare Übergabe.' },
    ],
    steps: [
      { name: 'Discovery', desc: 'Verständnis von Geschäftsanforderungen, regulatorischem Rahmen, bestehenden Systemen.' },
      { name: 'Architektur', desc: 'Ziel-Architektur, Daten-Modell, Integrations-Konzept.' },
      { name: 'Integration', desc: 'Parametrierung, Schnittstellen, Migration aus Altsystemen.' },
      { name: 'Betrieb', desc: 'Release-Begleitung, Wissenstransfer, kontinuierliche Optimierung.' },
    ],
    image: '/images/scenery/SolutionServices.jpg',
  },
  {
    slug: 'quality-services',
    eyebrow: 'Quality Services · Seryous-Testing',
    headline: 'Wenn’s einfach wäre, bräuchten Sie uns nicht.',
    sub: 'Schweizer Spezialisten für SYRIUS-Testing — Testmanagement, Testdurchführung und Testautomatisierung als Service oder punktuell.',
    ctaLabel: 'Seryous-Testing kennenlernen',
    ctaHref: '/kontakt',
    introHeading: 'Testing entscheidet, ob Ihr Release am Montag läuft.',
    introParagraphs: [
      'In Krankenversicherungs- und Bank-IT entscheidet die Qualität der Tests, ob ein Release am Montag in Produktion geht oder zurückrollt. Seryous-Testing ist unser produktiviertes Test-Service: Schweizer Marktführer für SYRIUS-Releases, ergänzt um Bank-Testing.',
      'Wir machen nicht nur Tests — wir machen sie messbar. 18-Tage-Regressionszyklen werden zu 6-Tage-Zyklen. Manueller Aufwand sinkt um 60%.',
    ],
    capabilities: [
      { num: '01', name: 'Testmanagement', desc: 'Strategie, Planung, Reporting, Risikoabschätzung. Verantwortung von Anfang bis Go-Live.' },
      { num: '02', name: 'Testdurchführung', desc: 'Manuelle und exploratorische Tests durch Domain-Experten — keine ungeschulten Klick-Roboter.' },
      { num: '03', name: 'Testautomatisierung', desc: 'Tosca, Selenium, Playwright. Automatisierte Suiten, die in Stunden statt Tagen laufen und nachts deployed werden.' },
      { num: '04', name: 'SYRIUS-Spezialist', desc: 'Schweizer Marktführer für SYRIUS-Testing. Von 18 auf 6 Tage Regressionszyklus reduziert, Testabdeckung +40%.' },
    ],
    steps: [
      { name: 'Test-Konzept', desc: 'Risiko-basiert, dokumentiert, mit klaren Akzeptanzkriterien.' },
      { name: 'Aufsetzen', desc: 'Test-Daten, Test-Umgebungen, Automatisierungs-Framework.' },
      { name: 'Durchführen', desc: 'Strukturiert, dokumentiert, mit aktuellen Status-Reportings.' },
      { name: 'Reporting', desc: 'Klare Defekt-Reports, Trend-Analysen, Go/No-Go-Empfehlungen.' },
    ],
    image: '/images/scenery/QualityServices.jpg',
  },
  {
    slug: 'software-services',
    eyebrow: 'Software Services',
    headline: 'Wir können nicht alles. Aber Banken und Versicherungen können wir.',
    sub: 'Custom Software Engineering, ALM, Migrationen und Cloud Re-Engineering für Banken und Versicherungen.',
    ctaLabel: 'Engineering-Bedarf besprechen',
    ctaHref: '/kontakt',
    introHeading: 'Wenn Standard nicht reicht, beginnen wir.',
    introParagraphs: [
      'Standardprodukte decken 80% ab. Die letzten 20% — die regulatorischen Sonderfälle, die historisch gewachsenen Schnittstellen, die wirklich differenzierenden Geschäftsprozesse — sind das, wofür wir Software bauen.',
      'Wir können nicht alles. Aber wir können Java, .NET, TypeScript, Cloud-Architektur und FINMA-konforme Engineering-Prozesse — und das tun wir nur für Banken und Versicherungen.',
    ],
    capabilities: [
      { num: '01', name: 'Custom Software Engineering', desc: 'Von Microservice bis Frontend. Java, .NET, TypeScript, regulatorisch eingebettet, dokumentiert und übergebbar.' },
      { num: '02', name: 'ALM', desc: 'Application Lifecycle Management — Build, Deployment, Monitoring, Observability. CI/CD-Pipelines, die wirklich laufen.' },
      { num: '03', name: 'Migrationen', desc: 'Software- und Datenmigrationen ohne Betriebsunterbruch. Strategie bis Cut-Over.' },
      { num: '04', name: 'Cloud Re-Engineering', desc: 'Legacy-Apps in Azure / AWS — FINMA-konform, mit Datenresidenz Schweiz, wirtschaftlich rechnend.' },
    ],
    steps: [
      { name: 'Discovery', desc: 'Anforderungen, Constraints, regulatorische Realität.' },
      { name: 'Architektur', desc: 'Ziel-Bild, Tech-Stack, Cloud-Strategie, Schnittstellen.' },
      { name: 'Entwicklung', desc: 'Iterativ, mit Tests, dokumentiert, deploybar ab Tag 1.' },
      { name: 'Betrieb', desc: 'Monitoring, Incident-Response, kontinuierliche Optimierung.' },
    ],
    image: '/images/scenery/SoftwareServices.jpg',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

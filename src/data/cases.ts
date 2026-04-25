export type Case = {
  industry: string;
  headline: string;
  outcome: string;
  platform: string;
  serviceLine: string;
  href: string;
};

export const cases: Case[] = [
  { industry: 'Privatbank', headline: 'Kernbanken-Migration', outcome: '280’000 Kundenstämme migriert, drei Wochen vor Plan, null Datenverluste.', platform: 'Avaloq', serviceLine: 'Project Services', href: '#' },
  { industry: 'Krankenversicherer', headline: 'SYRIUS Release-Testing', outcome: 'Regressionszyklus von 18 auf 6 Tage, Testabdeckung +40%.', platform: 'SYRIUS', serviceLine: 'Quality Services', href: '#' },
  { industry: 'Kantonalbank', headline: 'Self-Onboarding', outcome: 'Onboarding-Strecke von 23 auf 8 Minuten, Conversion +34%.', platform: 'Cloud Native', serviceLine: 'Software Services', href: '#' },
  { industry: 'Versicherer', headline: 'BSI CRM-Einführung', outcome: 'Produktiv in 11 Monaten, 4 Altsysteme abgelöst.', platform: 'BSI CRM', serviceLine: 'Solution Services', href: '#' },
  { industry: 'Privatbank', headline: 'FIDLEG-Umsetzung', outcome: '14-monatiges Programm, fristgerecht zur Deadline.', platform: 'Avaloq', serviceLine: 'Project Services', href: '#' },
  { industry: 'Krankenversicherer', headline: 'Test-Automatisierung', outcome: 'Testabdeckung +40%, manueller Aufwand –60%.', platform: 'Tosca', serviceLine: 'Quality Services', href: '#' },
  { industry: 'Kantonalbank', headline: 'Avaloq-Release-Begleitung', outcome: '6 Major-Releases ohne Produktionsausfall.', platform: 'Avaloq', serviceLine: 'Project Services', href: '#' },
  { industry: 'Versicherer', headline: 'Cloud Re-Engineering', outcome: '15-jährige Legacy-App migriert ohne Betriebsunterbruch.', platform: 'Azure', serviceLine: 'Software Services', href: '#' },
  { industry: 'Privatbank', headline: 'Finnova-Parametrierung', outcome: '2’400 Geschäftsregeln dokumentiert und übergeben.', platform: 'Finnova', serviceLine: 'Solution Services', href: '#' },
  { industry: 'Krankenversicherer', headline: 'Requirement Engineering', outcome: '6 Fachbereiche aligned, Backlog-Durchlaufzeit halbiert.', platform: 'Methoden', serviceLine: 'Quality Services', href: '#' },
  { industry: 'Bank-Konsolidierung', headline: 'Plattform-Zusammenführung', outcome: '3 Banken, 1 Avaloq-Mandant, 18 Monate.', platform: 'Avaloq', serviceLine: 'Project Services', href: '#' },
  { industry: 'Versicherer', headline: 'Compliance-Reporting Migration', outcome: 'FINMA-konform, 4 Quartale früher als geplant.', platform: 'Regulatorik', serviceLine: 'Project Services', href: '#' },
];

// First three are the home-page Featured Cases
export const featuredCases = cases.slice(0, 3);

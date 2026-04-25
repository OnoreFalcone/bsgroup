export type Milestone = {
  year: string;
  tag: string;
  head: string;
  body: string;
  isCurrent?: boolean;
};

export const milestones: Milestone[] = [
  { year: '1995', tag: 'Gründung',    head: 'Gegründet.',          body: 'Erstes Mandat: Kernbanken-Einführung bei Schweizer Privatbank.' },
  { year: '1998', tag: 'Plattform',   head: 'Erstes Avaloq.',       body: 'Beginn unserer Plattform-Praxis im Banking.' },
  { year: '2002', tag: 'Wachstum',    head: 'Erste Kantonalbank.',  body: 'Eintritt ins Kantonalbank-Segment.' },
  { year: '2008', tag: 'Neuer Markt', head: 'SYRIUS startet.',      body: 'Erstes Krankenversicherer-Projekt. Beginn der Adcubum-Spezialisierung.' },
  { year: '2012', tag: 'Tiefe',       head: '50. Beraterin.',       body: 'Software Engineering ergänzt das Service-Portfolio.' },
  { year: '2016', tag: 'Productized', head: 'Seryous-Testing.',     body: 'Schweizer Marktführer für SYRIUS-Release-Testing.' },
  { year: '2020', tag: 'Regulatorik', head: 'FIDLEG-Welle.',        body: 'Mehrere 14-Monate-Compliance-Programme, fristgerecht.' },
  { year: '2024', tag: 'Meilenstein', head: '200. Projekt.',        body: '80+ Beratende, 95% Wiederbeauftragung, 0 Abbrüche.' },
  { year: '2026', tag: 'Heute',       head: 'Macher.',              body: '30 Jahre. Eigentümergeführt. Gleicher Ansatz wie am ersten Tag.', isCurrent: true },
];

export const plans = [
  { value: 'filestudio', label: 'FileStudio' },
  { value: 'purgedoc', label: 'PurgeDoc' },
  { value: 'tableextract', label: 'TableExtract' },
  { value: 'cleansheet', label: 'CleanSheet' },
  { value: 'pack-2', label: 'Pack de dos aplicaciones' },
  { value: 'pack-3', label: 'Pack de tres aplicaciones' },
  { value: 'complete', label: 'SecureFlow Complete' },
] as const;

export type PlanValue = (typeof plans)[number]['value'];

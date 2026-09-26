export type ProductId = 'filestudio' | 'purgedoc' | 'tableextract' | 'cleansheet';

export interface Product {
  id: ProductId;
  name: string;
  category: 'Prepare' | 'Protect' | 'Extract' | 'Automate';
  description: string;
  logo: string;
  url?: string;
}

export const products: Product[] = [
  {
    id: 'filestudio',
    name: 'FileStudio',
    category: 'Prepare',
    description: 'Prepara, convierte y organiza tus archivos.',
    logo: '/assets/brand/anclora-filestudio.png',
  },
  {
    id: 'purgedoc',
    name: 'PurgeDoc',
    category: 'Protect',
    description: 'Protege y anonimiza información sensible.',
    logo: '/assets/brand/anclora-purgedoc.png',
  },
  {
    id: 'tableextract',
    name: 'TableExtract',
    category: 'Extract',
    description: 'Extrae tablas y datos estructurados desde documentos.',
    logo: '/assets/brand/anclora-tableextractor.png',
  },
  {
    id: 'cleansheet',
    name: 'CleanSheet',
    category: 'Automate',
    description: 'Limpia, transforma y automatiza tus datos.',
    logo: '/assets/brand/anclora-clearsheet.png',
  },
];

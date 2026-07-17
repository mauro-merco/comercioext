export const topics = [
  { key: 'logistics', slug: 'logistica-internacional' },
  { key: 'supplyChain', slug: 'supply-chain' },
  { key: 'customs', slug: 'aduanas-y-regulacion' },
  { key: 'imports', slug: 'importaciones' },
  { key: 'exports', slug: 'exportaciones' },
  { key: 'foreignCompanies', slug: 'empresas-extranjeras' },
  { key: 'markets', slug: 'mercados-y-tendencias' },
  { key: 'ethics', slug: 'etica-y-compliance' },
  { key: 'perishables', slug: 'perecederos' },
  { key: 'tech', slug: 'tecnologia-aplicada' },
];

export const topicSlugToKey: Record<string, string> = {
  'logistica-internacional': 'logistics',
  'supply-chain': 'supplyChain',
  'aduanas-y-regulacion': 'customs',
  importaciones: 'imports',
  exportaciones: 'exports',
  'empresas-extranjeras': 'foreignCompanies',
  'mercados-y-tendencias': 'markets',
  'etica-y-compliance': 'ethics',
  perecederos: 'perishables',
  'tecnologia-aplicada': 'tech',
};

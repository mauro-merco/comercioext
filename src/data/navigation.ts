export interface NavItem {
  key: string;
  path: string;
}

export interface NavGroup {
  key: string;
  children: NavItem[];
}

export type NavEntry = NavItem | NavGroup;

function isGroup(entry: NavEntry): entry is NavGroup {
  return 'children' in entry;
}

export { isGroup };

export const mainNavigation: NavEntry[] = [
  { key: 'home', path: '/' },
  {
    key: 'topics',
    children: [
      { key: 'news', path: '/actualidad' },
      { key: 'analysis', path: '/analisis' },
      { key: 'guides', path: '/guias' },
      { key: 'foreign', path: '/empresas-extranjeras' },
    ],
  },
  {
    key: 'people',
    children: [
      { key: 'german', path: '/german-muchico' },
      { key: 'cargonet', path: '/cargonet-group' },
    ],
  },
  { key: 'resources', path: '/recursos' },
  { key: 'contact', path: '/contacto' },
];

import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { mainNavigation, isGroup, type NavEntry, type NavGroup } from '@/data/navigation';
import { articles } from '@/data/articles';

export default function Header() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const location = useLocation();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const firstButtonRef = useRef<HTMLButtonElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileAccordion(null);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      (firstLinkRef.current || firstButtonRef.current)?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    if (mobileOpen || openDropdown) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [mobileOpen, openDropdown]);

  const handleDropdownEnter = useCallback((key: string) => {
    clearTimeout(hoverTimeoutRef.current);
    setOpenDropdown(key);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 120);
  }, []);

  const isActive = (path: string) =>
    location.pathname === path || (path !== '/' && location.pathname.startsWith(path));

  const isChildActive = (group: NavGroup) =>
    group.children.some((child) => isActive(child.path));

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded">
        {t('common.skipToContent')}
      </a>

      <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-line dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <Link to="/" className="flex items-center gap-1 shrink-0" aria-label="Comercio Exterior PRO">
              <span className="text-sm sm:text-base font-bold tracking-tight text-navy dark:text-gray-100 uppercase">
                Comercio Exterior
              </span>
              <span className="bg-primary text-white text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded uppercase ml-1">
                PRO
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navegación principal">
              {mainNavigation.map((entry) => {
                if (!isGroup(entry)) {
                  return (
                    <Link
                      key={entry.path}
                      to={entry.path}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive(entry.path)
                          ? 'text-primary bg-primary/10'
                          : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {t(`nav.${entry.key}`)}
                    </Link>
                  );
                }

                return (
                  <div
                    key={entry.key}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(entry.key)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      aria-haspopup="true"
                      aria-expanded={openDropdown === entry.key}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isChildActive(entry)
                          ? 'text-primary bg-primary/10'
                          : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {t(`nav.${entry.key}`)}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === entry.key ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {openDropdown === entry.key && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-900 border border-line dark:border-gray-700 rounded-lg shadow-xl py-1 z-50">
                        {entry.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              isActive(child.path)
                                ? 'text-primary bg-primary/5 font-medium'
                                : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`}
                          >
                            {t(`nav.${child.key}`)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={t('nav.search')}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={theme === 'light' ? 'Dark mode' : 'Light mode'}
              >
                {theme === 'light' ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>

              <div className="flex items-center border border-line dark:border-gray-700 rounded-md overflow-hidden">
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-2 py-1.5 text-xs font-semibold transition-colors ${
                    language === 'es'
                      ? 'bg-primary text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1.5 text-xs font-semibold transition-colors ${
                    language === 'en'
                      ? 'bg-primary text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  EN
                </button>
              </div>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={mobileOpen ? t('common.close') : 'Menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div
            className="lg:hidden border-t border-line dark:border-gray-800 bg-white dark:bg-gray-900 max-h-[70vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {mainNavigation.map((entry, i) => {
                if (!isGroup(entry)) {
                  return (
                    <Link
                      key={entry.path}
                      ref={i === 0 ? firstLinkRef : undefined}
                      to={entry.path}
                      className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${
                        isActive(entry.path)
                          ? 'text-primary bg-primary/10'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {t(`nav.${entry.key}`)}
                    </Link>
                  );
                }

                const isOpen = mobileAccordion === entry.key;

                return (
                  <div key={entry.key}>
                    <button
                      ref={i === 0 ? firstButtonRef : undefined}
                      onClick={() => setMobileAccordion(isOpen ? null : entry.key)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-md transition-colors ${
                        isChildActive(entry)
                          ? 'text-primary bg-primary/10'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {t(`nav.${entry.key}`)}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="pl-6 pb-1 space-y-0.5">
                        {entry.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-4 py-2.5 text-sm rounded-md transition-colors ${
                              isActive(child.path)
                                ? 'text-primary bg-primary/5 font-medium'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`}
                          >
                            {t(`nav.${child.key}`)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] bg-black/50 flex items-start justify-center pt-20 px-4" onClick={onClose}>
      <div className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-lg shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center border-b border-line dark:border-gray-700 px-4">
          <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('search.placeholder')}
            className="w-full px-4 py-4 text-lg bg-transparent border-0 outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
          />
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {query.length > 1 && <SearchResults query={query} onClose={onClose} />}
      </div>
    </div>
  );
}

function SearchResults({ query, onClose }: { query: string; onClose: () => void }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'es' | 'en';
  const lower = query.toLowerCase();
  const results = articles.filter(
    (a) =>
      a.title[lang].toLowerCase().includes(lower) ||
      a.excerpt[lang].toLowerCase().includes(lower) ||
      a.category.toLowerCase().includes(lower)
  );

  if (results.length === 0) {
    return (
      <div className="px-4 py-8 text-center text-muted">
        <p>{t('search.noResults')} &ldquo;{query}&rdquo;</p>
      </div>
    );
  }

  return (
    <div className="max-h-96 overflow-y-auto">
      {results.map((article) => (
        <Link
          key={article.slug}
          to={`/notas/${article.slug}`}
          onClick={onClose}
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-line dark:border-gray-800 last:border-0"
        >
          <img
            src={article.heroImage}
            alt=""
            className="w-12 h-12 rounded object-cover shrink-0"
          />
          <div className="min-w-0">
            <div className="text-xs text-primary font-semibold uppercase mb-0.5">{article.category}</div>
            <div className="font-medium text-gray-900 dark:text-gray-100 text-sm truncate">{article.title[lang]}</div>
            <div className="text-xs text-muted truncate">{article.excerpt[lang]}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

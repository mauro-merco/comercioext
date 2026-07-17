import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { articles } from '@/data/articles';

export default function Search() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'es' | 'en';
  const [query, setQuery] = useState(new URLSearchParams(window.location.search).get('q') || '');

  const lower = query.toLowerCase();
  const results = query.length > 1
    ? articles.filter(
        (a) =>
          a.title[lang].toLowerCase().includes(lower) ||
          a.excerpt[lang].toLowerCase().includes(lower) ||
          a.category.toLowerCase().includes(lower)
      )
    : [];

  return (
    <>
      <Helmet>
        <title>{t('search.title')} | Comercio Exterior PRO</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <Breadcrumbs items={[{ label: t('search.title') }]} />

        <h1 className="font-editorial text-3xl font-bold text-navy dark:text-gray-100 mb-8">
          {t('search.title')}
        </h1>

        <div className="relative mb-8">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('search.placeholder')}
            className="w-full pl-12 pr-4 py-4 text-lg border border-line dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
          />
        </div>

        {query.length > 1 && (
          <p className="text-sm text-muted mb-6">
            {t('search.resultsFor')} &ldquo;{query}&rdquo; ({results.length})
          </p>
        )}

        <div className="space-y-4">
          {results.map((article) => (
            <Link
              key={article.slug}
              to={`/notas/${article.slug}`}
              className="block p-5 border border-line dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
            >
              <span className="text-xs font-semibold uppercase text-primary">{article.category}</span>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mt-1">{article.title[lang]}</h3>
              <p className="text-sm text-muted mt-1 line-clamp-2">{article.excerpt[lang]}</p>
            </Link>
          ))}
        </div>

        {query.length > 1 && results.length === 0 && (
          <div className="text-center py-12 text-muted">
            <p>{t('search.noResults')} &ldquo;{query}&rdquo;</p>
          </div>
        )}
      </div>
    </>
  );
}

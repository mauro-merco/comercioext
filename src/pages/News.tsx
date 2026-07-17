import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import ArticleCard from '@/components/ui/ArticleCard';
import { getArticlesByCategory } from '@/data/articles';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function News() {
  const { t } = useTranslation();
  const articlesList = getArticlesByCategory('news').concat(getArticlesByCategory('analysis')).filter((a, i, arr) => arr.findIndex(x => x.slug === a.slug) === i);

  return (
    <>
      <Helmet>
        <title>{t('nav.news')} | Comercio Exterior PRO</title>
        <meta name="description" content={`${t('nav.news')} - ${t('hero.subtitle')}`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <Breadcrumbs items={[{ label: t('nav.news') }]} />

        <h1 className="font-editorial text-3xl lg:text-4xl font-bold text-navy dark:text-gray-100 mb-3">
          {t('nav.news')}
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          {t('hero.subtitle')}
        </p>

        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-8 text-sm text-amber-800 dark:text-amber-300">
          La normativa y las condiciones operativas pueden cambiar. Verificá siempre la fuente oficial vigente.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesList.map((article) => (
            <ArticleCard
              key={article.slug}
              slug={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              category={article.category}
              author={article.author}
              publishedAt={article.publishedAt}
              readingTime={article.readingTime}
              heroImage={article.heroImage}
              heroAlt={article.heroAlt}
            />
          ))}
        </div>

        {articlesList.length === 0 && (
          <div className="text-center py-16 text-muted">
            <p>No hay notas disponibles aún.</p>
          </div>
        )}
      </div>
    </>
  );
}

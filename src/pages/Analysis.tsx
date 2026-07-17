import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import ArticleCard from '@/components/ui/ArticleCard';
import { getArticlesByCategory } from '@/data/articles';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function Analysis() {
  const { t } = useTranslation();
  const articlesList = getArticlesByCategory('analysis');

  return (
    <>
      <Helmet>
        <title>{t('nav.analysis')} | Comercio Exterior PRO</title>
        <meta name="description" content={`${t('nav.analysis')} - Columnas, escenarios, tendencias y opiniones firmadas.`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <Breadcrumbs items={[{ label: t('nav.analysis') }]} />

        <h1 className="font-editorial text-3xl lg:text-4xl font-bold text-navy dark:text-gray-100 mb-3">
          {t('nav.analysis')}
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          Columnas interpretativas, escenarios, tendencias y opiniones firmadas.
        </p>

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
      </div>
    </>
  );
}

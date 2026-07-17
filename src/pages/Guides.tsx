import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ArticleCard from '@/components/ui/ArticleCard';
import { getArticlesByCategory } from '@/data/articles';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function Guides() {
  const { t } = useTranslation();
  const articlesList = getArticlesByCategory('guides');

  const learningPaths = [
    { title: 'Empezar a importar', icon: '📦' },
    { title: 'Prepararse para exportar', icon: '🚢' },
    { title: 'Entender costos y riesgos', icon: '📊' },
    { title: 'Diseñar una supply chain resiliente', icon: '🔗' },
  ];

  return (
    <>
      <Helmet>
        <title>{t('nav.guides')} | Comercio Exterior PRO</title>
        <meta name="description" content={`${t('nav.guides')} - Biblioteca de contenidos evergreen sobre comercio exterior.`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <Breadcrumbs items={[{ label: t('nav.guides') }]} />

        <h1 className="font-editorial text-3xl lg:text-4xl font-bold text-navy dark:text-gray-100 mb-3">
          {t('nav.guides')}
        </h1>
        <p className="text-muted mb-8 max-w-2xl">
          Biblioteca de contenidos evergreen. Guías prácticas para decisores de comercio exterior.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {learningPaths.map((path) => (
            <div
              key={path.title}
              className="bg-gray-50 dark:bg-gray-900 border border-line dark:border-gray-800 rounded-lg p-4 text-center"
            >
              <span className="text-2xl block mb-2">{path.icon}</span>
              <span className="text-sm font-medium text-navy dark:text-gray-100">{path.title}</span>
            </div>
          ))}
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
      </div>
    </>
  );
}

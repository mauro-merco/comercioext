import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ArticleCard from '@/components/ui/ArticleCard';
import NewsletterForm from '@/components/ui/NewsletterForm';
import { articles, getFeaturedArticles } from '@/data/articles';

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'es' | 'en';
  const featured = getFeaturedArticles();
  const latestAnalysis = articles.filter((a) => a.category === 'analysis').slice(0, 3);
  const latestGuides = articles.filter((a) => a.category === 'guides').slice(0, 3);
  const mainArticle = featured[0] || articles[0];
  const secondaryArticles = featured.slice(1, 3);

  return (
    <>
      <Helmet>
        <title>{t('hero.title')} | Comercio Exterior PRO</title>
        <meta name="description" content={t('hero.subtitle')} />
      </Helmet>

      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 border-b border-line dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <div className="text-center mb-8 lg:mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3">
              {t('hero.tag')}
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy dark:text-gray-100 leading-tight mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="rounded-xl overflow-hidden mb-10 aspect-[21/6] hidden lg:block">
            <img
              src="/images/hero-port.jpg"
              alt="Terminal portuaria con contenedores y grúas"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {mainArticle && (
              <div className="lg:col-span-2">
                <ArticleCard
                  slug={mainArticle.slug}
                  title={mainArticle.title}
                  excerpt={mainArticle.excerpt}
                  category={mainArticle.category}
                  author={mainArticle.author}
                  publishedAt={mainArticle.publishedAt}
                  readingTime={mainArticle.readingTime}
                  heroImage={mainArticle.heroImage}
                  heroAlt={mainArticle.heroAlt}
                  featured
                />
              </div>
            )}
            <div className="space-y-4">
              {secondaryArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  slug={article.slug}
                  title={article.title}
                  excerpt={article.excerpt}
                  category={article.category}
                  author={article.author}
                  publishedAt={mainArticle.publishedAt}
                  readingTime={article.readingTime}
                  heroImage={article.heroImage}
                  heroAlt={article.heroAlt}
                  variant="horizontal"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="bg-white dark:bg-gray-900 border border-line dark:border-gray-800 rounded-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative">
            <h2 className="font-editorial text-xl md:text-2xl font-bold text-navy dark:text-gray-100 mb-4">
              {t('sections.germanView')}
            </h2>
            <blockquote className="text-muted italic leading-relaxed max-w-3xl">
              &ldquo;{t('home.germanReflection')}&rdquo;
            </blockquote>
            <Link
              to="/german-muchico"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
            >
              {t('common.readMore')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-editorial text-2xl font-bold text-navy dark:text-gray-100">
            {t('sections.latestAnalysis')}
          </h2>
          <Link to="/analisis" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
            {t('sections.viewAll')}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestAnalysis.map((article) => (
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
      </section>

      <section className="bg-gray-50 dark:bg-gray-900 border-y border-line dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <div className="text-center mb-8">
            <h2 className="font-editorial text-2xl font-bold text-navy dark:text-gray-100 mb-2">
              {t('sections.foreignCompanies')}
            </h2>
            <p className="text-muted max-w-xl mx-auto">{t('sections.foreignSubtitle')}</p>
          </div>
          <div className="bg-white dark:bg-gray-950 border border-line dark:border-gray-800 rounded-xl p-8 md:p-12">
            <h3 className="font-editorial text-xl font-bold text-navy dark:text-gray-100 mb-3">
              {t('foreignPage.title')}
            </h3>
            <p className="text-muted mb-6 max-w-2xl">{t('foreignPage.subtitle')}</p>
            <Link
              to="/empresas-extranjeras"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-md transition-colors"
            >
              {t('foreignPage.cta')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-editorial text-2xl font-bold text-navy dark:text-gray-100">
            {t('sections.essentialGuides')}
          </h2>
          <Link to="/guias" className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
            {t('sections.viewGuides')}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestGuides.map((article) => (
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
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <NewsletterForm />
      </section>
    </>
  );
}

import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ArticleCard from '@/components/ui/ArticleCard';
import NewsletterForm from '@/components/ui/NewsletterForm';
import { articles } from '@/data/articles';

export default function GermanMuchico() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'es' | 'en';
  const germanArticles = articles.filter((a) => a.author === 'german-muchico').slice(0, 3);

  const timeline = [
    { year: '1990', title: 'Inicio en comercio exterior', description: 'Ingreso formal a la actividad el 1 de febrero.' },
    { year: '1999', title: 'Fundación de Connexion Transportes', description: 'Creación de Connexion Transportes Internacionales S.A.' },
    { year: '2002', title: 'Activación de CargoNet', description: 'Inicio de operaciones de CargoNet Group el 20 de marzo.' },
    { year: '2005', title: 'Expansión a Estados Unidos', description: 'Apertura de operaciones en Miami.' },
    { year: '2009', title: 'Expansión a Brasil', description: 'Apertura de operaciones en Brasil.' },
  ];

  const expertise = [
    'Optimización de cadenas de suministro',
    'Mitigación de riesgos aduaneros',
    'Ingeniería logística',
    'Estrategia de internacionalización',
    'Previsibilidad operativa',
    'Costo total de la operación',
    'Integración end to end',
    'Resiliencia de supply chain',
  ];

  return (
    <>
      <Helmet>
        <title>Germán Muchico | Comercio Exterior PRO</title>
        <meta name="description" content="Germán Muchico: más de 35 años en comercio exterior. CEO y fundador de CargoNet Group." />
      </Helmet>

      <div className="bg-gradient-to-b from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
          <Breadcrumbs items={[{ label: t('nav.german') }]} />

          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-4xl">
            {t('germanPage.title')}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-navy flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">GM</span>
              </div>
              <h2 className="font-editorial text-2xl font-bold text-navy dark:text-gray-100 mb-4">
                {t('germanPage.manifesto')}
              </h2>
              <div className="text-muted leading-relaxed space-y-4">
                <p>
                  En más de tres décadas de trabajo en comercio exterior, aprendí que la logística competitiva no se construye desde la urgencia. Se construye desde el criterio, la experiencia y la capacidad de anticipar lo que otros descubren cuando ya es tarde.
                </p>
                <p>
                  Mi enfoque combina visión estratégica con conocimiento operativo. No creo en las soluciones genéricas. Cada empresa, cada producto y cada mercado requieren una lectura propia.
                </p>
                <p>
                  Comercio Exterior PRO es el espacio donde comparto lo que la experiencia enseña: análisis sin adjetivos innecesarios, guías que se pueden aplicar y perspectivas que ayudan a decidir mejor.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-editorial text-2xl font-bold text-navy dark:text-gray-100 mb-6">
                {t('germanPage.timeline')}
              </h2>
              <div className="relative pl-8 border-l-2 border-primary/20 space-y-8">
                {timeline.map((item) => (
                  <div key={item.year} className="relative">
                    <div className="absolute -left-10 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-950"></div>
                    <div className="text-sm font-bold text-primary mb-1">{item.year}</div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
                    <p className="text-sm text-muted mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-editorial text-2xl font-bold text-navy dark:text-gray-100 mb-6">
                {t('germanPage.expertise')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {expertise.map((topic) => (
                  <span
                    key={topic}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-editorial text-2xl font-bold text-navy dark:text-gray-100 mb-6">
                {t('germanPage.columns')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {germanArticles.map((article) => (
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
                    variant="horizontal"
                  />
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-900 border border-line dark:border-gray-800 rounded-xl p-6">
              <h3 className="font-semibold text-navy dark:text-gray-100 mb-3">Datos clave</h3>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex justify-between">
                  <span>Experiencia</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">+35 años</span>
                </li>
                <li className="flex justify-between">
                  <span>Rol actual</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">CEO, CargoNet Group</span>
                </li>
                <li className="flex justify-between">
                  <span>Inicio</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">1 de febrero de 1990</span>
                </li>
                <li className="flex justify-between">
                  <span>Presencia</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">ARG / US / BR</span>
                </li>
              </ul>
            </div>

            <NewsletterForm variant="inline" />
          </aside>
        </div>
      </div>
    </>
  );
}

import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import NewsletterForm from '@/components/ui/NewsletterForm';

export default function ForeignCompanies() {
  const { t } = useTranslation();

  const sections = [
    { key: 'panorama', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
    { key: 'decisions', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
    { key: 'actors', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
    { key: 'risks', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z' },
  ];

  const decisions = [
    'Definir el objetivo de la presencia local',
    'Validar la estructura legal y fiscal',
    'Mapear permisos y organismos',
    'Diseñar el circuito bancario y cambiario',
    'Determinar la clasificación y tratamiento de mercaderías',
    'Calcular el costo total',
    'Elegir el modelo logístico',
    'Seleccionar socios y responsables',
    'Preparar escenarios',
    'Ejecutar un piloto medible',
  ];

  return (
    <>
      <Helmet>
        <title>Empresas extranjeras en Argentina | Comercio Exterior PRO</title>
        <meta name="description" content="Guía completa para empresas extranjeras que buscan instalarse y operar en Argentina." />
      </Helmet>

      <div className="bg-gradient-to-b from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
          <Breadcrumbs items={[{ label: t('nav.foreign') }]} />

          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-3xl">
            {t('foreignPage.title')}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            {t('foreignPage.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sections.map((section) => (
            <div key={section.key} className="bg-gray-50 dark:bg-gray-900 border border-line dark:border-gray-800 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={section.icon} />
                </svg>
              </div>
              <h3 className="font-semibold text-navy dark:text-gray-100 mb-2">
                {t(`foreignPage.${section.key}`)}
              </h3>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="font-editorial text-2xl font-bold text-navy dark:text-gray-100 mb-8">
            {t('foreignPage.decisions')}
          </h2>
          <ol className="space-y-4">
            {decisions.map((decision, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{decision}</h3>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 bg-gray-50 dark:bg-gray-900 border border-line dark:border-gray-800 rounded-xl p-8 md:p-12 text-center">
          <h2 className="font-editorial text-2xl font-bold text-navy dark:text-gray-100 mb-4">
            {t('foreignPage.methodology')}
          </h2>
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            CargoNet Group ofrece un enfoque consultivo integral que conecta estrategia, regulación, aduanas, bancos y logística para empresas que operan o buscan instalarse en Argentina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cargonet-group"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-md transition-colors"
            >
              {t('foreignPage.cta')}
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary/5 font-semibold rounded-md transition-colors"
            >
              {t('cargonetPage.ctaSecondary')}
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <NewsletterForm />
        </div>
      </div>
    </>
  );
}

import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function CargoNet() {
  const { t } = useTranslation();

  const services = [
    { title: 'Consultoría end to end', description: 'Enfoque integral que conecta estrategia, regulación, transporte, aduanas, bancos e información.' },
    { title: 'Transporte y logística internacional', description: 'Coordinación de operaciones multimodales con enfoque en eficiencia y previsibilidad.' },
    { title: 'Despachos aduaneros', description: 'Gestión aduanera con cumplimiento y transparencia.' },
    { title: 'Operativa bancaria', description: 'Documentación, pagos, cobros y financiamiento vinculados a comercio internacional.' },
    { title: 'Trading', description: 'Intermediación y comercialización con conocimiento del mercado regional.' },
    { title: 'Perecederos', description: 'Especialización en cadenas de frío y operaciones con productos sensibles.' },
  ];

  const values = [
    { title: 'Confianza', description: 'Transparencia en cada interacción, desde la primera consulta hasta la ejecución.' },
    { title: 'Innovación', description: 'Mejora continua basada en datos, experiencia y aprendizaje operativo.' },
    { title: 'Excelencia', description: 'Compromiso con resultados medibles y superación de expectativas.' },
  ];

  return (
    <>
      <Helmet>
        <title>CargoNet Group | Comercio Exterior PRO</title>
        <meta name="description" content="CargoNet Group: socio estratégico en consultoría y logística internacional. Presencia en Argentina, Miami y Brasil." />
      </Helmet>

      <div className="bg-gradient-to-b from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
          <Breadcrumbs items={[{ label: t('nav.cargonet') }]} />

          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-3">
            Con el respaldo de CargoNet Group
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-3xl">
            {t('cargonetPage.title')}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="font-editorial text-2xl font-bold text-navy dark:text-gray-100 mb-4">
                {t('cargonetPage.approach')}
              </h2>
              <p className="text-muted leading-relaxed">
                CargoNet Group opera con un enfoque consultivo end to end. Esto significa que no se limita a ejecutar tareas aisladas; diseña la solución completa considerando estrategia, regulación, transporte, aduanas, bancos e información como un sistema integrado.
              </p>
            </section>

            <section>
              <h2 className="font-editorial text-2xl font-bold text-navy dark:text-gray-100 mb-6">
                {t('cargonetPage.services')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="bg-gray-50 dark:bg-gray-900 border border-line dark:border-gray-800 rounded-lg p-5"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{service.title}</h3>
                    <p className="text-sm text-muted">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-editorial text-2xl font-bold text-navy dark:text-gray-100 mb-6">
                {t('cargonetPage.values')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value) => (
                  <div key={value.title} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold text-lg">{value.title.charAt(0)}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{value.title}</h3>
                    <p className="text-sm text-muted">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-editorial text-2xl font-bold text-navy dark:text-gray-100 mb-4">
                {t('cargonetPage.presence')}
              </h2>
              <div className="flex flex-wrap gap-4">
                {['Argentina', 'Miami, Estados Unidos', 'Brasil'].map((location) => (
                  <div
                    key={location}
                    className="px-5 py-3 bg-gray-50 dark:bg-gray-900 border border-line dark:border-gray-800 rounded-lg"
                  >
                    <span className="font-medium text-gray-900 dark:text-gray-100">{location}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="font-semibold text-navy dark:text-gray-100 mb-3">{t('cargonetPage.cta')}</h3>
              <p className="text-sm text-muted mb-4">
                Conocé las soluciones completas de CargoNet Group para comercio exterior y logística internacional.
              </p>
              <a
                href="https://cargonetgroup.com/?utm_source=comercioexterior.pro&utm_medium=referral&utm_campaign=portal_editorial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-md transition-colors w-full justify-center"
              >
                {t('cargonetPage.cta')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <Link
              to="/contacto"
              className="block text-center px-5 py-3 border border-primary text-primary hover:bg-primary/5 text-sm font-semibold rounded-md transition-colors"
            >
              {t('cargonetPage.ctaSecondary')}
            </Link>

            <Link
              to="/empresas-extranjeras"
              className="block text-center px-5 py-3 border border-line dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-semibold rounded-md transition-colors"
            >
              {t('nav.foreign')}
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
}

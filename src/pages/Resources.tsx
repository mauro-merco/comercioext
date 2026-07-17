import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import NewsletterForm from '@/components/ui/NewsletterForm';

export default function Resources() {
  const { t } = useTranslation();

  const resources = [
    {
      title: 'Checklist previo a una importación',
      description: 'Lista completa de verificación antes de iniciar una operación de importación.',
      level: 'initial',
      icon: '📋',
    },
    {
      title: 'Matriz de riesgos de supply chain',
      description: 'Herramienta para identificar, evaluar y priorizar riesgos en la cadena de suministro.',
      level: 'intermediate',
      icon: '⚠️',
    },
    {
      title: 'Glosario esencial de comercio exterior',
      description: 'Definiciones claras de los términos más utilizados en comercio internacional.',
      level: 'initial',
      icon: '📖',
    },
    {
      title: 'Guía de preguntas para evaluar una operación end to end',
      description: 'Preguntas estratégicas para diagnosticar y mejorar la operación logística.',
      level: 'executive',
      icon: '🔍',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('resources.title')} | Comercio Exterior PRO</title>
        <meta name="description" content={t('resources.subtitle')} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <Breadcrumbs items={[{ label: t('resources.title') }]} />

        <h1 className="font-editorial text-3xl lg:text-4xl font-bold text-navy dark:text-gray-100 mb-3">
          {t('resources.title')}
        </h1>
        <p className="text-muted mb-10 max-w-2xl">
          {t('resources.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="bg-gray-50 dark:bg-gray-900 border border-line dark:border-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{resource.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      {t(`resources.level.${resource.level}`)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted mb-4">{resource.description}</p>
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                    {t('resources.download')}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <NewsletterForm />
      </div>
    </>
  );
}

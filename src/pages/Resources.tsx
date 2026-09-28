import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import NewsletterForm from '@/components/ui/NewsletterForm';
import AccordionSection from '@/components/ui/AccordionSection';
import WhatsappForm from '@/components/ui/WhatsappForm';
import { forms, type Lang, type LocalizedText } from '@/data/formularios';

interface RelatedResource {
  title: LocalizedText;
  description: LocalizedText;
  level: 'initial' | 'intermediate' | 'executive';
  path: string;
}

const relatedResources: RelatedResource[] = [
  {
    title: {
      es: 'Importar no empieza con el embarque: empieza con el diagnóstico',
      en: 'Importing does not start with the shipment: it starts with the assessment',
    },
    description: {
      es: 'Las preguntas que una empresa debería poder responder antes de reservar espacio.',
      en: 'The questions a company should be able to answer before booking space.',
    },
    level: 'initial',
    path: '/notas/importar-empieza-con-diagnostico',
  },
  {
    title: {
      es: 'El costo invisible de una cadena logística fragmentada',
      en: 'The hidden cost of a fragmented logistics chain',
    },
    description: {
      es: 'Cómo identificar, evaluar y priorizar los riesgos que no figuran en la tarifa.',
      en: 'How to identify, assess and prioritize the risks that never show up on the rate.',
    },
    level: 'intermediate',
    path: '/notas/costo-invisible-cadena-logistica-fragmentada',
  },
  {
    title: {
      es: 'Logística end to end: qué integra y qué problemas evita',
      en: 'End-to-end logistics: what it integrates and what it prevents',
    },
    description: {
      es: 'Estrategia, regulación, transporte, aduanas, bancos e información en un mismo sistema.',
      en: 'Strategy, regulation, transport, customs, banking and information in one system.',
    },
    level: 'executive',
    path: '/notas/logistica-end-to-end-que-integra',
  },
  {
    title: {
      es: 'Cómo construir previsibilidad en comercio exterior',
      en: 'How to build predictability in foreign trade',
    },
    description: {
      es: 'Las variables que importan, las señales que hay que detectar y las reglas para decidir.',
      en: 'The variables that matter, the signals to detect and the rules to decide by.',
    },
    level: 'intermediate',
    path: '/notas/previsibilidad-comercio-exterior',
  },
];

export default function Resources() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language === 'en' ? 'en' : 'es') as Lang;
  const [openForms, setOpenForms] = useState<Record<string, boolean>>({ [forms[0].id]: true });

  const toggleForm = (id: string) => {
    setOpenForms((current) => ({ ...current, [id]: !current[id] }));
  };

  const focusForm = (id: string) => {
    setOpenForms((current) => ({ ...current, [id]: true }));
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
        <p className="text-muted mb-4 max-w-2xl">{t('resources.subtitle')}</p>
        <p className="text-muted mb-10 max-w-2xl">{t('resources.formsIntro')}</p>

        <nav aria-label={t('resources.navLabel')} className="flex flex-wrap gap-2 mb-6">
          {forms.map((form) => (
            <button
              key={form.id}
              type="button"
              onClick={() => focusForm(form.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                openForms[form.id]
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white dark:bg-gray-900 border-line dark:border-gray-700 text-navy dark:text-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {form.eyebrow[lang]}
            </button>
          ))}
        </nav>

        <div className="space-y-4 mb-16">
          {forms.map((form) => (
            <AccordionSection
              key={form.id}
              id={form.id}
              open={Boolean(openForms[form.id])}
              onToggle={() => toggleForm(form.id)}
              eyebrow={form.eyebrow[lang]}
              title={form.title[lang]}
              description={form.description[lang]}
            >
              <WhatsappForm definition={form} lang={lang} />
            </AccordionSection>
          ))}
        </div>

        <h2 className="font-editorial text-2xl lg:text-3xl font-bold text-navy dark:text-gray-100 mb-3">
          {t('resources.relatedTitle')}
        </h2>
        <p className="text-muted mb-8 max-w-2xl">{t('resources.relatedSubtitle')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {relatedResources.map((resource) => (
            <div
              key={resource.path}
              className="bg-gray-50 dark:bg-gray-900 border border-line dark:border-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  {t(`resources.level.${resource.level}`)}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {resource.title[lang]}
              </h3>
              <p className="text-sm text-muted mb-4">{resource.description[lang]}</p>
              <Link
                to={resource.path}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
              >
                {t('resources.read')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <NewsletterForm />
      </div>
    </>
  );
}

import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import NewsletterForm from '@/components/ui/NewsletterForm';

export default function Newsletter() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('newsletter.title')} | Comercio Exterior PRO</title>
        <meta name="description" content={t('newsletter.subtitle')} />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 lg:py-16">
        <Breadcrumbs items={[{ label: t('nav.newsletter') }]} />

        <h1 className="font-editorial text-3xl lg:text-4xl font-bold text-navy dark:text-gray-100 mb-6">
          {t('newsletter.title')}
        </h1>

        <p className="text-muted text-lg mb-10 leading-relaxed">
          {t('newsletter.subtitle')}
        </p>

        <NewsletterForm />
      </div>
    </>
  );
}

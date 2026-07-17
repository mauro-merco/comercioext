import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('notFound.title')} | Comercio Exterior PRO</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 lg:py-24 text-center">
        <div className="text-6xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="font-editorial text-3xl font-bold text-navy dark:text-gray-100 mb-4">
          {t('notFound.title')}
        </h1>
        <p className="text-muted mb-8 max-w-md mx-auto">
          {t('notFound.message')}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-md transition-colors"
        >
          {t('notFound.back')}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </Link>
      </div>
    </>
  );
}

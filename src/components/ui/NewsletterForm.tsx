import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

interface NewsletterFormProps {
  variant?: 'inline' | 'full';
}

export default function NewsletterForm({ variant = 'full' }: NewsletterFormProps) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;
    setStatus('success');
    setEmail('');
    setName('');
    setConsent(false);
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
        <p className="text-green-800 dark:text-green-300 font-medium">{t('newsletter.success')}</p>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <label className="sr-only" htmlFor="newsletter-email-inline">{t('newsletter.emailPlaceholder')}</label>
        <input
          id="newsletter-email-inline"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('newsletter.emailPlaceholder')}
          required
          className="flex-1 px-4 py-2.5 text-sm border border-line dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
        />
        <button
          type="submit"
          className="px-5 py-2.5 text-sm font-semibold bg-primary hover:bg-primary-dark text-white rounded-md transition-colors shrink-0"
        >
          {t('newsletter.subscribe')}
        </button>
      </form>
    );
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 border border-line dark:border-gray-800 rounded-xl p-8 md:p-12 text-center">
      <h2 className="font-editorial text-2xl md:text-3xl font-bold text-navy dark:text-gray-100 mb-3">
        {t('newsletter.title')}
      </h2>
      <p className="text-muted max-w-xl mx-auto mb-8">{t('newsletter.subtitle')}</p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <label className="sr-only" htmlFor="newsletter-email">{t('newsletter.emailPlaceholder')}</label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('newsletter.emailPlaceholder')}
            required
            className="w-full px-4 py-3 border border-line dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="newsletter-name">{t('newsletter.namePlaceholder')}</label>
          <input
            id="newsletter-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('newsletter.namePlaceholder')}
            className="w-full px-4 py-3 border border-line dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
          />
        </div>
        <div className="flex items-start gap-3">
          <input
            id="newsletter-consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <label htmlFor="newsletter-consent" className="text-xs text-muted text-left">
            {t('newsletter.conscept')}
          </label>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 font-semibold bg-primary hover:bg-primary-dark text-white rounded-md transition-colors"
        >
          {t('newsletter.subscribe')}
        </button>
      </form>
    </section>
  );
}

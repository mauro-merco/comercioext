import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function Contact() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'editorial' | 'corporate'>('editorial');
  const [editorialStatus, setEditorialStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [corporateStatus, setCorporateStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleEditorialSubmit = (e: FormEvent) => {
    e.preventDefault();
    setEditorialStatus('success');
  };

  const handleCorporateSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCorporateStatus('success');
  };

  const inputClass = "w-full px-4 py-3 border border-line dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm";

  return (
    <>
      <Helmet>
        <title>{t('contact.title')} | Comercio Exterior PRO</title>
        <meta name="description" content="Contacto con Comercio Exterior PRO. Consultas editoriales y corporativas." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <Breadcrumbs items={[{ label: t('contact.title') }]} />

        <h1 className="font-editorial text-3xl lg:text-4xl font-bold text-navy dark:text-gray-100 mb-8">
          {t('contact.title')}
        </h1>

        <div className="flex gap-2 mb-8 border-b border-line dark:border-gray-800">
          <button
            onClick={() => setActiveTab('editorial')}
            className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'editorial'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted hover:text-gray-900 dark:hover:text-gray-100'
            }`}
          >
            {t('contact.editorial')}
          </button>
          <button
            onClick={() => setActiveTab('corporate')}
            className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'corporate'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted hover:text-gray-900 dark:hover:text-gray-100'
            }`}
          >
            {t('contact.corporate')}
          </button>
        </div>

        {activeTab === 'editorial' && (
          <div className="bg-gray-50 dark:bg-gray-900 border border-line dark:border-gray-800 rounded-xl p-6 md:p-8">
            {editorialStatus === 'success' ? (
              <div className="text-center py-8">
                <p className="text-green-700 dark:text-green-400 font-medium text-lg">{t('contact.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleEditorialSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ed-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.name')} *</label>
                    <input id="ed-name" type="text" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="ed-org" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.organization')} *</label>
                    <input id="ed-org" type="text" required className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="ed-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.email')} *</label>
                  <input id="ed-email" type="email" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="ed-subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.subject')} *</label>
                  <input id="ed-subject" type="text" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="ed-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.message')} *</label>
                  <textarea id="ed-message" rows={5} required className={inputClass}></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-md transition-colors"
                >
                  {t('contact.send')}
                </button>
              </form>
            )}
          </div>
        )}

        {activeTab === 'corporate' && (
          <div className="bg-gray-50 dark:bg-gray-900 border border-line dark:border-gray-800 rounded-xl p-6 md:p-8">
            {corporateStatus === 'success' ? (
              <div className="text-center py-8">
                <p className="text-green-700 dark:text-green-400 font-medium text-lg">{t('contact.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleCorporateSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="co-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.name')} *</label>
                    <input id="co-name" type="text" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="co-company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.company')} *</label>
                    <input id="co-company" type="text" required className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="co-position" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.position')} *</label>
                    <input id="co-position" type="text" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="co-country" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.country')} *</label>
                    <input id="co-country" type="text" required className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="co-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.email')} *</label>
                    <input id="co-email" type="email" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="co-phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.phone')}</label>
                    <input id="co-phone" type="tel" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="co-need" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.needType')} *</label>
                  <select id="co-need" required className={inputClass}>
                    <option value="">Seleccionar...</option>
                    <option value="logistica">Logística internacional</option>
                    <option value="aduanas">Despacho aduanero</option>
                    <option value="consultoria">Consultoría end to end</option>
                    <option value="trading">Trading</option>
                    <option value="perecederos">Perecederos</option>
                    <option value="radicacion">Radicación empresarial</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="co-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('contact.message')} *</label>
                  <textarea id="co-message" rows={5} required className={inputClass}></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="co-privacy" required className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <label htmlFor="co-privacy" className="text-sm text-muted">{t('contact.privacy')}</label>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-md transition-colors"
                >
                  {t('contact.send')}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </>
  );
}

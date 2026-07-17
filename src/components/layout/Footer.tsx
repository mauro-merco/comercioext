import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  const editorialLinks = [
    { label: t('nav.news'), path: '/actualidad' },
    { label: t('nav.analysis'), path: '/analisis' },
    { label: t('nav.guides'), path: '/guias' },
    { label: t('nav.foreign'), path: '/empresas-extranjeras' },
    { label: t('nav.resources'), path: '/recursos' },
  ];

  const legalLinks = [
    { label: t('footer.privacy'), path: '/politica-de-privacidad' },
    { label: t('footer.terms'), path: '/terminos-y-condiciones' },
    { label: t('footer.editorialPolicy'), path: '/politica-editorial' },
    { label: t('footer.sources'), path: '/fuentes-y-correcciones' },
  ];

  return (
    <footer className="bg-navy dark:bg-gray-950 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-sm font-bold tracking-tight uppercase">Comercio Exterior</span>
              <span className="bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase ml-1">PRO</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-gray-400">
              <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
              {t('footer.backedBy')}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">{t('footer.editorial')}</h3>
            <ul className="space-y-2">
              {editorialLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; 2026 {t('footer.copyright')}
          </p>
          <Link to="/contacto" className="text-xs text-primary hover:text-primary-light transition-colors">
            {t('nav.contact')}
          </Link>
        </div>
      </div>
    </footer>
  );
}

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('footer.terms')} | Comercio Exterior PRO</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <Breadcrumbs items={[{ label: t('footer.terms') }]} />
        <h1 className="font-editorial text-3xl font-bold text-navy dark:text-gray-100 mb-8">{t('footer.terms')}</h1>
        <div className="prose-editorial max-w-none text-muted space-y-4">
          <p>El uso de Comercio Exterior PRO implica la aceptación de estos términos y condiciones.</p>
          <h2>Contenido editorial</h2>
          <p>La información publicada es de carácter informativo y analítico. No constituye asesoramiento legal, aduanero, fiscal ni financiero.</p>
          <h2>Propiedad intelectual</h2>
          <p>Los contenidos originales de Comercio Exterior PRO están protegidos por derechos de autor. Se permite su lectura y compartido con atribución.</p>
          <h2>Enlaces externos</h2>
          <p>Este portal puede contener enlaces a sitios de terceros. Comercio Exterior PRO no se responsabiliza por el contenido de sitios externos.</p>
        </div>
      </div>
    </>
  );
}

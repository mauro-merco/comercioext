import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function Sources() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('footer.sources')} | Comercio Exterior PRO</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <Breadcrumbs items={[{ label: t('footer.sources') }]} />
        <h1 className="font-editorial text-3xl font-bold text-navy dark:text-gray-100 mb-8">{t('footer.sources')}</h1>
        <div className="prose-editorial max-w-none text-muted space-y-4">
          <p>Comercio Exterior PRO se compromete a citar fuentes oficiales y verificables en cada publicación.</p>
          <h2>Fuentes prioritarias</h2>
          <ul>
            <li>ARCA (ex AFIP) - Administración Federal de Ingresos Públicos</li>
            <li>BCRA - Banco Central de la República Argentina</li>
            <li>Boletín Oficial de la República Argentina</li>
            <li>INDEC - Instituto Nacional de Estadística y Censos</li>
            <li>VUCE - Ventanilla Única de Comercio Exterior</li>
            <li>SENASA - Servicio Nacional de Sanidad y Calidad Agroalimentaria</li>
          </ul>
          <h2>Fuentes internacionales</h2>
          <ul>
            <li>WTO/OMC - Organización Mundial del Comercio</li>
            <li>World Bank - Banco Mundial</li>
            <li>UNCTAD - Conferencia de las Naciones Unidas sobre Comercio y Desarrollo</li>
            <li>OECD - Organización para la Cooperación y el Desarrollo Económicos</li>
            <li>IMF - Fondo Monetario Internacional</li>
          </ul>
          <h2>Reportar una corrección</h2>
          <p>Si detectás un error en cualquiera de nuestros contenidos, por favor contactanos a través del formulario de contacto. Todas las correcciones se procesan y publican de manera transparente.</p>
        </div>
      </div>
    </>
  );
}

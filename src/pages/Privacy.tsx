import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('footer.privacy')} | Comercio Exterior PRO</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <Breadcrumbs items={[{ label: t('footer.privacy') }]} />
        <h1 className="font-editorial text-3xl font-bold text-navy dark:text-gray-100 mb-8">{t('footer.privacy')}</h1>
        <div className="prose-editorial max-w-none text-muted space-y-4">
          <p>Comercio Exterior PRO respeta la privacidad de sus visitantes. Esta política describe cómo se recopila y utiliza la información en este portal.</p>
          <h2>Información recopilada</h2>
          <p>Este sitio puede recopilar dirección IP, datos de navegación y, en formularios, nombre, email y otros datos proporcionados voluntariamente por el usuario.</p>
          <h2>Uso de la información</h2>
          <p>La información se utiliza para responder consultas, enviar la newsletter (con consentimiento explícito) y mejorar la experiencia del usuario.</p>
          <h2>Cookies y analítica</h2>
          <p>Se utilizan cookies esenciales y, con consentimiento, herramientas de analítica como Google Analytics. El usuario puede revocar el consentimiento en cualquier momento.</p>
          <h2>Derechos del usuario</h2>
          <p>El usuario puede solicitar acceso, rectificación o eliminación de sus datos personales contactando a través del formulario de contacto.</p>
        </div>
      </div>
    </>
  );
}

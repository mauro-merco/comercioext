import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export default function EditorialPolicy() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('footer.editorialPolicy')} | Comercio Exterior PRO</title>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <Breadcrumbs items={[{ label: t('footer.editorialPolicy') }]} />
        <h1 className="font-editorial text-3xl font-bold text-navy dark:text-gray-100 mb-8">{t('footer.editorialPolicy')}</h1>
        <div className="prose-editorial max-w-none text-muted space-y-4">
          <p>Comercio Exterior PRO opera bajo principios editoriales claros:</p>
          <h2>Independencia</h2>
          <p>El contenido editorial es independiente de cualquier vínculo comercial. La separación entre información y publicidad es explícita y visible.</p>
          <h2>Voz</h2>
          <p>Cuando Germán Muchico firma un artículo, utiliza primera persona y habla desde la experiencia. Las acciones comerciales están claramente identificadas como institucionales.</p>
          <h2>Fuentes</h2>
          <p>Toda información se basa en fuentes oficiales, verificables y actualizadas. Se priorizan ARCA, BCRA, Boletín Oficial, organismos multilaterales y autoridades gubernamentales.</p>
          <h2>Correcciones</h2>
          <p>Las correcciones se publican de manera transparente. Los lectores pueden reportar errores a través del formulario de contacto.</p>
        </div>
      </div>
    </>
  );
}

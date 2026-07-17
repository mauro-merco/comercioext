import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import NewsletterForm from '@/components/ui/NewsletterForm';

export default function Press() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('press.title')} | Comercio Exterior PRO</title>
        <meta name="description" content={t('press.subtitle')} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <Breadcrumbs items={[{ label: t('press.title') }]} />

        <h1 className="font-editorial text-3xl lg:text-4xl font-bold text-navy dark:text-gray-100 mb-3">
          {t('press.title')}
        </h1>
        <p className="text-muted mb-10">{t('press.subtitle')}</p>

        <div className="space-y-10">
          <section>
            <h2 className="font-editorial text-xl font-bold text-navy dark:text-gray-100 mb-4">{t('press.shortBio')}</h2>
            <div className="bg-gray-50 dark:bg-gray-900 border border-line dark:border-gray-800 rounded-lg p-6 text-sm text-muted leading-relaxed">
              <p>
                Germán Muchico es CEO y fundador de CargoNet Group con más de 35 años de experiencia en comercio exterior y logística internacional. Dirige Comercio Exterior PRO, portal editorial especializado en análisis, guías y perspectivas para la toma de decisiones en comercio internacional. Presencia en Argentina, Estados Unidos y Brasil.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-editorial text-xl font-bold text-navy dark:text-gray-100 mb-4">{t('press.longBio')}</h2>
            <div className="bg-gray-50 dark:bg-gray-900 border border-line dark:border-gray-800 rounded-lg p-6 text-sm text-muted leading-relaxed space-y-3">
              <p>
                Germán Muchico ingresó formalmente al comercio exterior el 1 de febrero de 1990. En enero de 1999 fundó Connexion Transportes Internacionales S.A. y el 20 de marzo de 2002 activó CargoNet Group, una empresa de consultoría y logística internacional con enfoque end to end.
              </p>
              <p>
                Con operaciones en Argentina, Miami y Brasil, CargoNet Group ofrece despachos aduaneros, transporte internacional, operativa bancaria, trading, asesoría y especialización en perecederos. Germán combina experiencia operativa con visión estratégica para acompañar a empresas que buscan optimizar sus cadenas de suministro, mitigar riesgos y crecer en mercados internacionales.
              </p>
              <p>
                Es autor de Comercio Exterior PRO, portal que publica análisis, columnas y guías para decisores de comercio exterior en Argentina y Latinoamérica.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-editorial text-xl font-bold text-navy dark:text-gray-100 mb-4">{t('press.topics')}</h2>
            <div className="flex flex-wrap gap-2">
              {['Comercio exterior', 'Logística internacional', 'Supply chain', 'Aduanas', 'Importaciones', 'Exportaciones', 'Empresas extranjeras en Argentina', 'Perecederos', 'Compliance'].map((topic) => (
                <span key={topic} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 rounded-full">
                  {topic}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-editorial text-xl font-bold text-navy dark:text-gray-100 mb-4">{t('press.photos')}</h2>
            <div className="bg-gray-50 dark:bg-gray-900 border border-line dark:border-gray-800 rounded-lg p-6 text-center text-muted">
              <p>Fotografías autorizadas disponibles bajo solicitud. Contactar a través del formulario de prensa.</p>
            </div>
          </section>

          <section>
            <NewsletterForm />
          </section>
        </div>
      </div>
    </>
  );
}

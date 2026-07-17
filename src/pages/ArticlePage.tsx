import { useParams, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { getArticleBySlug, getRelatedArticles } from '@/data/articles';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ShareMenu from '@/components/ui/ShareMenu';
import NewsletterForm from '@/components/ui/NewsletterForm';
import TopicPill from '@/components/ui/TopicPill';

const authorData: Record<string, { name: Record<string, string>; bio: Record<string, string> }> = {
  'german-muchico': {
    name: { es: 'Germán Muchico', en: 'Germán Muchico' },
    bio: {
      es: 'CEO y fundador de CargoNet Group. Más de 35 años en comercio exterior y logística internacional.',
      en: 'CEO and founder of CargoNet Group. More than 35 years in foreign trade and international logistics.',
    },
  },
  'equipo-editorial': {
    name: { es: 'Equipo editorial', en: 'Editorial team' },
    bio: {
      es: 'Equipo de redacción de Comercio Exterior PRO.',
      en: 'Comercio Exterior PRO editorial team.',
    },
  },
};

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'es' | 'en';
  const location = useLocation();

  const article = getArticleBySlug(slug || '');

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="font-editorial text-3xl font-bold text-navy dark:text-gray-100 mb-4">{t('notFound.title')}</h1>
        <p className="text-muted mb-6">{t('notFound.message')}</p>
        <Link to="/" className="text-primary hover:text-primary-dark font-semibold">{t('notFound.back')}</Link>
      </div>
    );
  }

  const author = authorData[article.author];
  const related = getRelatedArticles(article, 2);
  const dateStr = new Date(article.publishedAt).toLocaleDateString(lang === 'es' ? 'es-AR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Helmet>
        <title>{article.title[lang]} | Comercio Exterior PRO</title>
        <meta name="description" content={article.excerpt[lang]} />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <Breadcrumbs items={[
          { label: t('categories.' + article.category), path: article.category === 'analysis' ? '/analisis' : article.category === 'guides' ? '/guias' : '/actualidad' },
          { label: article.title[lang] },
        ]} />

        <div className="mb-6 flex flex-wrap gap-2">
          <span className="text-xs font-semibold uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary">
            {t(`categories.${article.category}`)}
          </span>
          {article.topics.map((topic) => (
            <TopicPill key={topic} topic={topic} />
          ))}
        </div>

        <h1 className="font-editorial text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-navy dark:text-gray-100 leading-tight mb-4">
          {article.title[lang]}
        </h1>

        <p className="text-lg text-muted leading-relaxed mb-6">
          {article.excerpt[lang]}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-8 pb-8 border-b border-line dark:border-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-navy/10 dark:bg-navy/30 flex items-center justify-center">
              <span className="text-xs font-bold text-navy dark:text-gray-100">{author?.name[lang].charAt(0)}</span>
            </div>
            <span>{t('article.by')} <strong className="text-gray-900 dark:text-gray-100">{author?.name[lang]}</strong></span>
          </div>
          <span className="text-line dark:text-gray-700">|</span>
          <span>{t('article.published')} {dateStr}</span>
          <span className="text-line dark:text-gray-700">|</span>
          <span>{article.readingTime} {t('article.readTime')}</span>
        </div>

        <div className="aspect-[16/9] rounded-xl mb-8 overflow-hidden bg-gradient-to-br from-navy/5 to-primary/5 dark:from-navy/20 dark:to-primary/10">
          <img
            src={article.heroImage}
            alt={article.heroAlt[lang]}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {article.keyTakeaways[lang] && (
          <div className="bg-gray-50 dark:bg-gray-900 border border-line dark:border-gray-800 rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-navy dark:text-gray-100 mb-3">{t('article.inLines')}</h2>
            <ul className="space-y-2">
              {article.keyTakeaways[lang].map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div
          className="prose-editorial max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content[lang] }}
        />

        {article.disclaimer && (
          <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-sm text-amber-800 dark:text-amber-300">
            {t('article.disclaimer')}
          </div>
        )}

        <div className="mt-8 pt-8 border-t border-line dark:border-gray-800">
          <ShareMenu title={article.title[lang]} url={location.pathname} />
        </div>

        <div className="mt-8 pt-8 border-t border-line dark:border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-navy/10 dark:bg-navy/30 flex items-center justify-center">
              <span className="text-lg font-bold text-navy dark:text-gray-100">{author?.name[lang].charAt(0)}</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">{author?.name[lang]}</div>
              <p className="text-sm text-muted">{author?.bio[lang]}</p>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-12 pt-8 border-t border-line dark:border-gray-800">
            <h2 className="font-editorial text-xl font-bold text-navy dark:text-gray-100 mb-6">{t('article.relatedNotes')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/notas/${rel.slug}`}
                  className="block p-4 border border-line dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                >
                  <span className="text-[10px] font-semibold uppercase text-primary">{t(`categories.${rel.category}`)}</span>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mt-1 group-hover:text-primary transition-colors">
                    {rel.title[lang]}
                  </h3>
                  <p className="text-sm text-muted mt-1 line-clamp-2">{rel.excerpt[lang]}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12">
          <div className="bg-gray-50 dark:bg-gray-900 border border-line dark:border-gray-800 rounded-xl p-6 mb-6 text-center text-sm text-muted">
            {t('article.editorialNote')}{' '}
            <a
              href="https://cargonetgroup.com/?utm_source=comercioexterior.pro&utm_medium=referral&utm_campaign=portal_editorial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark font-medium"
            >
              {t('article.visitCargoNet')}
            </a>.
          </div>
          <NewsletterForm />
        </div>
      </article>
    </>
  );
}

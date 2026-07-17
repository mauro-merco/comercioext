import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ArticleCardProps {
  slug: string;
  title: Record<string, string>;
  excerpt: Record<string, string>;
  category: string;
  author: string;
  publishedAt: string;
  readingTime: number;
  heroImage: string;
  heroAlt: Record<string, string>;
  featured?: boolean;
  variant?: 'default' | 'horizontal' | 'compact';
}

const authorNames: Record<string, Record<string, string>> = {
  'german-muchico': { es: 'Germán Muchico', en: 'Germán Muchico' },
  'equipo-editorial': { es: 'Equipo editorial', en: 'Editorial team' },
};

export default function ArticleCard({
  slug,
  title,
  excerpt,
  category,
  author,
  publishedAt,
  readingTime,
  heroImage,
  heroAlt,
  variant = 'default',
}: ArticleCardProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'es' | 'en';
  const { t } = useTranslation();

  const categoryColors: Record<string, string> = {
    analysis: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    guides: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    opinion: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    news: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  };

  const dateStr = new Date(publishedAt).toLocaleDateString(lang === 'es' ? 'es-AR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (variant === 'compact') {
    return (
      <Link
        to={`/notas/${slug}`}
        className="block py-3 border-b border-line dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors px-2 -mx-2 rounded"
      >
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${categoryColors[category] || 'bg-gray-100 text-gray-600'}`}>
            {t(`categories.${category}`)}
          </span>
          <span className="text-xs text-muted">{dateStr}</span>
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm leading-tight">
          {title[lang]}
        </h3>
      </Link>
    );
  }

  if (variant === 'horizontal') {
    return (
      <Link
        to={`/notas/${slug}`}
        className="group flex gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors border border-line dark:border-gray-800"
      >
        <div className="w-28 h-20 shrink-0 rounded-md bg-navy/10 dark:bg-navy/30 flex items-center justify-center">
          <span className="text-2xl font-bold text-primary/30">{title[lang].charAt(0)}</span>
        </div>
        <div className="min-w-0 flex-1">
          <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${categoryColors[category] || 'bg-gray-100 text-gray-600'}`}>
            {t(`categories.${category}`)}
          </span>
          <h3 className="mt-1 font-semibold text-gray-900 dark:text-gray-100 leading-tight group-hover:text-primary transition-colors line-clamp-2 text-sm">
            {title[lang]}
          </h3>
          <p className="text-xs text-muted mt-1 line-clamp-1">{excerpt[lang]}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/notas/${slug}`}
      className="group block rounded-lg overflow-hidden border border-line dark:border-gray-800 hover:shadow-lg transition-all hover:-translate-y-0.5"
    >
      <div className="aspect-[16/10] bg-gradient-to-br from-navy/10 to-primary/10 dark:from-navy/30 dark:to-primary/20 relative overflow-hidden">
        <img
          src={heroImage}
          alt={heroAlt[lang]}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 text-[10px] text-muted bg-white/80 dark:bg-gray-900/80 px-2 py-1 rounded backdrop-blur-sm">
          {heroAlt[lang]}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${categoryColors[category] || 'bg-gray-100 text-gray-600'}`}>
            {t(`categories.${category}`)}
          </span>
          <span className="text-xs text-muted">{dateStr}</span>
        </div>
        <h3 className="font-editorial text-lg font-bold text-navy dark:text-gray-100 leading-tight group-hover:text-primary transition-colors">
          {title[lang]}
        </h3>
        <p className="text-sm text-muted mt-2 line-clamp-3">{excerpt[lang]}</p>
        <div className="flex items-center gap-3 mt-4 text-xs text-muted">
          <span>{authorNames[author]?.[lang] || author}</span>
          <span className="w-1 h-1 rounded-full bg-muted"></span>
          <span>{readingTime} {t('article.readTime')}</span>
        </div>
      </div>
    </Link>
  );
}

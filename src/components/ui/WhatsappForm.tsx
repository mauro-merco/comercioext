import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { buildWhatsappUrl } from '@/config/site';
import type { FormDefinition, Lang } from '@/data/formularios';

interface WhatsappFormProps {
  definition: FormDefinition;
  lang: Lang;
}

function resolveValues(
  definition: FormDefinition,
  lang: Lang,
  values: Record<string, string>,
): Record<string, string> {
  return Object.fromEntries(
    definition.fields.map((field) => {
      const raw = (values[field.name] ?? '').trim();
      if (field.type !== 'select') return [field.name, raw];
      const option = field.options?.find((item) => item.value === raw);
      return [field.name, option ? option.label[lang] : ''];
    }),
  );
}

function buildMessage(definition: FormDefinition, lang: Lang, values: Record<string, string>): string {
  const resolved = resolveValues(definition, lang, values);
  const template = definition.whatsappTemplate[lang];

  return template
    .split('\n')
    .filter((line) => {
      const placeholders = line.match(/\{(\w+)\}/g);
      if (!placeholders) return true;
      return placeholders.some((token) => (resolved[token.slice(1, -1)] ?? '').length > 0);
    })
    .map((line) => line.replace(/\{(\w+)\}/g, (_match, name: string) => resolved[name] ?? ''))
    .join('\n');
}

export default function WhatsappForm({ definition, lang }: WhatsappFormProps) {
  const { t } = useTranslation();
  const [values, setValues] = useState<Record<string, string>>({});

  const inputClass =
    'w-full px-4 py-3 border border-line dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm';

  const handleChange = (name: string, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = buildMessage(definition, lang, values);
    window.open(buildWhatsappUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {definition.fields.map((field) => {
        const inputId = `${definition.id}-${field.name}`;
        const label = field.label[lang];
        const requiredMark = field.required ? ' *' : '';
        const optionalTag = field.required ? null : (
          <span className="ml-2 text-xs font-normal text-muted">({t('resources.form.optional')})</span>
        );

        return (
          <div key={field.name}>
            <label
              htmlFor={inputId}
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              {label}
              {requiredMark}
              {optionalTag}
            </label>

            {field.type === 'select' && (
              <select
                id={inputId}
                name={field.name}
                required={field.required}
                value={values[field.name] ?? ''}
                onChange={(event) => handleChange(field.name, event.target.value)}
                className={inputClass}
              >
                <option value="">{t('resources.form.select')}</option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label[lang]}
                  </option>
                ))}
              </select>
            )}

            {field.type === 'text' && (
              <input
                id={inputId}
                name={field.name}
                type="text"
                required={field.required}
                value={values[field.name] ?? ''}
                onChange={(event) => handleChange(field.name, event.target.value)}
                placeholder={field.placeholder?.[lang]}
                className={inputClass}
              />
            )}

            {field.type === 'textarea' && (
              <textarea
                id={inputId}
                name={field.name}
                rows={field.rows ?? 3}
                required={field.required}
                value={values[field.name] ?? ''}
                onChange={(event) => handleChange(field.name, event.target.value)}
                placeholder={field.placeholder?.[lang]}
                className={inputClass}
              />
            )}
          </div>
        );
      })}

      <div className="space-y-3">
        <p className="text-xs text-muted">{t('resources.form.legend')}</p>
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-md transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.09 3.2 5.07 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.02h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.22-8.24 8.22z" />
          </svg>
          {t('resources.form.submit')}
        </button>
        <p className="text-xs text-muted">{t('resources.form.notice')}</p>
      </div>
    </form>
  );
}

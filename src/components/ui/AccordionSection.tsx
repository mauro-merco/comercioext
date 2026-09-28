import type { ReactNode } from 'react';

interface AccordionSectionProps {
  id: string;
  open: boolean;
  onToggle: () => void;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  children: ReactNode;
}

export default function AccordionSection({
  id,
  open,
  onToggle,
  eyebrow,
  title,
  description,
  children,
}: AccordionSectionProps) {
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <section
      id={id}
      className="scroll-mt-24 bg-gray-50 dark:bg-gray-900 border border-line dark:border-gray-800 rounded-xl overflow-hidden"
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="w-full flex items-start gap-4 text-left px-6 py-5 hover:bg-primary/5 transition-colors"
        >
          <span className="flex-1 min-w-0">
            <span className="block text-xs font-semibold uppercase tracking-wide text-primary mb-1">
              {eyebrow}
            </span>
            <span className="block font-editorial text-xl lg:text-2xl font-bold text-navy dark:text-gray-100 mb-2">
              {title}
            </span>
            <span className="block text-sm text-muted">{description}</span>
          </span>
          <svg
            className={`w-5 h-5 mt-1 flex-shrink-0 text-primary transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </h3>
      {open && (
        <div id={panelId} role="region" aria-labelledby={buttonId} className="px-6 pb-6">
          <div className="border-t border-line dark:border-gray-800 pt-6">{children}</div>
        </div>
      )}
    </section>
  );
}

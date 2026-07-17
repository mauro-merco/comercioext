import { useTranslation } from 'react-i18next';
import { topicSlugToKey } from '@/data/topics';

interface TopicPillProps {
  topic: string;
  active?: boolean;
  onClick?: () => void;
}

export default function TopicPill({ topic, active, onClick }: TopicPillProps) {
  const { t } = useTranslation();
  const key = topicSlugToKey[topic] || topic;

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
          active
            ? 'bg-primary text-white'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        {t(`topics.${key}`)}
      </button>
    );
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full ${
        active
          ? 'bg-primary text-white'
          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
      }`}
    >
      {t(`topics.${key}`)}
    </span>
  );
}

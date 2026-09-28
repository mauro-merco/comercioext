const rawNumber =
  (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined)?.trim() ||
  '5491100000000';

export const WHATSAPP_NUMBER = rawNumber.replace(/\D/g, '');

export function buildWhatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

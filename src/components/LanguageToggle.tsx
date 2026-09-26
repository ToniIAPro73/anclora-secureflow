import type { Locale } from '../i18n';
import { Icon } from './Icon';

export function LanguageToggle({ locale, onChange }: { locale: Locale; onChange: (locale: Locale) => void }) {
  const nextLocale = locale === 'es' ? 'en' : 'es';
  const labels = locale === 'es' ? { title: 'Cambiar a inglés', aria: 'Cambiar idioma. Idioma actual: español' } : { title: 'Switch to Spanish', aria: 'Change language. Current language: English' };
  return <button className="language-toggle" type="button" data-testid="language-toggle-button" onClick={() => onChange(nextLocale)} title={labels.title} aria-label={labels.aria}><Icon name="globe" size={19} /><span>{locale.toUpperCase()}</span></button>;
}

import type { Locale } from '../i18n';
import { Icon } from './Icon';

export function LanguageToggle({ locale, onChange }: { locale: Locale; onChange: (locale: Locale) => void }) {
  const nextLocale = locale === 'es' ? 'en' : 'es';
  return <button className="language-toggle" type="button" data-testid="language-toggle-button" onClick={() => onChange(nextLocale)} title={locale === 'es' ? 'Cambiar a inglés' : 'Cambiar a español'} aria-label="Idioma"><Icon name="globe" size={19} /><span>{locale.toUpperCase()}</span></button>;
}

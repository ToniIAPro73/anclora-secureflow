import type { Locale } from '../i18n';

export function LanguageToggle({ locale, onChange }: { locale: Locale; onChange: (locale: Locale) => void }) {
  return <div className="language-toggle" aria-label="Idioma"><button type="button" className={locale === 'es' ? 'is-active' : ''} onClick={() => onChange('es')}>ES</button><button type="button" className={locale === 'en' ? 'is-active' : ''} onClick={() => onChange('en')}>EN</button></div>;
}

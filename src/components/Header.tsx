import type { Locale } from '../i18n';
import { copy } from '../i18n';
import { BrandMark } from './BrandMark';
import { Icon } from './Icon';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';

export function Header({ locale, dark, onLocaleChange, onThemeToggle }: { locale: Locale; dark: boolean; onLocaleChange: (locale: Locale) => void; onThemeToggle: () => void }) {
  const t = copy[locale];
  return <header className="site-header"><a className="brand-link" href="#top" aria-label="Anclora SecureFlow"><BrandMark /></a><nav className="desktop-nav" aria-label="Navegación principal"><a href="#products">{t.nav.products}</a><a href="#how">{t.nav.how}</a><a href="#security">{t.nav.security}</a><a href="#faq">{t.nav.faq}</a></nav><div className="header-actions"><ThemeToggle dark={dark} onToggle={onThemeToggle} /><LanguageToggle locale={locale} onChange={onLocaleChange} /><a className="button button--small button--primary" href="#access">{t.nav.access}</a></div><button className="mobile-menu-button icon-button" type="button" aria-label="Abrir menú" aria-controls="mobile-navigation" onClick={() => document.body.classList.toggle('menu-open')}><Icon name="menu" size={21} /></button><div id="mobile-navigation" className="mobile-nav"><div className="mobile-nav-tools"><ThemeToggle dark={dark} onToggle={onThemeToggle} /><LanguageToggle locale={locale} onChange={onLocaleChange} /></div><a href="#products">{t.nav.products}</a><a href="#how">{t.nav.how}</a><a href="#security">{t.nav.security}</a><a href="#faq">{t.nav.faq}</a><a className="button button--primary" href="#access">{t.nav.access}</a></div></header>;
}

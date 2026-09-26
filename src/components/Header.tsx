import { useState } from 'react';
import type { Locale } from '../i18n';
import { copy } from '../i18n';
import { BrandMark } from './BrandMark';
import { Icon } from './Icon';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';

export function Header({ locale, dark, onLocaleChange, onThemeToggle }: { locale: Locale; dark: boolean; onLocaleChange: (locale: Locale) => void; onThemeToggle: () => void }) {
  const t = copy[locale];
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => { setMenuOpen((value) => !value); document.body.classList.toggle('menu-open'); };
  const ui = locale === 'es' ? { nav: 'Navegación principal', open: 'Abrir menú', close: 'Cerrar menú' } : { nav: 'Main navigation', open: 'Open menu', close: 'Close menu' };
  return <header className="site-header"><a className="brand-link" href="#top" aria-label="Anclora SecureFlow"><BrandMark /></a><nav className="desktop-nav" aria-label={ui.nav}><a href="#products">{t.nav.products}</a><a href="#how">{t.nav.how}</a><a href="#security">{t.nav.security}</a><a href="#faq">{t.nav.faq}</a></nav><div className="header-actions"><LanguageToggle locale={locale} onChange={onLocaleChange} /><ThemeToggle locale={locale} dark={dark} onToggle={onThemeToggle} /><a className="button button--small button--primary" href="#access">{t.nav.access}</a></div><button className="mobile-menu-button icon-button" type="button" aria-label={menuOpen ? ui.close : ui.open} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={toggleMenu}><Icon name="menu" size={21} /></button><div id="mobile-navigation" className="mobile-nav"><div className="mobile-nav-tools"><LanguageToggle locale={locale} onChange={onLocaleChange} /><ThemeToggle locale={locale} dark={dark} onToggle={onThemeToggle} /></div><a href="#products">{t.nav.products}</a><a href="#how">{t.nav.how}</a><a href="#security">{t.nav.security}</a><a href="#faq">{t.nav.faq}</a><a className="button button--primary" href="#access">{t.nav.access}</a></div></header>;
}

import type { Locale } from '../i18n';
import { copy } from '../i18n';
import { BrandMark } from './BrandMark';

export function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <footer className="site-footer"><div className="container footer-grid"><a href="#top" className="brand-link"><BrandMark /></a><p>{t.footer}</p><nav aria-label={locale === 'es' ? 'Enlaces del pie' : 'Footer links'}><a href="#products">{t.nav.products}</a><a href="#how">{t.nav.how}</a><a href="#security">{t.nav.security}</a><a href="#faq">{t.nav.faq}</a></nav></div></footer>;
}

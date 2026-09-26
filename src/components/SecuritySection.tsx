import type { Locale } from '../i18n';
import { copy } from '../i18n';
import { Icon } from './Icon';

const icons = ['lock', 'shield', 'users'] as const;

export function SecuritySection({ locale }: { locale: Locale }) {
  const t = copy[locale].security;
  return <section id="security" className="section security-section"><div className="container"><div className="section-heading"><p className="eyebrow">{t.eyebrow}</p><h2>{t.title}</h2></div><div className="security-grid">{t.items.map(([title, description], index) => <article className="security-item" key={title}><div className="security-item__icon"><Icon name={icons[index]} size={27} /></div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div><a href="#access" className="button button--outline">{t.cta}</a></div></section>;
}

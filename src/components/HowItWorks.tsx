import type { Locale } from '../i18n';
import { copy } from '../i18n';
import { Icon } from './Icon';

const icons = ['file', 'shield', 'table', 'gear'] as const;

export function HowItWorks({ locale }: { locale: Locale }) {
  const t = copy[locale].how;
  return <section id="how" className="section how-section"><div className="container"><div className="section-heading"><p className="eyebrow">{t.eyebrow}</p><h2>{t.title}</h2><p className="section-heading__lead">{t.body}</p></div><div className="how-grid">{t.steps.map(([title, description], index) => <article className="how-card" key={title}><span className="how-card__number">0{index + 1}</span><div className="how-card__icon"><Icon name={icons[index]} size={28} /></div><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>;
}

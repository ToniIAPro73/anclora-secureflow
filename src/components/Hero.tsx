import type { Locale } from '../i18n';
import { copy } from '../i18n';

export function Hero({ locale }: { locale: Locale }) {
  const t = copy[locale].hero;
  return <section id="top" className="hero"><div className="hero__background" aria-hidden="true" /><div className="container hero__content"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p className="hero__lead">{t.body}</p><div className="hero__actions"><a className="button button--primary" href="#access">{t.primary}</a><a className="text-link" href="#products">{t.secondary}</a></div><div className="hero__signal" aria-hidden="true"><span>PROCESSING</span><i /><span>CONTROL</span><i /><span>READY</span></div></div></section>;
}

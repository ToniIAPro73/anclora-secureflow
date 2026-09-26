import type { Locale } from '../i18n';
import { copy } from '../i18n';
import { products } from '../data/products';

export function ProductGrid({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <section id="products" className="section section--products"><div className="container"><div className="section-heading"><p className="eyebrow">{t.products.eyebrow}</p><h2>{t.products.title}</h2></div><div className="solution-stage"><div className="solution-stage__hub"><span className="solution-stage__halo" aria-hidden="true" /><img src="/assets/brand/anclora-secureflow.png" alt="" /><span>SecureFlow</span></div><div className="solution-stage__beams" aria-hidden="true"><i /><i /><i /><i /></div><div className="product-grid">{products.map((product, index) => <article className={`product-card product-card--${product.id}`} key={product.id}><span className="product-card__index">0{index + 1}</span><p className="product-card__category">{product.category}</p><h3>{product.name}</h3><p>{locale === 'en' ? ({ filestudio: 'Prepare, convert and organise your files.', purgedoc: 'Protect and anonymise sensitive information.', tableextract: 'Extract tables and structured data from documents.', cleansheet: 'Clean, transform and automate your data.' }[product.id]) : product.description}</p><a className="card-link" href="#access">{t.products.link}<span aria-hidden="true">→</span></a></article>)}</div></div></div></section>;
}

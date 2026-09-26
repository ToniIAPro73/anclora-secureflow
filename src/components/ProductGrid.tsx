import type { Locale } from '../i18n';
import { copy } from '../i18n';
import { products } from '../data/products';
import { Icon } from './Icon';

const iconByProduct = { filestudio: 'file', purgedoc: 'shield', tableextract: 'table', cleansheet: 'gear' } as const;

export function ProductGrid({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <section id="products" className="section section--products"><div className="container"><div className="section-heading"><p className="eyebrow">{t.products.eyebrow}</p><h2>{t.products.title}</h2></div><div className="product-grid">{products.map((product) => <article className="product-card" key={product.id}><div className="product-card__icon"><img src={product.logo} alt="" /><span className="product-card__fallback"><Icon name={iconByProduct[product.id]} size={28} /></span></div><p className="product-card__category">{product.category}</p><h3>{product.name}</h3><p>{locale === 'en' ? ({ filestudio: 'Prepare, convert and organise your files.', purgedoc: 'Protect and anonymise sensitive information.', tableextract: 'Extract tables and structured data from documents.', cleansheet: 'Clean, transform and automate your data.' }[product.id]) : product.description}</p><a className="card-link" href="#access">{t.products.link}<span aria-hidden="true" /></a></article>)}</div></div></section>;
}

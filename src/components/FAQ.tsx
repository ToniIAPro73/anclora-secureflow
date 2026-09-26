import { useState } from 'react';
import type { Locale } from '../i18n';
import { copy } from '../i18n';
import { Icon } from './Icon';

export function FAQ({ locale }: { locale: Locale }) {
  const t = copy[locale].faq;
  const [open, setOpen] = useState<number | null>(null);
  return <section id="faq" className="section faq-section"><div className="container faq-layout"><div className="section-heading"><p className="eyebrow">{t.eyebrow}</p><h2>{t.title}</h2></div><div className="faq-list">{t.questions.map(([question, answer], index) => { const isOpen = open === index; const answerId = `faq-answer-${index}`; return <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={question}><button className="faq-question" type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpen(isOpen ? null : index)}><span>{question}</span><Icon name="plus" size={18} /></button><div id={answerId} className="faq-answer" hidden={!isOpen}><p>{answer}</p></div></div>; })}</div></div></section>;
}

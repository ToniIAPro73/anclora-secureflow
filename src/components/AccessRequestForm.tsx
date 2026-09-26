import { useState, type FormEvent } from 'react';
import type { Locale } from '../i18n';
import { copy } from '../i18n';
import { plans } from '../data/plans';
import { submitAccessRequest } from '../services/accessRequestService';

export function AccessRequestForm({ locale }: { locale: Locale }) {
  const t = copy[locale].form;
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy(true);
    const form = new FormData(event.currentTarget);
    await submitAccessRequest({ name: String(form.get('name') ?? ''), email: String(form.get('email') ?? ''), company: String(form.get('company') ?? ''), product: String(form.get('product') ?? ''), message: String(form.get('message') ?? '') });
    setMessage(t.note);
    setBusy(false);
  };
  return <section id="access" className="section access-section"><div className="container access-layout"><div className="access-copy"><p className="eyebrow">{t.eyebrow}</p><h2>{t.title}</h2><p>{t.body}</p><div className="access-rule" /></div><form className="access-form" onSubmit={submit}><div className="form-grid"><label>{t.name}<input name="name" required autoComplete="name" /></label><label>{t.email}<input name="email" required type="email" autoComplete="email" /></label><label>{t.company}<input name="company" autoComplete="organization" /></label><label>{t.product}<select name="product" required defaultValue=""><option value="" disabled>{locale === 'es' ? 'Selecciona una opción' : 'Select an option'}</option>{plans.map((plan) => <option value={plan.value} key={plan.value}>{locale === 'en' && plan.value === 'complete' ? 'SecureFlow Complete' : plan.label}</option>)}</select></label></div><label>{t.message}<textarea name="message" rows={4} /></label><button className="button button--primary" type="submit" disabled={busy}>{busy ? '…' : t.submit}</button>{message && <p className="form-note" role="status">{message}</p>}</form></div></section>;
}

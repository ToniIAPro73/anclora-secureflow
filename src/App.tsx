import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { SecuritySection } from './components/SecuritySection';
import { FAQ } from './components/FAQ';
import { AccessRequestForm } from './components/AccessRequestForm';
import { Footer } from './components/Footer';
import type { Locale } from './i18n';
import './styles.css';

export default function App() {
  const [locale, setLocale] = useState<Locale>('es');
  const [dark, setDark] = useState(true);
  useEffect(() => { document.documentElement.lang = locale; document.documentElement.dataset.theme = dark ? 'dark' : 'light'; }, [dark, locale]);
  return <div className="app-shell"><Header locale={locale} dark={dark} onLocaleChange={setLocale} onThemeToggle={() => setDark((value) => !value)} /><main><Hero locale={locale} /><ProductGrid locale={locale} /><SecuritySection locale={locale} /><FAQ locale={locale} /><AccessRequestForm locale={locale} /></main><Footer locale={locale} /></div>;
}

import type { Locale } from '../i18n';
import { Icon } from './Icon';

export function ThemeToggle({ dark, locale, onToggle }: { dark: boolean; locale: Locale; onToggle: () => void }) {
  const labels = locale === 'es' ? { dark: 'Activar modo oscuro', light: 'Activar modo claro', title: 'Cambiar tema' } : { dark: 'Enable dark mode', light: 'Enable light mode', title: 'Change theme' };
  return <button className="icon-button theme-toggle" type="button" data-testid="theme-toggle-button" onClick={onToggle} aria-label={dark ? labels.light : labels.dark} aria-pressed={dark} title={labels.title}><Icon name={dark ? 'moon' : 'sun'} size={21} /><span className="sr-only">{dark ? labels.light : labels.dark}</span></button>;
}

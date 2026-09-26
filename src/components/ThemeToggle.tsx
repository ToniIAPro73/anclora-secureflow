import { Icon } from './Icon';

export function ThemeToggle({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return <button className="icon-button theme-toggle" type="button" data-testid="theme-toggle-button" onClick={onToggle} aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'} aria-pressed={dark} title="Cambiar tema"><Icon name={dark ? 'moon' : 'sun'} size={21} /><span className="sr-only">{dark ? 'Modo claro' : 'Modo oscuro'}</span></button>;
}

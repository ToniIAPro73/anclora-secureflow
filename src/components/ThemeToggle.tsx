import { Icon } from './Icon';

export function ThemeToggle({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return <button className="icon-button theme-toggle" type="button" onClick={onToggle} aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}><Icon name={dark ? 'sun' : 'moon'} size={17} /><span className="sr-only">{dark ? 'Modo claro' : 'Modo oscuro'}</span></button>;
}

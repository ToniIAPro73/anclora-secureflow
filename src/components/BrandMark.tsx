export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-lockup${compact ? ' brand-lockup--compact' : ''}`}>
      <img className="brand-mark" src="/assets/brand/anclora-secureflow.png" alt="" aria-hidden="true" />
      {!compact && <span className="brand-name"><strong>Anclora</strong> <em>SecureFlow</em></span>}
    </span>
  );
}

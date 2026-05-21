import { useEffect } from 'react';

export default function Lightbox({ open, src, alt, caption, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={`lightbox${open ? ' open' : ''}`}
      aria-hidden={!open}
      onClick={handleOverlayClick}
    >
      <button className="lightbox-close" aria-label="Fermer" onClick={onClose}>
        ×
      </button>
      <img className="lightbox-img" src={src || ''} alt={alt || ''} />
      <div className="lightbox-caption">{caption || ''}</div>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';

export default function TimelineEntry({ side, date, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const marker = (
    <div className="timeline-marker">
      <span className="timeline-date">{date}</span>
    </div>
  );

  const card = <div className="timeline-card">{children}</div>;

  return (
    <div ref={ref} className={`timeline-entry ${side}${visible ? ' visible' : ''}`}>
      {side === 'right' ? (
        <>
          {marker}
          {card}
        </>
      ) : (
        <>
          {card}
          {marker}
        </>
      )}
    </div>
  );
}

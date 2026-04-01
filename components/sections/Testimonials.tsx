import testimonials from '@/data/testimonials';

/* ── Testimonial Card ───────────────────────────────────────────── */
function TestiCard({
  initials, name, role, text, stars, halfStar,
}: {
  initials: string;
  name: string;
  role: string;
  text: string;
  stars: boolean[];
  halfStar?: boolean;
}) {
  return (
    <div className="testi-card">
      <div className="testi-stars">
        {stars.map((full, i) => {
          if (!full && halfStar && i === stars.length - 1) {
            return <i className="fas fa-star-half-alt" key={i} />;
          }
          return <i className="fas fa-star" key={i} />;
        })}
      </div>
      <span className="testi-quote">&ldquo;</span>
      <p className="testi-text">{text}</p>
      <div className="testi-author">
        <div className="author-initials">{initials}</div>
        <div>
          <div className="author-name-txt">{name}</div>
          <div className="author-role-txt">{role}</div>
        </div>
      </div>
    </div>
  );
}

/* ── Testimonials Section ───────────────────────────────────────── */
export default function Testimonials() {
  // Double the array for seamless infinite scroll
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials">
      <div className="section-head reveal" style={{ paddingRight: '5rem' }}>
        <div className="section-tag">005 — Testimonials</div>
        <h2 className="section-title">
          CLIENT<br />FEEDBACK
        </h2>
        <p className="section-sub">
          Kind words from people I&apos;ve had the privilege of building with.
        </p>
      </div>

      <div className="carousel-mask">
        <div className="carousel-track">
          {doubled.map((t, i) => (
            <TestiCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <main>
      {/* Nawigacja */}
      <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(240, 238, 233, 0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '18px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="font-serif" style={{ fontSize: 20 }}>
            Notariusz w świecie <em style={{ color: 'var(--sage-600)', fontStyle: 'normal' }}>AI</em>
          </div>
          <nav style={{ display: 'flex', gap: 28, fontSize: 13 }}>
            <span style={{ color: 'var(--ink-mute)' }}>Baza wiedzy</span>
            <span style={{ color: 'var(--ink-mute)' }}>Kurs online</span>
          </nav>
          <button style={{ background: 'var(--ink)', color: 'var(--cream)', padding: '10px 18px', borderRadius: 999, border: 'none', cursor: 'pointer', fontSize: 13 }}>
            Zaloguj się
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '120px 40px 80px' }}>
        <h1 className="font-serif" style={{ fontSize: 'clamp(48px, 6vw, 96px)', lineHeight: 0.98, letterSpacing: '-0.025em', margin: '0 0 28px', fontWeight: 400 }}>
          Sztuka notarialna<br/>
          <em style={{ color: 'var(--sage-600)', fontStyle: 'italic' }}>spotyka</em> sztuczną inteligencję.
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.5, color: 'var(--ink-soft)', maxWidth: 580, margin: '0 0 44px' }}>
          Praktyczne narzędzia, darmowy kurs i kuratorska baza wiedzy dla notariuszy oraz aplikantów. Wszystko w jednym bezpiecznym miejscu.
        </p>
        <div style={{ display: 'flex', gap: 14 }}>
          <button style={{ background: 'var(--ink)', color: 'var(--cream)', padding: '16px 28px', borderRadius: 999, border: 'none', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 14 }}>
            Zacznij od kursu <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}

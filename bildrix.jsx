import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════════
   BILDRIX — AI Construction Intelligence Platform
   Design: Warm white, editorial, YC-startup aesthetic
   Typography: General Sans (via CDN) + system fallback
   No templates. No generic buttons. No pricing.
   ═══════════════════════════════════════════════════════════════ */

const FONT = `'General Sans', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif`;
const HEADING = `'Outfit', 'Nunito', 'SF Pro Rounded', sans-serif`;
const MONO = `'SF Mono', 'Fira Code', 'JetBrains Mono', monospace`;
const C = {
  bg: "#FAFAF8",
  surface: "#FFFFFF",
  text: "#1A1A1A",
  muted: "#6B6B6B",
  subtle: "#A0A0A0",
  border: "#E8E8E4",
  accent: "#2D5BFF",
  accentSoft: "rgba(45,91,255,0.06)",
  accentHover: "#1A45E0",
  warm: "#F5F0EB",
  dark: "#111111",
};

// ─── Intersection Observer Hook ─────────────────────────────────
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── Animated number ────────────────────────────────────────────
function CountUp({ target, suffix = "", inView }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(target);
    const dur = 1800;
    const t0 = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - t0) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setVal(ease * num);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);
  const num = parseFloat(target);
  return <>{num % 1 !== 0 ? val.toFixed(1) : Math.floor(val)}{suffix}</>;
}

// ─── NAVIGATION ─────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const linkStyle = {
    textDecoration: "none", color: C.muted, fontSize: 14, fontWeight: 500,
    fontFamily: FONT, letterSpacing: "-0.01em",
    transition: "color 0.2s",
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
      background: scrolled ? "rgba(250,250,248,0.88)" : "transparent",
      backdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "none",
      borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        maxWidth: 1180, margin: "0 auto", padding: "0 32px",
        height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 9 }}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <rect width="26" height="26" rx="6" fill={C.dark} />
            <path d="M7 8h5.5c2.5 0 4 1.2 4 3.2 0 1.5-.9 2.5-2.2 2.9l2.7 3.9h-2.8l-2.3-3.5H9.3v3.5H7V8zm2.3 4.8h3c1.2 0 1.9-.6 1.9-1.5s-.7-1.5-1.9-1.5h-3v3z" fill="#fff" />
          </svg>
          <span style={{
            fontFamily: FONT, fontSize: 18, fontWeight: 700,
            letterSpacing: "-0.04em", color: C.text,
          }}>
            Bildrix
          </span>
        </a>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {["Product", "How it works", "About"].map((t) => (
            <a key={t} href={`#${t.toLowerCase().replace(/\s/g, "-")}`} style={linkStyle}
              onMouseEnter={e => e.target.style.color = C.text}
              onMouseLeave={e => e.target.style.color = C.muted}
            >{t}</a>
          ))}
          <a href="#cta" style={{
            textDecoration: "none", fontFamily: FONT,
            fontSize: 14, fontWeight: 600, letterSpacing: "-0.01em",
            color: "#fff", background: C.dark,
            padding: "9px 22px", borderRadius: 8,
            transition: "all 0.25s ease",
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
          }}
            onMouseEnter={e => { e.target.style.background = "#333"; e.target.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.target.style.background = C.dark; e.target.style.transform = "translateY(0)"; }}
          >
            Get early access
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ───────────────────────────────────────────────────────
function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { requestAnimationFrame(() => setLoaded(true)); }, []);

  return (
    <section style={{
      paddingTop: 140, paddingBottom: 40,
      paddingLeft: 32, paddingRight: 32,
      maxWidth: 1180, margin: "0 auto",
    }}>
      {/* Pill badge */}
      <div style={{
        opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(12px)",
        transition: "all 0.6s cubic-bezier(.22,1,.36,1)",
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "5px 14px 5px 6px", borderRadius: 100,
        border: `1px solid ${C.border}`, background: C.surface,
        marginBottom: 28,
      }}>
        <span style={{
          width: 22, height: 22, borderRadius: "50%", background: C.accentSoft,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 10, color: C.accent,
        }}>✦</span>
        <span style={{ fontFamily: FONT, fontSize: 13, fontWeight: 500, color: C.muted, letterSpacing: "-0.01em" }}>
          Now accepting early partners
        </span>
      </div>

      {/* Headline */}
      <h1 style={{
        opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.7s cubic-bezier(.22,1,.36,1) 0.08s",
        fontFamily: HEADING, fontSize: "clamp(42px, 6.5vw, 72px)",
        fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.03em",
        color: C.text, margin: 0, maxWidth: 780,
      }}>
        Your blueprints,
        <br />
        <span style={{ color: C.accent }}>understood</span> by AI.
      </h1>

      {/* Subhead */}
      <p style={{
        opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(16px)",
        transition: "all 0.7s cubic-bezier(.22,1,.36,1) 0.16s",
        fontFamily: FONT, fontSize: "clamp(17px, 2vw, 20px)",
        fontWeight: 400, lineHeight: 1.55, letterSpacing: "-0.01em",
        color: C.muted, margin: "20px 0 0", maxWidth: 540,
      }}>
        Bildrix reads construction plans, extracts material quantities, and generates cost estimates in seconds — so you can bid faster and build smarter.
      </p>

      {/* CTA Row */}
      <div style={{
        opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(16px)",
        transition: "all 0.7s cubic-bezier(.22,1,.36,1) 0.24s",
        display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap", alignItems: "center",
      }}>
        <a href="#cta" style={{
          textDecoration: "none", fontFamily: FONT,
          fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em",
          color: "#fff", background: C.accent,
          padding: "13px 28px", borderRadius: 10,
          transition: "all 0.25s ease",
          boxShadow: "0 2px 8px rgba(45,91,255,0.2)",
          display: "inline-flex", alignItems: "center", gap: 8,
        }}
          onMouseEnter={e => { e.target.style.background = C.accentHover; e.target.style.boxShadow = "0 4px 16px rgba(45,91,255,0.3)"; e.target.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.target.style.background = C.accent; e.target.style.boxShadow = "0 2px 8px rgba(45,91,255,0.2)"; e.target.style.transform = "translateY(0)"; }}
        >
          Upload your plans →
        </a>
        <a href="#how-it-works" style={{
          textDecoration: "none", fontFamily: FONT,
          fontSize: 15, fontWeight: 500, letterSpacing: "-0.01em",
          color: C.muted,
          padding: "13px 24px", borderRadius: 10,
          transition: "color 0.2s",
        }}
          onMouseEnter={e => e.target.style.color = C.text}
          onMouseLeave={e => e.target.style.color = C.muted}
        >
          See how it works
        </a>
      </div>

      {/* Product Screenshot */}
      <div style={{
        opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0) scale(1)" : "translateY(32px) scale(0.98)",
        transition: "all 0.9s cubic-bezier(.22,1,.36,1) 0.35s",
        marginTop: 64, borderRadius: 14,
        border: `1px solid ${C.border}`,
        background: C.surface,
        boxShadow: "0 8px 40px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
        overflow: "hidden",
      }}>
        <img
          src="data:image/jpeg;base64,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3p4UofrtN+K33qgNP07mvDJKUvhbjmaZiNWLXv4ueV0b3QU0kbJYpaV8MrrQu13xl9n7OWeSC/4UofrtN+K33p4UofrtN+K33qjTd0FJU4yyakc1mRLJsViSQL5ZXIIW1+lANWxnezp5BiEZmtllc3w9Y5oLPhSh+u034rfenhSh+u034rfeubF3R00sjGCahLnxGQBtSTewvl0dlje63jTVO94DJaUjG2Nx12xxNrbOINuxBb8KUP12m/Fb708KUP12m/Fb71Wh05QuMLZaiBklQ5whaHE6wNubi4F8hdbHaa0c0xh1VEDI7Cy5tiPAINvhSh+u034rfenhSh+u034rfetLdNaOc9zBVR42kNc3O4J2XFlidP6KbIxhrYQ55c1ovtINjyQWPClD9dpvxW+9PClD9dpvxW+9JNI0cQBfM0C9r7c729uS1s0xo+SDXMqYzFhxYxexFr3v6EGzwpQ/Xab8VvvTwpQ/Xab8VvvWlunNGuDj33EA21yTa1+1S3TejXxh7auIsIJBvtAtf2hBt8KUP12m/Fb708KUP12m/Fb71qh01o6pLhBUskc3a1gJO7dbrCvCx3IK3hSh+u034rfenhSh+u034rferVhwSw4IKvhSh+u034rfenhSh+u034rferVhwSw4IKvhSh+u034rfenhSh+u034rferVhwSw4IKvhSh+u034rfenhSh+u034rferVhwSw4IKvhSh+u034rfenhSh+u034rferVhwSw4IKvhSh+u034rfenhSh+u034rferVhwSw4IKvhSh+u034rfenhSh+u034rferVhwSw4IKvhSh+u034rfenhSh+u034rferVhwSw4IKvhSh+u034rfenhSh+u034rferVhwSw4IKvhSh+u034rfenhSh+u034rferVhwSw4IKvhSh+u034rfenhSh+u034rferVhwSw4IKvhSh+u034rfenhSh+u034rferVhwSw4IKvhSh+u034rfenhSh+u034rferVhwSw4IKvhSh+u034rfenhSh+u034rferVhwSw4IKvhSh+u034rfenhSh+u034rferVhwSw4IKvhSh+u034rfenhSh+u034rferVhwSw4IKvhSh+u034rfenhSh+u034rferVhwSw4IKvhSh+u034rfenhSh+u034rferVhwSw4IKvhSh+u034rfenh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iICIiAiIgIiICIiAiIgIiICIiD8xoiLu5PYfox/XGLzEnsC+2L4n+jH9cYvMSewL7YuderdOiG+L6SpUN8X0lSsNK7z0rgk232WsRtDnOubu8sm3oVsdSxJaXWIBI4hBrhDXOLt4UVRvHkCSDuF7LeGgbAAOpapZxG8NwkuOxBTwEZltssriy30rGm7iBiGyyzLmygCWPYdl7rc1jWNs0ADqQaasYmMbe13C6sblqmeGOjJORNvUtu5BSOkog5zXNewte5hxW3AG/ZmOazp6wVAiLYZWiRuK7gLN6j1qXUMDp3SOYHYgbtIuCTbP/wBo5LbDBHTxNihYGMbsaNyCG1Ebw/AS4s2gDNaqeujnjDy10TXWtrLC5O7btyW6OCOJznMbYu25lI4Y4o2sYwBrdg22QVo9IiUDDBMcRbawB6LtjtuzIq6tMFLFTYtU0jFtuSewZ7upbkBERAREQEREBERAUO/Z7VKh37PaglQ3f2lSobv7SglERAREQQ/xHdikbFD/ABHdikbEBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQF5XTn656D9P8AVeqXldOfrnoP0/1WatHTD6vd6Z4aGtBdgF7C2V+pbLAixGS0GnbMI3VDWvdGcTRbIOGwjrWxznBwAYSDtNxktObXM8R2L5A1pNgLbbjYmFkkQa6xGHYDnssthF2Yi2zrclDGgNa7O5aAgQjDC0WtYbFzJ2yU76uoc2OJl4zjBviAdni4FdZpDr23KnWRRGMlxJAkbcOebXxA7L9iC6Fql1oI1cbHXNjc2sFtWt08bHFrngEAHNBhE1xa5khGLEdmWRKiWCTC4xTOa7CbBxuL2y9aybOHyuYxriW2u4tIB7Cs5HBrLnfxF0GinDS6UhoDm9A5bbAZ9isMaA0G1jZaaZ5c6cuOyQj0WCzFRETbWNva9roNMgvUSDCD4hF72uLn+isxtLW2db0BaYwDWTOuTdjBa+W9WEA7FzqFhi0hpFxYRrZmuBvtAjYL8xZdE7FSglL5AX2a4ht25nigo9ynzS/+Zl/OV2R457AuN3KfNL/5mX85XZHjnsCkaLOsskRFUEREBERAREQEREBERAREQEREBERAREQEREBERAREQERE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"
          alt="Bildrix AI-powered blueprint analysis interface showing floor plan with auto-detected rooms, quantities, and measurements"
          style={{
            width: "100%",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}

// ─── METRICS ────────────────────────────────────────────────────
function Metrics() {
  const [ref, vis] = useReveal(0.3);
  const data = [
    { val: "98", suf: "%", label: "Takeoff accuracy" },
    { val: "11", suf: "×", label: "Faster than manual" },
    { val: "6", suf: " months", label: "Average time saved per year" },
    { val: "95", suf: "%", label: "First-pass permit approval" },
  ];
  return (
    <section ref={ref} style={{
      maxWidth: 1180, margin: "0 auto", padding: "80px 32px 0",
    }}>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`,
      }}>
        {data.map((d, i) => (
          <div key={i} style={{
            padding: "40px 24px", textAlign: "center",
            borderRight: i < 3 ? `1px solid ${C.border}` : "none",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(16px)",
            transition: `all 0.5s cubic-bezier(.22,1,.36,1) ${i * 0.07}s`,
          }}>
            <div style={{
              fontFamily: HEADING, fontSize: 40, fontWeight: 600,
              letterSpacing: "-0.04em", color: C.text, lineHeight: 1,
            }}>
              <CountUp target={d.val} suffix={d.suf} inView={vis} />
            </div>
            <div style={{
              fontFamily: FONT, fontSize: 13, fontWeight: 450,
              color: C.subtle, marginTop: 6, letterSpacing: "-0.01em",
            }}>
              {d.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── PRODUCT FEATURES ───────────────────────────────────────────
function Product() {
  const features = [
    {
      tag: "Blueprint Intelligence",
      title: "Upload plans. Get answers.",
      desc: "Our computer vision models read architectural drawings, floor plans, and CAD files. Every dimension, material callout, and specification — extracted automatically with 98% accuracy.",
      points: ["PDF, DWG, and image support", "Dimension & scale auto-detection", "Room classification & labeling"],
      color: C.accent,
      visual: (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {["Floor_Plan_L2.pdf", "Elevation_North.dwg", "Site_Survey.png"].map((f, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "12px 16px", borderRadius: 10,
              border: `1px solid ${C.border}`, background: C.surface,
              boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: i === 0 ? "rgba(45,91,255,0.08)" : i === 1 ? "rgba(34,197,94,0.08)" : "rgba(251,146,60,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14,
              }}>
                {i === 0 ? "📐" : i === 1 ? "📏" : "🖼"}
              </div>
              <div>
                <div style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: C.text }}>{f}</div>
                <div style={{ fontFamily: MONO, fontSize: 10, color: C.subtle }}>{i === 0 ? "Analyzed • 12 rooms detected" : i === 1 ? "Analyzed • 4 elevations" : "Analyzing..."}</div>
              </div>
              <div style={{
                marginLeft: "auto",
                width: 20, height: 20, borderRadius: "50%",
                background: i < 2 ? "#22C55E" : "transparent",
                border: i < 2 ? "none" : `2px solid ${C.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, color: "#fff",
              }}>
                {i < 2 ? "✓" : ""}
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      tag: "Autonomous Takeoff",
      title: "Measure everything. Click nothing.",
      desc: "One button. Every wall, door, window, room, and fixture on your plans — detected, measured, and quantified. Areas, linear footage, and counts appear in seconds.",
      points: ["Gross & net area calculations", "Wall linear footage", "Door, window & fixture counts"],
      color: "#22C55E",
      visual: (
        <div style={{ borderRadius: 10, border: `1px solid ${C.border}`, overflow: "hidden", background: C.surface }}>
          <div style={{ padding: "12px 16px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600, color: C.text }}>Takeoff Results</span>
            <span style={{ fontFamily: MONO, fontSize: 10, color: "#22C55E", background: "rgba(34,197,94,0.08)", padding: "3px 8px", borderRadius: 4 }}>AUTO</span>
          </div>
          {[
            { name: "Living Room", area: "384 SF", walls: "82 LF", type: "area" },
            { name: "Kitchen", area: "196 SF", walls: "58 LF", type: "area" },
            { name: "Bedroom 1", area: "240 SF", walls: "64 LF", type: "area" },
            { name: "Doors", area: "4 units", walls: "—", type: "count" },
            { name: "Windows", area: "6 units", walls: "—", type: "count" },
          ].map((row, i) => (
            <div key={i} style={{
              padding: "10px 16px", borderBottom: `1px solid ${C.border}`,
              display: "flex", alignItems: "center", gap: 12,
              fontFamily: FONT, fontSize: 12,
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: 2,
                background: row.type === "area" ? "rgba(45,91,255,0.6)" : "rgba(251,146,60,0.6)",
              }} />
              <span style={{ flex: 1, color: C.text, fontWeight: 500 }}>{row.name}</span>
              <span style={{ fontFamily: MONO, fontSize: 11, color: C.muted, width: 70, textAlign: "right" }}>{row.area}</span>
              <span style={{ fontFamily: MONO, fontSize: 11, color: C.subtle, width: 50, textAlign: "right" }}>{row.walls}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      tag: "Smart Estimation",
      title: "From photo to proposal.",
      desc: "Snap a site photo, upload a video walkthrough, or describe a project in plain English. Bildrix generates line-item estimates with real supplier pricing and markup controls built in.",
      points: ["Photo, video & voice input", "Live regional pricing data", "Markup & profit tracking"],
      color: "#A855F7",
      visual: (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{
            borderRadius: 10, border: `1px solid ${C.border}`, background: C.surface,
            padding: "14px 16px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
          }}>
            <div style={{ fontFamily: FONT, fontSize: 12, color: C.muted, marginBottom: 8 }}>
              <span style={{ color: "#A855F7", fontWeight: 600 }}>You:</span> "Two-bedroom apartment renovation, hardwood floors, new kitchen cabinets, updated bathroom tile"
            </div>
            <div style={{ height: 1, background: C.border, margin: "8px 0" }} />
            <div style={{ fontFamily: FONT, fontSize: 12, color: C.muted }}>
              <span style={{ color: C.accent, fontWeight: 600 }}>Bildrix:</span> Generating estimate with 23 line items...
            </div>
          </div>
          <div style={{
            borderRadius: 10, border: `1px solid rgba(168,85,247,0.2)`, background: "rgba(168,85,247,0.03)",
            padding: "14px 16px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: FONT, fontSize: 13, fontWeight: 600, color: C.text }}>
              <span>Estimated total</span>
              <span style={{ fontFamily: MONO, color: "#A855F7" }}>$47,800</span>
            </div>
            <div style={{ fontFamily: MONO, fontSize: 10, color: C.subtle, marginTop: 4 }}>
              Materials $22,100 · Labor $21,400 · Permits $4,300
            </div>
          </div>
        </div>
      ),
    },
    {
      tag: "Code Compliance",
      title: "Catch issues before permitting.",
      desc: "AI-powered plan review flags code compliance problems before you submit. Reduce revision cycles, avoid permitting delays, and get first-time approvals.",
      points: ["Automated code check", "Issue flagging with context", "Pre-submission validation"],
      color: "#EF4444",
      visual: (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { status: "pass", text: "Egress width meets minimum 36\" requirement", code: "IBC 1005.1" },
            { status: "pass", text: "Bathroom ventilation: exhaust fan specified", code: "IMC 403.3" },
            { status: "warn", text: "Bedroom window area below 5.7 SF minimum", code: "IRC R310.1" },
            { status: "pass", text: "Smoke detector placement verified", code: "IRC R314.3" },
          ].map((item, i) => (
            <div key={i} style={{
              padding: "10px 14px", borderRadius: 8,
              border: `1px solid ${item.status === "warn" ? "rgba(239,68,68,0.2)" : C.border}`,
              background: item.status === "warn" ? "rgba(239,68,68,0.03)" : C.surface,
              display: "flex", alignItems: "flex-start", gap: 10,
            }}>
              <div style={{
                width: 18, height: 18, borderRadius: "50%", flexShrink: 0, marginTop: 1,
                background: item.status === "pass" ? "#22C55E" : "#EF4444",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, color: "#fff", fontWeight: 700,
              }}>
                {item.status === "pass" ? "✓" : "!"}
              </div>
              <div>
                <div style={{ fontFamily: FONT, fontSize: 12, color: C.text, fontWeight: 500, lineHeight: 1.3 }}>{item.text}</div>
                <div style={{ fontFamily: MONO, fontSize: 9, color: C.subtle, marginTop: 2 }}>{item.code}</div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section id="product" style={{ maxWidth: 1180, margin: "0 auto", padding: "100px 32px" }}>
      <div style={{ marginBottom: 72 }}>
        <p style={{
          fontFamily: FONT, fontSize: 13, fontWeight: 600, color: C.accent,
          letterSpacing: "0.02em", margin: "0 0 12px",
        }}>Product</p>
        <h2 style={{
          fontFamily: HEADING, fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 700, letterSpacing: "-0.03em", color: C.text,
          margin: 0, lineHeight: 1.15, maxWidth: 480,
        }}>
          Everything between blueprint and bid — automated.
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
        {features.map((f, i) => {
          const [ref, vis] = useReveal(0.1);
          const flip = i % 2 !== 0;
          return (
            <div key={i} ref={ref} style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.6s cubic-bezier(.22,1,.36,1)",
              direction: flip ? "rtl" : "ltr",
            }}>
              <div style={{ direction: "ltr" }}>
                <span style={{
                  fontFamily: MONO, fontSize: 11, fontWeight: 500,
                  color: f.color, letterSpacing: "0.02em",
                  background: `${f.color}10`, padding: "3px 10px", borderRadius: 4,
                }}>
                  {f.tag}
                </span>
                <h3 style={{
                  fontFamily: HEADING, fontSize: 28, fontWeight: 600,
                  letterSpacing: "-0.025em", color: C.text,
                  margin: "16px 0 12px", lineHeight: 1.15,
                }}>
                  {f.title}
                </h3>
                <p style={{
                  fontFamily: FONT, fontSize: 15, fontWeight: 400,
                  color: C.muted, lineHeight: 1.6, letterSpacing: "-0.01em",
                  margin: "0 0 20px", maxWidth: 420,
                }}>
                  {f.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {f.points.map((p, j) => (
                    <div key={j} style={{
                      display: "flex", alignItems: "center", gap: 10,
                      fontFamily: FONT, fontSize: 13, fontWeight: 500,
                      color: C.text, letterSpacing: "-0.01em",
                    }}>
                      <div style={{
                        width: 5, height: 5, borderRadius: "50%",
                        background: f.color, opacity: 0.6,
                      }} />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ direction: "ltr" }}>
                {f.visual}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ───────────────────────────────────────────────
function HowItWorks() {
  const [ref, vis] = useReveal(0.15);
  const steps = [
    { num: "1", title: "Upload your plans", desc: "Drop blueprints, site photos, CAD files, or describe the project in plain English. Any format works.", icon: "↑" },
    { num: "2", title: "AI analyzes everything", desc: "Computer vision reads every dimension, identifies materials, counts fixtures, and classifies rooms automatically.", icon: "◈" },
    { num: "3", title: "Review your takeoff", desc: "Get a complete material quantity list with measurements. Edit, adjust, or approve — all in the same workspace.", icon: "▤" },
    { num: "4", title: "Send winning proposals", desc: "Generate cost estimates with real supplier data, apply your markup, and deliver polished proposals in minutes.", icon: "→" },
  ];
  return (
    <section id="how-it-works" ref={ref} style={{
      background: C.warm, padding: "100px 32px",
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <p style={{
          fontFamily: FONT, fontSize: 13, fontWeight: 600, color: C.accent,
          letterSpacing: "0.02em", margin: "0 0 12px",
        }}>How it works</p>
        <h2 style={{
          fontFamily: HEADING, fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 700, letterSpacing: "-0.03em", color: C.text,
          margin: "0 0 56px", lineHeight: 1.15,
        }}>
          Four steps. No learning curve.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(20px)",
              transition: `all 0.5s cubic-bezier(.22,1,.36,1) ${i * 0.08}s`,
              padding: "28px 24px", borderRadius: 14,
              background: C.surface,
              border: `1px solid ${C.border}`,
              boxShadow: "0 1px 4px rgba(0,0,0,0.02)",
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 9,
                background: C.accentSoft,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: FONT, fontSize: 15, fontWeight: 700, color: C.accent,
                marginBottom: 18,
              }}>
                {s.num}
              </div>
              <h3 style={{
                fontFamily: HEADING, fontSize: 17, fontWeight: 600,
                letterSpacing: "-0.02em", color: C.text,
                margin: "0 0 8px",
              }}>{s.title}</h3>
              <p style={{
                fontFamily: FONT, fontSize: 13.5, fontWeight: 400,
                color: C.muted, lineHeight: 1.55, letterSpacing: "-0.01em",
                margin: 0,
              }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ───────────────────────────────────────────────
function Testimonials() {
  const [ref, vis] = useReveal(0.15);
  const items = [
    { quote: "Bildrix cut our estimating from 3 days down to 20 minutes. We're bidding on projects we never had capacity for before.", name: "Marcus Chen", title: "Owner, Apex Builders" },
    { quote: "The AI caught measurement discrepancies that three experienced estimators missed. Saved us $40K on a single project.", name: "Sarah Okafor", title: "Lead Estimator, Meridian Construction" },
    { quote: "Went from site visit to a winning $240K bid in under 2 hours. The proposals look better than what our old firm produced.", name: "James Whitfield", title: "Whitfield Remodeling" },
  ];
  return (
    <section ref={ref} style={{ maxWidth: 1180, margin: "0 auto", padding: "100px 32px" }}>
      <p style={{
        fontFamily: FONT, fontSize: 13, fontWeight: 600, color: C.accent,
        letterSpacing: "0.02em", margin: "0 0 12px",
      }}>What builders say</p>
      <h2 style={{
        fontFamily: HEADING, fontSize: "clamp(28px, 4vw, 40px)",
        fontWeight: 700, letterSpacing: "-0.03em", color: C.text,
        margin: "0 0 48px", lineHeight: 1.15,
      }}>
        Trusted by contractors who build.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {items.map((t, i) => (
          <div key={i} style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(20px)",
            transition: `all 0.5s cubic-bezier(.22,1,.36,1) ${i * 0.08}s`,
            padding: "28px 24px", borderRadius: 14,
            border: `1px solid ${C.border}`, background: C.surface,
            display: "flex", flexDirection: "column",
          }}>
            <p style={{
              fontFamily: FONT, fontSize: 14.5, fontWeight: 400,
              color: C.text, lineHeight: 1.6, letterSpacing: "-0.01em",
              margin: "0 0 24px", flex: 1,
            }}>
              "{t.quote}"
            </p>
            <div>
              <div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 650, color: C.text }}>{t.name}</div>
              <div style={{ fontFamily: FONT, fontSize: 12.5, color: C.subtle, marginTop: 2 }}>{t.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── CTA ────────────────────────────────────────────────────────
function CTA() {
  const [ref, vis] = useReveal(0.2);
  return (
    <section id="cta" ref={ref} style={{ padding: "60px 32px 100px" }}>
      <div style={{
        maxWidth: 720, margin: "0 auto", textAlign: "center",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.6s cubic-bezier(.22,1,.36,1)",
        padding: "72px 48px", borderRadius: 20,
        background: C.dark,
      }}>
        <h2 style={{
          fontFamily: HEADING, fontSize: "clamp(26px, 4vw, 36px)",
          fontWeight: 700, letterSpacing: "-0.03em",
          color: "#fff", margin: "0 0 14px", lineHeight: 1.15,
        }}>
          Ready to stop estimating by hand?
        </h2>
        <p style={{
          fontFamily: FONT, fontSize: 16, fontWeight: 400,
          color: "rgba(255,255,255,0.55)", margin: "0 auto 32px",
          maxWidth: 420, lineHeight: 1.55, letterSpacing: "-0.01em",
        }}>
          Upload your first blueprint and see what Bildrix finds. No credit card, no onboarding call.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#" style={{
            textDecoration: "none", fontFamily: FONT,
            fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em",
            color: C.dark, background: "#fff",
            padding: "13px 30px", borderRadius: 10,
            transition: "all 0.25s ease",
            display: "inline-flex", alignItems: "center", gap: 8,
          }}
            onMouseEnter={e => { e.target.style.background = "#F0F0F0"; e.target.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.target.style.background = "#fff"; e.target.style.transform = "translateY(0)"; }}
          >
            Upload your plans →
          </a>
          <a href="#" style={{
            textDecoration: "none", fontFamily: FONT,
            fontSize: 15, fontWeight: 500, letterSpacing: "-0.01em",
            color: "rgba(255,255,255,0.7)",
            padding: "13px 24px", borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.15)",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.target.style.color = "#fff"; e.target.style.borderColor = "rgba(255,255,255,0.3)"; }}
            onMouseLeave={e => { e.target.style.color = "rgba(255,255,255,0.7)"; e.target.style.borderColor = "rgba(255,255,255,0.15)"; }}
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      borderTop: `1px solid ${C.border}`,
      padding: "32px 32px",
    }}>
      <div style={{
        maxWidth: 1180, margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{
          fontFamily: FONT, fontSize: 13.5, fontWeight: 600,
          letterSpacing: "-0.02em", color: C.subtle,
        }}>
          Bildrix
        </span>
        <div style={{ display: "flex", gap: 28 }}>
          {["Product", "About", "Privacy", "Terms"].map((t) => (
            <a key={t} href="#" style={{
              textDecoration: "none", fontFamily: FONT,
              fontSize: 12.5, fontWeight: 450, color: C.subtle,
              letterSpacing: "-0.01em", transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = C.text}
              onMouseLeave={e => e.target.style.color = C.subtle}
            >{t}</a>
          ))}
        </div>
        <span style={{
          fontFamily: FONT, fontSize: 12, color: C.subtle,
          letterSpacing: "-0.01em",
        }}>
          © 2026
        </span>
      </div>
    </footer>
  );
}

// ─── ROOT ───────────────────────────────────────────────────────
export default function Bildrix() {
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        body { background: ${C.bg}; }
        ::selection { background: rgba(45,91,255,0.12); }
        @media (max-width: 860px) {
          [data-grid-cols="4"] { grid-template-columns: repeat(2, 1fr) !important; }
          [data-grid-cols="3"] { grid-template-columns: 1fr !important; }
          [data-grid-cols="2"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Nav />
      <Hero />
      <Metrics />
      <Product />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

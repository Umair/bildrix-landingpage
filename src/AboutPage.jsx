import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Nav, Footer, C, FONT, HEADING, useReveal } from "../bildrix.jsx";

/* ═══════════════════════════════════════════════════════════════
   ABOUT PAGE — Company mission, story, and values
   ═══════════════════════════════════════════════════════════════ */

const values = [
    {
        icon: "🎯",
        title: "Precision First",
        desc: "We believe every estimate should be accurate to the last bolt. Our AI reads blueprints with 98% accuracy, eliminating costly human errors.",
    },
    {
        icon: "⚡",
        title: "Speed Matters",
        desc: "In construction, time is money — literally. Bildrix generates takeoffs and estimates 11× faster than traditional methods.",
    },
    {
        icon: "🤝",
        title: "Builder-Centric",
        desc: "We build for contractors, estimators, and project managers. Every feature is designed to simplify your workflow, not complicate it.",
    },
    {
        icon: "🔮",
        title: "AI-Native",
        desc: "Not AI as an afterthought — AI at the core. Our models are trained specifically on construction documents and industry standards.",
    },
];

const stats = [
    { value: "98%", label: "Takeoff Accuracy" },
    { value: "11×", label: "Faster Than Manual" },
    { value: "500+", label: "Blueprint Types Supported" },
    { value: "24/7", label: "Platform Availability" },
];

function Section({ children, style }) {
    const [ref, visible] = useReveal();
    return (
        <section
            ref={ref}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.7s cubic-bezier(.22,1,.36,1)",
                ...style,
            }}
        >
            {children}
        </section>
    );
}

export default function AboutPage() {
    return (
        <div style={{ background: C.bg, minHeight: "100vh" }}>
            <Helmet>
                <title>About — Bildrix | AI Construction Intelligence</title>
                <meta
                    name="description"
                    content="Learn about Bildrix — the AI-powered platform transforming how contractors read blueprints, estimate costs, and build smarter."
                />
                <link rel="canonical" href="https://bildrix.com/about" />
            </Helmet>

            <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        body { background: ${C.bg}; }
        ::selection { background: rgba(45,91,255,0.12); }
      `}</style>

            <Nav />

            {/* Hero */}
            <section
                style={{
                    paddingTop: 140,
                    paddingBottom: 60,
                    paddingLeft: 48,
                    paddingRight: 48,
                    maxWidth: 1180,
                    margin: "0 auto",
                    textAlign: "center",
                }}
            >
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "5px 14px 5px 6px",
                        borderRadius: 100,
                        border: `1px solid ${C.border}`,
                        background: C.surface,
                        marginBottom: 28,
                    }}
                >
                    <span
                        style={{
                            width: 22,
                            height: 22,
                            borderRadius: "50%",
                            background: C.accentSoft,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 10,
                            color: C.accent,
                        }}
                    >
                        ✦
                    </span>
                    <span
                        style={{
                            fontFamily: FONT,
                            fontSize: 13,
                            fontWeight: 500,
                            color: C.muted,
                            letterSpacing: "-0.01em",
                        }}
                    >
                        Our Story
                    </span>
                </div>

                <h1
                    style={{
                        fontFamily: HEADING,
                        fontSize: "clamp(36px, 5vw, 56px)",
                        fontWeight: 600,
                        lineHeight: 1.12,
                        letterSpacing: "-0.03em",
                        color: C.text,
                        margin: "0 auto",
                        maxWidth: 700,
                    }}
                >
                    Building the future of{" "}
                    <span style={{ color: C.accent }}>construction intelligence</span>
                </h1>

                <p
                    style={{
                        fontFamily: FONT,
                        fontSize: "clamp(16px, 1.8vw, 19px)",
                        fontWeight: 400,
                        lineHeight: 1.6,
                        color: C.muted,
                        margin: "24px auto 0",
                        maxWidth: 620,
                    }}
                >
                    Bildrix was founded with a single belief: the construction industry
                    deserves better tools. We're combining cutting-edge AI with deep
                    industry expertise to transform how projects are estimated, planned,
                    and built.
                </p>
            </section>

            {/* Stats */}
            <Section
                style={{
                    maxWidth: 1180,
                    margin: "0 auto",
                    padding: "0 48px 60px",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: 24,
                    }}
                >
                    {stats.map((s) => (
                        <div
                            key={s.label}
                            style={{
                                background: C.surface,
                                border: `1px solid ${C.border}`,
                                borderRadius: 14,
                                padding: "32px 24px",
                                textAlign: "center",
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: HEADING,
                                    fontSize: 36,
                                    fontWeight: 600,
                                    color: C.accent,
                                    letterSpacing: "-0.03em",
                                }}
                            >
                                {s.value}
                            </div>
                            <div
                                style={{
                                    fontFamily: FONT,
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: C.muted,
                                    marginTop: 8,
                                }}
                            >
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Mission */}
            <Section
                style={{
                    maxWidth: 1180,
                    margin: "0 auto",
                    padding: "60px 48px",
                }}
            >
                <div
                    style={{
                        background: C.warm,
                        borderRadius: 18,
                        padding: "56px 48px",
                    }}
                >
                    <h2
                        style={{
                            fontFamily: HEADING,
                            fontSize: "clamp(28px, 3.5vw, 40px)",
                            fontWeight: 600,
                            letterSpacing: "-0.02em",
                            color: C.text,
                            marginBottom: 20,
                        }}
                    >
                        Our Mission
                    </h2>
                    <p
                        style={{
                            fontFamily: FONT,
                            fontSize: 18,
                            lineHeight: 1.7,
                            color: C.muted,
                            maxWidth: 720,
                        }}
                    >
                        The construction industry loses billions every year to inaccurate
                        estimates, missed quantities, and compliance oversights. These aren't
                        just numbers — they're delayed projects, budget overruns, and wasted
                        resources.
                    </p>
                    <p
                        style={{
                            fontFamily: FONT,
                            fontSize: 18,
                            lineHeight: 1.7,
                            color: C.muted,
                            maxWidth: 720,
                            marginTop: 16,
                        }}
                    >
                        Bildrix exists to eliminate these problems. Our AI platform reads
                        blueprints the way experienced estimators do — but faster, more
                        consistently, and available around the clock. We're not replacing
                        human expertise; we're augmenting it with intelligence that scales.
                    </p>
                </div>
            </Section>

            {/* Values */}
            <Section
                style={{
                    maxWidth: 1180,
                    margin: "0 auto",
                    padding: "60px 48px",
                }}
            >
                <h2
                    style={{
                        fontFamily: HEADING,
                        fontSize: "clamp(28px, 3.5vw, 40px)",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        color: C.text,
                        marginBottom: 36,
                        textAlign: "center",
                    }}
                >
                    What drives us
                </h2>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: 24,
                    }}
                >
                    {values.map((v) => (
                        <div
                            key={v.title}
                            style={{
                                background: C.surface,
                                border: `1px solid ${C.border}`,
                                borderRadius: 14,
                                padding: "32px 28px",
                            }}
                        >
                            <div style={{ fontSize: 28, marginBottom: 12 }}>{v.icon}</div>
                            <h3
                                style={{
                                    fontFamily: HEADING,
                                    fontSize: 20,
                                    fontWeight: 600,
                                    color: C.text,
                                    letterSpacing: "-0.02em",
                                    marginBottom: 10,
                                }}
                            >
                                {v.title}
                            </h3>
                            <p
                                style={{
                                    fontFamily: FONT,
                                    fontSize: 15,
                                    lineHeight: 1.6,
                                    color: C.muted,
                                }}
                            >
                                {v.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Team CTA */}
            <Section
                style={{
                    maxWidth: 1180,
                    margin: "0 auto",
                    padding: "60px 48px 100px",
                    textAlign: "center",
                }}
            >
                <h2
                    style={{
                        fontFamily: HEADING,
                        fontSize: "clamp(24px, 3vw, 36px)",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        color: C.text,
                        marginBottom: 16,
                    }}
                >
                    Ready to build smarter?
                </h2>
                <p
                    style={{
                        fontFamily: FONT,
                        fontSize: 17,
                        color: C.muted,
                        lineHeight: 1.6,
                        maxWidth: 500,
                        margin: "0 auto 32px",
                    }}
                >
                    Join the contractors and estimators already using Bildrix to transform
                    their workflows.
                </p>
                <a
                    href="https://calendly.com/umairjz/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        textDecoration: "none",
                        fontFamily: FONT,
                        fontSize: 15,
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                        color: "#fff",
                        background: C.accent,
                        padding: "13px 28px",
                        borderRadius: 10,
                        transition: "all 0.25s ease",
                        boxShadow: "0 2px 8px rgba(45,91,255,0.2)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = C.accentHover;
                        e.target.style.boxShadow = "0 4px 16px rgba(45,91,255,0.3)";
                        e.target.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = C.accent;
                        e.target.style.boxShadow = "0 2px 8px rgba(45,91,255,0.2)";
                        e.target.style.transform = "translateY(0)";
                    }}
                >
                    Book a demo →
                </a>
            </Section>

            <Footer />
        </div>
    );
}

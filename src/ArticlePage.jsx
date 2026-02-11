import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { articles } from "./articles/articles.js";

// Lazy-loaded article content components
import Article1 from "./articles/Article1.jsx";
import Article2 from "./articles/Article2.jsx";
import Article3 from "./articles/Article3.jsx";
import Article4 from "./articles/Article4.jsx";
import Article5 from "./articles/Article5.jsx";

const FONT = `'General Sans', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif`;
const HEADING = `'Outfit', 'Nunito', 'SF Pro Rounded', sans-serif`;

const C = {
    bg: "#FAFAF8",
    surface: "#FFFFFF",
    text: "#1A1A1A",
    muted: "#6B6B6B",
    subtle: "#A0A0A0",
    border: "#E8E8E4",
    accent: "#2D5BFF",
    accentSoft: "rgba(45,91,255,0.06)",
    dark: "#111111",
};

const articleComponents = {
    "ai-construction-takeoff-software": Article1,
    "how-ai-reads-construction-blueprints": Article2,
    "reduce-construction-estimating-errors-with-ai": Article3,
    "automated-material-takeoff-vs-manual-takeoff": Article4,
    "ai-building-code-compliance-checking": Article5,
};

export default function ArticlePage() {
    const { slug } = useParams();
    const meta = articles.find((a) => a.slug === slug);
    const ContentComponent = articleComponents[slug];

    if (!meta || !ContentComponent) {
        return (
            <div style={{ background: C.bg, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <style>{`
          @import url('https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
          *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
          html { -webkit-font-smoothing: antialiased; }
          body { background: ${C.bg}; }
        `}</style>
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ fontFamily: HEADING, fontSize: 32, color: C.text, marginBottom: 16 }}>Article Not Found</h1>
                    <Link to="/" style={{ fontFamily: FONT, fontSize: 15, color: C.accent, textDecoration: "none" }}>
                        ← Back to Bildrix
                    </Link>
                </div>
            </div>
        );
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: meta.title,
        description: meta.description,
        datePublished: meta.date,
        author: { "@type": "Organization", name: "Bildrix" },
        publisher: {
            "@type": "Organization",
            name: "Bildrix",
            url: "https://bildrix.com",
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://bildrix.com/blog/${meta.slug}`,
        },
    };

    return (
        <div style={{ background: C.bg, minHeight: "100vh" }}>
            <Helmet>
                <title>{meta.title} | Bildrix</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <link rel="canonical" href={`https://bildrix.com/blog/${meta.slug}`} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://bildrix.com/blog/${meta.slug}`} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:image" content="https://bildrix.com/hero.png" />
                <meta property="og:site_name" content="Bildrix" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content="https://bildrix.com/hero.png" />
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Helmet>

            <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        body { background: ${C.bg}; }
        ::selection { background: rgba(45,91,255,0.12); }
      `}</style>

            {/* Nav */}
            <nav style={{
                borderBottom: `1px solid ${C.border}`,
                background: "rgba(250,250,248,0.88)",
                backdropFilter: "blur(16px) saturate(1.4)",
            }}>
                <div style={{
                    maxWidth: 780, margin: "0 auto", padding: "0 32px",
                    height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                    <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 9 }}>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <rect width="26" height="26" rx="6" fill={C.dark} />
                            <path d="M7 8h5.5c2.5 0 4 1.2 4 3.2 0 1.5-.9 2.5-2.2 2.9l2.7 3.9h-2.8l-2.3-3.5H9.3v3.5H7V8zm2.3 4.8h3c1.2 0 1.9-.6 1.9-1.5s-.7-1.5-1.9-1.5h-3v3z" fill="#fff" />
                        </svg>
                        <span style={{ fontFamily: FONT, fontSize: 18, fontWeight: 700, letterSpacing: "-0.04em", color: C.text }}>
                            Bildrix
                        </span>
                    </Link>
                    <Link to="/" style={{
                        textDecoration: "none", fontFamily: FONT, fontSize: 14, fontWeight: 500, color: C.muted,
                    }}>
                        ← Back to Home
                    </Link>
                </div>
            </nav>

            {/* Article Header */}
            <header style={{ maxWidth: 780, margin: "0 auto", padding: "60px 32px 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                    <span style={{
                        fontFamily: FONT, fontSize: 12, fontWeight: 600, color: C.accent,
                        background: C.accentSoft, padding: "4px 12px", borderRadius: 100,
                    }}>{meta.category}</span>
                    <span style={{ fontFamily: FONT, fontSize: 12, color: C.subtle }}>{meta.date}</span>
                    <span style={{ fontFamily: FONT, fontSize: 12, color: C.subtle }}>·</span>
                    <span style={{ fontFamily: FONT, fontSize: 12, color: C.subtle }}>{meta.readTime}</span>
                </div>
                <h1 style={{
                    fontFamily: HEADING, fontSize: "clamp(28px, 5vw, 42px)",
                    fontWeight: 700, letterSpacing: "-0.03em", color: C.text,
                    lineHeight: 1.15, margin: "0 0 24px", maxWidth: 680,
                }}>{meta.title}</h1>
                <p style={{
                    fontFamily: FONT, fontSize: "clamp(16px, 2vw, 18px)",
                    fontWeight: 400, color: C.muted, lineHeight: 1.6,
                    letterSpacing: "-0.01em", margin: 0, maxWidth: 600,
                }}>{meta.description}</p>
                <div style={{ height: 1, background: C.border, marginTop: 40 }} />
            </header>

            {/* Article Content */}
            <article style={{ maxWidth: 780, margin: "0 auto", padding: "40px 32px 80px" }}>
                <ContentComponent />
            </article>

            {/* CTA */}
            <section style={{ padding: "0 32px 80px" }}>
                <div style={{
                    maxWidth: 680, margin: "0 auto", textAlign: "center",
                    padding: "56px 40px", borderRadius: 20, background: C.dark,
                }}>
                    <h2 style={{
                        fontFamily: HEADING, fontSize: "clamp(22px, 3.5vw, 30px)",
                        fontWeight: 700, letterSpacing: "-0.03em",
                        color: "#fff", margin: "0 0 12px", lineHeight: 1.15,
                    }}>Ready to see Bildrix in action?</h2>
                    <p style={{
                        fontFamily: FONT, fontSize: 15, color: "rgba(255,255,255,0.55)",
                        margin: "0 auto 28px", maxWidth: 400, lineHeight: 1.55,
                    }}>Upload your first blueprint and get instant takeoffs. No credit card required.</p>
                    <a href="https://calendly.com/umairjz/30min" target="_blank" rel="noopener noreferrer" style={{
                        textDecoration: "none", fontFamily: FONT, fontSize: 15, fontWeight: 600,
                        color: C.dark, background: "#fff", padding: "13px 30px", borderRadius: 10,
                        display: "inline-flex", alignItems: "center",
                    }}>Book a demo</a>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ borderTop: `1px solid ${C.border}`, padding: "32px" }}>
                <div style={{
                    maxWidth: 780, margin: "0 auto",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                    <span style={{ fontFamily: FONT, fontSize: 13.5, fontWeight: 600, color: C.subtle }}>Bildrix</span>
                    <span style={{ fontFamily: FONT, fontSize: 12, color: C.subtle }}>© 2026</span>
                </div>
            </footer>
        </div>
    );
}

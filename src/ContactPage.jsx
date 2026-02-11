import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Nav, Footer, C, FONT, HEADING, useReveal } from "../bildrix.jsx";

/* ═══════════════════════════════════════════════════════════════
   CONTACT PAGE — Form that sends details via Web3Forms
   All submissions go to umairjz@gmail.com
   ═══════════════════════════════════════════════════════════════ */

// ⚠️ Replace with your real Web3Forms access key from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "e62cb49b-777d-41fb-8f73-d8e624bc8cee";

const inputStyle = {
    width: "100%",
    fontFamily: FONT,
    fontSize: 15,
    fontWeight: 400,
    color: C.text,
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: 10,
    padding: "13px 16px",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
};

const labelStyle = {
    fontFamily: FONT,
    fontSize: 13,
    fontWeight: 500,
    color: C.muted,
    letterSpacing: "-0.01em",
    marginBottom: 6,
    display: "block",
};

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [ref, visible] = useReveal();

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject || "New Contact from Bildrix Website",
                    message: formData.message,
                    from_name: "Bildrix Contact Form",
                }),
            });

            const data = await res.json();
            if (data.success) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div style={{ background: C.bg, minHeight: "100vh" }}>
            <Helmet>
                <title>Contact Us — Bildrix | AI Construction Intelligence</title>
                <meta
                    name="description"
                    content="Get in touch with the Bildrix team. We'd love to hear from you about our AI-powered construction intelligence platform."
                />
                <link rel="canonical" href="https://bildrix.com/contact" />
            </Helmet>

            <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        body { background: ${C.bg}; }
        ::selection { background: rgba(45,91,255,0.12); }
        input:focus, textarea:focus {
          border-color: ${C.accent} !important;
          box-shadow: 0 0 0 3px ${C.accentSoft} !important;
        }
      `}</style>

            <Nav />

            <section
                style={{
                    paddingTop: 140,
                    paddingBottom: 100,
                    paddingLeft: 48,
                    paddingRight: 48,
                    maxWidth: 1180,
                    margin: "0 auto",
                }}
            >
                <div style={{ textAlign: "center", marginBottom: 48 }}>
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
                            Get in Touch
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
                        Let's <span style={{ color: C.accent }}>talk</span>
                    </h1>

                    <p
                        style={{
                            fontFamily: FONT,
                            fontSize: "clamp(16px, 1.8vw, 19px)",
                            fontWeight: 400,
                            lineHeight: 1.6,
                            color: C.muted,
                            margin: "20px auto 0",
                            maxWidth: 520,
                        }}
                    >
                        Have a question, want a demo, or interested in partnering? Drop us a
                        message and we'll get back to you quickly.
                    </p>
                </div>

                <div
                    ref={ref}
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(24px)",
                        transition: "all 0.7s cubic-bezier(.22,1,.36,1)",
                        maxWidth: 640,
                        margin: "0 auto",
                        background: C.surface,
                        border: `1px solid ${C.border}`,
                        borderRadius: 18,
                        padding: "40px 36px",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
                    }}
                >
                    {status === "success" ? (
                        <div style={{ textAlign: "center", padding: "40px 0" }}>
                            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                            <h3
                                style={{
                                    fontFamily: HEADING,
                                    fontSize: 24,
                                    fontWeight: 600,
                                    color: C.text,
                                    marginBottom: 8,
                                }}
                            >
                                Message sent!
                            </h3>
                            <p
                                style={{
                                    fontFamily: FONT,
                                    fontSize: 16,
                                    color: C.muted,
                                    lineHeight: 1.5,
                                }}
                            >
                                Thank you for reaching out. We'll get back to you as soon as
                                possible.
                            </p>
                            <button
                                onClick={() => setStatus("idle")}
                                style={{
                                    marginTop: 24,
                                    fontFamily: FONT,
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: C.accent,
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                }}
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 20,
                                    marginBottom: 20,
                                }}
                            >
                                <div>
                                    <label style={labelStyle} htmlFor="name">
                                        Name *
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        style={inputStyle}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyle} htmlFor="email">
                                        Email *
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="you@company.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={inputStyle}
                                    />
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 20,
                                    marginBottom: 20,
                                }}
                            >
                                <div>
                                    <label style={labelStyle} htmlFor="phone">
                                        Phone
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        style={inputStyle}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyle} htmlFor="subject">
                                        Subject
                                    </label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        placeholder="What's this about?"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        style={inputStyle}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: 24 }}>
                                <label style={labelStyle} htmlFor="message">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Tell us about your project or question..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{
                                        ...inputStyle,
                                        resize: "vertical",
                                        minHeight: 120,
                                    }}
                                />
                            </div>

                            {status === "error" && (
                                <p
                                    style={{
                                        fontFamily: FONT,
                                        fontSize: 14,
                                        color: "#e53e3e",
                                        marginBottom: 16,
                                    }}
                                >
                                    Something went wrong. Please try again or email us directly at{" "}
                                    <a
                                        href="mailto:umairjz@gmail.com"
                                        style={{ color: C.accent }}
                                    >
                                        umairjz@gmail.com
                                    </a>
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                style={{
                                    width: "100%",
                                    fontFamily: FONT,
                                    fontSize: 15,
                                    fontWeight: 600,
                                    letterSpacing: "-0.01em",
                                    color: "#fff",
                                    background: status === "sending" ? C.muted : C.accent,
                                    padding: "14px 28px",
                                    borderRadius: 10,
                                    border: "none",
                                    cursor: status === "sending" ? "not-allowed" : "pointer",
                                    transition: "all 0.25s ease",
                                    boxShadow: "0 2px 8px rgba(45,91,255,0.2)",
                                }}
                                onMouseEnter={(e) => {
                                    if (status !== "sending") {
                                        e.target.style.background = C.accentHover;
                                        e.target.style.boxShadow =
                                            "0 4px 16px rgba(45,91,255,0.3)";
                                        e.target.style.transform = "translateY(-1px)";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (status !== "sending") {
                                        e.target.style.background = C.accent;
                                        e.target.style.boxShadow =
                                            "0 2px 8px rgba(45,91,255,0.2)";
                                        e.target.style.transform = "translateY(0)";
                                    }
                                }}
                            >
                                {status === "sending" ? "Sending..." : "Send Message →"}
                            </button>
                        </form>
                    )}
                </div>

                {/* Direct contact info */}
                <div
                    style={{
                        maxWidth: 640,
                        margin: "32px auto 0",
                        textAlign: "center",
                    }}
                >
                    <p
                        style={{
                            fontFamily: FONT,
                            fontSize: 14,
                            color: C.subtle,
                        }}
                    >
                        Or reach us directly at{" "}
                        <a
                            href="mailto:umairjz@gmail.com"
                            style={{
                                color: C.accent,
                                textDecoration: "none",
                                fontWeight: 500,
                            }}
                        >
                            umairjz@gmail.com
                        </a>
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}

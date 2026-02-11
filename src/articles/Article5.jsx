// Article 5: AI Building Code Compliance: How to Catch Issues Before Permitting

const FONT = `'General Sans', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif`;
const HEADING = `'Outfit', 'Nunito', 'SF Pro Rounded', sans-serif`;
const C = { text: "#1A1A1A", muted: "#6B6B6B", subtle: "#A0A0A0", border: "#E8E8E4", accent: "#2D5BFF", accentSoft: "rgba(45,91,255,0.06)", surface: "#FFFFFF" };

const h2Style = { fontFamily: HEADING, fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", color: C.text, lineHeight: 1.2, margin: "48px 0 16px" };
const h3Style = { fontFamily: HEADING, fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em", color: C.text, lineHeight: 1.25, margin: "32px 0 12px" };
const pStyle = { fontFamily: FONT, fontSize: 16, fontWeight: 400, color: C.muted, lineHeight: 1.75, letterSpacing: "-0.01em", margin: "0 0 20px" };
const liStyle = { fontFamily: FONT, fontSize: 15, color: C.muted, lineHeight: 1.7, marginBottom: 8 };
const strongStyle = { color: C.text, fontWeight: 600 };

export default function Article5() {
    return (
        <div>
            <p style={pStyle}>
                Building code compliance is one of the most critical — and most stressful — aspects of any construction project. A code violation discovered during plan review or inspection can mean costly redesigns, construction delays, additional permit fees, and in worst cases, project shutdowns. Yet the traditional approach to code compliance is remarkably manual: architects and engineers review drawings against thick code books, hoping to catch every issue before submission.
            </p>
            <p style={pStyle}>
                AI is now offering a better way. Automated code compliance checking uses artificial intelligence to review construction plans against building codes, flagging potential violations before you ever submit for a permit. Here is how it works and why it is transforming the permitting process.
            </p>

            <h2 style={h2Style}>The Problem with Traditional Code Review</h2>
            <p style={pStyle}>
                Building codes are extraordinarily complex. The International Building Code (IBC), International Residential Code (IRC), and their local amendments contain thousands of requirements covering everything from egress widths and stairway dimensions to ventilation rates and structural load paths. No single professional can memorize every provision.
            </p>
            <p style={pStyle}>
                The traditional code review process has several inherent weaknesses:
            </p>
            <ul style={{ margin: "0 0 24px 20px", padding: 0 }}>
                <li style={liStyle}><span style={strongStyle}>Human attention limits:</span> reviewers can miss issues, especially in complex or large plan sets</li>
                <li style={liStyle}><span style={strongStyle}>Inconsistency:</span> different reviewers may interpret the same code provision differently</li>
                <li style={liStyle}><span style={strongStyle}>Time-consuming:</span> thorough manual review adds days or weeks to the pre-submission timeline</li>
                <li style={liStyle}><span style={strongStyle}>Costly iteration:</span> each round of corrections after a failed plan check costs time and money</li>
                <li style={liStyle}><span style={strongStyle}>Knowledge gaps:</span> code requirements change frequently, and staff may not be current on all amendments</li>
            </ul>

            <h2 style={h2Style}>How AI Code Compliance Checking Works</h2>
            <p style={pStyle}>
                AI-powered code compliance systems combine the blueprint reading capabilities of computer vision with a structured knowledge base of building code requirements. The process works in three stages:
            </p>

            <h3 style={h3Style}>Stage 1: Plan Analysis</h3>
            <p style={pStyle}>
                The AI reads and interprets the construction drawings using computer vision, identifying rooms, openings, structural elements, mechanical systems, and other features — just as it would for a material takeoff. This creates a digital representation of the proposed building that can be checked against code requirements.
            </p>

            <h3 style={h3Style}>Stage 2: Rule Application</h3>
            <p style={pStyle}>
                The system then applies relevant code provisions to the identified elements. For example:
            </p>
            <ul style={{ margin: "0 0 24px 20px", padding: 0 }}>
                <li style={liStyle}>Are bedroom windows large enough to serve as emergency egress? (IRC R310.1)</li>
                <li style={liStyle}>Do corridor widths meet minimum requirements? (IBC 1005.1)</li>
                <li style={liStyle}>Are smoke detectors placed in required locations? (IRC R314.3)</li>
                <li style={liStyle}>Does bathroom ventilation meet code? (IMC 403.3)</li>
                <li style={liStyle}>Are stairway dimensions within acceptable ranges?</li>
                <li style={liStyle}>Do handrail heights and configurations comply?</li>
            </ul>

            <h3 style={h3Style}>Stage 3: Issue Reporting</h3>
            <p style={pStyle}>
                Any potential violations are flagged with clear, contextual information — the specific code section, the requirement, the measured value, and the location on the drawing. This gives designers actionable feedback they can use to make corrections immediately, before submission.
            </p>

            <h2 style={h2Style}>Real-World Impact: 95% First-Pass Approval</h2>
            <p style={pStyle}>
                The most compelling metric for AI code compliance checking is first-pass permit approval rate. Contractors using platforms like Bildrix report 95% first-pass approval rates — a dramatic improvement over the industry average, where multiple rounds of review and correction are common.
            </p>
            <p style={pStyle}>
                The financial impact is significant. Each failed plan check typically costs:
            </p>
            <ul style={{ margin: "0 0 24px 20px", padding: 0 }}>
                <li style={liStyle}><span style={strongStyle}>Direct costs:</span> re-review fees, additional permit application fees, revised drawing preparation</li>
                <li style={liStyle}><span style={strongStyle}>Delay costs:</span> every week of permitting delay costs the project in carrying costs, material price changes, and lost opportunity</li>
                <li style={liStyle}><span style={strongStyle}>Rework costs:</span> changes made after construction begins are 5–10× more expensive than changes on paper</li>
            </ul>

            <h2 style={h2Style}>Common Code Issues Caught by AI</h2>
            <p style={pStyle}>
                AI code compliance systems are particularly effective at catching common, easily-missed violations:
            </p>
            <ul style={{ margin: "0 0 24px 20px", padding: 0 }}>
                <li style={liStyle}><span style={strongStyle}>Egress and life safety:</span> window sizes, corridor widths, exit distances, door swing directions</li>
                <li style={liStyle}><span style={strongStyle}>Ventilation and air quality:</span> exhaust fan requirements, natural ventilation calculations, makeup air</li>
                <li style={liStyle}><span style={strongStyle}>Fire protection:</span> smoke detector placement, fire separation distances, fire-rated assemblies</li>
                <li style={liStyle}><span style={strongStyle}>Accessibility:</span> door widths, approach clearances, turning radii, grab bar requirements</li>
                <li style={liStyle}><span style={strongStyle}>Structural fundamentals:</span> bearing wall locations, header sizes, foundation requirements</li>
            </ul>

            <h2 style={h2Style}>Integrating Compliance into Your Workflow</h2>
            <p style={pStyle}>
                The greatest advantage of AI code compliance checking is that it can be integrated directly into the estimation and takeoff workflow. Instead of treating code review as a separate step that happens weeks after drawings are complete, contractors can check compliance as part of their standard takeoff process.
            </p>
            <p style={pStyle}>
                With Bildrix, code compliance checking happens automatically when blueprints are uploaded. Material takeoffs, cost estimates, and code compliance reports are generated simultaneously — giving contractors a complete picture of project feasibility from the moment they receive drawings.
            </p>

            <h2 style={h2Style}>Looking Forward</h2>
            <p style={pStyle}>
                As AI code compliance technology matures, its scope will expand. Future systems will handle more complex provisions, integrate with local jurisdiction-specific amendments, and provide automated code compliance documentation for permit applications.
            </p>
            <p style={pStyle}>
                For contractors today, the message is clear: catching code issues on paper costs a fraction of catching them on the jobsite. AI makes comprehensive pre-submission code review fast, affordable, and reliable. The question is not whether to use AI for code compliance — it is how much money you will save when you do.
            </p>
        </div>
    );
}

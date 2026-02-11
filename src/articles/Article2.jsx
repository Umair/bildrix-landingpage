// Article 2: How AI Reads Construction Blueprints: Computer Vision for Contractors

const FONT = `'General Sans', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif`;
const HEADING = `'Outfit', 'Nunito', 'SF Pro Rounded', sans-serif`;
const C = { text: "#1A1A1A", muted: "#6B6B6B", subtle: "#A0A0A0", border: "#E8E8E4", accent: "#2D5BFF", accentSoft: "rgba(45,91,255,0.06)", surface: "#FFFFFF" };

const h2Style = { fontFamily: HEADING, fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", color: C.text, lineHeight: 1.2, margin: "48px 0 16px" };
const h3Style = { fontFamily: HEADING, fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em", color: C.text, lineHeight: 1.25, margin: "32px 0 12px" };
const pStyle = { fontFamily: FONT, fontSize: 16, fontWeight: 400, color: C.muted, lineHeight: 1.75, letterSpacing: "-0.01em", margin: "0 0 20px" };
const liStyle = { fontFamily: FONT, fontSize: 15, color: C.muted, lineHeight: 1.7, marginBottom: 8 };
const strongStyle = { color: C.text, fontWeight: 600 };

export default function Article2() {
    return (
        <div>
            <p style={pStyle}>
                Construction blueprints are complex visual documents packed with information — architectural symbols, dimension lines, material callouts, scale markers, room labels, and intricate drawings that have evolved over centuries of building practice. For generations, interpreting these documents has been an exclusively human skill, requiring years of training and experience.
            </p>
            <p style={pStyle}>
                That is changing. Computer vision — the branch of artificial intelligence that enables machines to interpret visual information — is now sophisticated enough to read construction blueprints with remarkable accuracy. Here is how it works, and why it matters for every contractor in 2026.
            </p>

            <h2 style={h2Style}>What Is Computer Vision?</h2>
            <p style={pStyle}>
                Computer vision is a field of AI that trains software systems to interpret and understand visual information from the world — images, videos, documents, and more. In the construction context, computer vision systems are trained specifically on architectural and engineering drawings, learning to recognize the visual language of blueprints.
            </p>
            <p style={pStyle}>
                Unlike simple image recognition that might identify "a building" in a photograph, construction-focused computer vision understands the semantic meaning of blueprint elements. It knows that a specific symbol represents a door, that parallel lines indicate a wall, and that the numbers next to dimension arrows represent measurements in specific units.
            </p>

            <h2 style={h2Style}>How Blueprint Reading AI Works</h2>

            <h3 style={h3Style}>Step 1: Document Ingestion and Preprocessing</h3>
            <p style={pStyle}>
                When a blueprint is uploaded — whether as a PDF, DWG file, or scanned image — the AI first preprocesses the document. This includes normalizing the resolution, correcting for any skew or rotation, identifying page boundaries in multi-page documents, and converting the input into a format the neural network can process.
            </p>

            <h3 style={h3Style}>Step 2: Feature Detection and Extraction</h3>
            <p style={pStyle}>
                The computer vision model then scans the entire document, identifying distinct features. Deep learning models trained on thousands of construction documents have learned to detect:
            </p>
            <ul style={{ margin: "0 0 24px 20px", padding: 0 }}>
                <li style={liStyle}><span style={strongStyle}>Walls and partitions:</span> including their thickness, composition, and relationships</li>
                <li style={liStyle}><span style={strongStyle}>Openings:</span> doors, windows, and other penetrations — along with their sizes and swing directions</li>
                <li style={liStyle}><span style={strongStyle}>Room boundaries:</span> enclosed spaces are identified and classified (bedroom, kitchen, bathroom, etc.)</li>
                <li style={liStyle}><span style={strongStyle}>Dimensions and measurements:</span> size callouts, level indicators, and spatial relationships</li>
                <li style={liStyle}><span style={strongStyle}>Fixtures and appliances:</span> plumbing fixtures, electrical outlets, HVAC components, and more</li>
                <li style={liStyle}><span style={strongStyle}>Structural elements:</span> columns, beams, foundations, and load-bearing indicators</li>
            </ul>

            <h3 style={h3Style}>Step 3: Scale Calibration</h3>
            <p style={pStyle}>
                One of the most critical steps is determining the drawing scale. The AI looks for scale bars, dimension reference lines, and explicit scale notations (e.g., 1/4" = 1'-0") to calibrate all measurements. Platforms like Bildrix handle this automatically, eliminating one of the most common sources of error in manual takeoffs where an estimator might accidentally use the wrong scale.
            </p>

            <h3 style={h3Style}>Step 4: Semantic Understanding</h3>
            <p style={pStyle}>
                Beyond simply detecting objects, the AI builds a semantic understanding of the drawing. It understands that two parallel lines with hatch marks represent a specific wall type. It knows that the arrangement of fixtures in a room likely indicates a bathroom versus a kitchen. This contextual intelligence is what separates true AI blueprint reading from basic image processing.
            </p>

            <h3 style={h3Style}>Step 5: Quantity Extraction and Measurement</h3>
            <p style={pStyle}>
                With all elements identified and the scale calibrated, the AI calculates precise measurements: room areas in square feet, wall lengths in linear feet, perimeters, door and window counts, fixture quantities, and more. These quantities form the foundation of the material takeoff.
            </p>

            <h2 style={h2Style}>Accuracy: How Good Is AI at Reading Blueprints?</h2>
            <p style={pStyle}>
                Modern AI blueprint reading systems achieve 98% accuracy on standard construction drawings. This is comparable to — and in many cases exceeds — the accuracy of experienced human estimators, especially on complex or large-scale projects where fatigue and attention lapses become factors.
            </p>
            <p style={pStyle}>
                It is worth noting that accuracy improves with each generation of AI models. As more blueprints are processed, the system learns from more examples and edge cases, continually improving its recognition capabilities. Drawings that might have challenged early AI systems — unusual symbols, hand-drawn plans, legacy CAD formats — are increasingly handled with high confidence.
            </p>

            <h2 style={h2Style}>What Does This Mean for Contractors?</h2>
            <p style={pStyle}>
                For contractors, the practical implications are significant:
            </p>
            <ul style={{ margin: "0 0 24px 20px", padding: 0 }}>
                <li style={liStyle}><span style={strongStyle}>Faster bid turnaround:</span> process blueprints in minutes, not hours — bid on more projects</li>
                <li style={liStyle}><span style={strongStyle}>Reduced labor costs:</span> estimators can focus on strategy and client relationships instead of manual measuring</li>
                <li style={liStyle}><span style={strongStyle}>Fewer errors:</span> eliminate common mistakes like wrong scale, missed rooms, or miscounted openings</li>
                <li style={liStyle}><span style={strongStyle}>Better proposals:</span> fast, accurate takeoffs lead to more competitive and professional bids</li>
                <li style={liStyle}><span style={strongStyle}>Scalability:</span> handle more projects simultaneously without adding headcount</li>
            </ul>

            <h2 style={h2Style}>The Future of Blueprint Intelligence</h2>
            <p style={pStyle}>
                Computer vision for construction is still in its early days, and the trajectory is clear: AI will become an indispensable tool for every contractor. Future developments will include real-time collaboration on AI-analyzed drawings, integration with BIM models, and AI assistants that can answer natural language questions about plans ("How many exterior doors are on the north elevation?").
            </p>
            <p style={pStyle}>
                Bildrix is at the forefront of this revolution, offering a platform where contractors can upload any blueprint and receive a complete, verified takeoff in seconds. The technology is here, it works, and it is ready for production use today.
            </p>
        </div>
    );
}

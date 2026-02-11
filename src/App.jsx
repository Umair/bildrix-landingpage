import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Bildrix from "../bildrix.jsx";
import ArticlePage from "./ArticlePage.jsx";
import AboutPage from "./AboutPage.jsx";
import ContactPage from "./ContactPage.jsx";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Bildrix />} />
                <Route path="/blog/:slug" element={<ArticlePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Analytics />
        </>
    );
}

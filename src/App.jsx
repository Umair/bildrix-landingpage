import { Routes, Route } from "react-router-dom";
import Bildrix from "../bildrix.jsx";
import ArticlePage from "./ArticlePage.jsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Bildrix />} />
            <Route path="/blog/:slug" element={<ArticlePage />} />
        </Routes>
    );
}

import React from "react";
import App from './App';
import SkillsPage from "./Components/SkillsPage";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import NftsPage from "./Components/Nfts";
import { Route, Routes, BrowserRouter } from 'react-router-dom';



function Router() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<App />} />
                    <Route exact path="/education" element={<Education />} />
                    <Route exact path="/skills" element={<SkillsPage />} />
                    <Route exact path="/contact-me" element={<Contact />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/nft-collections" element={<NftsPage />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}


export default Router;
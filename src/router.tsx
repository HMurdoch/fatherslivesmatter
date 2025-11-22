import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import DepartmentsIndex from "./pages/Departments/DepartmentsIndex";
import LegalAdvocacy from "./pages/Departments/LegalAdvocacy";
import SocialServices from "./pages/Departments/SocialServices";
import Psychology from "./pages/Departments/Psychology";
import WorkplaceHR from "./pages/Departments/WorkplaceHR";
import Investigations from "./pages/Departments/Investigations";
import ITResearch from "./pages/Departments/ITResearch";
import MediaPR from "./pages/Departments/MediaPR";
import ArticlesIndex from "./pages/Articles/ArticlesIndex";
import ArticleView from "./pages/Articles/ArticleView";
import SuccessStories from "./pages/SuccessStories";
import Resources from "./pages/Resources";
import Gallery from "./pages/Gallery";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";

const AppRouter: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                <Route path="/departments" element={<DepartmentsIndex />} />
                <Route path="/departments/legal-advocacy" element={<LegalAdvocacy />} />
                <Route path="/departments/social-services" element={<SocialServices />} />
                <Route path="/departments/psychology" element={<Psychology />} />
                <Route path="/departments/workplace-hr" element={<WorkplaceHR />} />
                <Route path="/departments/investigations" element={<Investigations />} />
                <Route path="/departments/it-research" element={<ITResearch />} />
                <Route path="/departments/media-pr" element={<MediaPR />} />

                <Route path="/articles" element={<ArticlesIndex />} />
                <Route path="/articles/:slug" element={<ArticleView />} />

                <Route path="/success-stories" element={<SuccessStories />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/get-involved" element={<GetInvolved />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default AppRouter;

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import DiocesePage from "./pages/DiocesePage";
import MetropolitanPage from "./pages/MetropolitanPage";
import LeadershipMain from "./pages/LeadershipMain";
import FormerMetroPage from "./pages/FormerMetroPage";
import PriestDirectoryPage from "./pages/PriestDirectoryPage";

import ProjectsMain from "./pages/ProjectsMain";
import ReportsPage from "./pages/ReportsPage";
import PrayerGroupPage from "./pages/PrayerGroupPage";

import MarthaVanithaPage from "./pages/MarthaVanithaPage";
import YouthMovementPage from "./pages/YouthMovementPage";
import SundaySchoolPage from "./pages/SundaySchoolPage";
import BalasamajamPage from "./pages/BalasamajamPage";
import MGOCSMPage from "./pages/MGOCSMPage";
import AMOSSPage from "./pages/AMOSSPage";
import "./responsive.css";

import ContactPage from "./pages/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-diocese" element={<DiocesePage />} />
        <Route path="/metropolitan" element={<MetropolitanPage />} />
        <Route path="/leadership" element={<LeadershipMain />} />
        <Route path="/former-metropolitans" element={<FormerMetroPage />} />
        <Route path="/priest-directory" element={<PriestDirectoryPage />} />

        <Route path="/projects" element={<ProjectsMain />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/prayer-group" element={<PrayerGroupPage />} />

        <Route
          path="/martha-mariam-vanitha-samajam"
          element={<MarthaVanithaPage />}
        />

        <Route
          path="/youth-movement"
          element={<YouthMovementPage />}
        />

        <Route
          path="/sunday-school"
          element={<SundaySchoolPage />}
        />

        <Route
          path="/balasamajam"
          element={<BalasamajamPage />}
        />

        <Route
          path="/mgocsm"
          element={<MGOCSMPage />}
        />

        <Route
          path="/amoss"
          element={<AMOSSPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />
      </Routes>

      <Footer />
    </>
  );
}
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Home, Phone } from "lucide-react";

// Brand icons not available in lucide-react v1+ — using inline SVGs
const FacebookIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);
const InstagramIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
);
const YoutubeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
);
import "./Navbar.css";
import LatestNews from "./LatestNews";

// Small cross icon for dropdown items
const CrossDot = () => (
    <svg className="dd-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="12" y1="5" x2="12" y2="19"/>
        <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
);

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    // Track scroll for shadow effect
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
        setActiveDropdown(null);
    };

    const toggleDropdown = (name, e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            setActiveDropdown(prev => prev === name ? null : name);
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setActiveDropdown(null);
    };

    return (
        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
            {/* Top crimson accent bar */}
            <div className="navbar-top-bar" />

            <div className="navbar-container">
                <div className="navbar-top">
                    {/* LOGO */}
                    <Link to="/" className="logo-wrapper" onClick={closeMenu}>
                        <img src="/images/photo1.png" alt="Diocese of Idukki Logo" className="logo" />
                        <div className="logo-text">
                            <span className="logo-text-main">Delhi Orthodox Diocese</span>
                            <span className="logo-text-sub">Malankara Orthodox Syrian Church</span>
                        </div>
                    </Link>

                    {/* DESKTOP RIGHT ICONS */}
                    <div className="right-icons desktop-icons">
                        <a href="#" className="nav-icon-btn" aria-label="Facebook">
                            <FacebookIcon />
                        </a>
                        <a href="#" className="nav-icon-btn" aria-label="Instagram">
                            <InstagramIcon />
                        </a>
                        <a href="#" className="nav-icon-btn" aria-label="YouTube">
                            <YoutubeIcon />
                        </a>
                        <Link to="/contact" className="nav-contact-btn" onClick={closeMenu}>
                            <Phone size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
                            Contact Us
                        </Link>
                        <img src="/images/photo2.png" alt="Extra Photo" style={{ height: '40px', marginLeft: '15px', borderRadius: '4px' }} />
                    </div>

                    {/* MOBILE TOGGLE */}
                    <div className="mobile-menu" onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </div>
                </div>

                <div className="navbar-bottom">
                    {/* MAIN NAV */}
                    <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                        <Link to="/" className="nav-link active-link" onClick={closeMenu}>
                            <Home size={13} /> Home
                        </Link>
                        <Link to="/about-diocese" className="nav-link" onClick={closeMenu}>
                            About
                        </Link>
                        <Link to="/administration" className="nav-link" onClick={closeMenu}>
                            Administration
                        </Link>
                        <Link to="/church-administration" className="nav-link" onClick={closeMenu}>
                            Church Administration
                        </Link>
                        <Link to="/award" className="nav-link" onClick={closeMenu}>
                            Dr. Paulos Mar Gregorios Award
                        </Link>
                        <Link to="/spiritual-organizations" className="nav-link" onClick={closeMenu}>
                            Spiritual Organizations
                        </Link>
                        <Link to="/directory" className="nav-link" onClick={closeMenu}>
                            Directory
                        </Link>
                        <Link to="/calendars" className="nav-link" onClick={closeMenu}>
                            Calendars
                        </Link>
                        <Link to="/gallery" className="nav-link" onClick={closeMenu}>
                            Gallery
                        </Link>
                        <Link to="/contact" className="nav-link" onClick={closeMenu}>
                            Contact
                        </Link>
                        <Link to="/docib-studios" className="nav-link" onClick={closeMenu}>
                            DOCIB Studios
                        </Link>

                        {/* MOBILE SOCIAL ICONS */}
                        <div className="mobile-social-icons">
                            <a href="#" className="nav-icon-btn" aria-label="Facebook">
                                <FacebookIcon />
                            </a>
                            <a href="#" className="nav-icon-btn" aria-label="Instagram">
                                <InstagramIcon />
                            </a>
                            <a href="#" className="nav-icon-btn" aria-label="YouTube">
                                <YoutubeIcon />
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
            <LatestNews />
        </header>
    );
}
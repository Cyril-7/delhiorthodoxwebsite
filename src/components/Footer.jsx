import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

// Brand icons not in lucide-react v1+
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
import "./Footer.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            {/* Gold top bar */}
            <div className="footer-gold-bar" />

            <div className="footer-main">
                <div className="footer-container">

                    {/* COL 1: Brand */}
                    <div className="footer-brand">
                        <div className="footer-logo-wrap">
                            <img src="/images/logo.png" alt="Delhi Orthodox Diocese" className="footer-logo" />
                            <div>
                                <p className="footer-logo-name">Delhi Orthodox Diocese</p>
                                <p className="footer-logo-sub">Malankara Orthodox Syrian Church</p>
                            </div>
                        </div>
                        <p className="footer-tagline">
                            Walking in faith, following the footsteps of St. Thomas in the
                            heart of the nation since 1975.
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="footer-social" aria-label="Facebook"><FacebookIcon /></a>
                            <a href="#" className="footer-social" aria-label="Instagram"><InstagramIcon /></a>
                            <a href="#" className="footer-social" aria-label="YouTube"><YoutubeIcon /></a>
                        </div>
                    </div>

                    {/* COL 2: Diocese Links */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Diocese</h4>
                        <ul className="footer-links">
                            <li><Link to="/about-diocese"><ArrowRight size={12} /> About Our Diocese</Link></li>
                            <li><Link to="/metropolitan"><ArrowRight size={12} /> Metropolitan</Link></li>
                            <li><Link to="/leadership"><ArrowRight size={12} /> Leadership</Link></li>
                            <li><Link to="/former-metropolitans"><ArrowRight size={12} /> Former Metropolitans</Link></li>
                            <li><Link to="/priest-directory"><ArrowRight size={12} /> Priest Directory</Link></li>
                        </ul>
                    </div>

                    {/* COL 3: Ministries */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Ministries</h4>
                        <ul className="footer-links">
                            <li><Link to="/prayer-group"><ArrowRight size={12} /> Prayer Group</Link></li>
                            <li><Link to="/martha-mariam-vanitha-samajam"><ArrowRight size={12} /> Martha Mariam Vanitha Samajam</Link></li>
                            <li><Link to="/youth-movement"><ArrowRight size={12} /> Youth Movement</Link></li>
                            <li><Link to="/sunday-school"><ArrowRight size={12} /> Sunday School</Link></li>
                            <li><Link to="/mgocsm"><ArrowRight size={12} /> MGOCSM</Link></li>
                        </ul>
                    </div>

                    {/* COL 4: Contact */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">Contact</h4>
                        <ul className="footer-contact-list">
                            <li>
                                <MapPin size={15} className="footer-contact-icon" />
                                <span>
                                    2, Institutional Area,<br />
                                    Tughlaqabad,<br />
                                    New Delhi – 110 062
                                </span>
                            </li>
                            <li>
                                <Phone size={15} className="footer-contact-icon" />
                                <div>
                                    <a href="tel:01129956417">011-29956417</a><br />
                                    <a href="tel:01129962799">011-29962799</a>
                                </div>
                            </li>
                            <li>
                                <Mail size={15} className="footer-contact-icon" />
                                <a href="mailto:info@delhiorthodoxdiocese.org">info@delhiorthodoxdiocese.org</a>
                            </li>
                        </ul>
                        <Link to="/contact" className="footer-contact-btn">
                            Get in Touch <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <div className="footer-bottom-inner">
                    <p className="footer-copy">
                        © {currentYear} Delhi Orthodox Diocese · Malankara Orthodox Syrian Church · All rights reserved.
                    </p>
                    <p className="footer-faith">
                        <span className="footer-cross">✝</span>
                        Walking in Faith and Service
                        <span className="footer-cross">✝</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
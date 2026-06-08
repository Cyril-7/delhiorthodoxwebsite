import "./ContactPage.css";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section className="contact-hero">
                <h1>Contact Us</h1>
            </section>

            {/* Contact Section */}
            <section className="contact-main">
                <div className="contact-container">

                    {/* Left: Info */}
                    <div className="contact-info fade-in-left">
                        <div className="contact-info-header">
                            <h2 className="contact-info-title">Stay in Touch</h2>
                            <p className="contact-info-subtitle">
                                We would love to hear from you. Reach out to us anytime.
                            </p>
                        </div>

                        <div className="info-blocks">
                            <div className="info-block">
                                <div className="info-block-icon">
                                    <MapPin size={20} />
                                </div>
                                <div className="info-block-content">
                                    <h3>Address</h3>
                                    <p>
                                        The Delhi Orthodox Centre,<br />
                                        2, Institutional Area, Tughlaqabad,<br />
                                        New Delhi – 110 062
                                    </p>
                                </div>
                            </div>

                            <div className="info-block">
                                <div className="info-block-icon">
                                    <Mail size={20} />
                                </div>
                                <div className="info-block-content">
                                    <h3>Email</h3>
                                    <a href="mailto:info@delhiorthodoxdiocese.org">info@delhiorthodoxdiocese.org</a>
                                </div>
                            </div>

                            <div className="info-block">
                                <div className="info-block-icon">
                                    <Phone size={20} />
                                </div>
                                <div className="info-block-content">
                                    <h3>Phone</h3>
                                    <a href="tel:01129956417">011-29956417</a><br />
                                    <a href="tel:01129962799" style={{marginTop: '4px', display: 'block'}}>011-29962799</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="contact-form-wrap fade-in-right">
                        <h2 className="contact-form-title">Send a Message</h2>
                        <p className="contact-form-sub">
                            Your message will reach us directly. We typically respond within 2–3 business days.
                        </p>

                        <form className="contact-form" onSubmit={e => e.preventDefault()}>
                            <div className="form-group">
                                <label>Name *</label>
                                <div className="name-fields">
                                    <input type="text" placeholder="First name" />
                                    <input type="text" placeholder="Last name" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Email Address *</label>
                                <input type="email" placeholder="you@example.com" />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="+91 XXXXX XXXXX" />
                            </div>

                            <div className="form-group">
                                <label>Message *</label>
                                <textarea rows="6" placeholder="Your message to us…" />
                            </div>

                            <button type="submit" className="contact-submit-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
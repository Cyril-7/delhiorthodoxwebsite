import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./MetroMessage.css";

export default function MetroMessage() {
    return (
        <section className="metro-msg-section">
            <div className="metro-msg-container">

                {/* Left: portrait placeholder */}
                <div className="metro-msg-image-col fade-in-left">
                    <div className="metro-msg-image-wrap">
                        <img
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
                            alt="H.G. Dr. Youhanon Mar Demetrios"
                            className="metro-msg-image"
                        />
                        {/* Gold overlay ribbon */}
                        <div className="metro-msg-ribbon">
                            <span className="metro-msg-ribbon-cross">✝</span>
                            <div>
                                <p className="metro-msg-ribbon-name">H.G. Dr. Youhanon Mar Demetrios</p>
                                <p className="metro-msg-ribbon-title">Metropolitan, Diocese of Delhi</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: message */}
                <div className="metro-msg-text-col fade-in-right">
                    <span className="section-eyebrow">A Word from Our Metropolitan</span>

                    <h2 className="metro-msg-heading">
                        Metropolitan's <span className="metro-msg-heading-gold">Message</span>
                    </h2>

                    <div className="metro-msg-gold-line" />

                    <h3 className="metro-msg-subheading">
                        "Travelling in Life and Travelling Guidelines"
                    </h3>

                    <p className="metro-msg-body">
                        One of the most familiar and appealing similes of life is travel —
                        how our birth points to its starting point and death marking its
                        terminus, but with the anticipation of its ultimate joyful destiny
                        of union with God in heaven.
                    </p>

                    <p className="metro-msg-body">
                        Therefore, it comes as no surprise that the journey of faith is one
                        walked together — as a Diocese, as a community, as one body in Christ.
                        We travel not alone, but guided by His light and upheld by one another.
                    </p>

                    <Link to="/metropolitan" className="btn-primary">
                        Read Full Message <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

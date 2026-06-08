import { leaders } from "../data/data";
import { Link } from "react-router-dom";
import "./Leadership.css";
import { ArrowRight } from "lucide-react";

export default function Leadership() {
    return (
        <section className="leadership-section">
            {/* Background parchment with cross watermark */}
            <div className="leadership-bg" aria-hidden="true" />

            <div className="leadership-container">
                {/* Header */}
                <div className="section-header fade-in">
                    <span className="section-eyebrow">
                        Guiding Lights of the Diocese
                    </span>
                    <h2 className="section-title">
                        Our Spiritual <span>Leadership</span>
                    </h2>
                    <p className="section-subtitle">
                        Led by devoted shepherds who walk in the tradition of the Apostles,
                        guiding the faithful with wisdom and grace.
                    </p>
                </div>

                {/* Leader cards */}
                <div className="leadership-grid">
                    {leaders.map((leader, index) => (
                        <div
                            key={index}
                            className={`leader-card fade-in delay-${index + 1}`}
                        >
                            {/* Image */}
                            <div className="leader-image-wrap">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="leader-image"
                                />
                                <div className="leader-image-overlay" />
                            </div>

                            {/* Card body */}
                            <div className="leader-body">
                                <div className="leader-cross">✝</div>
                                <div className="leader-info">
                                    <h3 className="leader-name">{leader.name}</h3>
                                    <p className="leader-role">{leader.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="leadership-cta fade-in">
                    <Link to="/leadership" className="btn-primary">
                        View Full Leadership <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
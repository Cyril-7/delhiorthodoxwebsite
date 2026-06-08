import MGOCSM from "../components/MGOCSM";
import "../components/Balasamajam.css";

export default function MGOCSMPage() {
    return (
        <div className="balasa-page">
            {/* Hero Section */}
            <section className="balasa-hero">
                <img
                    src="/images/hero-bg.jpg"
                    alt="MGOCSM Hero"
                    className="hero-img"
                />
                <div className="hero-overlay"></div>
                <h1>MGOCSM</h1>
            </section>

            <MGOCSM />
        </div>
    );
}
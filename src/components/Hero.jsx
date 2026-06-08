import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero" aria-label="Hero Banner">
            {/* Full-screen background video */}
            <video
                className="hero-video"
                src="/video/homebannervideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
            />

            {/* Bottom gold bar */}
            <div className="hero-gold-bar" aria-hidden="true" />
        </section>
    );
}
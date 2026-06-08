import { Link } from "react-router-dom";
import { news } from "../data/data";
import "./LatestNews.css";

export default function LatestNews() {
    return (
        <div className="news-ticker" role="region" aria-label="Latest News">
            <span className="news-ticker-label">
                <span className="news-ticker-dot" aria-hidden="true" />
                Latest News
            </span>

            <div className="news-ticker-track-wrap">
                <ul className="news-ticker-track" aria-live="polite">
                    {/* Duplicate for seamless scroll */}
                    {[...news, ...news].map((item, i) => (
                        <li key={i} className="news-ticker-item">
                            <span className="news-ticker-date">{item.date}</span>
                            <span className="news-ticker-sep" aria-hidden="true">–</span>
                            <span className="news-ticker-title">{item.title}</span>
                            <span className="news-ticker-pipe" aria-hidden="true" />
                        </li>
                    ))}
                </ul>
            </div>

            <Link to="/contact" className="news-ticker-cta">
                View All
            </Link>
        </div>
    );
}

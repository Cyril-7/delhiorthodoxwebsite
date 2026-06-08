import { news } from "../data/data";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight, ChevronRight } from "lucide-react";
import "./UpcomingEvents.css";

export default function UpcomingEvents() {
    return (
        <section className="events-section">
            <div className="events-container">

                {/* Header */}
                <div className="events-header fade-in">
                    <span className="section-eyebrow">Diocese Calendar</span>
                    <h2 className="section-title">
                        Upcoming <span>Events</span>
                    </h2>
                </div>

                {/* Events grid */}
                <div className="events-grid">
                    {news.map((item, i) => (
                        <div key={i} className={`event-card fade-in delay-${i + 1}`}>
                            {/* Date badge */}
                            <div className="event-date-badge">
                                <span className="event-date-day">
                                    {item.date.split(" ")[0].replace(/[^\d]/g, "") ||
                                     item.date.match(/\d+/)?.[0]}
                                </span>
                                <span className="event-date-month">
                                    {item.date.includes("November") ? "Nov" :
                                     item.date.includes("December") ? "Dec" :
                                     item.date.split(" ")[1]?.slice(0, 3)}
                                </span>
                                <span className="event-date-year">2025</span>
                            </div>

                            <div className="event-body">
                                {/* Tag */}
                                <span className="event-tag">{item.tag}</span>

                                {/* Title */}
                                <h3 className="event-title">{item.title}</h3>

                                {/* Venue */}
                                <p className="event-venue">
                                    <MapPin size={13} />
                                    {item.venue}
                                </p>

                                {/* Full date */}
                                <p className="event-full-date">
                                    <Calendar size={13} />
                                    {item.date}
                                </p>

                                <Link to="/contact" className="event-link">
                                    Details <ChevronRight size={14} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="events-cta fade-in">
                    <Link to="/contact" className="btn-outline">
                        View Full Calendar <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

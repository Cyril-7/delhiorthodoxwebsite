import { Link } from "react-router-dom";
import "./StorySection.css";
import { ArrowRight, BookOpen } from "lucide-react";

const STATS = [
    { value: "1975", label: "Year Founded" },
    { value: "45+",  label: "Parishes" },
    { value: "25",   label: "Educational Institutions" },
    { value: "13",   label: "Parishes in Delhi" },
];

export default function StorySection() {
    return (
        <section className="story-section">
            <div className="story-container">



                {/* RIGHT: TEXT */}
                <div className="story-text-col fade-in-right">

                    <span className="section-eyebrow">
                        Our Diocese's Story
                    </span>

                    <h2 className="story-heading">
                        The Church in the<br />
                        <em className="story-heading-em">Heart of the Nation</em>
                    </h2>

                    <div className="story-gold-line" />

                    <p className="story-body">
                        The Diocese of Delhi was carved out of the outside Kerala Diocese of the Malankara Orthodox Syrian Church in the year 1975. The Diocese in the National Capital Region had been functioning as the backbone of the Church right from the time of its inception. The Diocese has been blessed in terms of the able leadership it has received time and again and the sincerity of its people, who living away from their homeland, have left no stone unturned in their pursuit of the growth of the Church in the regions where it was never been known.
                    </p>
                    <p className="story-body">
                        The Diocese was first entrusted to the pioneering visionary and a world renowned scholar, the late lamented Dr. Paulos Mar Gregorios, of blessed memory, whose tireless and bold leadership was quintessential in leaving his imprint in the early stages of Church. The growth of the Church, especially in terms of the large number of parishes and institutions, had been the result of Mar Gregorios’ tireless efforts. At present what the Diocese boasts of can be attributed to the great vision of the late lamented Job Mar Philoxenos, the second Metropolitan of the Diocese of Delhi.
                    </p>

                    {/* Scripture quote */}
                    <blockquote className="story-quote">
                        <BookOpen size={18} className="story-quote-icon" />
                        <span>"For where two or three gather in my name, there am I with them."</span>
                        <cite>— Matthew 18:20</cite>
                    </blockquote>

                    <div className="story-ctas">
                        <Link to="/about-diocese" className="btn-primary">
                            Read More <ArrowRight size={16} />
                        </Link>
                        <Link to="/contact" className="btn-outline">
                            Let's Connect
                        </Link>
                    </div>
                </div>
            </div>

            {/* STATS ROW */}
            <div className="story-stats fade-in">
                {STATS.map((stat, i) => (
                    <div key={i} className="story-stat">
                        <span className="story-stat-value">{stat.value}</span>
                        <span className="story-stat-label">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
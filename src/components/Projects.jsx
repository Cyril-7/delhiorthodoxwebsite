import { projects } from "../data/data";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Star, Home, BookOpen, Building2, ChevronRight } from "lucide-react";
import "./Projects.css";

// Map icon names to components
const ICON_MAP = {
    Heart: Heart,
    Star: Star,
    Home: Home,
    BookOpen: BookOpen,
    Building: Building2,
};

export default function Projects() {
    return (
        <section className="projects-section">
            <div className="projects-container">

                {/* Header */}
                <div className="section-header fade-in">
                    <span className="section-eyebrow">Diocesan Initiatives</span>
                    <h2 className="section-title">
                        Diocesan <span>Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        Guided by Christ's teaching of service and love, the Diocese carries out
                        transformative projects that uplift communities across north India.
                    </p>
                </div>

                {/* Projects grid */}
                <div className="projects-grid">
                    {projects.map((project, index) => {
                        const Icon = ICON_MAP[project.icon] || Heart;
                        return (
                            <div
                                key={index}
                                className={`project-card fade-in delay-${(index % 4) + 1}`}
                            >
                                <div className="project-icon-wrap">
                                    <Icon size={22} className="project-icon" />
                                </div>

                                <div className="project-card-text">
                                    <p className="project-subtitle">{project.subtitle}</p>
                                    <h3 className="project-name">{project.name}</h3>
                                    <p className="project-desc">{project.desc}</p>
                                </div>

                                <div className="project-learn">
                                    <span>Read more</span>
                                    <ChevronRight size={14} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="projects-cta fade-in">
                    <Link to="/projects" className="btn-primary">
                        View All Projects <ArrowRight size={16} />
                    </Link>
                    <Link to="/reports" className="btn-outline">
                        Annual Reports
                    </Link>
                </div>
            </div>
        </section>
    );
}
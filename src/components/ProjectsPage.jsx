import "./ProjectsPage.css";

export default function ProjectsPage() {

    const projects = [

        {
            title: "PROJECT HEAL",
            name: "Extending Healing Hands",
            amount: "33.40 L+",
            desc: "Monthly medical aid and support."
        },

        {
            title: "PROJECT FUTURE",
            name: "Igniting Ambitions",
            amount: "53.97 L+",
            desc: "Education support and scholarships."
        },

        {
            title: "PROJECT SHELTER",
            name: "Housing Happiness",
            amount: "30.7 L+",
            desc: "Housing support and family care."
        },

        {
            title: "PROJECT UNITE",
            name: "Cherished Unions",
            amount: "48.75 L+",
            desc: "Marriage and family assistance."
        },

        {
            title: "PROJECT ROOTED",
            name: "Strengthening Roots",
            amount: "1.17 Cr+",
            desc: "Parish and community development."
        },

        {
            title: "PROJECT TOUCH",
            name: "Palliative Care",
            amount: "11.02 L+",
            desc: "Care and support initiatives."
        }

    ]

    return (

        <div className="projects-page">

            <section className="project-hero">

                <img
                    src="/images/building.jpg"
                    className="hero-image"
                    alt=""
                />

                <div className="project-overlay"></div>

                <div className="hero-text">

                    <h1>Overview</h1>

                    <p>
                        Year: May 2022 - Present
                    </p>

                </div>

            </section>


            <section className="projects-container">

                {projects.map((item, index) => (

                    <div
                        className="project-card"
                        key={index}
                    >

                        <div className="project-stat">

                            <h2>{item.amount}</h2>

                            <p>Dedicated</p>

                        </div>

                        <div className="project-info">

                            <h4>{item.title}</h4>

                            <h3>{item.name}</h3>

                            <p>{item.desc}</p>

                        </div>

                    </div>

                ))}

            </section>

        </div>

    )

}
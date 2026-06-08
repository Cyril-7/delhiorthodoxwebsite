import "./FormerMetro.css";

export default function FormerMetro() {

    const leaders = [

        {
            name: "H.G. Mathews Mar Barnabas",
            year: "1982-1992",
            image: "/images/former1.jpg"
        },

        {
            name: "H.G. Mathews Mar Severios",
            year: "1994-2002",
            image: "/images/former2.jpg"
        },

        {
            name: "H.G. Abraham Mar Severios",
            year: "2002-2005",
            image: "/images/former3.jpg"
        },

        {
            name: "H.G. Aughen Mar Dionysius",
            year: "2005-2022",
            image: "/images/former4.jpg"
        }

    ];

    return (

        <div className="former-page">

            {/* HERO */}

            <section className="former-hero">

                <img
                    src="/images/building.jpg"
                    alt=""
                    className="hero-img"
                />

                <div className="hero-overlay"></div>

                <h1>
                    Former Metropolitans
                </h1>

            </section>


            {/* TIMELINE */}

            <section className="former-timeline">

                <div className="center-line"></div>

                {leaders.map((item, index) => (

                    <div
                        key={index}
                        className={`timeline-row ${index % 2 === 0 ? "left" : "right"
                            }`}
                    >

                        <div className="timeline-card">

                            <h2>{item.name}</h2>

                            <img
                                src={item.image}
                                alt=""
                            />

                        </div>

                        <div className="timeline-middle">

                            <div className="circle">

                                ✝

                            </div>

                            <div className="year">

                                {item.year}

                            </div>

                        </div>

                    </div>

                ))}

            </section>

        </div>

    )

}
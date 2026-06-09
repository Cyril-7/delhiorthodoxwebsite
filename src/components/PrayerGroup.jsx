import "./PrayerGroup.css";

export default function PrayerGroup() {

    const officers = [

        {
            name: "Fr. Thomas",
            role: "President",
            image: "/images/person1.jpg"
        },

        {
            name: "Fr. George",
            role: "Secretary",
            image: "/images/person2.jpg"
        },

        {
            name: "Fr. Joseph",
            role: "Treasurer",
            image: "/images/person3.jpg"
        }

    ];

    return (

        <div className="prayer-page">

            {/* HERO */}

            <section className="prayer-hero">

                <img
                    src="/images/building.jpg"
                    alt=""
                    className="hero-image"
                />

                <div className="overlay"></div>

                <h1>
                    Prayer Group
                </h1>

            </section>


            {/* CONTENT */}

            <section className="prayer-content">

                <div className="left-content">

                    <img
                        src="/images/photo1.png"
                        alt=""
                        className="logo"
                    />

                    <h2>
                        Prayer Group: Strengthening Faith and Community Bonds
                    </h2>

                    <p>

                        The Akhila Malankara Prayer Group Association
                        serves as a spiritual entity focused on prayer,
                        love and fellowship.

                    </p>

                    <ul>

                        <li>20–30 family members participation</li>

                        <li>Weekly prayer meetings</li>

                        <li>Quarterly common meetings</li>

                        <li>Annual diocesan meeting</li>

                    </ul>

                </div>


                <div className="right-content">

                    <img
                        src="/images/prayer1.jpg"
                        alt=""
                    />

                    <img
                        src="/images/prayer2.jpg"
                        alt=""
                    />

                </div>

            </section>


            {/* OFFICE BEARERS */}

            <section className="officers">

                <h2>
                    Office Bearers
                </h2>

                <div className="officer-grid">

                    {officers.map((item, index) => (

                        <div
                            className="officer-card"
                            key={index}
                        >

                            <img
                                src={item.image}
                                alt=""
                            />

                            <h3>{item.name}</h3>

                            <p>{item.role}</p>

                        </div>

                    ))}

                </div>

            </section>

        </div>

    )

}
import "./LeadershipPage.css";

export default function LeadershipPage() {

    const members = [
        {
            name: "Fr. Example Name",
            role: "Diocesan Secretary",
            image: "/images/person1.jpg"
        },
        {
            name: "Fr. Example Name",
            role: "Council Member",
            image: "/images/person2.jpg"
        },
        {
            name: "Fr. Example Name",
            role: "Council Member",
            image: "/images/person3.jpg"
        },
        {
            name: "Fr. Example Name",
            role: "Council Member",
            image: "/images/person4.jpg"
        },
        {
            name: "Fr. Example Name",
            role: "Council Member",
            image: "/images/person5.jpg"
        },
        {
            name: "Fr. Example Name",
            role: "Council Member",
            image: "/images/person6.jpg"
        }
    ];

    return (

        <div className="leadership-page">

            <section className="leadership-hero">

                <img
                    src="/images/building.jpg"
                    alt=""
                    className="hero-bg"
                />

                <div className="overlay"></div>

                <h1>Leadership</h1>

            </section>


            <section className="leadership-content">

                <h2>Diocesan Council 2022-27</h2>

                <p className="lead-desc">
                    The Diocesan Council is composed of priests and lay members,
                    elected by the Diocesan Assembly.
                </p>

                <div className="leader-grid">

                    {members.map((item, index) => (

                        <div className="leader-card" key={index}>

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
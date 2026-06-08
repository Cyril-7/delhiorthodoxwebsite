import "./PriestDirectory.css";

export default function PriestDirectory() {

    const priests = [

        {
            name: "Fr. Thomas",
            image: "/images/priest1.jpg"
        },

        {
            name: "Fr. George",
            image: "/images/priest2.jpg"
        },

        {
            name: "Fr. Mathew",
            image: "/images/priest3.jpg"
        },

        {
            name: "Fr. Joseph",
            image: "/images/priest4.jpg"
        },

        {
            name: "Fr. Abraham",
            image: "/images/priest5.jpg"
        },

        {
            name: "Fr. John",
            image: "/images/priest6.jpg"
        },

        {
            name: "Fr. Paul",
            image: "/images/priest7.jpg"
        },

        {
            name: "Fr. Peter",
            image: "/images/priest8.jpg"
        }

    ];

    return (

        <div className="priest-page">

            <section className="priest-hero">

                <img
                    src="/images/building.jpg"
                    alt=""
                    className="hero-img"
                />

                <div className="hero-overlay"></div>

                <h1>
                    Priest Directories
                </h1>

            </section>


            <section className="priest-section">

                <div className="priest-grid">

                    {priests.map((item, index) => (

                        <div
                            className="priest-card"
                            key={index}
                        >

                            <img
                                src={item.image}
                                alt=""
                            />

                            <h3>
                                {item.name}
                            </h3>

                        </div>

                    ))}

                </div>

            </section>

        </div>

    )

}
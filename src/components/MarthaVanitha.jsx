import "./MarthaVanitha.css";

export default function MarthaVanitha() {

    return (

        <div className="martha-page">

            {/* Hero */}

            <section className="martha-hero">

                <img
                    src="/images/building.jpg"
                    alt=""
                    className="hero-img"
                />

                <div className="hero-overlay"></div>

                <h1>
                    Martha Mariam Vanitha Samajam
                </h1>

            </section>


            {/* Content */}

            <section className="martha-content">

                <div className="martha-left">

                    <img
                        src="/images/mmv-logo.png"
                        alt=""
                        className="logo"
                    />

                    <h2>
                        Marth Mariam Vanitha Samajam:
                        Empowering Women in Faith
                    </h2>

                    <p>

                        Marth Mariam Vanitha Samajam stands as the dedicated Women's wing of the Malankara Orthodox Church of India. It serves as a significant spiritual organization within the Church, unifying and empowering all female members.

                    </p>

                    <div className="motto">

                        <h4>Motto</h4>

                        <p>
                            Prarthikkuka, Pravarthikkuka, Prakashikkuka.
                        </p>

                    </div>


                    <ul>

                        <li>
                            Every Parish has its dedicated unit operating under the central office.
                        </li>

                        <li>
                            Annual diocesan conferences and zonal conferences for community development.
                        </li>

                    </ul>

                    <hr />

                    <div className="office">

                        <h3>
                            Office Bearers
                        </h3>

                        <div className="bearer">

                            <p><b>Vice President:</b></p>

                            <p>Fr. Thomas</p>

                        </div>

                        <div className="bearer">

                            <p><b>Secretary:</b></p>

                            <p>Maria Joseph</p>

                        </div>

                        <div className="bearer">

                            <p><b>Joint Secretary:</b></p>

                            <p>Ancy George</p>

                        </div>

                    </div>

                </div>


                <div className="martha-right">

                    <img
                        src="/images/prayer-women.jpg"
                        alt=""
                        className="side-image"
                    />

                </div>

            </section>

        </div>

    )

}
import "./YouthMovement.css";

export default function YouthMovement() {

    return (

        <div className="youth-page">

            {/* HERO */}

            <section className="youth-hero">

                <img
                    src="/images/building.jpg"
                    alt=""
                    className="hero-img"
                />

                <div className="hero-overlay"></div>

                <h1>
                    Youth Movement
                </h1>

            </section>


            {/* CONTENT */}

            <section className="youth-content">

                <div className="youth-left">

                    <img
                        src="/images/youth-logo.png"
                        alt=""
                        className="logo"
                    />

                    <h2>
                        Youth Movement: Nurturing Tomorrow's Leaders
                    </h2>

                    <p>

                        The Diocesan Orthodox Christian Youth Movement is the vibrant Youth-wing of the Diocese, celebrating 40 years of dynamic leadership and unwavering Christian commitment to both the Church and society at large.

                        Committed to promoting the welfare and advancement of the Church and community, it follows a three-fold path encompassing worship, study, and service.

                        Its mission is to shape the perspectives and aspirations of young minds within the context of contemporary challenges.

                    </p>

                    <ul>

                        <li>
                            Youth Movement units are established in all Parishes affiliated to diocese.
                        </li>

                        <li>
                            Annual diocesan conference provides a platform for spiritual growth and communal bonding.
                        </li>

                        <li>
                            Zonal conferences further strengthen internal federation and faith.
                        </li>

                        <li>
                            The youth actively engage in wellbeing projects, enhancing their positive impact on society.
                        </li>

                    </ul>

                    <hr />

                    <div className="office">

                        <h3>
                            Office Bearers
                        </h3>

                        <p><b>President:</b> Fr. Thomas</p>

                        <p><b>Secretary:</b> John Joseph</p>

                        <p><b>Joint Secretary:</b> Mathew George</p>

                    </div>

                </div>


                <div className="youth-right">

                    <img
                        src="/images/youth1.jpg"
                        className="main-image"
                        alt=""
                    />

                    <div className="small-images">

                        <img
                            src="/images/youth2.jpg"
                            alt=""
                        />

                        <img
                            src="/images/youth3.jpg"
                            alt=""
                        />

                    </div>

                </div>

            </section>

        </div>

    )

}
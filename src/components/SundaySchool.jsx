import "./SundaySchool.css";

export default function SundaySchool() {

    return (

        <div className="sunday-page">

            <section className="sunday-hero">

                <img
                    src="/images/building.jpg"
                    alt=""
                    className="hero-img"
                />

                <div className="hero-overlay"></div>

                <h1>
                    Sunday School
                </h1>

            </section>



            <section className="sunday-content">

                <div className="sunday-left">

                    <img
                        src="/images/sunday-logo.png"
                        alt=""
                        className="logo"
                    />

                    <h2>
                        Sunday School: Cultivating Faith in Little Hearts
                    </h2>

                    <p>

                        The Orthodox Syrian Sunday School Association of the Diocese is a spiritual organization operating within the Diocese.

                        Its primary goal is to foster the spiritual development of children, imparting fundamental knowledge of the Orthodox Christian faith, traditions, and Biblical wisdom.

                        Sunday School teachers play a pivotal role in achieving the objectives of the OSSAE, helping children understand the Christian worldview and the Creator for a fulfilling life.

                    </p>

                    <ul>

                        <li>
                            Classes are conducted every Sunday, providing consistent spiritual education.
                        </li>

                        <li>
                            The Vacation Bible School (OVBS) is an energetic and engaging component of the O.S.S.A.E.
                        </li>

                    </ul>

                    <hr />

                    <div className="office">

                        <h3>
                            Office Bearers
                        </h3>

                        <p><b>Vice President:</b></p>

                        <p><b>Secretary:</b></p>

                        <p><b>Joint Secretary:</b></p>

                    </div>

                </div>



                <div className="sunday-right">

                    <img
                        src="/images/sunday1.jpg"
                        className="main-image"
                        alt=""
                    />

                    <img
                        src="/images/sunday2.jpg"
                        className="bottom-image"
                        alt=""
                    />

                </div>


            </section>

        </div>

    )

}
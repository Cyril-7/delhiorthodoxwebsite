import "./Balasamajam.css";

export default function Balasamajam() {

    return (

        <div className="balasa-page">

            <section className="balasa-hero">

                <img
                    src="/images/building.jpg"
                    alt=""
                    className="hero-img"
                />

                <div className="hero-overlay"></div>

                <h1>
                    Balasamajam
                </h1>

            </section>


            <section className="balasa-content">

                <div className="balasa-left">

                    <img
                        src="/images/balasa-logo.png"
                        alt=""
                        className="logo"
                    />

                    <h2>

                        Balasamajam: Shaping Young Hearts and Minds

                    </h2>

                    <p>

                        AKHILA MALANKARA BALASAMAJAM, the vibrant student wing of the Malankara Orthodox Syrian Church, is devoted to foster the comprehensive personal development of youth within our Church.

                        Its primary mission revolves around worship, study, and virtuous living for boys and girls within the congregation.

                    </p>


                    <ul>

                        <li>

                            In our diocese a familiar structure is maintained, with the President being the Metropolitan, Vice President selected by the Metropolitan, General Secretary and Joint Secretary.

                        </li>

                        <li>

                            Balasamajam actively organizes annual meets, camps, bible study classes, competitions, pilgrimages, tours, humanitarian services and academic counseling.

                        </li>

                    </ul>

                    <hr />

                    <div className="office">

                        <h3>

                            Office Bearers

                        </h3>

                        <p><b>President:</b></p>

                        <p><b>Secretary:</b></p>

                        <p><b>Joint Secretary:</b></p>

                    </div>

                </div>



                <div className="balasa-right">

                    <img
                        src="/images/balasa1.jpg"
                        className="main-image"
                        alt=""
                    />

                    <div className="small-images">

                        <img
                            src="/images/balasa2.jpg"
                            alt=""
                        />

                        <img
                            src="/images/balasa3.jpg"
                            alt=""
                        />

                    </div>

                </div>

            </section>

        </div>

    )

}
import "./Reports.css";

export default function Reports() {

    const reports = [

        "Aug - Nov 2025",
        "April - July 2025",
        "43rd Annual Report of Diocese : 2024-25",
        "Our Initiatives Full Report FY 2024-25",
        "Aug - Nov 2024",
        "April - July 2024",
        "42nd Annual Report of Diocese : 2023-24",
        "Our Initiatives Full Report FY 2023-24",
        "22 AUG - 05 DEC / 23",
        "21 APRIL - 21 AUG / 23"

    ];

    return (

        <div className="reports-page">

            <section className="report-hero">

                <img
                    src="/images/building.jpg"
                    alt=""
                    className="hero-image"
                />

                <div className="report-overlay"></div>

                <h1>
                    Reports
                </h1>

            </section>


            <section className="report-content">

                <div className="report-left">

                    <h2>
                        A Glimpse of the Diocese's Wellbeing Initiatives
                    </h2>

                    <p>

                        Dive into stories of transformation and empowerment.

                    </p>

                    <div className="report-list">

                        {reports.map((item, index) => (

                            <div
                                className="report-item"
                                key={index}
                            >

                                <span>

                                    {item}

                                </span>

                                <span>

                                    +

                                </span>

                            </div>

                        ))}

                    </div>

                </div>


                <div className="report-right">

                    <img
                        src="/images/report-preview.jpg"
                        alt=""
                    />

                </div>

            </section>

        </div>

    )

}
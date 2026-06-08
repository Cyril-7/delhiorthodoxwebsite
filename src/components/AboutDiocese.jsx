import "./AboutDiocese.css";

export default function AboutDiocese() {
    return (
        <div className="about-page">

            {/* HERO */}

            <section className="about-hero">

                <img
                    src="/images/about-hero.jpg"
                    alt="hero"
                    className="hero-image"
                />

                <div className="hero-overlay"></div>

                <div className="hero-content">

                    <div className="about-container">

                        <h1>
                            Our Diocese
                        </h1>

                    </div>

                </div>

            </section>

            {/* AT A GLANCE SECTION */}
            <section className="about-glance">
                <div className="about-container">
                    <div className="glance-header">
                        <span className="section-eyebrow">Quick Facts</span>
                        <h2 className="main-title">Delhi Diocese <span>At a Glance</span></h2>
                    </div>

                    <div className="glance-grid">
                        
                        {/* 1. Key Statistics */}
                        <div className="glance-card stats-card">
                            <h3>Key Statistics</h3>
                            <div className="stats-grid">
                                <div className="stat-item">
                                    <span className="stat-num">1975</span>
                                    <span className="stat-lbl">Constituted</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-num">48</span>
                                    <span className="stat-lbl">Priests</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-num">42</span>
                                    <span className="stat-lbl">Parishes</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-num">30</span>
                                    <span className="stat-lbl">Schools</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-num">5</span>
                                    <span className="stat-lbl">Chapels</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-num">4</span>
                                    <span className="stat-lbl">Congregations</span>
                                </div>
                            </div>
                            <div className="glance-info-row mt-4">
                                <strong>Seminary Students:</strong> 7
                            </div>
                            <div className="glance-info-row">
                                <strong>Geographical Area:</strong>
                                <span>UAE, Delhi & NCR, Punjab, Chandigarh, Haryana, Rajasthan, U.P., M.P., Uttarakhand</span>
                            </div>
                        </div>

                        {/* 2. Leadership & Contact */}
                        <div className="glance-card leadership-card">
                            <h3>Leadership</h3>
                            
                            <div className="contact-person">
                                <strong>Metropolitan</strong>
                                <span>H.G. Dr. Youhanon Mar Demetrios</span>
                                <div className="contact-details">
                                    <a href="tel:+919810791894">+91-9810791894</a> | <a href="mailto:mar.demetrios@gmail.com">mar.demetrios@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-person">
                                <strong>Diocesan Secretary</strong>
                                <span>Rev. Fr. Saji Yohannan</span>
                                <div className="contact-details">
                                    <a href="tel:+91981039775">+91-981039775</a> | <a href="mailto:sajiachen@gmail.com">sajiachen@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-person">
                                <strong>Office Secretary</strong>
                                <span>Rev. Fr. Abin P. Jacob</span>
                                <div className="contact-details">
                                    <a href="tel:+919540265030">+91-9540265030</a> | <a href="mailto:abelstephens@gmail.com">abelstephens@gmail.com</a>
                                </div>
                            </div>

                            <div className="glance-info-row mt-3">
                                <strong>First Metropolitan:</strong> Dr. Paulos Mar Gregorios
                            </div>
                            <div className="glance-info-row">
                                <strong>Second Metropolitan:</strong> Job Mar Philoxenos
                            </div>
                        </div>

                        {/* 3. Institutions & Projects */}
                        <div className="glance-card info-card">
                            <h3>Institutions & Contact</h3>
                            
                            <div className="glance-info-row">
                                <strong>Office Address:</strong>
                                <span>The Delhi Orthodox Centre, 2, Institutional Area, Tughlakabad, New Delhi- 110 062</span>
                                <span className="phone-line">Tel: <a href="tel:01122956417">011-22956417</a></span>
                            </div>

                            <div className="glance-info-row">
                                <strong>Medical Projects:</strong>
                                <span>• St. Mary’s Medical Centre, Aya Nagar</span>
                                <span>• Shantigram Health Centre, Mandawar, Haryana</span>
                                <span>• St. Thomas Clinic, Lajpat Nagar, Ghaziabad</span>
                            </div>

                            <div className="glance-info-row">
                                <strong>Charity Project:</strong>
                                <span>AANCHAL (Centre for Differently Abled Children)</span>
                            </div>

                            <div className="glance-info-row">
                                <strong>Retreat Centre:</strong>
                                <span>Dr. Paulos Mar Gregorios Retreat Centre, Aravalli</span>
                            </div>

                            <div className="glance-info-row">
                                <strong>Publications:</strong>
                                <span>• Prayatna – Quarterly by MGOCSM & Diocese</span>
                                <span>• Youth Vision – Quarterly by Cathedral OCYM</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FULL STORY SECTION */}
            <section className="about-container full-story-section">
                <div className="about-text-content">
                    <h2 className="main-title">
                        The Church in the <span>Heart of the Nation</span>
                    </h2>
                    
                    <p>
                        The Diocese of Delhi was carved out of the outside Kerala Diocese of the Malankara Orthodox Syrian Church in the year 1975. The Diocese in the National Capital Region had been functioning as the backbone of the Church right from the time of its inception. The Diocese has been blessed in terms of the able leadership it has received time and again and the sincerity of its people, who living away from their homeland, have left no stone unturned in their pursuit of the growth of the Church in the regions where it was never been known.
                    </p>
                    <p>
                        The Diocese was first entrusted to the pioneering visionary and a world renowned scholar, the late lamented Dr. Paulos Mar Gregorios, of blessed memory, whose tireless and bold leadership was quintessential in leaving his imprint in the early stages of Church. The growth of the Church, especially in terms of the large number of parishes and institutions, had been the result of Mar Gregorios’ tireless efforts. At present what the Diocese boasts of can be attributed to the great vision of the late lamented Job Mar Philoxenos, the second Metropolitan of the Diocese of Delhi.
                    </p>
                    <p>
                        The Diocese of Delhi is amongst the thirty dioceses of the Malankara Orthodox Syrian Church that spans both India and abroad. The Malankara Orthodox Syrian Church is an autocephalous, autonomous and indigenous church that belongs to the family of Oriental Orthodox churches. It traces its origin to the evangelical activity of St. Thomas, the Apostle of the Lord Jesus Christ in the 1st century (52 AD). The Church is headed by the Catholicos of the East and the Malankara Metropolitan; presently it is His Holiness Baselios Marthoma Paulose II. The Diocese of Delhi is under the spiritual and temporal authority of its current metropolitan, His Grace Dr. Youhanon Mar Demetrios.
                    </p>

                    <h3 className="sub-title">The Diocese of Delhi</h3>
                    <p>
                        The headquarters of the Diocese of Delhi, more often known as the Delhi Diocesan Centre is situated at 2, Institutional Area, Tughlaqabad, New Delhi – 110 062. The Delhi Orthodox Diocesan Council is the society registered by the Delhi Diocese of the Malankara Orthodox Syrian Church in 1979 (Reg. No. 10502 of 1979) under the Societies Registration Act XXI of 1860 with the Registrar of Societies, Delhi. The primary objectives of the Council is to provide and administer the parishes, congregations, monasteries and convents, medical and educational institutions and cater to the welfare of humankind, especially for the upliftment of the poor and the downtrodden by means of various charitable and service-oriented endeavours.
                    </p>
                    <p>
                        The Orthodox Christians have been acknowledged worldwide as a faith community which is centred upon worship, study and service. The contributions rendered by the Church in the field of education, health care, missionary work has always been manifold in terms of leading to an overall upliftment and development of not just the Kerala Christian community but also for the people at large irrespective of the caste, creed, colour and language etc.
                    </p>
                    <p>
                        Once the nucleus of the Orthodox Church in north India was formed in the capital of the country, the growth of parishes in adjacent centres was rapid and the establishment of the Diocese of Delhi followed in a few years. The Diocese of Delhi spans not only the region of Delhi & NCR but is also spread to the different states in north India.
                    </p>
                    <p>
                        Today, there are thirteen parishes in and around Delhi alone – Hauz Khas, Janakpuri, Tughlaqabad, Sarita Vihar, Mayur Vihar-I, Mayur Vihar-III, Rohini, Dwarka, Dilshad Garden, Ghaziabad, Noida, Gurgaon and Faridabad. Overall, there are forty five parishes, spread over major cities in Uttar Pradesh, Rajasthan, Madhya Pradesh, Punjab and Haryana and the United Arab Emirates.
                    </p>
                    <p>
                        There are 25 educational institutions under the Council, which have acclaimed laurels and maintains their reputation not just for the quality education they impart but also in terms of their notable contributions to the nation. A special mention needs to be made regarding “Aanchal”, a centre for the differently abled children at Sector-3, Rohini, which is the embodiment of love in action.
                    </p>
                    <p>
                        The Diocese of Delhi in general and the Council in particular has been doing a commendable job in terms of striving hard towards the fulfilment of its goal of rendering a place of worship and communion for its members and also achieving the service motto of its society. The Society has been remarkable in terms of the marked contributions in the field of education, health care, village upliftment that it provides to the society at large through its educational institutions, rehabilitation centres, children’s home, old-age home, counselling centres and community development programs.
                    </p>

                    <h3 className="sub-title">Mar Philoxenos Centre for Human and Social Development, Shantigram</h3>
                    <p>
                        Mar Philoxenos Centre for Human and Social Development was set up as a consolidated organisation in memory of the late Metropolitan Job Mar Philoxenos who had initiated the developmental projects in Shantigram, Mandawar. Beginning with an integrated social development programme at Mandawar, Sohna Tehsil in Haryana, it is an ambitious project taken up by the Council. This project strives to work among the poor for the rural development of the surrounding village and is established in an area of 20 acres of land consisting of a CBSE affiliated school, a free medical dispensary and a bala bhavan. An old age home and rehabilitation centre have also been proposed for the future. Free health care camps and social awareness programmes are organised on a regular basis.
                    </p>

                    <h3 className="sub-title">St. Dionysius Retreat Centre, Aravalli</h3>
                    <p>
                        The Aravalli Retreat Centre can be seen as the conceptualisation of the long standing dream of the late Metropolitan Dr. Paulos Mar Gregorios, the first bishop of the Diocese of Delhi. This project houses a chapel and a retreat centre. The project responds to the increased depersonalization within the global society due to the stresses brought about by today’s living conditions and the resulting psychological consequences. The project endeavors to provide a secluded area for those seeking solace and tranquility, where people can experience a peaceful environment and attain realization of their inner selves.
                    </p>
                </div>
            </section>

        </div>
    );
}
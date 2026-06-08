import "./Metropolitan.css";

export default function Metropolitan() {
  const timeline = [
    ["August 19, 1978","Birth into Chirathilattu family"],
    ["1991-94","Completed high school at J.M.H.S.S."],
    ["1994-96","Pre-Degree studies at K.G College"],
    ["1996-99","Academic Law degree"],
    ["2001-06","Studied GST"],
    ["2006","Ordained to priesthood"],
    ["Feb 25, 2022","Chosen as Metropolitan"],
    ["June 2, 2022","Granted Ramban status"],
    ["July 28, 2022","Ordained as Metropolitan"],
    ["Nov 3, 2022","Entrusted with leading Diocese"]
  ];

  return (
    <div className="metro-page">

      {/* HERO */}

      <section className="metro-hero">

        <img
          src="/images/building.jpg"
          alt=""
          className="hero-img"
        />

        <div className="hero-overlay"></div>

        <h1>Our Metropolitan</h1>

      </section>

      {/* CONTENT */}

      <section className="metro-content">

        <div className="metro-grid">

          <div>

            <img
              src="/images/metro.png"
              alt=""
              className="metro-img"
            />

          </div>

          <div className="metro-text">

            <h2>H.G. Zachariah Mar Severios</h2>

            <div className="line"></div>

            <p>
              Zachariah Mar Severios is the youngest Metropolitan
              in the Malankara Orthodox Syrian Church.
            </p>

            <p>
              He leads a life of prayer and contemplation
              guided by spiritual leadership.
            </p>

            <p>
              His academic journey started at J.M.H.S.S.,
              followed by Pre-Degree studies.
            </p>

            <p>
              Since Nov 3 2022, he has been entrusted
              with leading the Idukki Diocese.
            </p>

          </div>

        </div>

      </section>

      {/* TIMELINE */}

      <section className="timeline">

        {timeline.map((item,index)=>(

          <div
          className={`timeline-item ${
            index%2===0?"left":"right"
          }`}
          key={index}
          >

            <div className="dot"></div>

            <div className="timeline-card">

              <div className="card-date">{item[0]}</div>
              {item[1]}

            </div>

          </div>

        ))}

      </section>

    </div>
  );
}
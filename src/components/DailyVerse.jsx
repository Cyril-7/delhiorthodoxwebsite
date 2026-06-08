import './DailyVerse.css';

const VERSES = [
    { text: "For where two or three gather in my name, there am I with them.", ref: "Matthew 18:20" },
    { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1" },
    { text: "Trust in the Lord with all your heart and lean not on your own understanding.", ref: "Proverbs 3:5" },
];

// Pick today's verse based on day of year
const todayVerse = VERSES[Math.floor(Date.now() / 86400000) % VERSES.length];

export default function DailyVerse() {
    return (
        <section className="verse-section fade-in">
            <div className="verse-inner">
                {/* Ornament */}
                <div className="verse-ornament">
                    <span className="verse-ornament-line" />
                    <span className="verse-ornament-cross">✝</span>
                    <span className="verse-ornament-line" />
                </div>

                <span className="verse-label">Word of God · Daily Scripture</span>

                <p className="verse-text">{todayVerse.text}</p>

                <p className="verse-reference">{todayVerse.ref}</p>
            </div>
        </section>
    );
}

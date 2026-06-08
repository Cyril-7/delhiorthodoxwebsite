import Hero from "../components/Hero";
import StorySection from "../components/StorySection";
import UpcomingEvents from "../components/UpcomingEvents";
import DailyVerse from "../components/DailyVerse";
import Leadership from "../components/Leadership";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      {/* Auto-sliding hero carousel */}
      <Hero />

      {/* About the Diocese — with stats */}
      <StorySection />

      {/* Leadership — H.H. & H.G. */}
      <Leadership />

      {/* Upcoming Events */}
      <UpcomingEvents />



      {/* Daily Verse / Spiritual Section */}
      <DailyVerse />

      {/* Diocesan Projects */}
      <Projects />
    </>
  );
}
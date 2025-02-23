import AboutUsSection from "@/components/section/about-us-section";
import AchievementsSection from "@/components/section/achievements-section";
import FeatureProgram from "@/components/section/feature-program";
import HeroSection from "@/components/section/hero-section";
import DailyRoutine from "@/components/section/daily-routine-section";
import ContactUs from "@/components/section/contact-us";

export default function page() {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <div id="achievement">
        <AchievementsSection />
      </div>
      <div id="aboutus">
        <AboutUsSection />
      </div>
      <div id="featured-programs">
        <FeatureProgram />
      </div>
      <div id="daily-schedule">
        <DailyRoutine />
      </div>
      <div id="contact-us">
        <ContactUs />
      </div>
    </>
  );
}

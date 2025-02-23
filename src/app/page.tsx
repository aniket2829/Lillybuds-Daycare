import ContactUs from "@/components/home/contact-us-section";
import DailScheduleSection from "@/components/home/daily-schedule-section";
import HeroSection from "@/components/home/hero-section";
import HoursSection from "@/components/home/hours-section";
import OurMissionSection from "@/components/home/our-mission-section";
import QualityStaffSection from "@/components/home/quality-staff-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurMissionSection />
      <HoursSection />
      <DailScheduleSection />
      <QualityStaffSection />
      <ContactUs />
    </div>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import Metrics from "@/components/metrics/Metrics";
import Opportunity from "@/components/partnership/Opportunity";
import Capabilities from "@/components/capabilities/Capabilities";
import Process from "@/components/process/Process";
import TrackRecord from "@/components/track-record/TrackRecord";
import Team from "@/components/team/Team";
import Differentiators from "@/components/differentiators/Differentiators";
import Engagement from "@/components/partnership/Engagement";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-aerospace-black selection:bg-aerospace-cyan/30 text-white font-sans">
      <Navbar />
      
      <Hero />
      <Metrics />
      <Opportunity />
      <Capabilities />
      <Process />
      <TrackRecord />
      <Team />
      <Differentiators />
      <Engagement />
      <Contact />
      
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";
import LatestInsights from "@/components/LatestInsights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <LatestInsights />
      <Contact />
      <Footer />
    </main>
  );
}

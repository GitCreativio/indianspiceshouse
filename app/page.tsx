import Image from "next/image";
import Hero from "../components/hero";
import AboutSection from "../components/aboutSection";
import FeaturedSpices from "../components/featuredSpices";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/cta";
import ContactSection from "@/components/contact";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <FeaturedSpices />
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection/>
      {/* <CTABanner /> */}
    </div>
  );
}

import Header from "./Header";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import ProblemSection from "./ProblemSection";
import SolutionsSection from "./SolutionsSection";
import WhyChoose from "./WhyChoose";
import ToolsIntro from "./ToolsIntro";
import AudienceTabs from "./AudienceTabs";
import AceTeaser from "./AceTeaser";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Testimonials />
      <ProblemSection />
      <SolutionsSection />
      <WhyChoose />
      <ToolsIntro />
      <AudienceTabs />
      <AceTeaser />
      <Footer />
    </>
  );
}

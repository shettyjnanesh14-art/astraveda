import Hero from "@/components/home/Hero";
import ProblemSolution from "@/components/home/ProblemSolution";
import ServicesGrid from "@/components/home/ServicesGrid";
import FeaturedCaseStudies from "@/components/home/FeaturedCaseStudies";
import ProcessTeaser from "@/components/home/ProcessTeaser";
import WhyAstraVeda from "@/components/home/WhyAstraVeda";
import LogosTestimonials from "@/components/home/LogosTestimonials";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <ServicesGrid />
      <FeaturedCaseStudies />
      <ProcessTeaser />
      <WhyAstraVeda />
      <LogosTestimonials />
      <FinalCTA />
    </>
  );
}


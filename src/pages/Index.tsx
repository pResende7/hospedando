import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import DrLucas from "@/components/DrLucas";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-elegant">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Results />
      <Team />
      <DrLucas />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

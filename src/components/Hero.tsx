import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import heroImage from "@/assets/clinica.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'var(--bg-position, center)',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-4 relative z-10">
                       <div className="grid lg:grid-cols-2 gap-12 items-center">
                 {/* Content */}
                 <AnimatedSection animation="slideRight" delay={200}>
                   <div className="space-y-10 lg:col-span-4">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-text-light font-elegant leading-tight">
                Dr. Lucas{" "}
                <span className="text-primary">Barros</span>
              </h1>
              <p className="text-xl text-text-muted font-elegant max-w-2xl">
                Transformamos sorrisos com elegância, sofisticação e os mais avançados tratamentos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="font-elegant text-lg px-10 py-6 hover:animate-pulse-glow flex-1 sm:flex-none"
              >
                Agendar Consulta
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="font-elegant text-lg px-10 py-6 hover:animate-pulse-glow flex-1 sm:flex-none"
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center group hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-primary font-elegant group-hover:animate-glowSEM">
                  500+
                </div>
                <div className="text-text-muted font-elegant">
                  Sorrisos transformados
                </div>
              </div>
              <div className="text-center group hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-primary font-elegant group-hover:animate-glowSEM">
                  15+
                </div>
                <div className="text-text-muted font-elegant">
                  Anos de experiência
                </div>
              </div>
              <div className="text-center group hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-primary font-elegant group-hover:animate-glowSEM">
                  100%
                </div>
                <div className="text-text-muted font-elegant">
                  Satisfação garantida
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

                                       {/* Spacer for 20% right side */}
                 <div className="lg:col-span-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

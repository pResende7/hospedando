import { Button } from "@/components/ui/button";
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
        backgroundPosition: window.innerWidth >= 768 ? '70% 10px' : '87% 10px',
        backgroundRepeat: 'no-repeat'
      }}
    >

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 lg:space-y-10 lg:col-span-4 mt-32 sm:mt-0">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-light font-elegant leading-tight text-center lg:text-left">
                Dr. Lucas{" "}
                <span className="text-primary">Barros</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-text-muted font-elegant max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                Transformamos sorrisos com elegância, sofisticação e os mais avançados tratamentos.
              </p>
            </div>

            <div className="flex flex-row gap-3 sm:gap-4 md:gap-6 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="font-elegant text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 hover:animate-pulse-glow flex-1 sm:flex-none"
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
                className="font-elegant text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 hover:animate-pulse-glow flex-1 sm:flex-none"
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Stats responsivos */}
            <div className="flex flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center lg:justify-start">
              <div className="group text-center lg:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-elegant group-hover:animate-glowSEM">
                  500+
                </div>
                <div className="text-xs sm:text-sm md:text-base text-text-muted font-elegant">
                  Sorrisos transformados
                </div>
              </div>
              <div className="group text-center lg:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-elegant group-hover:animate-glowSEM">
                  15+
                </div>
                <div className="text-xs sm:text-sm md:text-base text-text-muted font-elegant">
                  Anos de experiência
                </div>
              </div>
              <div className="group text-center lg:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary font-elegant group-hover:animate-glowSEM">
                  100%
                </div>
                <div className="text-xs sm:text-sm md:text-base text-text-muted font-elegant">
                  Satisfação garantida
                </div>
              </div>
            </div>
          </div>

          {/* Spacer for 20% right side */}
          <div className="lg:col-span-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

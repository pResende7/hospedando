import { useState } from "react";
import { Menu, X, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 animate-slide-left-to-right">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <Smile className="h-8 w-8 text-primary group-hover:animate-glowSEM transition-all duration-300 rounded-2xl animate-slide-up hover:shadow-electric transition-all duration-500 border border-navy-border "/>
            <span className="text-xl font-bold text-text-light font-elegant">
            Clínica Essence
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-text-light hover:text-primary transition-all duration-300 font-elegant hover:scale-105 relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-text-light hover:text-primary transition-all duration-300 font-elegant hover:scale-105 relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-text-light hover:text-primary transition-all duration-300 font-elegant hover:scale-105 relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("results")}
              className="text-text-light hover:text-primary transition-all duration-300 font-elegant hover:scale-105 relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Resultados
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-text-light hover:text-primary transition-all duration-300 font-elegant hover:scale-105 relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Equipe
            </button>
            <button
              onClick={() => scrollToSection("dr-lucas")}
              className="text-text-light hover:text-primary transition-all duration-300 font-elegant hover:scale-105 relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              Conheça o Dr.
            </button>
            <Button
              variant="luxury"
              onClick={() => scrollToSection("contact")}
              className="font-elegant"
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-text-dark" />
            ) : (
              <Menu className="h-6 w-6 text-text-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b border-border">
              <button
                onClick={() => scrollToSection("dr-lucas")}
                className="block w-full text-left px-3 py-2 text-text-dark hover:text-primary transition-colors duration-300 font-elegant"
              >
                Conheça o Dr.
              </button>
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-text-dark hover:text-primary transition-colors duration-300 font-elegant"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-text-dark hover:text-primary transition-colors duration-300 font-elegant"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-3 py-2 text-text-dark hover:text-primary transition-colors duration-300 font-elegant"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="block w-full text-left px-3 py-2 text-text-dark hover:text-primary transition-colors duration-300 font-elegant"
              >
                Resultados
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="block w-full text-left px-3 py-2 text-text-dark hover:text-primary transition-colors duration-300 font-elegant"
              >
                Equipe
              </button>
              <div className="px-3 py-2">
                <Button
                  variant="luxury"
                  onClick={() => scrollToSection("contact")}
                  className="w-full font-elegant"
                >
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

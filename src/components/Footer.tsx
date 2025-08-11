import {
  MapPin,
  Phone,
  Mail,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoEssence from "@/assets/LogoEssenceSemFundo.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de agendar uma consulta na Essence."
    );
    window.open(`https://wa.me/5569999731490?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-gradient-to-r from-zinc-900 to-zinc-900 text-text-light py-16 border-t border-zinc-700">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 group">
              <img 
                src={logoEssence} 
                alt="Logo Essence" 
                className="h-8 w-8 group-hover:animate-glowSEM" 
              />
              <span className="text-xl font-bold font-elegant ">Essence</span>
            </div>
            <p className="text-gray-300 font-elegant leading-relaxed">
              Transformando sorrisos com elegância, sofisticação e os mais
              avançados tratamentos ortodônticos e estéticos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-elegant">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 font-elegant"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 font-elegant"
                >
                  Sobre a Clínica
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 font-elegant"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 font-elegant"
                >
                  Equipe
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-primary transition-colors duration-300 font-elegant"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-elegant">Nossos Serviços</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 font-elegant">Reabilitações</li>           
              <li className="text-gray-300 font-elegant">Enxertos</li>            
              <li className="text-gray-300 font-elegant">Cirurgias Guiadas</li>           
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-elegant">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-gray-300 font-elegant">
                <p>Av. Gov. Jorge Teixeira, 3137 Embratel</p>
                <p>Porto Velho - RO, 76803-859</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href="tel:+5569999731490"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 font-elegant"
                >
                  (69) 99973-1490
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:lucaslbreaboral@gmail.com"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 font-elegant"
                >
                  lucaslbreaboral@gmail.com
                </a>
              </div>
            </div>

            <Button
              variant="luxury"
              onClick={openWhatsApp}
              className="w-full font-elegant mt-4"
            >
              <Phone className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-elegant text-sm">
              © 2024 Essence. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-300 font-elegant"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-300 font-elegant"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

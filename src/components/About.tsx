import { Heart, Award, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedList } from "@/components/ui/animated-list";
import fotoRecepcao from "@/assets/FotoRecepção.jpg";
import videoRecepcao from "@/assets/VideoRecepção.mp4";
import { useState, useEffect } from "react";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Adicionar estilos globais para remover scroll e outlines
    const style = document.createElement('style');
    style.textContent = `
      * {
        outline: none !important;
      }
      *:focus {
        outline: none !important;
      }
      html, body {
        overflow-x: hidden !important;
        scrollbar-width: thin !important;
        -ms-overflow-style: auto !important;
      }
      html::-webkit-scrollbar, body::-webkit-scrollbar {
        width: 8px !important;
        display: block !important;
      }
      html::-webkit-scrollbar-track, body::-webkit-scrollbar-track {
        background: transparent !important;
      }
      html::-webkit-scrollbar-thumb, body::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2) !important;
        border-radius: 4px !important;
      }
      html::-webkit-scrollbar-thumb:hover, body::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.4) !important;
      }
      ::-webkit-scrollbar {
        width: 8px !important;
        display: block !important;
      }
      ::-webkit-scrollbar-track {
        background: transparent !important;
      }
      ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2) !important;
        border-radius: 4px !important;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.4) !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.head.removeChild(style);
    };
  }, []);

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Cuidado Personalizado",
      description:
        "Cada paciente recebe atenção individualizada e um plano de tratamento único.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excelência Técnica",
      description:
        "Utilizamos as mais avançadas tecnologias e técnicas do mercado.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Equipe Especializada",
      description:
        "Profissionais altamente qualificados e em constante atualização.",
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Resultados Excepcionais",
      description:
        "Transformações que superam expectativas com resultados duradouros.",
    },
  ];

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center bg-navy-card relative overflow-hidden"
      style={{
        backgroundImage: isMobile ? 'none' : `url(${fotoRecepcao})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        overflow: 'visible',
        scrollbarWidth: 'thin',
        msOverflowStyle: 'auto'
      }}
    >
      {/* Overlay escuro para melhorar legibilidade */}
      <div className="absolute inset-0 bg-navy-card/80"></div>
      
      {/* Vídeo de fundo para mobile */}
      {isMobile && (
        <div className="absolute inset-0">
          <video
            src={videoRecepcao}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-navy-card/80"></div>
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10 py-20 lg:py-20 py-12">
        {/* Header */}
        <AnimatedSection animation="slideUp" delay={200}>
          <div className="text-center space-y-4 mb-16 lg:mb-16 mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-light font-elegant">
              Sobre a{" "}
              <span className="text-primary animate-glowSEM">Clínica</span>
            </h2>
            <p className="text-xl text-text-muted font-elegant max-w-3xl mx-auto">
              Há mais de 15 anos transformando sorrisos com elegância,
              sofisticação e os mais altos padrões de qualidade.
            </p>
          </div>
        </AnimatedSection>

        {/* Values Grid - Agora ocupa toda a largura */}
        <div className="mb-16 lg:mb-16 mb-8">
          <AnimatedSection animation="slideUp" delay={300}>
            <div className="flex justify-center mb-12 lg:mb-12 mb-6">
              <div className="max-w-4xl w-full">
                <AnimatedList animation="slideUp" staggerDelay={150}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 gap-4">
                    {values.map((value, index) => (
                      <Card
                        key={index}
                        className="bg-background/90 backdrop-blur-sm border-navy-border hover:shadow-cyan hover:scale-105 transition-all duration-500 group hover:border-primary/40"
                      >
                        <CardContent className="p-6 lg:p-6 p-4 text-center space-y-4 lg:space-y-4 space-y-3">
                          <div className="flex justify-center group-hover:animate-pulse-glow">
                            {value.icon}
                          </div>
                          <h4 className="text-xl lg:text-xl text-lg font-bold text-text-light font-elegant group-hover:text-primary transition-colors duration-300">
                            {value.title}
                          </h4>
                          <p className="text-text-muted font-elegant lg:text-base text-sm">
                            {value.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AnimatedList>
              </div>
            </div>
          </AnimatedSection>

          {/* Commitment abaixo dos Values */}
          <AnimatedSection animation="slideUp" delay={400}>
            <div className="text-center">
              <div className="rounded-xl p-8 lg:p-8 p-6 hover:shadow-[0px_0px_60px_14px_rgba(255,_255,_255,_0.05)] transition-all duration-300 border border-electric-white/30 max-w-2xl mx-auto bg-background/90 backdrop-blur-sm">
                <blockquote className="text-text-light font-elegant italic text-xl lg:text-xl text-lg">
                  "Nosso compromisso é com a excelência em cada detalhe, porque
                  cada sorriso é único e merece cuidado especial."
                </blockquote>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Camera, Star, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedList } from "@/components/ui/animated-list";
import caso1 from "@/assets/caso1.jpg";
import { useState, useRef, useEffect, useCallback } from "react";

const Results = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const results = [
    {
      icon: <Camera className="h-12 w-12 text-primary" />,
      title: "Antes e Depois",
      description:
        "Transformações incríveis que mostram o poder da odontologia moderna e o compromisso com a excelência.",
      image: caso1,
      category: "Ortodontia",
    },
    {
      icon: <Star className="h-12 w-12 text-primary" />,
      title: "Harmonização Facial",
      description:
        "Resultados que harmonizam o sorriso com a face, criando uma aparência natural e equilibrada.",
      image: caso1,
      category: "Estética",
    },
    {
      icon: <Award className="h-12 w-8 text-primary" />,
      title: "Reabilitações Completas",
      description:
        "Casos complexos resolvidos com técnicas avançadas e tecnologia de ponta para resultados excepcionais.",
      image: caso1,
      category: "Reabilitação",
    },
    {
      icon: <Camera className="h-12 w-12 text-primary" />,
      title: "Clareamento Avançado",
      description:
        "Sorrisos mais brancos e brilhantes com tratamentos personalizados e seguros.",
      image: caso1,
      category: "Estética",
    },
    {
      icon: <Star className="h-12 w-12 text-primary" />,
      title: "Implantes Dentários",
      description:
        "Substituição de dentes perdidos com implantes que se integram perfeitamente à estrutura óssea.",
      image: caso1,
      category: "Cirurgia",
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Ortodontia Invisível",
      description:
        "Alinhamento dental discreto com alinhadores transparentes para um sorriso perfeito.",
      image: caso1,
      category: "Ortodontia",
    },
    {
      icon: <Camera className="h-12 w-12 text-primary" />,
      title: "Lentes de Contato",
      description:
        "Correções estéticas precisas que transformam a aparência dos dentes de forma natural.",
      image: caso1,
      category: "Estética",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % results.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, results.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + results.length) % results.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, results.length]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, currentSlide]);

  // Auto-play opcional
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Adicionar CSS personalizado para esconder scrollbar
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <section id="results" className="pt-20 bg-gradient-to-r from-zinc-900 to-zinc-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="slideUp" delay={200}>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-light font-elegant">
              Nossos{" "}
              <span className="text-primary animate-glowSEM">Resultados</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Novo Carrossel Moderno */}
        <AnimatedSection animation="fadeIn" delay={400}>
          <div className="mb-16">
                         {/* Container Principal do Carrossel */}
             <div className="relative max-w-4xl mx-auto">
              {/* Imagem Principal em Destaque */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-800 mb-8">
                                 {/* Imagem Principal */}
                 <div className="relative w-full h-full">
                  <img
                    src={results[currentSlide].image}
                    alt={results[currentSlide].title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isTransitioning ? 'scale-105 opacity-80' : 'scale-100 opacity-100'
                    }`}
                  />
                  
                  {/* Overlay com Informações - Apenas Desktop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent hidden md:block">
                                         <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                       <div className="flex items-center space-x-3 mb-3">
                         <div className="text-primary">
                           {results[currentSlide].icon}
                         </div>
                         <h3 className="text-2xl lg:text-3xl font-bold font-elegant">
                           {results[currentSlide].title}
                         </h3>
                       </div>
                      <p className="text-lg text-gray-200 font-elegant max-w-2xl">
                        {results[currentSlide].description}
                      </p>
                      <div className="mt-4">
                        <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {results[currentSlide].category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Setas de Navegação - Desktop (sobre a imagem) */}
                <button
                  onClick={prevSlide}
                  disabled={isTransitioning}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group hidden md:flex"
                >
                  <ChevronLeft className="w-6 h-6 text-white group-hover:text-primary transition-colors duration-300" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={isTransitioning}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group hidden md:flex"
                >
                  <ChevronRight className="w-6 h-6 text-white group-hover:text-primary transition-colors duration-300" />
                </button>
              </div>

              {/* Setas de Navegação - Mobile (ao lado da imagem) */}
              <div className="md:hidden flex justify-between items-center -mt-4 mb-6">
                <button
                  onClick={prevSlide}
                  disabled={isTransitioning}
                  className="w-12 h-12 bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <ChevronLeft className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={isTransitioning}
                  className="w-12 h-12 bg-primary/20 hover:bg-primary/30 border border-primary/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <ChevronRight className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </button>
              </div>

               {/* Faixa de Miniaturas */}
               <div className="relative hidden md:block -mx-8">
                 <div className="flex justify-center space-x-3 overflow-visible pb-4 scrollbar-hide pt-4">
                   {results.map((result, index) => (
                     <div
                       key={index}
                       onClick={() => goToSlide(index)}
                       className={`relative flex-shrink-0 cursor-pointer group transition-all duration-300 ${
                         index === currentSlide
                           ? 'ring-2 ring-primary ring-offset-2 ring-offset-zinc-900'
                           : 'hover:ring-2 hover:ring-primary/50 hover:ring-offset-2 hover:ring-offset-zinc-900'
                       }`}
                     >
                       {/* Indicador Ativo */}
                       {index === currentSlide && (
                         <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full z-10" />
                       )}

                       {/* Miniatura */}
                       <div className="relative w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden">
                         <img
                           src={result.image}
                           alt={result.title}
                           className={`w-full h-full object-cover transition-all duration-300 ${
                             index === currentSlide
                               ? 'scale-110 brightness-110'
                               : 'group-hover:scale-105'
                           }`}
                         />
                         
                         {/* Overlay da Miniatura */}
                         <div className={`absolute inset-0 transition-all duration-300 ${
                           index === currentSlide
                             ? 'bg-primary/20'
                             : 'bg-black/40 group-hover:bg-black/20'
                         }`} />
                         

                       </div>
                     </div>
                   ))}
                 </div>
               </div>

               {/* Descrição Mobile */}
                                <div className="md:hidden mt-6 text-center">
                   <div className="space-y-3">
                     <div className="flex items-center justify-center space-x-3">
                       <div className="text-primary">
                         {results[currentSlide].icon}
                       </div>
                       <h3 className="text-xl font-bold text-text-light font-elegant">
                         {results[currentSlide].title}
                       </h3>
                     </div>
                   <p className="text-text-muted font-elegant max-w-2xl mx-auto px-4">
                     {results[currentSlide].description}
                   </p>
                   <div>
                     <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                       {results[currentSlide].category}
                     </span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="fadeIn" delay={400}>
          <div className="w-full max-w-4xl mx-auto text-center bg-gradient-luxury rounded-2xl p-6 md:p-8 lg:p-10 hover:shadow-electric transition-all duration-500 border border-navy-border">
            <h3 className="text-2xl md:text-3xl font-bold text-text-light font-elegant mb-4">
              Quer ser nosso próximo caso de sucesso?
            </h3>
            <p className="text-text-muted font-elegant mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Agende uma consulta de avaliação e descubra como podemos
              transformar seu sorriso com resultados excepcionais.
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="font-elegant text-lg px-8 py-6"
            >
              Agendar Avaliação
            </Button>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Linha divisória minimalista centralizada */}
      <div className="flex justify-center py-20">
        <div className="w-4/5 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent opacity-30"></div>
      </div>
    </section>
  );
};

export default Results; 
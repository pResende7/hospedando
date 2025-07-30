import { Camera, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedList } from "@/components/ui/animated-list";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import caso1 from "@/assets/caso1.jpg";


const Results = () => {
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
      icon: <Award className="h-12 w-12 text-primary" />,
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
            <p className="text-xl text-text-muted font-elegant max-w-3xl mx-auto">
              Confira alguns dos casos transformados pela nossa equipe especializada,
              demonstrando a excelência e dedicação em cada tratamento.
            </p>
          </div>
        </AnimatedSection>

        {/* Carousel Section */}
        <AnimatedSection animation="fadeIn" delay={400}>
          <div className="mb-16">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {results.map((result, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group hover:shadow-cyan transition-all duration-500 border-navy-border hover:border-primary/60 hover:scale-105 bg-gray-800 h-full">
                      <CardContent className="p-6">
                        {result.image && (
                          <div className="mb-4 rounded-xl overflow-hidden relative">
                            <img
                              src={result.image}
                              alt={result.title}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 right-2">
                              <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                                {result.category}
                              </span>
                            </div>
                          </div>
                        )}

                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="group-hover:animate-pulse-glow">
                              {result.icon}
                            </div>
                            <h3 className="text-xl font-bold text-text-light font-elegant group-hover:text-primary transition-colors duration-300">
                              {result.title}
                            </h3>
                          </div>

                          <p className="text-text-muted font-elegant leading-relaxed text-sm">
                            {result.description}
                          </p>

                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full mt-4 font-elegant group-hover:bg-primary group-hover:text-primary-foreground"
                            onClick={scrollToContact}
                          >
                            Ver Mais
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-primary/20 border-primary/30 hover:bg-primary/30 text-primary" />
              <CarouselNext className="bg-primary/20 border-primary/30 hover:bg-primary/30 text-primary" />
            </Carousel>
          </div>
        </AnimatedSection>
        {/* CTA Section */}
        <AnimatedSection animation="fadeIn" delay={400}>
          <div className="w-full max-w-4xl mx-auto text-center bg-gradient-luxury rounded-2xl p-6 md:p-8 lg:p-10 hover:shadow-electric transition-all duration-500 border border-navy-border">
            <h3 className="text-2xl md:text-3xl font-bold text-text-light font-elegant mb-4">
              Quer ser nosso próximo caso de sucesso?
            </h3>
            <p className="text-text-muted font-elegant mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Agende uma consulta de avaliação gratuita e descubra como podemos
              transformar seu sorriso com resultados excepcionais.
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="font-elegant text-lg px-8 py-6"
            >
              Agendar Avaliação Gratuita
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
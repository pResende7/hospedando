import { Heart, Award, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedList } from "@/components/ui/animated-list";
import clinica1 from "@/assets/clinica.jpg";
import clinica2 from "@/assets/clinica2.jpg";
import clinica3 from "@/assets/clinica7.jpg";

const About = () => {
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

  const galleryImages = [
    { src: clinica1, alt: "Clínica Essence - Ambiente Principal" },
    { src: clinica2, alt: "Clínica Essence - Sala de Atendimento" },
    { src: clinica3, alt: "Clínica Essence - Área de Tratamento" },
  ];

  return (
    <section id="about" className="py-20 bg-navy-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="slideUp" delay={200}>
          <div className="text-center space-y-4 mb-16">
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

        {/* Gallery and Commitment */}
        <div className="mb-16">
          {/* Gallery */}
          <AnimatedSection animation="slideUp" delay={300}>
                         <div className="flex justify-center mb-12">
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[120rem]">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl hover:scale-105 transition-all duration-300"
                  >
                                         <img
                       src={image.src}
                       alt={image.alt}
                       className="w-full aspect-video object-cover group-hover:brightness-110 transition-all duration-300"
                     />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Commitment */}
          <AnimatedSection animation="slideUp" delay={400}>
            <div className="text-center">
              <div className="rounded-xl p-8 hover:shadow-[0px_0px_60px_14px_rgba(255,_255,_255,_0.05)] transition-all duration-300 border border-electric-white/30 max-w-2xl mx-auto">
                <blockquote className="text-text-light font-elegant italic text-xl">
                  "Nosso compromisso é com a excelência em cada detalhe, porque
                  cada sorriso é único e merece cuidado especial."
                </blockquote>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Values */}
        <AnimatedList animation="slideUp" staggerDelay={150}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-background border-navy-border hover:shadow-cyan hover:scale-105 transition-all duration-500 group hover:border-primary/40"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center group-hover:animate-pulse-glow">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-text-light font-elegant group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-text-muted font-elegant">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedList>
      </div>
    </section>
  );
};

export default About;

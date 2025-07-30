import { Heart, Award, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedList } from "@/components/ui/animated-list";

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

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <AnimatedSection animation="slideRight" delay={300}>
            <div className="space-y-6">
            <h3 className="text-3xl font-bold text-text-light font-elegant">
              Nossa Missão
            </h3>
            <p className="text-text-muted font-elegant leading-relaxed text-lg">
              Na Essence, acreditamos que um sorriso bonito vai além da estética
              – é confiança, bem-estar e qualidade de vida. Nossa missão é
              proporcionar tratamentos de excelência,
              combinando técnica refinada com atendimento humanizado.
            </p>
            <p className="text-text-muted font-elegant leading-relaxed text-lg">
              Trabalhamos com tecnologia de ponta e métodos inovadores para
              garantir que cada paciente tenha uma experiência única e
              resultados que superem suas expectativas.
            </p>

            <div className="rounded-xl p-6 mt-8 hover:shadow-[0px_0px_60px_14px_rgba(255,_255,_255,_0.05)] transition-all duration-300 border border-electric-white/30">
              <blockquote className="text-text-light font-elegant italic text-lg">
                "Nosso compromisso é com a excelência em cada detalhe, porque
                cada sorriso é único e merece cuidado especial."
              </blockquote>
            </div>
          </div>
        </AnimatedSection>

          {/* Stats */}
          <AnimatedSection animation="slideLeft" delay={400}>
            <div className="grid grid-cols-2 gap-6">
            <div className="bg-background rounded-xl p-6 text-center shadow-elegant hover:shadow-cyan hover:scale-105 transition-all duration-300 group">
              <div className="text-4xl font-bold text-primary font-elegant mb-2 group-hover:animate-glowSEM">
                500+
              </div>
              <div className="text-text-muted font-elegant">
                Pacientes Atendidos
              </div>
            </div>
            <div className="bg-background rounded-xl p-6 text-center shadow-elegant hover:shadow-cyan hover:scale-105 transition-all duration-300 group">
              <div className="text-4xl font-bold text-primary font-elegant mb-2 group-hover:animate-glowSEM">
                15+
              </div>
              <div className="text-text-muted font-elegant">
                Anos de Experiência
              </div>
            </div>
            <div className="bg-background rounded-xl p-6 text-center shadow-elegant hover:shadow-cyan hover:scale-105 transition-all duration-300 group">
              <div className="text-4xl font-bold text-primary font-elegant mb-2 group-hover:animate-glowSEM">
                98%
              </div>
              <div className="text-text-muted font-elegant">
                Satisfação dos Pacientes
              </div>
            </div>
            <div className="bg-background rounded-xl p-6 text-center shadow-elegant hover:shadow-cyan hover:scale-105 transition-all duration-300 group">
              <div className="text-4xl font-bold text-primary font-elegant mb-2 group-hover:animate-glowSEM">
                24/7
              </div>
              <div className="text-text-muted font-elegant">
                Suporte Disponível
              </div>
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

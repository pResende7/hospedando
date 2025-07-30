import { GraduationCap, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedList } from "@/components/ui/animated-list";
import doctorImage from "@/assets/doctor-portrait.jpg";

const Team = () => {
  return (
    <section id="team" className="pt-20 bg-gradient-to-r from-zinc-900 to-zinc-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="slideUp" delay={200}>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-light font-elegant">
              Nossa <span className="text-primary animate-glowSEM">Equipe</span>
            </h2>
            <p className="text-xl text-text-muted font-elegant max-w-3xl mx-auto">
              Profissionais especializados e apaixonados por criar sorrisos únicos
              e transformar vidas.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Doctor Profile */}
          <AnimatedSection animation="slideRight" delay={300}>
            <div className="space-y-8">
              <Card className="bg-gradient-luxury border-navy-border shadow-elegant hover:shadow-cyan transition-all duration-500 group">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
                    <div className="relative group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={doctorImage}
                        alt="Dra. Sofia Miranda - Ortodontista"
                        className="w-32 h-32 rounded-full object-cover border-4 border-cyan-vibrant shadow-cyan"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-electric rounded-full flex items-center justify-center animate-glowSEM">
                        <Award className="h-4 w-4 text-text-light" />
                      </div>
                    </div>

                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-text-light font-elegant mb-2 group-hover:text-primary transition-colors duration-300">
                        Dra. Sofia Miranda
                      </h3>
                      <p className="text-primary font-elegant font-semibold mb-2 group-hover:animate-glowSEM">
                        Ortodontista Especialista
                      </p>
                      <p className="text-text-muted font-elegant">
                        CRO-SP 12345 | Mestre em Ortodontia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-text-light font-elegant">
                  Sobre a Dra. Sofia
                </h4>
                <p className="text-text-muted font-elegant leading-relaxed">
                  Formada em Odontologia pela USP com especialização em Ortodontia
                  pela UNESP, a Dra. Sofia possui mais de 15 anos de experiência
                  em tratamentos ortodônticos e estéticos. É referência em
                  Invisalign e harmonização orofacial.
                </p>
                <p className="text-text-muted font-elegant leading-relaxed">
                  Sua paixão é transformar sorrisos e autoestima, combinando
                  técnica avançada com atendimento humanizado e personalizado para
                  cada paciente.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Qualifications */}
          <AnimatedSection animation="slideLeft" delay={400}>
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-text-light font-elegant mb-8">
                Qualificações e Especializações
              </h4>

              <AnimatedList animation="slideUp" staggerDelay={150}>
                <div className="space-y-4">
                  <Card className="border-navy-border hover:shadow-cyan hover:scale-105 transition-all duration-500 group bg-navy-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <GraduationCap className="h-6 w-6 text-primary mt-1 group-hover:animate-pulse-glow" />
                        <div>
                          <h5 className="font-bold text-text-light font-elegant mb-1 group-hover:text-primary transition-colors duration-300">
                            Graduação em Odontologia
                          </h5>
                          <p className="text-text-muted font-elegant">
                            Universidade de São Paulo (USP) - 2008
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-navy-border hover:shadow-cyan hover:scale-105 transition-all duration-500 group bg-navy-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Award className="h-6 w-6 text-primary mt-1 group-hover:animate-pulse-glow" />
                        <div>
                          <h5 className="font-bold text-text-light font-elegant mb-1 group-hover:text-primary transition-colors duration-300">
                            Especialização em Ortodontia
                          </h5>
                          <p className="text-text-muted font-elegant">
                            Universidade Estadual Paulista (UNESP) - 2010
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-navy-border hover:shadow-cyan hover:scale-105 transition-all duration-500 group bg-navy-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Heart className="h-6 w-6 text-primary mt-1 group-hover:animate-pulse-glow" />
                        <div>
                          <h5 className="font-bold text-text-light font-elegant mb-1 group-hover:text-primary transition-colors duration-300">
                            Certificação Invisalign
                          </h5>
                          <p className="text-text-muted font-elegant">
                            Provider Diamond - Align Technology
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-navy-border hover:shadow-cyan hover:scale-105 transition-all duration-500 group bg-navy-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <GraduationCap className="h-6 w-6 text-primary mt-1 group-hover:animate-pulse-glow" />
                        <div>
                          <h5 className="font-bold text-text-light font-elegant mb-1 group-hover:text-primary transition-colors duration-300">
                            Harmonização Orofacial
                          </h5>
                          <p className="text-text-muted font-elegant">
                            Instituto Velasco - São Paulo
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedList>

              <div className="bg-gradient-electric rounded-xl p-6 mt-8 hover:shadow-cyan transition-all duration-300 border border-electric-blue/30">
                <blockquote className="text-text-light font-elegant italic">
                  "Cada paciente é único, e meu objetivo é criar sorrisos que
                  reflitam a personalidade e realcem a beleza natural de cada
                  pessoa."
                </blockquote>
                <cite className="text-text-light font-elegant font-semibold block mt-2">
                  - Dra. Sofia Miranda
                </cite>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Linha divisória minimalista centralizada */}
      <div className="flex justify-center py-10">
        <div className="w-4/5 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent opacity-30"></div>
      </div>
    </section>
  );
};

export default Team;

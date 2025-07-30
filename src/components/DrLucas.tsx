import { AnimatedSection } from "@/components/ui/animated-section";
import foto1 from "@/assets/foto1.jpg";
import foto2 from "@/assets/foto2.jpg";
import foto3 from "@/assets/foto3.jpg";
import foto4 from "@/assets/foto4.jpg";

const DrLucas = () => {
  return (
    <section id="dr-lucas" className="pt-20 bg-gradient-to-r from-zinc-900 to-zinc-900">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fadeIn" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-light font-elegant mb-4">
              Conheça o{" "}
              <span className="text-primary animate-glowSEM">Dr. Lucas</span>
            </h2>
            <p className="text-xl text-text-muted font-elegant max-w-3xl mx-auto">
              Especialista em odontologia estética e implantes com mais de 15 anos de experiência
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Fotos */}
          <AnimatedSection animation="slideLeft" delay={400}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={foto1} 
                    alt="Dr. Lucas Barros - Foto 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={foto2} 
                    alt="Dr. Lucas Barros - Foto 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={foto3} 
                    alt="Dr. Lucas Barros - Foto 3" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src={foto4} 
                    alt="Dr. Lucas Barros - Foto 4" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Biografia */}
          <AnimatedSection animation="slideRight" delay={600}>
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-text-light font-elegant">
                <span className="text-primary">D</span>r. <span className="text-primary">L</span>ucas <span className="text-primary">B</span>arros
                </h3>
                <p className="text-lg text-text-muted font-elegant leading-relaxed">
                  Formado em Odontologia pela Universidade Federal, o Dr. Lucas Barros 
                  é especialista em odontologia estética e implantes dentários. Com mais 
                  de 15 anos de experiência, já transformou mais de 500 sorrisos.
                </p>
                <p className="text-lg text-text-muted font-elegant leading-relaxed">
                  Especializado em técnicas avançadas de harmonização facial e 
                  reabilitação oral, o Dr. Lucas combina tecnologia de ponta com 
                  um olhar artístico para criar sorrisos naturais e harmoniosos.
                </p>
              </div>

              {/* Especialidades */}
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-primary font-elegant">
                  Especialidades
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-text-muted font-elegant">Odontologia Estética</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-text-muted font-elegant">Implantes Dentários</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-text-muted font-elegant">Harmonização Facial</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-text-muted font-elegant">Reabilitação Oral</span>
                  </div>
                </div>
              </div>

              {/* Credenciais */}
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-primary font-elegant">
                  Credenciais
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-text-muted font-elegant">Especialização em Implantodontia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-text-muted font-elegant">Pós-graduação em Odontologia Estética</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-text-muted font-elegant">Membro da Associação Brasileira de Odontologia</span>
                  </div>
                </div>
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

export default DrLucas; 
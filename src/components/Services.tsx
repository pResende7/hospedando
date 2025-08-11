import { Sparkles, Shield, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedList } from "@/components/ui/animated-list";
import invisalignImage from "@/assets/invisalign.jpg";
import aestheticsImage from "@/assets/dental-aesthetics.jpg";
import enxerto from "@/assets/enxertos.jpg";


const Services = () => {
  const services = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Reabilitações",
      description:
        "Restauração funcional e estética do sorriso, devolvendo mastigação, fala e autoestima por meio de tratamentos integrados.",
      image: invisalignImage,
      features: [
        "Reabilitação oral total",
        "Prótese fixa sobre implantes",
        "Prótese removível",
        "Coroas e pontes dentárias"
      ],
    },
    {
      icon: <Smile className="h-12 w-12 text-primary" />,
      title: "Enxertos",
      description:
        "Procedimentos avançados para reconstrução e regeneração óssea e gengival, garantindo suporte e estética para futuros tratamentos.",
      image: enxerto,
      features: [
        "Enxerto ósseo autógeno",
        "Enxerto ósseo com biomateriais",
        "Enxerto gengival livre",
        "Enxerto de tecido conjuntivo"
      ],
    },
    {
      icon: <Sparkles className="h-12 w-12 text-primary" />,
      title: "Cirurgias Guiadas",
      description:
        "Precisão e segurança na instalação de implantes e procedimentos cirúrgicos, com auxílio de tecnologia 3D e planejamento digital.",
      image: aestheticsImage,
      features: [
        "Planejamento digital da cirurgia",
        "Instalação de implantes dentários guiados",
        "Enxertos ósseos guiados",
        "Regeneração tecidual guiada"
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="pt-20 bg-gradient-to-r from-zinc-900 to-zinc-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="slideUp" delay={200}>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-light font-elegant">
              Nossos{" "}
              <span className="text-primary animate-glowSEM">Serviços</span>
            </h2>
            <p className="text-xl text-text-muted font-elegant max-w-3xl mx-auto">
              Oferecemos tratamentos especializados com tecnologia de ponta para
              transformar seu sorriso com segurança e elegância.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <AnimatedList animation="scaleIn" staggerDelay={200}>
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-cyan transition-all duration-500 border-navy-border hover:border-primary/60 hover:scale-105 bg-gray-800"
              >
              <CardContent className="p-8">
                {service.image && (
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="group-hover:animate-pulse-glow">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-text-light font-elegant group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-text-muted font-elegant leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-text-muted font-elegant">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full mt-6 font-elegant group-hover:bg-primary group-hover:text-primary-foreground"
                    onClick={scrollToContact}
                  >
                    Saiba Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </AnimatedList>

      </div>
      
      {/* Linha divisória minimalista centralizada */}
              <div className="flex justify-center">
          <div className="w-4/5 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent opacity-30"></div>
        </div>
    </section>
  );
};

export default Services;

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedList } from "@/components/ui/animated-list";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // URL da API - usando a URL do Vercel para produção
      const apiUrl = 'https://hospedando-1src450hq-pedroresendes-projects.vercel.app/api/send-email';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'pedroresendec_@hotmail.com' // Garantir que o email seja enviado para o endereço correto
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Erro ao enviar email');
      }
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve para agendar sua consulta.",
      });

      // Limpar formulário
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error('Erro ao enviar email:', err);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telefone",
      content: "(11) 99999-9999",
      action: "tel:+5511999999999",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "E-mail",
      content: "pedroresendec_hotmail.com",
      action: "mailto:pedroresendec_hotmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Endereço",
      content: "Rua das Flores, 123\nVila Madalena - São Paulo/SP",
      action: null,
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Horário de Funcionamento",
      content: "Seg à Sex: 8h às 18h\nSáb: 8h às 14h",
      action: null,
    },
  ];

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de agendar uma consulta na Essence."
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="pt-20 py-40 bg-gradient-to-r from-zinc-900 to-zinc-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="slideUp" delay={200}>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-light font-elegant">
              Entre em{" "}
              <span className="text-primary animate-glowSEM">Contato</span>
            </h2>
            <p className="text-xl text-text-muted font-elegant max-w-3xl mx-auto">
              Agende sua consulta e comece sua jornada para o sorriso dos seus
              sonhos.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <AnimatedSection animation="slideRight" delay={300}>
            <div>
              <Card className="shadow-elegant border-navy-border hover:shadow-cyan transition-all duration-500 bg-navy-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-text-light font-elegant mb-6">
                    Agende sua Consulta
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="font-elegant"
                      />
                    </div>

                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Seu melhor e-mail"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="font-elegant"
                      />
                    </div>

                    <div>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Seu telefone/WhatsApp"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="font-elegant"
                      />
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder="Conte-nos sobre o que você gostaria de tratar..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="font-elegant"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="luxury"
                      size="lg"
                      className="w-full font-elegant"
                      disabled={isLoading}
                    >
                      {isLoading ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-rose-elegant/20">
                    <p className="text-text-muted font-elegant text-center mb-4">
                      Ou entre em contato via WhatsApp:
                    </p>
                    <Button
                      variant="electric"
                      size="lg"
                      className="w-full font-elegant"
                      onClick={openWhatsApp}
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Conversar no WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection animation="slideLeft" delay={400}>
            <div className="space-y-6">
            
              <AnimatedList animation="slideUp" staggerDelay={150}>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="border-navy-border hover:shadow-cyan hover:scale-105 transition-all duration-500 group bg-navy-card"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="group-hover:animate-pulse-glow">
                            {info.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-text-light font-elegant mb-1 group-hover:text-primary transition-colors duration-300">
                              {info.title}
                            </h4>
                            {info.action ? (
                              <a
                                href={info.action}
                                className="text-text-muted font-elegant hover:text-primary transition-colors duration-300"
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-text-muted font-elegant whitespace-pre-line">
                                {info.content}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AnimatedList>

              {/* Social Media */}
              <Card className="border-navy-border bg-gradient-luxury hover:shadow-electric transition-all duration-500">
                <CardContent className="p-6">
                  <h4 className="font-bold text-text-light font-elegant mb-4 text-center">
                    Siga-nos nas Redes Sociais
                  </h4>
                  <div className="flex justify-center space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                      <Facebook className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </Button>
                  </div>
                  <p className="text-text-muted font-elegant text-center text-sm mt-4">
                    @smilechiclinic
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;

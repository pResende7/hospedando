import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedList } from "@/components/ui/animated-list";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telefone",
      content: "(69) 99973-1490",
      action: "tel:+556999731490",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "E-mail",
      content: "lucaslbreaboral@gmail.com",
      action: "mailto:lucaslbreaboral@gmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Endereço",
      content: "Av. Gov. Jorge Teixeira, 3137 - sala 6 - Embratel\n Porto Velho - RO, 76803-859",
      action: null,
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Horário de Funcionamento",
      content: "Seg à Sex: 8h às 18h",
      action: null,
    },
  ];

  const openWhatsApp = () => {
    const message = `Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
O que gostaria de tratar: ${formData.message}`;

    // Detectar se é dispositivo móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    const phoneNumber = "+556999731490";   
    const encodedMessage = encodeURIComponent(message);
    
    try {
      if (isMobile) {
        // Para dispositivos móveis, usar protocolo nativo primeiro
        const waProtocolUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
        window.location.href = waProtocolUrl;
        
        // Fallback para dispositivos móveis se o protocolo falhar
        setTimeout(() => {
          const waMeUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
          window.open(waMeUrl, "_blank");
        }, 1000);
      } else {
        // Para desktop, tentar wa.me primeiro
        const waMeUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        const waMeWindow = window.open(waMeUrl, "_blank");
        
        // Se falhar, tentar api.whatsapp.com
        if (!waMeWindow || waMeWindow.closed) {
          setTimeout(() => {
            const waWebUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
            window.open(waWebUrl, "_blank");
          }, 100);
        }
      }
      
      // Limpar formulário após tentar abrir WhatsApp
      setFormData({ name: "", email: "", phone: "", message: "" });
      
    } catch (error) {
      console.error("Erro ao abrir WhatsApp:", error);
      
      // Fallback: mostrar instruções para o usuário
      alert(`Não foi possível abrir o WhatsApp automaticamente. 
      
Por favor, copie esta mensagem e envie manualmente para o WhatsApp:

${message}

Ou entre em contato pelo telefone: +55 (69) 99973-1490`);
      
      // Limpar formulário mesmo com erro
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <section id="contact" className="pt-10 py-20 bg-gradient-to-r from-zinc-900 to-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
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

        <div className="grid lg:grid-cols-2 gap-6 md:gap-16 items-start">
          {/* Contact Form */}
          <AnimatedSection animation="slideRight" delay={300}>
            <div>
              <Card className="shadow-elegant border-navy-border hover:shadow-cyan transition-all duration-500 bg-navy-card">
                <CardContent className="p-4 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-text-light font-elegant mb-4 md:mb-6">
                    Agende sua Consulta
                  </h3>

                  <form className="space-y-4 md:space-y-6">
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
                      type="button"
                      variant="luxury"
                      size="lg"
                      className="w-full font-elegant"
                      onClick={openWhatsApp}
                      disabled={!formData.name || !formData.email || !formData.phone || !formData.message}
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Enviar via WhatsApp
                    </Button>
                  </form>

                  {/* Removendo a seção do WhatsApp duplicada */}
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection animation="slideLeft" delay={400}>
            <div className="w-full space-y-4 md:space-y-6">
            
              <AnimatedList animation="slideUp" staggerDelay={150}>
                <div className="grid gap-4 md:gap-6">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="border-navy-border hover:shadow-cyan hover:scale-105 transition-all duration-500 group bg-navy-card"
                    >
                      <CardContent className="p-4 md:p-6">
                        <div className="flex items-start space-x-3 md:space-x-4">
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
                <CardContent className="p-4 md:p-6">
                  <h4 className="font-bold text-text-light font-elegant mb-3 md:mb-4 text-center text-lg md:text-xl">
                    Siga-nos nas Redes Sociais
                  </h4>
                                     <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8">
                     <div className="text-center">
                       <a
                         href="https://www.instagram.com/dr.lucaslbarrosimplantodontia/?hl=pt-br"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-input bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                         title="Instagram do Dr. Lucas"
                       >
                         <Instagram className="h-5 w-5" />
                       </a>
                       <p className="p-2 text-text-muted font-elegant text-xs md:text-sm mb-2">Instagram do Dr. Lucas</p>
                     </div>
                     
                     <div className="text-center">
                       <a
                         href="https://www.instagram.com/essence.odonto.preventiva/?hl=pt-br"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-input bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                         title="Instagram da Clínica"
                       >
                         <Instagram className="h-5 w-5" />
                       </a>
                       <p className="p-2 text-text-muted font-elegant text-xs md:text-sm mb-2">Instagram da Clínica</p>
                     </div>
                     <div className="text-center">
                       <a
                         href="https://www.instagram.com/pedro._resende/?hl=pt-br"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-input bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                         title="Desenvolvedor do site"
                       >
                         <Instagram className="h-5 w-5" />
                       </a>
                       <p className="p-2 text-text-muted font-elegant text-xs md:text-sm mb-2">Desenvolvedor do site</p>
                     </div>
                   </div>
                  <p className="text-text-muted font-elegant text-center text-xs md:text-sm mt-3 md:mt-4">
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

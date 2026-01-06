import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, FileText, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

    try {
      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Message envoyé avec succès ! Je vous répondrai bientôt.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const documents = [
    {
      id: 1,
      title: "Curriculum Vitae",
      description: "Mon CV complet détaillant mes expériences et compétences",
      icon: FileText,
      link: "#",
    },
    {
      id: 3,
      title: "Rapport de Stage 1",
      description: "Rapport détaillé de mon premier stage en entreprise",
      icon: FileText,
      link: "#",
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Me Contacter</h1>
          <p className="text-lg text-muted-foreground">
            N'hésitez pas à me contacter pour toute question ou opportunité professionnelle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-foreground">Email</h3>
              </div>
              <a
                href="mailto:pro.manuel.montoya@gmail.com"
                className="text-accent hover:underline break-all"
              >
                pro.manuel.montoya@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-foreground">Téléphone</h3>
              </div>
              <a href="tel:+33771010387" className="text-accent hover:underline">
                07 71 01 03 87
              </a>
            </div>

            {/* Location */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-foreground">Localisation</h3>
              </div>
              <p className="text-foreground">Horbourg-Wihr, France</p>
            </div>

            {/* Social Links */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-foreground">Réseaux Sociaux</h3>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://www.linkedin.com/in/manuel-montoya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:underline text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/Straf-MM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:underline text-sm"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Votre nom"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="votre.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground hover:opacity-90 py-3"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </div>
        </div>

        {/* Documents Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-foreground">Mes Documents</h2>
            <p className="text-muted-foreground">
              Téléchargez mes documents professionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <a
                  key={doc.id}
                  href={doc.link}
                  className="group"
                >
                  <div
                    className="bg-card border border-border rounded-lg p-6 hover:border-accent hover:bg-secondary transition-all duration-300 cursor-pointer h-full animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <Icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                            {doc.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {doc.description}
                          </p>
                        </div>
                      </div>
                      <Download className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

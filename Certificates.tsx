import { Award, Calendar, CheckCircle, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  status: "obtained" | "in-progress" | "planned";
  description: string;
  credentialId?: string;
  link?: string;
}

export default function Certificates() {
  const certificates: Certificate[] = [];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "obtained":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full dark:bg-green-900/30 dark:text-green-400">
            <CheckCircle className="w-3 h-3" />
            Obtenue
          </span>
        );
      case "in-progress":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full dark:bg-blue-900/30 dark:text-blue-400">
            <Calendar className="w-3 h-3" />
            En cours
          </span>
        );
      case "planned":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full dark:bg-gray-900/30 dark:text-gray-400">
            <Calendar className="w-3 h-3" />
            Prévue
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Mes Certificats</h1>
          <p className="text-lg text-muted-foreground">
            Les certifications professionnelles que je prépare pour valider mes compétences techniques.
          </p>
        </div>

        {/* Certificates List or Empty State */}
        {certificates.length > 0 ? (
          <div className="space-y-4">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 mt-1">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">{getStatusBadge(cert.status)}</div>
                </div>

                <p className="text-foreground leading-relaxed mb-4">{cert.description}</p>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    {cert.date}
                  </p>
                  {cert.credentialId && (
                    <p className="text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>

                {cert.link && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <Button variant="outline" size="sm">
                      Voir la certification
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-card border border-dashed border-border rounded-xl p-16 flex flex-col items-center justify-center space-y-6 text-center animate-pulse">
            <Award className="w-16 h-16 text-accent opacity-50" />
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Certifications en préparation</h2>
              <p className="text-muted-foreground max-w-md">
                Je n'ai pas encore de certificats officiels, mais je prépare actuellement plusieurs certifications (Cisco CCNA, Microsoft AZ-900) pour valider mes compétences en réseaux et cloud.
              </p>
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Objectifs de certification</h2>
          <p className="text-foreground leading-relaxed">
            Dans le cadre de mon BTS SIO SISR, je vise à obtenir des certifications reconnues par l'industrie pour attester de ma maîtrise des infrastructures réseaux et de la sécurité informatique.
          </p>
          <p className="text-foreground leading-relaxed">
            Mon focus actuel est sur les fondamentaux des réseaux et l'administration système, piliers essentiels pour tout futur administrateur.
          </p>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Construction } from "lucide-react";

interface Internship {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export default function Internships() {
  const [expandedStage, setExpandedStage] = useState<number | null>(1);

  const internships: Record<number, Internship[]> = {
    1: [
      {
        id: 1,
        title: "Stagiaire au Service Pièces de Rechange (SPR)",
        company: "Liebherr",
        period: "26 Mai – 27 Juin 2025",
        description:
          "Stage de 5 semaines au sein du Service Pièces de Rechange de Liebherr, axé sur la gestion logistique internationale, l'administration système via l'ERP LN et le support technique de proximité.",
        achievements: [
          "Configuration et installation de postes de travail informatiques (PC et stations d'accueil)",
          "Utilisation et gestion de l'ERP LN (basé sur IcedTea Web) pour le traitement des commandes et devis internationaux (Mongolie, Allemagne, Chine, Australie)",
          "Maintenance et mise à jour quotidienne du Dashboard de suivi des commandes pour l'ajustement des délais",
          "Gestion des requêtes FIR (Factory Incident Report) via un système de ticketing",
          "Formation à la gestion des stocks (Entrée Marchandise, Déballage, WST) et aux procédures d'urgence de livraison",
          "Collaboration internationale et participation aux réunions de coordination 'Tour de Table'",
        ],
        technologies: ["ERP LN", "IcedTea Web", "Dashboard Management", "Ticketing FIR", "Windows OS", "Gestion de Base de Données"],
      },
    ],
    2: [],
  };

  return (
    <div className="min-h-screen py-20 px-4 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Mes Stages</h1>
          <p className="text-lg text-muted-foreground">
            Découvrez mes expériences en entreprise et les compétences que j'ai développées lors
            de mes stages.
          </p>
        </div>

        {/* Stages Tabs */}
        <div className="space-y-6">
          {[1, 2].map((stageNum) => (
            <div key={stageNum} className="space-y-4">
              {/* Stage Header */}
              <button
                onClick={() =>
                  setExpandedStage(expandedStage === stageNum ? null : stageNum)
                }
                className="w-full bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 text-left group"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    Stage {stageNum} {stageNum === 2 && "(À venir)"}
                  </h2>
                  <ChevronDown
                    className={`w-6 h-6 text-muted-foreground transition-transform duration-300 ${
                      expandedStage === stageNum ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Stage Content */}
              {expandedStage === stageNum && (
                <div className="space-y-4 animate-slide-down">
                  {internships[stageNum].length > 0 ? (
                    internships[stageNum].map((internship) => (
                      <div
                        key={internship.id}
                        className="bg-card border border-border rounded-lg p-8 space-y-6"
                      >
                        {/* Position Info */}
                        <div className="space-y-2">
                          <h3 className="text-2xl font-semibold text-foreground">
                            {internship.title}
                          </h3>
                          <p className="text-lg text-accent font-medium">{internship.company}</p>
                          <p className="text-sm text-muted-foreground">{internship.period}</p>
                        </div>

                        {/* Description */}
                        <p className="text-foreground leading-relaxed">{internship.description}</p>

                        {/* Achievements */}
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-foreground">
                            Réalisations et apprentissages
                          </h4>
                          <ul className="space-y-2">
                            {internship.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex gap-3 text-foreground">
                                <span className="text-accent font-bold mt-0.5">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-foreground">
                            Outils et technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {internship.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-4 py-2 bg-secondary text-foreground text-sm rounded-full border border-border"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4">
                          <Button variant="outline">Voir le rapport</Button>
                          <Button>Télécharger le rapport</Button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="bg-card border border-dashed border-border rounded-lg p-12 flex flex-col items-center justify-center space-y-4 text-center">
                      <Construction className="w-12 h-12 text-accent opacity-50" />
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">Stage de deuxième année non encore effectué</h3>
                        <p className="text-muted-foreground max-w-md">
                          Ce stage se déroulera prochainement. Les détails de mes missions et réalisations seront ajoutés dès la fin de cette expérience.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8 space-y-4">
          <h3 className="text-2xl font-semibold text-foreground">Mon parcours en entreprise</h3>
          <p className="text-foreground leading-relaxed">
            Les stages sont des moments clés de ma formation en BTS SIO SISR. Ils me permettent de confronter mes connaissances théoriques à la réalité du terrain et de développer mon professionnalisme.
          </p>
          <p className="text-foreground leading-relaxed">
            Mon expérience chez Liebherr m'a permis de comprendre l'importance de l'outil informatique dans la gestion d'une chaîne logistique internationale et de perfectionner mes compétences en support et administration.
          </p>
        </div>
      </div>
    </div>
  );
}

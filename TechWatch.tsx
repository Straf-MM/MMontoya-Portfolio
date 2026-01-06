import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Section {
  id: string;
  title: string;
  content: string;
  subsections?: { title: string; content: string }[];
}

export default function TechWatch() {
  const [expandedSection, setExpandedSection] = useState<string>("definition");

  const sections: Section[] = [
    {
      id: "definition",
      title: "Qu'est-ce qu'une Backdoor ?",
      content:
        "Une backdoor (porte dérobée) est une méthode ou un point d'accès caché qui permet à un attaquant de contourner les mécanismes de sécurité normaux d'un système informatique. Elle peut être intentionnellement créée par un développeur ou installée par un attaquant après une compromission.",
      subsections: [
        {
          title: "Types de backdoors",
          content:
            "Les backdoors peuvent être classées en plusieurs catégories : les backdoors matérielles (intégrées au niveau du firmware), les backdoors logicielles (intégrées au code source), les backdoors web (exploitant les vulnérabilités web), et les backdoors réseau (permettant un accès à distance).",
        },
        {
          title: "Caractéristiques principales",
          content:
            "Les backdoors se caractérisent par leur discrétion, leur persistance, leur accès privilégié, et leur difficulté à être détectées. Elles permettent généralement un accès à distance au système compromis.",
        },
      ],
    },
    {
      id: "malware",
      title: "Backdoors dans les Malwares",
      content:
        "Les backdoors sont souvent utilisées comme composant principal dans les malwares avancés. Elles permettent aux attaquants de maintenir un accès persistant au système compromis même après la découverte et la suppression du malware initial.",
      subsections: [
        {
          title: "Exemples célèbres",
          content:
            "Parmi les malwares utilisant des backdoors, on peut citer : Stuxnet (qui contenait plusieurs backdoors pour le contrôle du système), Zeus (utilisé pour le vol bancaire), et Emotet (connu pour sa polyvalence et ses backdoors multiples).",
        },
        {
          title: "Mécanismes de persistance",
          content:
            "Les backdoors utilisent diverses techniques pour persister : modification des fichiers système, création de tâches planifiées, modification du registre Windows, injection de code, ou installation de rootkits.",
        },
      ],
    },
    {
      id: "utilisation",
      title: "Utilisation des Backdoors par les Attaquants",
      content:
        "Les attaquants utilisent les backdoors pour plusieurs objectifs : l'espionnage, le vol de données, le déploiement de rançongiciels, la création de botnets, ou simplement pour maintenir un accès à long terme au système.",
      subsections: [
        {
          title: "Cyberattaques ciblées",
          content:
            "Les backdoors sont essentielles dans les cyberattaques ciblées (APT - Advanced Persistent Threats). Elles permettent aux attaquants de rester inaperçus pendant des mois ou des années, collectant des informations sensibles.",
        },
        {
          title: "Botnets et attaques DDoS",
          content:
            "Les backdoors sont utilisées pour recruter des machines dans des botnets. Une fois compromises, ces machines peuvent être utilisées pour lancer des attaques DDoS massives ou envoyer du spam.",
        },
      ],
    },
    {
      id: "detection",
      title: "Détection et Prévention",
      content:
        "La détection des backdoors est complexe car elles sont conçues pour rester cachées. Plusieurs approches peuvent être utilisées pour les identifier et les prévenir.",
      subsections: [
        {
          title: "Techniques de détection",
          content:
            "Les techniques incluent : l'analyse comportementale (détection des connexions réseau anormales), l'analyse des fichiers système, l'utilisation d'outils de forensique, et le monitoring des processus en cours d'exécution.",
        },
        {
          title: "Mesures de prévention",
          content:
            "Pour prévenir les backdoors : maintenir les systèmes à jour avec les derniers patches, utiliser un antivirus et un pare-feu, implémenter le contrôle d'accès strict, effectuer des audits de sécurité réguliers, et former les utilisateurs aux bonnes pratiques.",
        },
      ],
    },
    {
      id: "impact",
      title: "Impact et Risques",
      content:
        "L'impact des backdoors peut être dévastateur pour les organisations. Elles peuvent entraîner des pertes financières considérables, des dégâts à la réputation, et la compromission de données sensibles.",
      subsections: [
        {
          title: "Risques pour les entreprises",
          content:
            "Les entreprises risquent la perte de propriété intellectuelle, le vol de données clients, l'interruption de service, et les coûts de remédiation. Les attaquants peuvent également utiliser les backdoors pour lancer des attaques contre les partenaires de l'entreprise.",
        },
        {
          title: "Implications légales et réglementaires",
          content:
            "Les organisations doivent respecter des réglementations comme le RGPD en cas de compromission de données. Les backdoors peuvent entraîner des amendes substantielles et des obligations légales de notification.",
        },
      ],
    },
    {
      id: "tendances",
      title: "Tendances Actuelles et Futures",
      content:
        "Les backdoors évoluent constamment pour contourner les mesures de sécurité. Les tendances actuelles incluent l'utilisation de techniques de chiffrement avancées, l'exploitation de vulnérabilités zero-day, et l'intégration dans les chaînes d'approvisionnement logicielles.",
      subsections: [
        {
          title: "Backdoors dans le cloud",
          content:
            "Avec la migration vers le cloud, les attaquants ciblent de plus en plus les services cloud. Les backdoors dans les environnements cloud peuvent affecter plusieurs clients simultanément.",
        },
        {
          title: "Backdoors et IA",
          content:
            "L'émergence de l'IA crée de nouveaux vecteurs d'attaque. Les backdoors peuvent être intégrées dans les modèles d'IA pour compromettre les systèmes qui les utilisent.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Veille Technologique</h1>
          <p className="text-lg text-muted-foreground">
            Les Backdoors : Portes Dérobées et Menaces de Sécurité
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-card border border-border rounded-lg p-8 mb-12 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
          <p className="text-foreground leading-relaxed">
            Ce document présente une étude complète sur les backdoors, leurs mécanismes
            d'utilisation dans les malwares, et leur impact sur la sécurité informatique. Les
            backdoors représentent l'une des menaces les plus sophistiquées et les plus
            dangereuses dans le paysage de la cybersécurité moderne.
          </p>
          <p className="text-foreground leading-relaxed">
            Comprendre les backdoors est essentiel pour tout professionnel de l'informatique,
            car elles peuvent affecter n'importe quel système, du plus petit ordinateur personnel
            aux plus grandes infrastructures d'entreprise.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="bg-card border border-border rounded-lg overflow-hidden">
              {/* Section Header */}
              <button
                onClick={() =>
                  setExpandedSection(expandedSection === section.id ? "" : section.id)
                }
                className="w-full p-6 hover:bg-secondary transition-colors text-left group flex items-center justify-between"
              >
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {section.title}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-4 ${
                    expandedSection === section.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Section Content */}
              {expandedSection === section.id && (
                <div className="px-6 pb-6 space-y-6 border-t border-border pt-6 animate-slide-down">
                  <p className="text-foreground leading-relaxed">{section.content}</p>

                  {/* Subsections */}
                  {section.subsections && (
                    <div className="space-y-6">
                      {section.subsections.map((subsection, idx) => (
                        <div key={idx} className="space-y-2">
                          <h4 className="text-lg font-semibold text-accent">
                            {subsection.title}
                          </h4>
                          <p className="text-foreground leading-relaxed">{subsection.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="mt-12 bg-card border border-border rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Conclusion</h2>
          <p className="text-foreground leading-relaxed">
            Les backdoors représentent une menace évolutive et complexe dans le domaine de la
            cybersécurité. Leur sophistication croissante et leur utilisation généralisée dans
            les malwares avancés en font un sujet d'étude crucial pour les professionnels de la
            sécurité informatique.
          </p>
          <p className="text-foreground leading-relaxed">
            La défense contre les backdoors nécessite une approche multi-couches combinant la
            prévention, la détection, et la réaction. Une vigilance constante et une mise à jour
            régulière des connaissances sont essentielles pour rester protégé contre ces menaces
            sophistiquées.
          </p>
        </div>
      </div>
    </div>
  );
}

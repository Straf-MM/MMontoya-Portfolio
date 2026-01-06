import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Network, Briefcase, BookOpen, Award, Mail, Server, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-card to-background opacity-50" />
        
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-semibold text-accent px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                  ✨ Bienvenue sur le portfolio de Manuel Montoya
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Étudiant en <span className="text-accent">BTS SIO SISR</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Futur administrateur systèmes et réseaux, passionné par l'infrastructure et la cybersécurité.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/internships">
                <a>
                  <Button className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg flex items-center gap-2">
                    Voir mes stages
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    Me contacter
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-left">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4">À propos de moi</h2>
                <div className="w-12 h-1 bg-accent rounded-full" />
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                Je suis Manuel Montoya, actuellement en deuxième année de BTS SIO (Services Informatiques aux Organisations), spécialisé en <strong>SISR</strong> (Solutions d'Infrastructure, Systèmes et Réseaux).
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Mon parcours est résolument tourné vers les métiers de l'infrastructure. Je m'intéresse particulièrement à la gestion des réseaux, à l'administration système et à la sécurisation des données, tout en gardant une base solide en développement pour automatiser et optimiser les infrastructures.
              </p>
              <div className="flex gap-4 pt-4">
                <Link href="/projects">
                  <a>
                    <Button variant="outline">Mes projets</Button>
                  </a>
                </Link>
              </div>
            </div>

            <div className="space-y-4 animate-slide-right">
              <div className="bg-background rounded-lg p-6 border border-border hover:border-accent transition-all">
                <div className="flex items-start gap-4">
                  <Network className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Réseaux & Systèmes</h3>
                    <p className="text-sm text-muted-foreground">Cisco, Windows Server, Linux, Virtualisation</p>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 border border-border hover:border-accent transition-all">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Expérience</h3>
                    <p className="text-sm text-muted-foreground">Stages en entreprise et projets d'infrastructure</p>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 border border-border hover:border-accent transition-all">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Formation</h3>
                    <p className="text-sm text-muted-foreground">BTS SIO 2ème année - Option SISR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Mes domaines de compétence</h2>
            <p className="text-lg text-muted-foreground">Une expertise centrée sur l'infrastructure et la connectivité</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group bg-card rounded-lg p-8 border border-border hover:border-accent hover:bg-secondary/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: "0ms" }}>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Server className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Administration Systèmes</h3>
              <p className="text-muted-foreground mb-4">Installation, configuration et maintenance de serveurs Windows et Linux en environnement virtualisé.</p>
              <Link href="/internships">
                <a className="text-accent text-sm font-medium hover:underline flex items-center gap-1">
                  Voir les stages <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group bg-card rounded-lg p-8 border border-border hover:border-accent hover:bg-secondary/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Network className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Infrastructure Réseau</h3>
              <p className="text-muted-foreground mb-4">Conception et déploiement de réseaux locaux, configuration de switchs et routeurs (VLAN, routage).</p>
              <Link href="/projects">
                <a className="text-accent text-sm font-medium hover:underline flex items-center gap-1">
                  Mes projets <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="group bg-card rounded-lg p-8 border border-border hover:border-accent hover:bg-secondary/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <ShieldCheck className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Cybersécurité & Dev</h3>
              <p className="text-muted-foreground mb-4">Mise en place de politiques de sécurité et automatisation via des scripts de développement.</p>
              <Link href="/tech-watch">
                <a className="text-accent text-sm font-medium hover:underline flex items-center gap-1">
                  Veille technologique <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Explorez mon portfolio</h2>
            <p className="text-muted-foreground">Accédez rapidement aux différentes sections</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/projects">
              <a className="group">
                <div className="bg-background rounded-lg p-6 border border-border hover:border-accent hover:bg-secondary transition-all duration-300 text-center">
                  <Network className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground">Projets</h3>
                  <p className="text-xs text-muted-foreground mt-1">En développement</p>
                </div>
              </a>
            </Link>

            <Link href="/internships">
              <a className="group">
                <div className="bg-background rounded-lg p-6 border border-border hover:border-accent hover:bg-secondary transition-all duration-300 text-center">
                  <Briefcase className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground">Stages</h3>
                  <p className="text-xs text-muted-foreground mt-1">1 expérience</p>
                </div>
              </a>
            </Link>

            <Link href="/tech-watch">
              <a className="group">
                <div className="bg-background rounded-lg p-6 border border-border hover:border-accent hover:bg-secondary transition-all duration-300 text-center">
                  <BookOpen className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground">Veille Tech</h3>
                  <p className="text-xs text-muted-foreground mt-1">En cours</p>
                </div>
              </a>
            </Link>

            <Link href="/certificates">
              <a className="group">
                <div className="bg-background rounded-lg p-6 border border-border hover:border-accent hover:bg-secondary transition-all duration-300 text-center">
                  <Award className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground">Certificats</h3>
                  <p className="text-xs text-muted-foreground mt-1">À venir</p>
                </div>
              </a>
            </Link>

            <Link href="/contact">
              <a className="group md:col-span-2">
                <div className="bg-background rounded-lg p-6 border border-border hover:border-accent hover:bg-secondary transition-all duration-300 text-center">
                  <Mail className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground">Contact</h3>
                  <p className="text-xs text-muted-foreground mt-1">Coordonnées</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center space-y-6 animate-slide-up">
          <h2 className="text-3xl font-bold text-foreground">Intéressé par mon profil ?</h2>
          <p className="text-lg text-muted-foreground">N'hésitez pas à me contacter pour discuter de collaborations ou d'opportunités en systèmes et réseaux.</p>
          <Link href="/contact">
            <a>
              <Button className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-6 text-lg">
                Me contacter maintenant
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

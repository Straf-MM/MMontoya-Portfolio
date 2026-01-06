import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Construction } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  date: string;
  link?: string;
  github?: string;
  image?: string;
}

export default function Projects() {
  const [projects] = useState<Project[]>([]);

  return (
    <div className="min-h-screen py-20 px-4 animate-fade-in">
      <div className="container mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Mes Projets</h1>
          <p className="text-lg text-muted-foreground">
            Découvrez les projets et réalisations techniques sur lesquels je travaille.
          </p>
        </div>

        {/* Projects Grid or Empty State */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-card rounded-lg border border-border overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Project Image */}
                {project.image && (
                  <div className="w-full h-48 bg-secondary overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.date}</p>
                  </div>

                  <p className="text-foreground text-sm leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Voir
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 space-y-6 bg-card border border-dashed border-border rounded-xl animate-pulse">
            <Construction className="w-16 h-16 text-accent opacity-50" />
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">Projets en cours de développement</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Je travaille actuellement sur plusieurs projets d'infrastructure réseau et d'administration système. Ils seront bientôt disponibles ici.
              </p>
            </div>
          </div>
        )}

        {/* Empty State Message */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            "L'innovation est le fruit d'un travail constant." - De nouveaux projets arrivent bientôt.
          </p>
        </div>
      </div>
    </div>
  );
}

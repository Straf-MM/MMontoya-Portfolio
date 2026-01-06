import { useTheme, type Theme } from "@/contexts/ThemeContext";
import { Link } from "wouter";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    if (setTheme) {
      const themes: Theme[] = ["light", "dark", "holographic", "sunset", "ocean"];
      const currentIndex = themes.indexOf(theme);
      const nextTheme: Theme = themes[(currentIndex + 1) % themes.length];
      setTheme(nextTheme);
    }
  };

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/projects", label: "Projets" },
    { href: "/internships", label: "Stages" },
    { href: "/tech-watch", label: "Veille Tech" },
    { href: "/certificates", label: "Certificats" },
    { href: "/contact", label: "Contact" },
  ];

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Moon className="h-5 w-5" />;
      case "dark":
        return <Sun className="h-5 w-5" />;
      case "holographic":
        return <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-blue-500" />;
      case "sunset":
        return <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-rose-500" />;
      case "ocean":
        return <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />;
      default:
        return <Moon className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <a className="text-2xl font-bold text-foreground hover:opacity-80 transition-opacity">
                Manuel Montoya
              </a>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                    {item.label}
                  </a>
                </Link>
              ))}
            </nav>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
                title={`Thème actuel: ${theme}`}
              >
                {getThemeIcon()}
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span
                  className={`w-6 h-0.5 bg-foreground transition-all ${
                    mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-foreground transition-all ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-foreground transition-all ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 animate-slide-down">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a
                      className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="animate-fade-in">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Manuel Montoya. Tous droits réservés.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/manuel-montoya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Straf-MM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Theme Selector - Hidden by default */}
          <div className="mt-6 pt-6 border-t border-border">
            <details className="cursor-pointer group">
              <summary className="text-xs text-muted-foreground hover:text-foreground transition-colors select-none">
                🎨 Sélecteur de thème
              </summary>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  onClick={() => setTheme?.("light")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    theme === "light"
                      ? "bg-foreground text-background"
                      : "bg-secondary text-foreground hover:bg-muted"
                  }`}
                >
                  Clair
                </button>
                <button
                  onClick={() => setTheme?.("dark")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    theme === "dark"
                      ? "bg-foreground text-background"
                      : "bg-secondary text-foreground hover:bg-muted"
                  }`}
                >
                  Sombre
                </button>
                <button
                  onClick={() => setTheme?.("holographic")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    theme === "holographic"
                      ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white"
                      : "bg-secondary text-foreground hover:bg-muted"
                  }`}
                >
                  Holographique
                </button>
                <button
                  onClick={() => setTheme?.("sunset")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    theme === "sunset"
                      ? "bg-gradient-to-r from-orange-500 to-rose-500 text-white"
                      : "bg-secondary text-foreground hover:bg-muted"
                  }`}
                >
                  Sunset
                </button>
                <button
                  onClick={() => setTheme?.("ocean")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    theme === "ocean"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                      : "bg-secondary text-foreground hover:bg-muted"
                  }`}
                >
                  Ocean
                </button>
              </div>
            </details>
          </div>
        </div>
      </footer>
    </div>
  );
}

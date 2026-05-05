import { useState } from "react";
import { Keyboard, Menu, X } from "lucide-react";

const navLinks = [
  { id: "Home", label: "Accueil" },
  { id: "About", label: "À propos" },
  { id: "Experiences", label: "Expériences" },
  { id: "Projects", label: "Projets" },
];

function Navbar(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <a href="#Home" className="brand-link" aria-label="Retour à l'accueil">
            <span className="brand-mark">
              <Keyboard size={22} aria-hidden="true" />
            </span>
            <span>
              ANDRY <span className="text-[var(--color-primary)]">DEV</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="nav-link"
              >
                {link.label}
              </button>
            ))}
          </nav>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="icon-button md:hidden"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        </div>
      </header>

      <div
        className={`mobile-panel md:hidden ${isMobileMenuOpen ? "is-open" : ""}`}
      >
        <nav aria-label="Navigation mobile">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="nav-link text-left"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div
          className="mobile-overlay md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Navbar;

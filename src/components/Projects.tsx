import { Github, Video } from "lucide-react";
import Title from "./Title";

import img7 from "../assets/projects/7.png";
import img8 from "../assets/projects/8.png";
import img9 from "../assets/projects/9.png";
import img10 from "../assets/projects/10.png";
import img11 from "../assets/projects/11.png";
import img12 from "../assets/projects/12.png";
import img13 from "../assets/projects/13.png";
import img14 from "../assets/projects/14.png";

const projects = [
  {
    id: 1,
    title: "Portfolio interactif",
    description:
      "Portfolio conçu en React, TypeScript et DaisyUI pour présenter mon profil, mes expériences et mes réalisations.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    demoLink: "#",
    repoLink: "#",
    image: img10,
  },
  {
    id: 2,
    title: "Site web ThinkNat",
    description:
      "Site vitrine valorisant des produits artisanaux et locaux, avec une interface d'administration dédiée.",
    technologies: ["Symfony", "Bootstrap", "MySQL"],
    demoLink: "https://youtu.be/kYwdAiTJOWk",
    repoLink: "#",
    image: img11,
  },
  {
    id: 3,
    title: "Ambassade de Chine",
    description:
      "Site web et back-office pour organiser des contenus culturels, touristiques et événementiels.",
    technologies: ["Symfony", "CSS", "MySQL"],
    demoLink: "https://youtu.be/hwK9rQuMPB4",
    repoLink: "#",
    image: img12,
  },
  {
    id: 4,
    title: "Formafusion Agenda",
    description:
      "Développement front, back et maintenance d'un module agenda pour une plateforme de gestion de formation.",
    technologies: ["Laravel", "jQuery", "MySQL"],
    demoLink: "https://youtu.be/lhJYq9pvrdk",
    repoLink: "#",
    image: img7,
  },
  {
    id: 5,
    title: "Formafusion Lieu & Salle",
    description:
      "Module de gestion des lieux et salles pensé pour simplifier l'organisation des sessions de formation.",
    technologies: ["Laravel", "JavaScript", "MySQL"],
    demoLink: "#",
    repoLink: "#",
    image: img8,
  },
  {
    id: 6,
    title: "Formafusion Catalogue",
    description:
      "Catalogue de formations avec fonctionnalités de gestion et consultation adaptées aux centres de formation.",
    technologies: ["Laravel", "jQuery", "MySQL"],
    demoLink: "#",
    repoLink: "#",
    image: img9,
  },
  {
    id: 7,
    title: "Pokedex",
    description:
      "Application fullstack avec filtres, tri, pagination, détails animés et interface responsive.",
    technologies: ["React", "Python", "FastAPI"],
    demoLink: "#",
    repoLink: "https://github.com/rakotoarisoandry85/pokedex-fullstack",
    image: img13,
  },
  {
    id: 8,
    title: "Mini jeu de combat naval",
    description:
      "Jeu React joueur contre IA avec placement de navires, tirs alternés et logique de victoire.",
    technologies: ["React", "JavaScript", "CSS"],
    demoLink: "#",
    repoLink: "https://github.com/rakotoarisoandry85/react_combat_naval.git",
    image: img14,
  },
];

const Projects = () => {
  return (
    <section className="section-shell" id="Projects">
      <Title title="Mes projets" />
      <p className="section-intro">
        Une sélection de projets web couvrant conception d'interfaces,
        développement backend, intégration d'APIs et logique applicative.
      </p>

      <div className="projects-grid">
        {projects.map((project) => {
          const hasDemo = project.demoLink !== "#";
          const hasRepo = project.repoLink !== "#";

          return (
            <article key={project.id} className="project-card">
              <img
                src={project.image}
                alt={`Capture du projet ${project.title}`}
                className="project-image"
              />

              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="tech-list">
                {project.technologies.map((tech) => (
                  <span key={`${project.id}-${tech}`} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {hasDemo ? (
                  <a
                    className="btn portfolio-button button-primary"
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Voir la démonstration de ${project.title}`}
                  >
                    Demo
                    <Video className="w-4 h-4" aria-hidden="true" />
                  </a>
                ) : (
                  <span
                    className="btn portfolio-button button-secondary is-disabled"
                    aria-disabled="true"
                  >
                    Demo
                    <Video className="w-4 h-4" aria-hidden="true" />
                  </span>
                )}

                {hasRepo ? (
                  <a
                    className="icon-link"
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Voir le code source de ${project.title}`}
                  >
                    <Github className="w-5 h-5" aria-hidden="true" />
                  </a>
                ) : (
                  <span
                    className="icon-link is-disabled"
                    aria-label={`Code source indisponible pour ${project.title}`}
                    aria-disabled="true"
                  >
                    <Github className="w-5 h-5" aria-hidden="true" />
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

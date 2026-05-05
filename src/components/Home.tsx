import { ArrowRight, Mail } from "lucide-react";
import img from "../assets/Img.jpg";

const highlights = [
  { label: "Stack principale", value: "React, Laravel, Symfony" },
  { label: "Approche", value: "Front, back et gestion projet" },
  { label: "Domaines", value: "Web, APIs et bases de données" },
];

function Home() {
  return (
    <section id="Home" className="section-shell hero-section">
      <div className="hero-copy">
        <span className="eyebrow">Développeur fullstack</span>
        <h1>
          Bonjour, je suis <span>Andry</span>.
        </h1>
        <p>
          Ingénieur en Informatique de Gestion, spécialisé en Génie Logiciel et
          Intelligence Artificielle, je conçois des applications web solides avec
          React, Laravel et Symfony. Mon travail relie interfaces claires, APIs
          fiables et bases de données bien structurées pour répondre aux besoins
          réels des entreprises.
        </p>

        <div className="hero-actions">
          <a href="#Projects" className="btn portfolio-button button-primary">
            Voir mes projets
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
          <a href="#Contact" className="btn portfolio-button button-secondary">
            Contactez-moi
            <Mail className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>

        <div className="highlight-row">
          {highlights.map((item) => (
            <div key={item.label} className="highlight-item">
              <strong>{item.label}</strong>
              {item.value}
            </div>
          ))}
        </div>
      </div>

      <div className="hero-media">
        <img src={img} alt="Portrait d'Andry" />
        <div className="hero-note">Laravel · Symfony · React</div>
      </div>
    </section>
  );
}

export default Home;

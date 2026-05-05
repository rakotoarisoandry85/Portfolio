import Title from "./Title"
import img from '../assets/fotios-photos.jpg'
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

const aboutSections =[
    {
        id:1,
        title:"Développeur Frontend",
        description:"Je construis des interfaces lisibles, réactives et faciles à parcourir.",
        icon:<LetterText size={24}/>
    },

    {
        id:2,
        title:"Développeur Backend",
        description:"Je conçois des APIs robustes et des bases de données adaptées aux usages métier.",
        icon:<CalendarSync size={24}/>
    },

    {
        id:3,
        title:"Passionné par l'UI/UX",
        description:"Je cherche l'équilibre entre esthétique, clarté et efficacité pour l'utilisateur.",
        icon:<Paintbrush size={24}/>
    },
];
function About() {
  return (
    <section className="section-band" id="About">
        <div className="section-shell about-grid">
            <div className="about-media">
                <img src={img} alt="Espace de travail avec un ordinateur portable"/>
            </div>

            <div>
                <Title title="À propos"/>
                <p className="section-intro">
                    Mon profil rassemble développement web, gestion de projets numériques
                    et curiosité pour l'intelligence artificielle. J'aime transformer des
                    besoins concrets en parcours simples, cohérents et maintenables.
                </p>

                <div className="info-stack">
                {
                    aboutSections.map((section)=>(
                        <article key={section.id} className="info-card">
                            <div className="info-icon" aria-hidden="true">
                                {section.icon}
                            </div>
                            <div>
                                <h3>
                                    {section.title}
                                </h3>
                                <p>
                                    {section.description}
                                </p>
                            </div>
                        </article>
                    ))
                }
                </div>
            </div>

        </div>
    </section>

  )
}

export default About

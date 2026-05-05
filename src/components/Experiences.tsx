import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPHP from "../assets/techno/php.png";
import imgSYMFONY from "../assets/techno/symfony.png";
import imgLARAVEL from "../assets/techno/laravel.png";
import imgPYTHON from "../assets/techno/python.png";

import thinknat from "../assets/companies/Logo.png";
import dpe from "../assets/companies/dpe.png";
import logoChine from "../assets/companies/logoChine.png";
import upskill from "../assets/companies/upskill.png";
import MoneyMaker from "../assets/companies/MoneyMaker.png";
import bfm from "../assets/companies/bfm.png";

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "PHP", image: imgPHP },
    { id: 9, name: "Laravel", image: imgLARAVEL },
    { id: 10, name: "Symfony", image: imgSYMFONY },
    { id: 11, name: "Python", image: imgPYTHON },
];


const experiences = [
    {
        id: 1,
        role: "Stagiaire Développeur d'application",
        company: "Banque Foibe Madagascar",
        period: "Février 2026 - Avril 2026",
        description: [
            "Exportation des données de format Excel vers l'application.",
            "Mise en place de FastAPI de l'application.",
            "Calcul des scores de conformité.",           
        ],
        image: bfm,
    },
    {
        id: 2,
        role: "Développeur Web",
        company: "Upskill",
        period: "15 juin 2023 - Septembre 2025",
        description: [
            "Cadrage des photos des utilisateurs du site(Formateurs, Apprenants,...) ",
            "Mise en place du filtrage des projets de formation.",
            "Gestion des événements du calendrier de l'application(Ajout, modification, suppression des séances dans le calendrier).",
            "Synchronisation des évènements(séances) avec Google Calendar.",
        ],
        image: upskill,
    },
    {
        id: 3,
        role: "Développeur Web",
        company: "Ambassade de Chine",
        period: "Janvier 2023 - Septembre 2023",
        description: [
            "Création de pages web attrayantes mettant en valeur les richesses culturelles et touristiques de la Chine et de Madagascar.",
            "Mise en place d’un back-office pour organiser et gérer les évènements.",
        ],
        image: logoChine,
    },
    {
        id: 4,
        role: "Stagiaire Développeur Web",
        company: "DPE",
        period: "Octobre 2022 - Décembre 2022",
        description: [
            "Migration des données Excel en base de donnée relationnelle (MySql).",
            "Création d’une interface de communication pour la consultation et la recherche des données (par département, par nom d’établissement,…).",
        ],
        image: dpe,
    },
    {
        id: 5,
        role: "Développeur Web",
        company: "ThinkNat",
        period: "Mars 2022 - Septembre 2022",
        description: [
            "Mise en valeur des produits artisanaux et locaux (produits à titre décoratifs comme des vases, fontaines,…) sur le site.",
            "Mise en place d’un back-office pour organiser et gérer les produits.",
        ],
        image: thinknat,
    },
    {
        id: 6,
        role: "Responsable de site",
        company: "Money Maker",
        period: "Février 2010 - Janvier 2021",
        description: [
            "Gestion de recettes journalières des machines à sous et des ressources humaines.",
            "Supervision du personnel.",
        ],
        image: MoneyMaker,
    },
];

const Experiences = () => {
    return (
        <section className="section-shell" id="Experiences">
            <Title title="Expériences" />
            <p className="section-intro">
                Une progression construite entre stages, missions en entreprise et
                projets freelance, avec un fil conducteur : livrer des outils web
                utiles, structurés et faciles à faire évoluer.
            </p>

            <div className="experience-layout">
                <aside className="skills-panel" aria-label="Technologies maîtrisées">
                    <div className="skills-grid">
                    {skills.map((skill) => (
                        <div key={skill.id} className="skill-tile">
                            <img src={skill.image} alt="" aria-hidden="true" />
                            <span>{skill.name}</span>
                        </div>
                    ))}
                    </div>
                </aside>

                <div className="experience-list-wrap">
                    {experiences.map((experience) => (
                        <article
                            key={experience.id}
                            className="project-card experience-card"
                        >
                            <div className="experience-header">
                                <img
                                    src={experience.image}
                                    alt={`Logo ${experience.company}`}
                                    className="company-logo"
                                />
                                <div>
                                    <h3 className="experience-title">
                                        {experience.role}, {experience.company}
                                    </h3>
                                    <span className="experience-meta">{experience.period}</span>
                                </div>
                            </div>
                            <ul className="experience-list">
                                {experience.description.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experiences

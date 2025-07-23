import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";

import thinknat from "../assets/companies/Logo.png";
import dpe from "../assets/companies/dpe.png";
import logoChine from "../assets/companies/logoChine.png";
import upskill from "../assets/companies/upskill.png";
import MoneyMaker from "../assets/companies/MoneyMaker.png";

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgNEXT },
    // { id: 9, name: "Prisma", image: imgPRISMA },
];


const experiences = [
    {
        id: 1,
        role: "Développeur Web",
        company: "Upskill",
        period: "15 juin 2023 - Présent",
        description: [
            "Cadrage des photos des utilisateurs du site(Formateurs, Apprenants,...) ",
            "Mise en place du filtrage des projets de formation.",
            "Gestion des événements du calendrier de l'application(Ajout, modification, suppression des séances dans le calendrier).",
            "Synchronisation des évènements(séances) avec Google Calendar.",
        ],
        image: upskill,
    },
    {
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
        role: "Résponsable de site",
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
        <div id="Experiences">
            <Title title="Expériences" />
            <div className="flex  flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4  justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className=" flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name}
                                    className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((expericence) => (
                        <div
                            key={expericence.id}
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center">
                                <img
                                    src={expericence.image}
                                    alt={expericence.company}
                                    className="object-cover h-10 w-10"
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {expericence.role} , {expericence.company}
                                    </h1>
                                    <span className="text-sm">{expericence.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {expericence.description.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences
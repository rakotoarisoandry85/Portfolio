import Title from "./Title"

// import img1 from '../assets/projects/1.png';
// import img2 from '../assets/projects/2.png';
// import img3 from '../assets/projects/3.png';
// import img4 from '../assets/projects/4.png';
// import img5 from '../assets/projects/5.png';
// import img6 from '../assets/projects/6.png';
import img7 from '../assets/projects/7.png';
import img8 from '../assets/projects/8.png';
import img9 from '../assets/projects/9.png';
import img10 from '../assets/projects/10.png';
import img11 from '../assets/projects/11.png';
import img12 from '../assets/projects/12.png';
import { Github, Video } from "lucide-react";


const projects = [
    // {
    //     id: 1,
    //     title: 'Gestionnaire de tâches',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    //     technologies: ['React', 'Node.js', 'Tailwind CSS'],
    //     demoLink: '#',
    //     repoLink: '#',
    //     image: img1,
    // },
    // {
    //     id: 2,
    //     title: 'Plateforme E-commerce',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    //     technologies: ['Next.js', 'TypeScript', 'Prisma'],
    //     demoLink: '#',
    //     repoLink: '#',
    //     image: img2,
    // },
    // {
    //     id: 3,
    //     title: 'Portfolio interactif',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    //     technologies: ['HTML', 'CSS', 'JavaScript'],
    //     demoLink: '#',
    //     repoLink: '#',
    //     image: img3,
    // },
      {
        id: 10,
        title: 'Portfolio interactif',
        description: 'Portfolio interactif conçu en React et typescript avec la technologie daysyUI ',
        technologies: ['REACT', 'CSS Tailwind', 'TypeScript'],
        demoLink: '#',
        repoLink: '#',
        image: img10,
    },
    {
        id: 11,
        title: 'Site web Thinknat',
        description: 'Site qui met en valeur des produits artisanaux et locaux comme des vases, fontaines,… de la société Thinknat  ',
        technologies: ['Symfony', 'CSS BOOTSTRAP', 'MySql'],
        demoLink: '#',
        repoLink: '#',
        image: img11,
    },
    {
        id: 12,
        title: 'Site web pour l\'ambassade de Chine',
        description: 'Développement d’un site web et d’une back-office destiné à l’ambassade de Chine à Madagascar',
        technologies: ['Symfony', 'CSS', 'MySql'],
        demoLink: '#',
        repoLink: '#',
        image: img12,
    },
    // {
    //     id: 4,
    //     title: 'Application de Chat en temps réel',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    //     technologies: ['React', 'Socket.io', 'Express.js'],
    //     demoLink: '#',
    //     repoLink: '#',
    //     image: img4,
    // },
    // {
    //     id: 5,
    //     title: 'Système de réservation de salles',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    //     technologies: ['Next.js', 'MongoDB', 'Chakra UI'],
    //     demoLink: '#',
    //     repoLink: '#',
    //     image: img5,
    // },
    // {
    //     id: 6,
    //     title: 'Analyseur de sentiment',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
    //     technologies: ['Python', 'Flask', 'NLTK'],
    //     demoLink: '#',
    //     repoLink: '#',
    //     image: img6,
    // },
     {
        id: 7,
        title: 'Formafusion(Agenda)',
        description: 'Développement Front , Back et maintenance pour une plateforme de gestion de formation conçu pour répondre aux besoins spécifiques des centres de formation et des entreprises',
        technologies: ['Laravel', 'Jquery','MySQL'],
        demoLink: 'https://youtu.be/lhJYq9pvrdk',
        repoLink: '#',
        image: img7,
    },
    {
        id: 8,
        title: 'Formafusion(Lieu&Salle)',
        description: 'Développement Front , Back et maintenance pour une plateforme de gestion de formation conçu pour répondre aux besoins spécifiques des centres de formation et des entreprises',
        technologies: ['Laravel', 'Javascript','MySQL'],
        demoLink: '#',
        repoLink: '#',
        image: img8,
    },
    {
        id: 9,
        title: 'Formafusion(Catalogue)',
        description: 'Développement Front , Back et maintenance pour une plateforme de gestion de formation conçu pour répondre aux besoins spécifiques des centres de formation et des entreprises',
        technologies: ['Laravel', 'Jquery','MySQL'],
        demoLink: '#',
        repoLink: '#',
        image: img9,
    },
];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4 ">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>

                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn btn-accent w-2/3" href={project.demoLink} target="_blank">
                                Demo
                                <Video className="w-4" />
                            </a>

                            <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                                <Github className="w-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
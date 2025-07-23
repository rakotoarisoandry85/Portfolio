import { Mail } from "lucide-react"
import img from "../assets/img.jpg"
function Home() {
  return (
    <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">

            <div className="flex flex-col ">
            <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">Bonjour ,<br/> je suis{"  "}
                <span className="text-green-500"> Andry </span>
            </h1>
            <p className="my-4 text-md text-center md:text-left">
                Je suis un développeur fullstack <br/>
                Ingénieur en Informatique de Gestion spécialisé en Génie Logiciel et Intelligence Artificielle,<br/>
                je possède une expertise en développement web et gestion de projets numériques avec des technologies comme Laravel,<br/>
                Symfony et React. Fort d’expériences en entreprise et en freelance,<br/>
                j’ai travaillé sur des projets variés allant de la conception d’applications web à l’intégration d’APIs comme Google Calendar.<br/>
                Passionné par l’innovation, je continue d’enrichir mes compétences en développement<br/> 
                et en gestion de bases de données pour proposer des solutions performantes et adaptées aux besoins des entreprises.<br/>
                Contactez-moi si vous avez besoin de mes services.
            </p>
            <a href="#" className="btn btn-primary md:w-fit   ">
                <Mail className="w-5 h-5"/>
                Contactez-moi
            </a>
        </div>
     
        <div className="md:ml-60">
            <img src={img} alt=""className="w-96 h-96 object-cover border-8 border-primary shadow-xl"
          style={{
            borderRadius: "48.67% 53.67% 49.67% 24.33% / 48.67% 53.67% 49.67% 24.33%",
            borderWidth: 4,
           
          }}/>
        </div>
    </div>
  )
}

export default Home
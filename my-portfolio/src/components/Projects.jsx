import Project from "./Project"
import TRMA from '../recursos/TRMA.jpeg'
import TRMW from '../recursos/TRMW.png'
import JALULA from '../recursos/JALULA.PNG'

const Projects = () => {

    const projects = [
        {
            title: "TRMW",
            description: "Una sencilla pagina con un login a traves de Facebook o Google que te recomienda una pelicula aleatoria segun diferentes criterios configurables",
            github: "https://github.com/IvanAlmeidaReyes13/TFG",
            tecnologias:"ReactJS",
            img:TRMW,
        },
        {
            title: "TRMA",
            description: "Sencilla aplicacion movil para Android (y casi, quedan pequeños detalles) para IOS que te recomienda una pelicula aleatoria segun diferentes criterios configurables",
            github: "https://github.com/IvanAlmeidaReyes13/TFG-mobile",
            tecnologias:"ReactJS",
            img:TRMA,
        },
        {
            title: "GESTOR JALULA",
            description: "Este es un simple gestor para un hotel que hice enteramente en PHP. Como se puede apreciar fue uno de mis primeros proyectos.",
            github: "https://github.com/IvanAlmeidaReyes13/GestiorHotel",
            tecnologias:"PHP",
            img:JALULA,
            
        }
      
    ]

    return (
        <div className="wrapper" id="projects">
            <h2>Projects</h2>
        <div className="projects">
            {
                projects.map(project => {
                    return <Project 
                            title={project.title}
                            description={project.description}
                            github={project.github}
                            tecnologias={project.tecnologias}
                            img={project.img}
                            key={Math.floor(Math.random() * 100000)}/>
                })
            }
        </div>
        </div>
    )
}

export default Projects

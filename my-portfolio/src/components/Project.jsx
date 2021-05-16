import GitHubIcon from '../recursos/GitHub-Mark.png'
import {useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css";


const Project = (props) => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    const {title, description, img, tecnologias,github} = props

    return(
        <div className="project" data-aos="fade-down">
            <h3>{title}</h3>
            <div className="image" style={{ backgroundImage: `url(${img})`}}>
            </div>
            <div className="description" style={{display:'flex'}}>
                <p>{description}</p>
                
                <a className='m-2' href={github}><img  className='mb-2 mt-4'  style={{float:'right'}} src={GitHubIcon} height='50px'></img></a>
            </div>
        </div>
    )
}

export default Project
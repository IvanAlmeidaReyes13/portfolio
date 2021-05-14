
import {useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css";


const Project = (props) => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    const {title, description, img, vercel, github} = props

    return(
        <div className="project" data-aos="fade-down">
            <h3>{title}</h3>
            <div className="image" style={{ backgroundImage: `url(${img})`}}>
            </div>
            <div className="description">
                <p>{description}</p>
                <div className="links">
 
                </div>
            </div>
        </div>
    )
}

export default Project
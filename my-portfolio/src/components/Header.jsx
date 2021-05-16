import IAR_9340 from '../recursos/IAR_9340.jpg'
import {useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css";


const Header = () => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <div className="header">
            <img src={IAR_9340} alt="Profile" className="profile" width="150" height="150" data-aos="fade-right"/>
            <div className="brief" data-aos="fade-left">
                <h1>Iván Almeida Reyes</h1>
                <h2>SOFTWARE DEVELOPER</h2>
            </div>

            
            <div className="circle"></div>
        </div>
    )
}

export default Header
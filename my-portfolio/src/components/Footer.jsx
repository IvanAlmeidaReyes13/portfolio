
import {useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css";

const Footer = () => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])

    return (
        <div id="contact">
            <div className="circle"></div>
            <section className="contactInfo" data-aos="fade-right">
                <h2>Let's talk!</h2>
                <p>Porfavor, sintete libre de contactarme cualquier curiosidad que tuvieses.</p>
                <p><b>Email:</b> ivanalmeidareyes@gmail.com</p>
              
            </section>
        </div>
    )
}

export default Footer
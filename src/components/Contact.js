import { ArrowBack } from "@mui/icons-material"
import {Link} from "react-router-dom"
import "./styles/Contact.css"


const Contact = () => {
  return (
    <div className="contact" id="contact">
        <div className="inputs">
            <h1>Contact Us</h1>
            <input type="text" placeholder="Nmae"/>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Message" className="message"/>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Contact
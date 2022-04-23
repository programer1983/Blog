import { Close, MenuOutlined } from "@mui/icons-material"
import {useState} from "react"
import {Link} from "react-router-dom"
import "./styles/Header.scss"


const Header = () => {
  const [active, setActive] = useState(false)

  const showMenu = () => {
    setActive(!active)
  }


  return (
    <div className="header">
        <div className="header__logo">
            <h1>Leedd</h1>
        </div>
        <nav className={active ? "navbar active" : "navbar"}>
            <ul>
                <div className="closed">
                    <Close className="close" onClick={showMenu} />
                </div>
                <li>
                    <a href="#main">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
        <div className="changer">
            <MenuOutlined className="menu" onClick={showMenu} />
        </div>
    </div>
  )
}

export default Header
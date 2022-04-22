import "./styles/Main.scss"
import {useState} from "react"
import { Facebook, Instagram, LinkedIn, MenuBook, Pinterest, SettingsPowerRounded, Twitter } from '@mui/icons-material';
import man from "./../assets/man.png"


const Main = () => {
  return (
    <div className="main">
        <div className="main__container">
            <div className="main__content">
                <div className="text">
                    <p>Hey There!</p>
                    <h1>I am Dmitry Grabovsky</h1>
                    <p>Frontend developer</p>
               
                  <div className="icons">
                    <Twitter className="icon" />
                    <Instagram className="icon" />
                    <Facebook className="icon" />
                    <LinkedIn className="icon" />
                    <Pinterest className="icon" />
                  </div>
                  <div className="buttons">
                      <button>See My Work</button>
                      <button>Hire Mi</button>
                  </div>
                </div>
            </div>
            <div className="main__img">
                <img src={man} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Main
import Navbar from "../components/NavigationComponents/Navbar"
import "../styles/QA.css"
import * as AiIcon from "react-icons/ai"
import {BsChatLeftDots} from 'react-icons/bs'

export const QAPage = () => {  
    return (
        <> 
            <Navbar avatarSrc="images/profile.png"/>

            <div className="qa-container">
                <h2 className="page-title">Hjelpesenter</h2>
                
                <div className="question-container">
                    <h3 className="question-title">Vanlige Spørsmål</h3>
                    <ul className="question-list">
                        <li className="question-item">Spørsmål</li>
                        <li className="question-item">Spørsmål</li>
                        <li className="question-item">Spørsmål</li>
                        <li className="question-item">Spørsmål</li>
                    </ul>
                </div>
                <div className="contact-container">
                    <h3 className="contact-title">Kontakt Oss</h3>
                    <span className="contact-item">E-Mail <AiIcon.AiOutlineMail/></span>
                    <span className="contact-item">Telefon <AiIcon.AiOutlinePhone/></span>
                    <span className="contact-item">Chat <BsChatLeftDots/></span>
                </div>

            </div>
        </>
    )
}
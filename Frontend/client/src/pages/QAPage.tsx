import Navbar from "../components/NavigationComponents/Navbar"
import { PageTitle } from "../components/PageComponents/PageTitle"
import "../styles/QA.css"
import * as AiIcon from "react-icons/ai"
import {BsChatLeftDots} from 'react-icons/bs'

export const QAPage = () => {  
    return (
        <> 
            <Navbar avatarSrc={require("../../public/images/profile.png")}/>

            <div className="qa-container">

                <PageTitle pageTitle="Hjelpesenter" />
                
                <div className="question-container">
                    <h3 className="question-title">Vanlige Spørsmål</h3>
                    <ul className="question-list">
                        <li className="question-item">
                            <h3 className="question-question">Spørsmål 1:</h3>
                            <span className="question-answer">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quia voluptatem ea temporibus deleniti ut quas, velit aut quo fuga.</span>
                        </li>
                        <li className="question-item">
                            <h3 className="question-question">Spørsmål 2:</h3>
                            <span className="question-answer">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quia voluptatem ea temporibus deleniti ut quas, velit aut quo fuga.</span>
                        </li>
                        <li className="question-item">
                            <h3 className="question-question">Spørsmål 3:</h3>
                            <span className="question-answer">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quia voluptatem ea temporibus deleniti ut quas, velit aut quo fuga.</span>
                        </li>
                        <li className="question-item">
                            <h3 className="question-question">Spørsmål 4:</h3>
                            <span className="question-answer">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quia voluptatem ea temporibus deleniti ut quas, velit aut quo fuga.</span>
                        </li>
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
import { RegisterHeader } from "../components/RegisterComponents/RegisterHeader"
import "../styles/RegisterPage.css"
import { Link } from "react-router-dom"


export const RegisterPage = () => {
    return(
        <div className="register-body">
            <RegisterHeader />

            <div className="form-registration">
                <label className="form-txt">Fornavn:</label>
                    <input type="text" placeholder="Skriv inn fornavn"/>
                <label className="form-txt">Etternavn:</label>
                    <input type="text" placeholder="Skriv inn etternavn"/>
                <label className="form-txt">Fødselsdato:</label>
                    <input type="date"/>
                <label className="form-txt">Epostadresse:</label>
                    <input type="text" placeholder="Skriv inn epost"/>
                <label className="form-txt">Telefonnummer:</label>
                    <input type="tel" placeholder="12 345 678"/>
                <label className="form-txt">Brukernavn:</label>
                    <input type="text" placeholder="Skriv ønsket brukernavn"/>
                <label className="form-txt">Skriv ønsket passord:</label>
                    <input type="password" placeholder="Skriv inn ønsket passord"/>
                <button className="save-btn-reg">Lag Profil</button> 
            </div>
        </div>
    )
}
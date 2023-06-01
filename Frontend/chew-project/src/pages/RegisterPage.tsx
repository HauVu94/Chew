import "../styles/RegisterPage.css"
import { Link } from "react-router-dom"


export const RegisterPage = () => {
    return(
        <div className="register-body">
            <div className="reg-logo">
                <img className="chew-logo-reg" src="images/chew-logo.png"/>
            </div>
            <div className="back-icon">
                <Link to="/"><img className="x-btn" src="images/cross.png"/></Link>
            </div>

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
                <button className="save-btn-reg">Lagre endringer</button> 
            </div>
        </div>
    )
}
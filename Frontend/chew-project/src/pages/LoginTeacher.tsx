import "../styles/LoginTeacher.css"
import { Link } from 'react-router-dom';

export const LoginTeacher = () => {
    return(
        <div className="register-body">
            <div className="reg-logo">
                <img className="chew-logo-reg" src="images/chew-logo.png"/>
            </div>
            <div className="back-icon">
                <Link to="LoginTPP"><img className="x-btn" src="images/cross.png"/></Link>
            </div>

            <div className="form-registration">
                <label className="form-txt">Fornavn:</label>
                    <input className="input-field" type="text" placeholder="Skriv inn fornavn"/>
                <label className="form-txt">Etternavn:</label>
                    <input className="input-field" type="text" placeholder="Skriv inn etternavn"/>
                <label className="form-txt">Fødselsdato:</label>
                    <input className="input-field" type="date"/>
                <label className="form-txt">Epostadresse:</label>
                    <input className="input-field" type="text" placeholder="Skriv inn epost"/>
                <label className="form-txt">Telefonnummer:</label>
                    <input className="input-field" type="tel" placeholder="12 345 678"/>
                <label className="form-txt">Brukernavn:</label>
                    <input className="input-field" type="text" placeholder="Skriv ønsket brukernavn"/>
                <label className="form-txt">Passord:</label>
                    <input className="input-field"type="password" placeholder="Skriv inn ønsket passord"/>
                <label className="form-txt">Klassekode:</label>
                    <input className="input-field" type="tel" placeholder="4-A-Q-9"/>
                <button className="save-btn-reg">Lagre endringer</button>
            </div>

        </div>
    )
}
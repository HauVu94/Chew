import "../styles/RegisterPage.css"


export const RegisterPage = () => {
    return(
        <div className="register-body">
            <div className="reg-logo">
                <img className="chew-logo-reg" src="images/chew-logo.png"/>
            </div>

            <div className="form-registration">
                <label>Fornavn:</label>
                <input type="text" placeholder="Skriv inn fornavn"/>
                <label>Etternavn:</label>
                <input type="text" placeholder="Skriv inn etternavn"/>
                <label>Fødselsdato:</label>
                <input type="date"/>
                <label>Epostadresse:</label>
                <input type="text" placeholder="Skriv inn epost"/>
                <label>Telefonnummer:</label>
                <input type="tel" placeholder="12 345 678"/>
                <label>Brukernavn:</label>
                <input type="text" placeholder="Skriv ønsket brukernavn"/>
                <label>Skriv ønsket passord:</label>
                <input type="password" placeholder="Skriv inn ønsket passord"/>
                <button>Lagre endringer</button>
            </div>
        </div>
    )
}
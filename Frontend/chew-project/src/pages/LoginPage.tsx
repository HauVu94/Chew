export const LoginPage = () => {

    return(
        <div className="login-form">
            <div className="form-body">
                <div className="user-name">
                    <label className="form-label">Brukernavn</label>
                    <input className="form-input" type="text" placeholder="Skriv ditt brukernavn"/>
                </div>
                <div className="password">
                    <label className="form-label">Passord</label>
                    <input className="form-input" type="password" placeholder="Skriv passord"/>
                </div>
                <div className="login">
                    <button className="login-btn">Logg Inn</button>
                </div>
            </div>
        </div>

    )

}

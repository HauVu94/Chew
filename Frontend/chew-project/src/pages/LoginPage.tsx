import "../styles/Login.css"
import { Link } from 'react-router-dom';

export const LoginPage = () => {
    return(


        <div className="form-body">
            <div>
                <img className="chew-logo-login" src="images/chew-logo.png"/>
            </div>

            <div className="form-group">
                <label className="form-label">Brukernavn</label>
                <input className="form-input" type="text" placeholder="Skriv ditt brukernavn" />
            </div>
            <div className="form-group">
                <label className="form-label">Passord</label>
                <input className="form-input" type="password" placeholder="Skriv passord" />
            </div>
            <div className="login">
                <button className="login-btn">Logg Inn</button>
            </div>
            <div className="register">
                <label className="register-lbl">Registrer deg</label>
                <Link to="/RegisterPage"><button className="register-btn">Registrer</button></Link>
            </div>
            <div className="forgot-password">
                <label className="forgot-lbl">Glemt passord?</label>
                <button className="btn-group">Nullstill</button>
            </div>
        </div>
        


    )

}

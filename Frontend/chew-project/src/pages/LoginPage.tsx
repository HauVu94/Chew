import "../styles/Login.css"
import { Link } from 'react-router-dom';

export const LoginPage = () => {
    return(
        <div className="login-body">
            <div>
                <Link to="/">
                    <img className="login-logo" src="images/chew-logo.png"/>
                </Link>
            </div>

            <div className="form-login">
                <label className="form-txt">Brukernavn</label>
                    <input className="" type="text" placeholder="Skriv ditt brukernavn" />
                <label className="form-txt">Passord</label>
                    <input className="form-input" type="password" placeholder="Skriv passord" />
                    <button className="login-btn">Logg Inn</button>

                <label className="register-lbl">Registrer deg</label>
                    <Link to="/RegisterPage"><button className="register-btn">Registrer</button></Link>

                <label className="forgot-lbl">Glemt passord?</label>
                <button className="btn-group">Nullstill</button>
            </div>
        </div>
    )

}

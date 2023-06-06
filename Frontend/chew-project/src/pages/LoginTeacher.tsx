import "../styles/LoginTeacher.css"
import { Link } from 'react-router-dom';

export const LoginTeacher = () => {
    return(
        <div className="register-body">
            <div className="reg-logo">
                <img className="chew-logo-reg" src="images/chew-logo.png"/>
            </div>
            <div className="back-icon">
                <Link to="/"><img className="x-btn" src="images/cross.png"/></Link>
            </div>

            <div className="form-registration">
                <div>
                    <img className="feide-login" src="images/FeideLogin.png" alt="feide login" />
                </div>
                
                <label className="form-txt">Klassekode:</label>
                    <input className="input-field" type="tel" placeholder="4-A-Q-9"/>
                <button className="save-btn-reg">Lagre endringer</button>
            </div>

        </div>
    )
}
import { RegisterHeader } from "../components/RegisterComponents/RegisterHeader";
import "../styles/Login.css"
import { Link } from 'react-router-dom';

export const RegisterTeacher = () => {
    return(
        <div className="register-body">
            <RegisterHeader />

            <div className="form-registration">
                <div>
                    <img className="feide-login" src="images/FeideLogin.png" alt="feide login" />
                </div>
                
                <label className="form-txt">Klassekode:</label>
                    <input className="input-field" type="tel" placeholder="4-A-Q-9"/>
                <button className="save-btn-reg">Lag Profil</button>
            </div>

        </div>
    )
}
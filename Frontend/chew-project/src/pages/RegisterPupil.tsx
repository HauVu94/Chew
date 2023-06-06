import { Link } from "react-router-dom"
import { RegisterHeader } from "../components/RegisterComponents/RegisterHeader"


export const RegisterPupil = () => {
    return(
        <div className="register-body">
            <RegisterHeader />

            <div className="form-registration">
                <div>
                    <img className="feide-login" src="images/FeideLogin.png" alt="feide login" />
                </div>
                
                <button className="save-btn-reg">Lag Profil</button>
            </div>

        </div>
    )
}
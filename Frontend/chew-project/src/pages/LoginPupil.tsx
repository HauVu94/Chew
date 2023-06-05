import { Link } from "react-router-dom"


export const LoginPupil = () => {
    return(
        <div className="register-body">
            <div className="reg-logo">
                <img className="chew-logo-reg" src="images/chew-logo.png"/>
            </div>
            <div className="back-icon">
                <Link to="/"><img className="x-btn" src="images/cross.png"/></Link>
            </div>

            <div>
                <img className="feide-login" src="images/FeideLogin.png" alt="feide login" />
            </div>

        </div>
    )
}
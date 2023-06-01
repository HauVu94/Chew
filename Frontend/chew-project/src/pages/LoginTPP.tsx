import "../styles/LoginTPP.css"
import { Link } from 'react-router-dom';

export const LoginTPP = () => {
    return(
        <div className="register-body">
            <div className="back-icon">
                <Link to="/"><img className="x-btn" src="images/cross.png"/></Link>
            </div>
            <div className="reg-logo">
                <img className="chew-logo-reg" src="images/chew-logo.png"/>
            </div>
            

            <div className="occupation-form">
                <Link to="/LoginPupil"><button className="occupation-btn">Elev</button></Link>
                <Link to="/LoginTeacher"><button className="occupation-btn">Lærer</button></Link>
                <Link to="/RegisterPage"><button className="occupation-btn">Forelder</button></Link>
            </div>
        </div>
    )
}
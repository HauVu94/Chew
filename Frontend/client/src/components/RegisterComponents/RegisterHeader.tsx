import { Link, useNavigate } from 'react-router-dom';
import {RiArrowGoBackFill} from 'react-icons/ri'

export const RegisterHeader = () => {  

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <>
            <div className='register-header'>
                <div className="back-icon">
                    <RiArrowGoBackFill onClick={goBack}/>
                </div>
                <div className="reg-logo">
                    <Link to="/">
                        <img className="chew-logo" src={require("../../../public/images/chew-logo.png")}/>
                    </Link>
                </div>
            </div>
        </>
    )
}
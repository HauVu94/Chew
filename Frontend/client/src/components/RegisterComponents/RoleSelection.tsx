import { Link } from 'react-router-dom';

export const RoleSelection = () => {  
    return (
        <>
            <div className="occupation-form">
                <h3 className='register-title'>Velg din rolle:</h3>
                <Link to="/RegisterPupil"><button className="occupation-btn">Elev</button></Link>
                <Link to="/RegisterTeacher"><button className="occupation-btn">Lærer</button></Link>
                <Link to="/RegisterPage"><button className="occupation-btn">Forelder</button></Link>
            </div>
        </>
    )
}
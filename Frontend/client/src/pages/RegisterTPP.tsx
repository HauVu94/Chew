import "../styles/Login.css"
import { RoleSelection } from "../components/RegisterComponents/RoleSelection";
import { RegisterHeader } from "../components/RegisterComponents/RegisterHeader";

export const RegisterTPP = () => {
    return(
        <div className="register-body">
            
            <RegisterHeader />
            
            <RoleSelection />
    
        </div>
    )
}
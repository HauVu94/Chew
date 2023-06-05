import Navbar from '../components/NavigationComponents/Navbar';
import Toolbar from '../components/Toolbar';
import "../styles/Profilepage.css";

export const ProfilePage = () => {  
    return (
        <> 
            <Navbar avatarSrc="images/profile.png"/>

            
            <div className='profilecard-container'>
                <div className='banner-orange'></div>
                <div className='profile-picture'></div>
                <div className='information'>
                    <label>Navn: Ola Nordmann</label>
                    <label>Skole: Norges kuleste skole</label>
                </div>
                <div className='fremgang'></div>
                <label className='level'>2</label>
                <div className='tracker'></div>
                <div className='bragder'>
                    
                    <div className='bragde-boks'>
                        <h2 className='h2-bragder'>BRAGDER</h2>
                        <div className='bragd-stekepanne'>
                            <span className='explenation-stekepanne'>Gratulerer du har brukt stekepanne i en oppskrift!!</span>
                        </div>
                        <div className='bragd-kuttetomat'></div>
                        <div className='bragd-icon'></div>
                        <div className='bragd-icon'></div>
                        <div className='bragd-icon'></div>
                    </div>
                </div>

                <h2 className='h2-opplåsninger'>OPPLÅSNINGER OG NIVÅ</h2>

            </div>

            <div className='background-beige'></div>
            <div className='background-foods'></div>
            <div className='background-blue'></div>
            
            
            
        </>
    )
}
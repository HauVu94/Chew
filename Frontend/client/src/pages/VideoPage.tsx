import React from "react"
import Navbar from '../components/NavigationComponents/Navbar';
import GridComponentVideo from "../components/GridComponentVideo"
import "../styles/VideoPage.css"

export const VideoPage = () => {
    return(
        
        <>
            <Navbar avatarSrc={require("../../public/images/profile.png")}/>

            <div className="tutorial-container">
            
            <div className="video-library">
                <h1 className="title-main">Videoleksjoner</h1>
                    <div className="video-player">
                    <iframe width="791" height="445" 
                        src="https://www.youtube.com/embed/YAtyz3V5-pQ" 
                        title="Chew on This with Mano Rashidi | Chew&#39;s CEO" 
                        frameBorder="0" 
                        data-allow="accelerometer; 
                        autoplay; clipboard-write; 
                        encrypted-media; gyroscope; 
                        picture-in-picture; 
                        web-share" 
                        allowFullScreen>
                        </iframe>
                    </div>

                    <GridComponentVideo />
                </div>
            </div>
        </>

    )
}

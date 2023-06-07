import React from "react"
import Navbar from '../components/NavigationComponents/Navbar';
import "../styles/VideoPage.css"

export const VideoPage = () => {
    return(
        

        <div className="tutorial-container">

            <Navbar avatarSrc="images/profile.png"/>
                <div className="video-library">
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


                </div>
        </div>

    )
}

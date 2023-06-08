import React from "react";
import "../styles/VideoPage.css"

const GridComponent = () => {
    return(
            <div className="container">
                <div className="grid-item">
                    <div className="video-wrapper">
                        <iframe
                            width="380"
                            height="198"
                            src="https://www.youtube.com/embed/mGSRakRS_J8"
                            title="10 Kitchen Tips I Wish I&#39;d Known (ft. Sienna Mae Gomez) | Basics with Babish"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <div className="text">10 kjøkkentips med Andrew Rea</div>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="video-wrapper">
                        <iframe 
                            width="380" 
                            height="198" 
                            src="https://www.youtube.com/embed/aoqVGdmVlKk" 
                            title="The Only Knife Skills Guide You Need" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                            <div className="text">Lær deg ferdigheter med kjøkkenkniv!</div>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="video-wrapper">
                        <iframe width="380" height="198" 
                            src="https://www.youtube.com/embed/KL9r9q9n20A" 
                            title="Kitchen Safety for Kids - Camp Galileo Anywhere: Chefology" 
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <div className="text">Sikkerhet på kjøkkenet for barn!</div>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="video-wrapper">
                        <iframe width="380" height="198" 
                            src="https://www.youtube.com/embed/VrUdtzXquWk" 
                            title="How To Make Bread | Jamie Oliver - AD" 
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <div className="text">Hvordan bake brød!</div>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="video-wrapper">
                        <iframe width="380" height="198" 
                            src="https://www.youtube.com/embed/BHcyuzXRqLs" 
                            title="50 Cooking Tips With Gordon Ramsay | Part One" 
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <div className="text">50 tips på kjøkkenet for nybegynnere!</div>
                        </div>
                    </div>
                    <div className="grid-item">
                            <div className="video-wrapper">
                            <iframe width="380" height="198" 
                            src="https://www.youtube.com/embed/PN-5UUzj7SI" 
                            title="15 Minute Dinners that Will Change Your Life (part 2)" 
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <div className="text">Enkle retter på 15 minutter!</div>
                        </div>
                    </div>

                    </div>
    )
}
export default GridComponent;





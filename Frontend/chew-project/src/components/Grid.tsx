import React from "react";
import "../styles/VideoPage.css"

const GridComponent = () => {
    return(

        <div className="container">
            <div className="grid-item"><iframe width="480" height="198" 
                src="https://www.youtube.com/embed/mGSRakRS_J8" 
                title="10 Kitchen Tips I Wish I&#39;d Known (ft. Sienna Mae Gomez) | Basics with Babish" 
                frameBorder="0" 
                data-allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            

            <div className="grid-item">
            <iframe width="480" height="198" 
            src="https://www.youtube.com/embed/bsYzWK3cxOM" 
            title="The Beginner&#39;s Guide to Cooking with Spices (with Testing)" 
            frameBorder="0" 
            data-allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>

            <div className="grid-item"><iframe width="480" height="198" 
            src="https://www.youtube.com/embed/aoqVGdmVlKk" 
            title="The Only Knife Skills Guide You Need" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>

            <div className="grid-item"><iframe width="480" height="198" 
            src="https://www.youtube.com/embed/Es3B8Swni14" 
            title="Sunday Beef Dinners With Gordon Ramsay" 
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            
            <div className="grid-item"><iframe width="480" height="198" 
            src="https://www.youtube.com/embed/KL9r9q9n20A" 
            title="Kitchen Safety for Kids - Camp Galileo Anywhere: Chefology" 
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            
            <div className="grid-item"><iframe width="448" height="198" 
            src="https://www.youtube.com/embed/VrUdtzXquWk" 
            title="How To Make Bread | Jamie Oliver - AD" 
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            
        </div>

    )
}

export default GridComponent;
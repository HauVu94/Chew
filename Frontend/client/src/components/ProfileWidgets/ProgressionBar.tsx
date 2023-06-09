import React from 'react'
import "../../styles/Progression.css";
import "../../styles/Profilepage.css";
import ProgressionLevel from './ProgressionLevel';

function ProgressionBar() {
  return (
    <div className='progression-container'>
        <div className='banner-orange-sm'>
          <h1>NIVÅPROGRESJON</h1>
        </div>
        <div className='progression-image-container'>
          <img className='progression-tracker' src={require("../../../public/images/progress.png")}></img>
        </div>
    </div>
  )
}

export default ProgressionBar

import React from 'react'
import "../../styles/Progression.css";
import "../../styles/Profilepage.css";
import ProgressionLevel from './ProgressionLevel';

function ProgressionBar() {
  return (
    <div className='progression-container'>
        <div className='banner-orange-sm'>
            <h2 className='progression-h2'>NIVÅ PROGRESJON</h2>
            <ProgressionLevel/>
        </div>
    </div>
  )
}

export default ProgressionBar

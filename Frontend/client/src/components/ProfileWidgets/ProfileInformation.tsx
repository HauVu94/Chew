import React from 'react'
import LevelTracker from './LevelTracker'

const ProfileInformation = (props: any) => {
  return (
      <div className='information'>
        <img className='profile-picture' src= {props.image}/>
        <div className='info-text'>
          <label>Navn: {props.name}</label>
          <label>Skole: {props.schoolname}</label>

          <div className='level-container'>
          <div className='fremgang'>
            <label className='level-number'>{props.level}</label>  
          </div>
          <LevelTracker num= {30}/>
        </div>
      </div>

        
        
        
      </div>
        
  )
}

export default ProfileInformation
import React from 'react'
import LevelTracker from './LevelTracker'
//import  profilepicture from '../../../public/images/child-avatar.png';

const ProfileInformation = (props: any) => {
  return (
      <div className='information'>
        <img className='profile-picture' src= {props.image}/>
        <div className='info-text'>
          <label>Navn: {props.name}</label>
          <label>Skole: {props.schoolname}</label>

          <div className='level-container'>
          <div className='fremgang'>
            <label className='level'>{props.level}</label>  
          </div>
          <LevelTracker num= {30}/>
        </div>
      </div>

        
        
        
      </div>
        
  )
}

export default ProfileInformation

import React from 'react'
//import  profilepicture from '../../../public/images/child-avatar.png';

const ProfileInformation = (props: any) => {
  return (
    <div>
      <div className='information'>
        <img className='profile-picture' src= {props.image}/>
        <label>Navn: {props.name}</label>
        <label>Skole: {props.schoolname}</label>
      </div>
    </div>
  )
}

export default ProfileInformation

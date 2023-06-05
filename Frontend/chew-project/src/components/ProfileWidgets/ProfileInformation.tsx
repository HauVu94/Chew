import React from 'react'
//import  profilepicture from '../../../public/images/child-avatar.png';

const ProfileInformation = (props: any) => {
  return (
    <div>
      <div className='profile-picture'/>
            <div className='information'>
                <label>Navn: {props.name}</label>
                <label>Skole: {props.schoolname}</label>
            </div>
    </div>
  )
}

export default ProfileInformation

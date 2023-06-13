import React from 'react'
import ProfileInformation from './ProfileInformation'
import AchievmentBox from './AchievmentBox'

const ProfileWidget = () => {

    const img = require("../../../public/images/child-avatar.png");

   


    const dummyPerson = {id: 1, name: "Per Nordmann", school: "Kul barneskole", image: img, level: 2}

  return (
      <div className='profilecard-container'>
              <div className='banner-orange'>
                
                <ProfileInformation name = {dummyPerson.name} schoolname = {dummyPerson.school} image = {dummyPerson.image} level = {dummyPerson.level}/>
                
              </div>
            <AchievmentBox/> 
      </div>

  )
}

export default ProfileWidget

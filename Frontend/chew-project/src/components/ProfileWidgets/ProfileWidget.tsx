import React from 'react'
import ProfileInformation from './ProfileInformation'
import AchievmentBox from './AchievmentBox'

const ProfileWidget = () => {

    const dummyPerson = {name: "Per Nordmann", school: "Kul barneskole", id: 1, image: "../images/child-avatar.png"}

  return (
      <div className='profilecard-container'>
             <div className='banner-orange'></div>
            
            <div className='fremgang'></div>
            <label className='level'>2</label>
            <div className='tracker'></div>
            <div className='bragder'>
            <ProfileInformation name = {dummyPerson.name} schoolname = {dummyPerson.school} image = {dummyPerson.image}/>
            {/* <AchievmentBox/> */}
            </div>

            <h2 className='h2-opplåsninger'>OPPLÅSNINGER OG NIVÅ</h2>

         </div>

  )
}

export default ProfileWidget

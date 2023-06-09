import React from 'react'
import LockedItem from './LockedItem'
import '../../styles/lockedItems.css'

const dummyData = [
  {id: 1, image: 'stekepanne.png', progress: 50},
  {id: 2, image: 'bragd-tomat.png', progress: 90},
  {id: 3, image: 'stekepanne.png', progress: 10},
  {id: 4, image: 'bragd-tomat.png', progress: 40},
]

const LockedItems = () => {


  return (
    <div className='locked-items-container'>
      <div className="profile-content-wrapper">
        <div className="banner-orange-sm">
          <h1>LÅSTE BRAGDER</h1>
        </div>
        <div className='locked-items-wrapper'>
          {dummyData.map((item) => {
            return <LockedItem key={item.id} image={item.image} progress={item.progress}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default LockedItems

import React from 'react'
// import LockedItem from './LockedItem'
import '../../styles/lockedItems.css'
import LockedItem from './LockedItem'

const dummyData = [
  {id: 1, image: 'images/stekepanne.png', progress: 50},
  {id: 2, image: 'images/bragd-tomat.png', progress: 90},
  {id: 3, image: 'images/stekepanne.png', progress: 10},
  {id: 4, image: 'images/bragd-tomat.png', progress: 40},
]

const LockedItems = () => {


  return (
    <div className='locked-items-container'>
      {/* <div className="banner-orange"> */}
      <div className="b-orange">
        <h2>Låste bragder</h2>
      </div>
      <div className='locked-items-wrapper'>
        {dummyData.map((item) => {
          return <LockedItem key={item.id} image={item.image} progress={item.progress}/>
        })}
      </div>
    </div>
  )
}

export default LockedItems

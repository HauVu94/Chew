import React from 'react'
import Achievment from './Achievment'
// import '../../../public/images/stekepanne.png'


const dummyData = [
    {id: 1, img: 'images/stekepanne.png', message: 'Message 1'},
    {id: 2, img: 'images/stekepanne.png', message: 'Message 2'},
    {id: 3, img: 'images/bragd-tomat.png', message: 'Message 3'}
]

const AchievmentBox = () => {
  return (
    <div className='bragde-boks'>
        <h2 className='h2-bragder'>BRAGDER</h2>
        
        <div className='bragd-icon-container'>
        {dummyData.map(achievment => {
            return <Achievment key={achievment.id} message={achievment.message} image={achievment.img}/>
        })}
        </div>
    </div>
  )
}

export default AchievmentBox

import React from 'react'
import Achievment from './Achievment'
// import '../../../public/images/stekepanne.png'


const img1 = require('../../../public/images/stekepanne.png');
const img2 = require('../../../public/images/stekepanne.png');
const img3 = require('../../../public/images/bragd-tomat.png');

const dummyData = [
    {id: 1, img: img1, message: 'Message 1'},
    {id: 2, img: img2, message: 'Message 2'},
    {id: 3, img: img3, message: 'Message 3'}
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

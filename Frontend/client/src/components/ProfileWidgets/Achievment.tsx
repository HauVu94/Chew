import React from 'react'



const Achievment = (props: any) => {
  return (
    <div className='achievment-circle'>
        <img className='achievment-image' src={props.image}/>
        <span className='explanation'>{props.message}</span>
    </div>
  )
}

export default Achievment

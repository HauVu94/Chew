import React from 'react'

const Activity = (props: any) => {
  return (
    <div className='individual-activity-container'>
        <div className='activity-profile-pic'></div>
        <div className='activity-contents-container'>
            <p>{props.name} {props.message}</p>
            <button className='congrats-btn'>Si gratulerer!</button>
        </div>
    </div>
  )
}

export default Activity

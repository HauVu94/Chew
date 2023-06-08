import React from 'react'

const LevelTracker = (props: any) => {
    const precent = {width: props.num + "%"}

  return (
    <div className='tracker'>
        <div className='tracker-prosent' style= {precent} />
    </div>
  )
}

export default LevelTracker

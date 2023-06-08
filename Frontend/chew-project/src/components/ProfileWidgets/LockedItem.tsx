import React from 'react'

const LockedItem = (props: any) => {
    const progress = {width: props.progress + "%"}

    return (
        <div className='unlocked-item-individual-container'>
            <img className='locked-item' src={props.image} alt={props.image}/>
            <div className='progress-tracker-unlock'>
                <div className='progress-bar-unlock' style={progress} />    
            </div>
        </div>
    )
}

export default LockedItem

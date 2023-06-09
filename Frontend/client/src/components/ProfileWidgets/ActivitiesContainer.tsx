import React from 'react'
import Activity from './Activity'
import '../../styles/activitiesWidget.css'

const dummyData = [
    {id: 1, name: 'Janne Nordmann', message: 'har nådd nivå 16'},
    {id: 2, name: 'Janne Nordmann', message: 'har nådd nivå 17'},
    {id: 3, name: 'Janne Nordmann', message: 'har nådd nivå 18'},
    {id: 4, name: 'Janne Nordmann', message: 'har nådd nivå 19'},
    {id: 5, name: 'Janne Nordmann', message: 'har nådd nivå 20'},
    {id: 6, name: 'Janne Nordmann', message: 'har nådd nivå 21'},
    {id: 7, name: 'Janne Nordmann', message: 'har nådd nivå 22'},
    {id: 8, name: 'Janne Nordmann', message: 'har nådd nivå 23'},
]


const ActivitiesContainer = () => {
    // const activityList = dummyData.map((activity) => {
    //     return (
    //         <Activity key={activity.id} name={activity.name} message={activity.message} />
    //     )
    // })

  return (
    <div className='activities-container'>
        <div className="profile-content-wrapper">
            <div className='banner-orange-sm'><h1>VENNERS AKTIVITET</h1></div>
            <div className='activities'>
                {/* {activityList} */}
                {dummyData.map((activity) => {
                    return <Activity key={activity.id} name={activity.name} message={activity.message} />
                })}
            </div>
        </div>
     </div>
  )
}

export default ActivitiesContainer

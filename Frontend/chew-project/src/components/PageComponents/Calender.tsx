import React, { useState } from "react";
import * as BiIcon from "react-icons/bi"
import { Link } from "react-router-dom";
import "../../styles/Calendar.css"

export const Calender = () => {
    const [calendar, setCalendar] = useState(false)

    const showCalendar = () => setCalendar(!calendar)

    return(
        <>  
            <Link to="#" className="calender-icon" onClick={showCalendar}>
                    <div className="sidetab sidetab-left">
                            <BiIcon.BiCalendar />
                    </div>
            </Link>
            <div className={calendar ? "calendar-container active" : "calendar-container"}>
                    <h2 className="calendar-title">Calendar</h2>
                    <Link to="#" className="calendar-icon" onClick={showCalendar}> 
                        <BiIcon.BiX />
                    </Link>
            </div>
        </>
    )
}
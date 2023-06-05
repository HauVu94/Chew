import React, { useState } from "react";
import * as BiIcon from "react-icons/bi"
import { Link } from "react-router-dom";
import "../../styles/Calendar.css"

export const Calender = () => {
    const [calendar, setCalendar] = useState(false)

    const showCalendar = () => {
        setCalendar(!calendar)
        .calendar-icon

    }

    const calendarList = [
        {
            id: 1,
            title: "Torsdag 07.April - 12:50",
            teacher: "Tina Ellingsen Rosenhoff",
            subject: "Introduksjon til matsvinn",
            comment: "Ha med lærebok og skrivesaker",
        },
        {
            id: 1,
            title: "Torsdag 07.April - 12:50",
            teacher: "Tina Ellingsen Rosenhoff",
            subject: "Introduksjon til matsvinn",
            comment: "Ha med lærebok og skrivesaker",
        },
        {
            id: 1,
            title: "Torsdag 07.April - 12:50",
            teacher: "Tina Ellingsen Rosenhoff",
            subject: "Introduksjon til matsvinn",
      æ      comment: "Ha med lærebok og skrivesaker",
        },
        {
            id: 1,
            title: "Torsdag 07.April - 12:50",
            teacher: "Tina Ellingsen Rosenhoff",
            subject: "Introduksjon til matsvinn",
            comment: "Ha med lærebok og skrivesaker",
        },
        {
            id: 1,
            title: "Torsdag 07.April - 12:50",
            teacher: "Tina Ellingsen Rosenhoff",
            subject: "Introduksjon til matsvinn",
            comment: "Ha med lærebok og skrivesaker",
        },
        {
            id: 1,
            title: "Torsdag 07.April - 12:50",
            teacher: "Tina Ellingsen Rosenhoff",
            subject: "Introduksjon til matsvinn",
            comment: "Ha med lærebok og skrivesaker",
        },
    ]

    return(
        <>  
            <Link to="#" className="calender-icon" onClick={showCalendar}>
                    <div className="sidetab sidetab-left">
                            <BiIcon.BiCalendar />
                    </div>
            </Link>
            <div className={calendar ? "calendar-container active" : "calendar-container"}>
                <div className="calendar-header">
                    <h2 className="calendar-title">Calendar</h2>
                    <Link to="#" className="calendar-cross" onClick={showCalendar}> 
                        <BiIcon.BiX />
                    </Link>
                </div>

                <ul className="calendar-list">
                    {calendarList.map((item, index) => (
                        <li className="calendar-list-item">
                            <h3 className="calendar-list-title">{item.title}</h3>
                            <h3 className="calendar-list-teacher">{item.teacher}</h3>
                            <h3 className="calendar-list-subject">{item.subject}</h3>
                            <h3 className="calendar-list-comment">{item.comment}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
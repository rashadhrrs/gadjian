import React from 'react'
import './SideDrawer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons/faCalendarAlt'

const sideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li><a href="/"> <i className="fa fa-home"/> Beranda</a></li>
            <li><a href="/"style={{color: "#23C7C6"}}><i className="fa fa-users"/> Personnel List</a></li>
            <li><a href="/"><FontAwesomeIcon icon ={faCalendarAlt}/> Daily Attendance</a></li>
        </ul>
    </nav>
)

export default sideDrawer;
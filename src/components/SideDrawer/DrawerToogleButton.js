import React from 'react'

import './DrawerToogleButton.css'

const drawerToogleButton = props => (
    <button className ="toogle-button" onClick={props.click}>
        <div className="toogle-button_line"/>
        <div className="toogle-button_line"/>
        <div className="toogle-button_line"/>
    </button>
)

export default drawerToogleButton;
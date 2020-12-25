import React from 'react';

import '../SideDrawer/DrawerToogleButton'
import DrawerToogleButton from '../SideDrawer/DrawerToogleButton';
import './Toolbar.css'
import logo from '../../assets/logo/gadjian_logo.png'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toogle-button">
                <DrawerToogleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/"><img src={logo} width={145} alt="Logo"></img></a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
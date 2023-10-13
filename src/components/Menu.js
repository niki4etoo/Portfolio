import React from "react";
import { Link } from 'react-router-dom';

import '../styles/mainmenu.css';

//Languages
import bg from '../languages/bg.json';
import en from '../languages/en.json';

const Menu = (props) => {

    //Languages ( BG | EN)
    let l = {};
    (props.lang) ? l = en : l = bg;

    return (
        <>
            <ul className="menu">
                <li><Link to='/About' state={{ lang: props.lang }}>{l.menu.about}</Link></li>
                <li><Link to='/' state={{ lang: props.lang }}>{l.menu.intro}</Link></li>
                <li><Link to='/Contacts' state={{ lang: props.lang }}>{l.menu.contacts}</Link></li>
            </ul>
        </>
    );
}

export default Menu;
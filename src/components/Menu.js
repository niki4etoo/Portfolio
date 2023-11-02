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

    let pages = [
        { link: "/about", label: l.menu.about, active: false },
        { link: "/", label: l.menu.intro, active: false },
        { link: "/contacts", label: l.menu.contacts, active: false },
        { link: "/questions", label: l.menu.questions, active: false },
    ]

    pages.map((page) => {
        if (page.link === props.active) {
            page.active = true; // setting the page to active
        }
        return null;
    })

    return (
        <>
            <ul className="menu">
                {
                    pages.map((page, index) => {
                        if (page.active) {
                            return <li className="active-page" key={index}>{page.label}</li>
                        } else {
                            return <li key={index}><Link to={page.link} state={{ lang: props.lang }}>{page.label}</Link></li>
                        }
                    })
                }
            </ul>
        </>
    );
}

export default Menu;
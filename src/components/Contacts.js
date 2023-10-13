import React, { useState } from "react";

//Languages
import bg from '../languages/bg.json';
import en from '../languages/en.json';

import Navigation from "./Navigation/Navigation";
import Menu from "./Menu";
import { useLocation } from "react-router-dom";

const Contacts = () => {
    //Languages ( BG | EN)

    const { state } = useLocation();

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang);

    const changeLanguage = (e) => {
        if (e.target.checked) {
            setCurrentLanguage(prev => true); //Switched to EN
        } else {
            setCurrentLanguage(prev => false); //Switched to BG
        }
    }

    let l = {};
    (currentLanguage) ? l = en : l = bg;

    return (
        <>
            <Navigation lang={currentLanguage} />
            <div className="Contacts"><h1>{l.contacts.title}</h1></div>
            <Menu lang={currentLanguage} />
            <label className="switch">
                <input type="checkbox" onChange={(e) => changeLanguage(e)} checked={currentLanguage} />
                <span className="slider round"></span>
            </label>
        </>
    );
}

export default Contacts;
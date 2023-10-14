import React, { useState } from "react";
import { useLocation } from "react-router-dom";

//Languages
import bg from '../languages/bg.json';
import en from '../languages/en.json';

import Navigation from "./Navigation/Navigation";
import Menu from "./Menu";

//Styles
import '../styles/contacts.css';

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
            <div className="contacts-container">
                <div className="contacts"><h1>{l.contacts.title}</h1></div>
                <div className="contacts-form">
                    <form id="contact">
                        <div className="contacts-input">
                            <fieldset className="contacts-item">
                                <input placeholder={l.contacts.form.placeholders.name} type="text" tabIndex="1" />
                            </fieldset>
                            <fieldset className="contacts-item">
                                <input placeholder={l.contacts.form.placeholders.mail} type="email" tabIndex="2" />
                            </fieldset>
                        </div>
                        <fieldset className="contacts-item">
                            <textarea placeholder={l.contacts.form.placeholders.message} tabIndex="5"></textarea>
                        </fieldset>
                        <div className="contacts-buttons">
                            <fieldset className="contacts-item">
                                <button name="reset" type="reset" id="contact-reset">{l.contacts.form.buttons.reset}</button>
                            </fieldset>
                            <fieldset className="contacts-item">
                                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">{l.contacts.form.buttons.send}</button>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
            <Menu lang={currentLanguage} />
            <label className="switch">
                <input type="checkbox" onChange={(e) => changeLanguage(e)} checked={currentLanguage} />
                <span className="slider round"></span>
            </label>
        </>
    );
}

export default Contacts;
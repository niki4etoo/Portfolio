import React, { useState } from "react";
import { useLocation } from "react-router-dom";

//Languages
import bg from '../languages/bg.json';
import en from '../languages/en.json';

import Navigation from "./Navigation/Navigation";
import Menu from "./Menu";

//Styles
import '../styles/contacts.css';

const Contacts = (props) => {

    //Languages ( BG | EN)
    const { state } = useLocation();

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false);

    const changeLanguage = (e) => {
        if (e.target.checked) {
            setCurrentLanguage(prev => true); //Switched to EN
        } else {
            setCurrentLanguage(prev => false); //Switched to BG
        }
    }

    let l = {};
    (currentLanguage) ? l = en : l = bg;

    const [ form, setForm ] = useState({
        name: "",
        mail: "",
        message: "",
    });

    const handleChange = (e) => {
        const val = e.target.value;
        setForm({...form,
            [e.target.name]: val});
    }

    const handleSubmit = () => {
        console.log("Name: ", form.name);
        console.log("Mail: ", form.mail);
        console.log("Message: ", form.message); // to do (send to server)

    }

    return (
        <>
            <Navigation lang={currentLanguage} />
            <div className="contacts-container">
                <div className="contacts"><h1>{l.contacts.title}</h1></div>
                <div className="contacts-form">
                    <form id="contact" onSubmit={handleSubmit}>
                        <div className="contacts-input">
                            <fieldset className="contacts-item">
                                <input placeholder={l.contacts.form.placeholders.name} id="name" name="name" value={form.name} type="text" tabIndex="1" onChange={handleChange} />
                            </fieldset>
                            <fieldset className="contacts-item">
                                <input placeholder={l.contacts.form.placeholders.mail} name="mail" value={form.mail} type="email" tabIndex="2" onChange={handleChange} />
                            </fieldset>
                        </div>
                        <fieldset className="contacts-item">
                            <textarea placeholder={l.contacts.form.placeholders.message} name="message" value={form.message} tabIndex="3" onChange={handleChange}></textarea>
                        </fieldset>
                        <div className="contacts-buttons">
                            <fieldset className="contacts-item">
                                <button name="reset" type="reset" id="contact-reset">{l.contacts.form.buttons.reset}</button>
                            </fieldset>
                            <fieldset className="contacts-item">
                                <button type="submit" id="contact-submit" onClick={handleSubmit}>{l.contacts.form.buttons.send}</button>
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
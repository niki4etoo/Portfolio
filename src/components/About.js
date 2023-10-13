import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import Menu from './Menu';

//Languages
import bg from '../languages/bg.json';
import en from '../languages/en.json';

// styles
import '../styles/about.css';

// images
import profileQuestion from '../images/profile.png';

const About = () => {

    const { state } = useLocation();

    //Languages ( BG | EN)

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
            <div className="container-about">
                <div className="about"><h1>{l.about.title}</h1></div>
                <section>
                    <figure>
                        <img src={profileQuestion} width={200} height={200} alt="Profile"/>
                    </figure>
                </section>
                <section>
                    <p>{l.about.intro}</p>
                </section>
            </div>
            <Menu lang={currentLanguage} />
            <label className="switch">
                <input type="checkbox" onChange={(e) => changeLanguage(e)} checked={currentLanguage} />
                <span className="slider round"></span>
            </label>
        </>
    );
}

export default About;
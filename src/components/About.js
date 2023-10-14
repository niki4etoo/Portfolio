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
                <section className="profile">
                    <figure>
                        <img src={profileQuestion} width={200} height={200} alt="Profile"/>
                    </figure>
                </section>
                <section className="intro">
                    <p>{l.about.intro}</p>
                </section>
                <section className="tech-stack">
                    <h1>{l.about.techStack}</h1>
                    <h2>{l.about.tech.used}</h2>
                    <ul>
                        <li>{l.about.tech.js}</li>
                        <li>{l.about.tech.html_css}</li>
                        <li>{l.about.tech.react}</li>
                    </ul>
                    <h2>{l.about.tech.learning}</h2>
                    <ul>
                        <li>{l.about.tech.gsap}</li>
                        <li>{l.about.tech.reactSpring}</li>
                        <li>{l.about.tech.node}</li>
                    </ul>
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
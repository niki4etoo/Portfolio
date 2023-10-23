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

    return (
        <>
            <Navigation lang={currentLanguage} />
            <div className="container-about">
                <div className="about"><h1>{l.about.title}</h1></div>
                <section className="profile">
                    <figure>
                        <a href="https://github.com/niki4etoo/"><img src={profileQuestion} width={200} height={200} alt="Profile"/></a>
                    </figure>
                </section>
                <section className="intro">
                    <p>{l.about.intro}</p>
                </section>
                <section className="tech-stack">
                    <h1>{l.about.techStack}</h1>
                    <h2>{l.about.tech.used}</h2>
                    <ul>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">{l.about.tech.js}</a></li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">{l.about.tech.html}</a> & <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">{l.about.tech.css}</a></li>
                        <li><a href="https://react.dev/">{l.about.tech.react}</a></li>
                    </ul>
                    <h2>{l.about.tech.learning}</h2>
                    <ul>
                        <li><a href="https://gsap.com/">{l.about.tech.gsap}</a></li>
                        <li><a href="https://www.react-spring.dev/">{l.about.tech.reactSpring}</a></li>
                        <li><a href="https://nodejs.org/en">{l.about.tech.node}</a></li>
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
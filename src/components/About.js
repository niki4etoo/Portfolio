import React, { useState, useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import gsap from 'gsap';

import LanguageSwitch from "./LanguageSwitch";
import Navigation from "./Navigation/Navigation";
import Menu from './Menu';

//Languages
import bg from '../languages/bg.json';
import en from '../languages/en.json';

// styles
import '../styles/about.css';

// images
import profileQuestion from '../images/profile.png';
import profilePhoto from '../images/profile_photo.png';

const About = () => {

    const { state } = useLocation();

    //Languages ( BG | EN)

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false);

    let l = {};
    (currentLanguage) ? l = en : l = bg;

    const imgRef = useRef();
    const figureRef = useRef();
    const main = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context((self) => {
            self.add("hover", (e) => {
                gsap.to(figureRef.current, { 
                    opacity: 0, duration: 0.5,
                    onComplete: () => {
                        gsap.set(imgRef.current, { attr: { src: profilePhoto }});
                        gsap.to(figureRef.current, { opacity: 1, duration: 0.5, borderColor: "blue" });
                    }
                 });
            });

            self.add("leave", (e) => {
                gsap.to(figureRef.current, {
                    opacity: 0, duration: 0.5,
                    onComplete: () => {
                        gsap.set(imgRef.current, { attr: { src: profileQuestion }});
                        gsap.to(figureRef.current, { opacity: 1, duration: 0.5 });
                    }
                })
            });
        }, main);

        imgRef.current.addEventListener("mouseenter", (e) => ctx.hover(e));
        imgRef.current.addEventListener("mouseleave", (e) => ctx.leave(e));

        return () => ctx.revert();
    }, []);

    return (
        <div ref={main}>
            <Navigation lang={currentLanguage} />
            <div className="container-about">
                <div className="about"><h1><a href="https://github.com/niki4etoo/">{l.about.title}</a></h1></div>
                <section className="profile">
                    <figure ref={figureRef}>
                        <a href="https://github.com/niki4etoo/"><img ref={imgRef} src={profileQuestion} width={200} height={200} alt="Profile" /></a>
                    </figure>
                </section>
                <section className="intro">
                    <p>{l.about.intro}</p>
                </section>
                <section className="subintro">
                    <h3>{l.about.subintro.title}</h3>
                    <p>{l.about.subintro.description}</p>
                </section>
                <section className="tech-stack">
                    <h1>{l.about.techStack}</h1>
                    <div className="tech-stack-row">
                        <div className="tech-stack-column">
                            <h2>{l.about.tech.used}</h2>
                            <ul>
                                <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">{l.about.tech.js}</a></li>
                                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">{l.about.tech.html}</a> & <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">{l.about.tech.css}</a></li>
                                <li><a href="https://react.dev/">{l.about.tech.react}</a></li>
                            </ul>
                        </div>
                        <div className="tech-stack-column">
                            <h2>{l.about.tech.learning}</h2>
                            <ul>
                                <li><a href="https://gsap.com/">{l.about.tech.gsap}</a></li>
                                <li><a href="https://www.react-spring.dev/">{l.about.tech.reactSpring}</a></li>
                                <li><a href="https://nodejs.org/en">{l.about.tech.node}</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
            <Menu lang={currentLanguage} />
            <LanguageSwitch lang={currentLanguage} setter={setCurrentLanguage} />
        </div>
    );
}

export default About;
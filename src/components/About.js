import React, { useState, useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import gsap from "gsap";

import LanguageSwitch from "./LanguageSwitch";
import Navigation from "./Navigation/Navigation";
import Menu from "./Menu";

//Languages
import bg from "../languages/bg.json";
import en from "../languages/en.json";

// styles
import "../styles/about.css";

// image
import profilePhoto from '../images/profile_photo.jpeg';

const About = () => {

    const { state } = useLocation();

    //Languages ( BG | EN)

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false);

    let l = {};
    (currentLanguage) ? l = en : l = bg;
    
    const figureRef = useRef();
    const main = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context((self) => {
            self.add("hover", (e) => {
                gsap.to(figureRef.current, {
                    opacity: 0.8, duration: 0.5,
                });
            });

            self.add("leave", (e) => {
                gsap.to(figureRef.current, {
                    opacity: 1, duration: 0.5,
                })
            });
        }, main);

        figureRef.current.addEventListener("mouseenter", (e) => ctx.hover(e));
        figureRef.current.addEventListener("mouseleave", (e) => ctx.leave(e));

        return () => ctx.revert();
    }, []);

    return (
        <div ref={main}>
            <Navigation lang={currentLanguage} />
            <div className="container__about">
                <div className="title__about"><h1><a href="https://github.com/niki4etoo/">{l.about.title}</a></h1></div>
                <section className="profile__about">
                    <figure ref={figureRef}>
                        <a href="https://github.com/niki4etoo/">
                            <LazyLoadImage
                                src={profilePhoto}
                                effect="blur"
                                width={200}
                                height={200} />
                        </a>
                    </figure>
                </section>
                <section className="intro__about">
                    <p>{l.about.intro}</p>
                </section>
                <section className="subintro__about">
                    <h3>{l.about.subintro.title}</h3>
                    <p>{l.about.subintro.description}</p>
                </section>
                <section className="tech-stack__about">
                    <h1>{l.about.techStack}</h1>
                    <div className="tech-stack-row__about">
                        <div className="tech-stack-column__about">
                            <h2>{l.about.tech.used}</h2>
                            <ul>
                                <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">{l.about.tech.js}</a></li>
                                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">{l.about.tech.html}</a> & <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">{l.about.tech.css}</a></li>
                                <li><a href="https://react.dev/">{l.about.tech.react}</a></li>
                            </ul>
                        </div>
                        <div className="tech-stack-column__about">
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
            <Menu active={"/about"} lang={currentLanguage} />
            <LanguageSwitch lang={currentLanguage} setter={setCurrentLanguage} />
        </div>
    );
}

export default About;
import { useState, useRef, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import gsap from 'gsap';

import LanguageSwitch from '../LanguageSwitch';
import Navigation from '../Navigation/Navigation';
import Menu from '../Menu/Menu';

// languages
import bg from '../../languages/bg-about.json';
import en from '../../languages/en-about.json';

// style
import './about.css';

// image
import profilePhoto from '../../images/profile_photo.jpeg';

const About = () => {

    const { state } = useLocation();

    //Languages ( BG | EN)

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false);

    let l = currentLanguage ? en : bg;

    const figureRef = useRef<any>(null);
    const main = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context((self) => {
            self.add('hover', () => {
                gsap.to(figureRef.current, {
                    opacity: 0.8, duration: 0.5,
                });
            });

            self.add('leave', () => {
                gsap.to(figureRef.current, {
                    opacity: 1, duration: 0.5,
                })
            });
        }, main);
        if (figureRef.current !== undefined && figureRef.current !== null) {
            figureRef.current.addEventListener('mouseenter', (e: any) => ctx.hover(e));
            figureRef.current.addEventListener('mouseleave', (e: any) => ctx.leave(e));
        }

        return () => ctx.revert();
    }, []);

    return (
        <div ref={main}>
            <Navigation lang={currentLanguage} />
            <div className='container__about'>
                <div className='title__about'><h1><a href='https://github.com/niki4etoo/'>{l.title}</a></h1></div>
                <section className='profile__about'>
                    <figure ref={figureRef}>
                        <a href='https://github.com/niki4etoo/'>
                            <LazyLoadImage
                                src={profilePhoto}
                                effect='blur'
                                width={200}
                                height={200} />
                        </a>
                    </figure>
                </section>
                <section className='intro__about'>
                    <p>{l.intro}</p>
                </section>
                <section className='subintro__about'>
                    <h3>{l.subintro.title}</h3>
                    <section className='subintro-cols__about'>
                        <div className='col-extra__about'>{l.subintro.descriptionSecond}</div>
                        <div className='col-extra__about'>{l.subintro.descriptionFirst}</div>
                    </section>
                </section>
                <section className='tech-stack__about'>
                    <h1>{l.techStack}</h1>
                    <div className='tech-stack-row__about'>
                        <div className='tech-stack-column__about'>
                            <h2>{l.tech.used}</h2>
                            <ul>
                                <li><a href='https://www.typescriptlang.org/'>{l.tech.ts}</a> & <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>{l.tech.js}</a></li>
                                <li><a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>{l.tech.html}</a> & <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'>{l.tech.css}</a></li>
                                <li><a href='https://react.dev/'>{l.tech.react}</a></li>
                            </ul>
                        </div>
                        <div className='tech-stack-column__about'>
                            <h2>{l.tech.learning}</h2>
                            <ul>
                                <li><a href='https://gsap.com/'>{l.tech.gsap}</a></li>
                                <li><a href='https://www.react-spring.dev/'>{l.tech.reactSpring}</a></li>
                                <li><a href='https://nodejs.org/en'>{l.tech.node}</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
            <Menu active={'/about'} lang={currentLanguage} />
            <LanguageSwitch lang={currentLanguage} setter={setCurrentLanguage} />
        </div>
    );
}

export default About;
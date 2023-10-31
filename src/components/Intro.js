import React, { useState, useRef, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

import { getRandomRotation } from './Utilities';

import LanguageSwitch from './LanguageSwitch';
import Menu from './Menu';

//Languages
import bg from '../languages/bg.json';
import en from '../languages/en.json';

//Styling
import '../styles/intro.css';
import '../styles/togglelanguages.css';

const Intro = () => {

    const portfolioRef = useRef(null);
    const main = useRef(null);

    const [isHeaderClicked, setIsHeaderClicked] = useState(false);

    const [isDescriptionShowed, setIsDescriptionShowed] = useState(false);

    const [intro, setIntro] = useState({
        question: false, answers: false,
        yes: false,
        no: false,
        depends: false
    });


    let { state } = useLocation(); // using language set by user

    //Languages ( BG | EN)

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false);

    const HeaderTitle = (props) => {
        if (props.lang) {
            return <><span id='main-color'>{en.header.titleFirstPart}</span>{en.header.titleSecondPart}</>;
        } else {
            return <><span id='main-color'>{bg.header.titleFirstPart}</span>{bg.header.titleSecondPart}</>;
        }
    }

    const MainQuestion = (props) => {
        if (props.lang) {
            return <>{en.header.mainQuestionBegin} <span id='main-color'>{en.header.mainQuestionAccentWord}</span> {en.header.mainQuestionEnd}?</>;
        } else {
            return <>{bg.header.mainQuestion} <span id='main-color'>{bg.header.mainQuestionAccentWord}</span>?</>;
        }
    }


    const Answers = (props) => {
        let l = {};
        let result = "";
        (props.lang) ? l = en : l = bg;

        switch (props.type) {
            case "yes":
                result = l.header.mainAnswersYes;
                break;
            case "no":
                result = l.header.mainAnswersNo;
                break;
            case "depends":
                result = l.header.mainAnswersDepends;
                break;
            default:
        }

        return result;
    }

    const AnswerDescriptions = (props) => {
        let l = {};
        let result;
        (props.lang) ? l = en : l = bg;
        switch (props.type) {
            case "yes":
                result = <div className='answer-description__intro'>
                    <h1>{l.answers.yes.title}</h1>
                    <h3>{l.answers.yes.description}</h3>
                    <Link to='/yes' state={{ lang: props.lang }}>{l.answers.learnMore}</Link>
                </div>;
                break;
            case "no":
                result = <div className='answer-description__intro'>
                    <h1>{l.answers.no.title}</h1>
                    <h3>{l.answers.no.description}</h3>
                    <Link to='/no' state={{ lang: props.lang }}>{l.answers.learnMore}</Link>
                </div>;
                break;
            case "depends":
                result = <div className='answer-description__intro'>
                    <h1>{l.answers.depends.title}</h1>
                    <h3>{l.answers.depends.description}</h3>
                    <Link to='/depends' state={{ lang: props.lang }}>{l.answers.learnMore}</Link>
                </div>;
                break;
            default:
        }
        return result;
    }

    //Animation on Header
    useLayoutEffect(() => {
        if (!isHeaderClicked) return;

        let ctx = gsap.context(() => {
            let mainTimeline = gsap.timeline();

            mainTimeline.to(portfolioRef.current, {
                y: -300,
                opacity: 0,
                ease: "Power4.easeOut"
            }).to('.header__intro', {
                height: "10vh",
                stagger: 1.5,
                onComplete: () => {
                    setIntro((state) => {
                        return { ...state, answers: false, question: !state.question }
                    });
                }
            });
        }, main);

        return () => ctx.revert(); // clean up

    }, [isHeaderClicked]);

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {

            gsap.fromTo('.header__intro', 
            {
                opacity: 0,
                rotation: getRandomRotation()
            },
            {
                opacity: 1,
                rotation: 0,
                duration: 0.5
            });

        }, main);

        return () => ctx.revert(); // clean up

    }, []);

    // Animation on Answer Descriptions
    useLayoutEffect(() => {
        if (!isDescriptionShowed) return;

        let ctx = gsap.context(() => {
            let mt = gsap.timeline(); // mt - main timeline
            mt.fromTo('.answer-description__intro',
                {
                    opacity: 0,
                    x: "-5%"
                },
                {
                    x: 0,
                    opacity: 1,
                    ease: "Power4.easeOut",
                    duration: 1.5
                });

        }, main);


        return () => ctx.revert(); // clean up

    }, [isDescriptionShowed]);

    const showAnswers = () => {
        setIntro((state) => {
            return { ...state, answers: !state.answers }
        });
    }

    // Description for each answer

    const showDescription = (answer) => {
        switch (answer) {
            case "yes":
                setIntro((state) => {
                    return { ...state, yes: true }
                });
                break;
            case "no":
                setIntro((state) => {
                    return { ...state, no: true }
                });
                break;
            case "depends":
                setIntro((state) => {
                    return { ...state, depends: true }
                });
                break;
            default:
        }
        setIntro((state) => { return { ...state, question: false, answers: false } });
    }


    return (
        <div ref={main} className='container__intro'>
            <div className='header__intro'>
                <h1 ref={portfolioRef} onClick={() => { setIsHeaderClicked(prev => !prev) }}><HeaderTitle lang={currentLanguage} /></h1>
            </div>
            {
                intro.question &&
                <div className='questions__intro'>
                    <h1 onClick={showAnswers}><MainQuestion lang={currentLanguage} /></h1>
                </div>
            }
            {
                intro.answers &&

                <div className='answers__intro'>
                    <div className='answer__intro' onClick={() => {
                        showDescription("yes");
                        setIsDescriptionShowed(prev => true);
                    }}><Answers type="yes" lang={currentLanguage} /></div>
                    <div className='answer__intro' onClick={() => {
                        showDescription("no");
                        setIsDescriptionShowed(prev => true);
                    }}><Answers type="no" lang={currentLanguage} /></div>
                    <div className='answer__intro' onClick={() => {
                        showDescription("depends");
                        setIsDescriptionShowed(prev => true);
                    }}><Answers type="depends" lang={currentLanguage} /></div>
                </div>
            }
            <div className='answer-descriptions__intro'>
                {
                    intro.yes &&
                    <AnswerDescriptions type="yes" lang={currentLanguage} />
                }
                {
                    intro.no &&
                    <AnswerDescriptions type="no" lang={currentLanguage} />
                }
                {
                    intro.depends &&
                    <AnswerDescriptions type="depends" lang={currentLanguage} />
                }
            </div>
            <Menu lang={currentLanguage} />
            <LanguageSwitch lang={currentLanguage} setter={setCurrentLanguage} />
        </div>
    );
}

export default Intro;

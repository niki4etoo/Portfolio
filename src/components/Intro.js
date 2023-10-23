import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import '../styles/intro.css';
import '../styles/togglelanguages.css';

import Menu from './Menu';

//Languages
import bg from '../languages/bg.json';
import en from '../languages/en.json';


const Intro = () => {

    const portfolioRef = useRef(null);

    let { state } = useLocation(); // using language set by user

    //Languages ( BG | EN)

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false);

    const changeLanguage = (e) => {
        if (e.target.checked) {
            setCurrentLanguage(prev => true); //Switched to EN
        } else {
            setCurrentLanguage(prev => false); //Switched to BG
        }
    }

    const HeaderTitle = (props) => {
        if (props.lang) {
            return <><span id='blue'>{en.header.titleFirstPart}</span>{en.header.titleSecondPart}</>;
        } else {
            return <><span id='blue'>{bg.header.titleFirstPart}</span>{bg.header.titleSecondPart}</>;
        }
    }

    const MainQuestion = (props) => {
        if (props.lang) {
            return <>{en.header.mainQuestionBegin} <span id='blue'>{en.header.mainQuestionAccentWord}</span> {en.header.mainQuestionEnd}?</>;
        } else {
            return <>{bg.header.mainQuestion} <span id='blue'>{bg.header.mainQuestionAccentWord}</span>?</>;
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
                result = <div className='answer-description'>
                    <h1>{l.answers.yes.title}</h1>
                    <h3>{l.answers.yes.description}</h3>
                    <Link to='/yes' state={{ lang: props.lang }}>{l.answers.learnMore}</Link>
                </div>;
                break;
            case "no":
                result = <div className='answer-description'>
                    <h1>{l.answers.no.title}</h1>
                    <h3>{l.answers.no.description}</h3>
                    <Link to='/no' state={{ lang: props.lang }}>{l.answers.learnMore}</Link>
                </div>;
                break;
            case "depends":
                result = <div className='answer-description'>
                    <h1>{l.answers.depends.title}</h1>
                    <h3>{l.answers.depends.description}</h3>
                    <Link to='/depends' state={{ lang: props.lang }}>{l.answers.learnMore}</Link>
                </div>;
                break;
            default:
        }
        return result;
    }

    const [simplicity, setSimplicity] = useState({ question: false, answers: false });

    const [answerDescription, setAnswerDescription] = useState({
        yes: false,
        no: false,
        depends: false
    });


    const showQuestion = () => {

        let mainTimeline = gsap.timeline();

        mainTimeline.to(portfolioRef.current, {
            y: -300,
            opacity: 0,
            ease: "Power4.easeOut"
        }).to('.header', {
            height: "10vh",
            stagger: 1.5,
            onComplete: () => {
                setSimplicity((state) => {
                    return { answers: false, question: !state.question }
                });
            }
        });

    }

    const showAnswers = () => {
        setSimplicity((state) => {
            return { ...state, answers: !state.answers }
        });
    }

    // Description for each answer

    const showDescription = (answer) => {
        switch (answer) {
            case "yes":
                setAnswerDescription((state) => {
                    return { ...state, yes: true }
                });
                break;
            case "no":
                setAnswerDescription((state) => {
                    return { ...state, no: true }
                });
                break;
            case "depends":
                setAnswerDescription((state) => {
                    return { ...state, depends: true }
                });
                break;
            default:
        }
        setSimplicity({ question: false, answers: false });
    }


    return (
        <div className='container'>
            <div className='header'>
                <h1 ref={portfolioRef} onClick={() => showQuestion()}><HeaderTitle lang={currentLanguage} /></h1>
            </div>
            {
                simplicity.question &&
                <div className='questions'>
                    <h1 onClick={showAnswers}><MainQuestion lang={currentLanguage} /></h1>
                </div>
            }
            {
                simplicity.answers &&

                <div className='answers'>
                    <div className='answer' onClick={() => showDescription("yes")}><Answers type="yes" lang={currentLanguage} /></div>
                    <div className='answer' onClick={() => showDescription("no")}><Answers type="no" lang={currentLanguage} /></div>
                    <div className='answer' onClick={() => showDescription("depends")}><Answers type="depends" lang={currentLanguage} /></div>
                </div>
            }
            <div className='answersDescription'>
                {
                    answerDescription.yes &&
                    <AnswerDescriptions type="yes" lang={currentLanguage} />
                }
                {
                    answerDescription.no &&
                    <AnswerDescriptions type="no" lang={currentLanguage} />
                }
                {
                    answerDescription.depends &&
                    <AnswerDescriptions type="depends" lang={currentLanguage} />
                }
            </div>
            <Menu lang={currentLanguage} />
            <label className="switch">
                <input type="checkbox" onChange={(e) => changeLanguage(e)} checked={currentLanguage} />
                <span className="slider round"></span>
            </label>
        </div>
    );
}

export default Intro;

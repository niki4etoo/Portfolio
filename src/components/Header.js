import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import '../styles/header.css';
import '../styles/togglelanguages.css';

//Languages
import bg from '../languages/bg.json';
import en from '../languages/en.json';


const Header = () => {

    const portfolioRef = useRef(null);

    //Languages ( BG | EN)

    const [currentLanguage, setCurrentLanguage] = useState(false);

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
                result = l.header.mainAnswersItDepends;
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
                    <Link to='/yes'>{l.answers.learnMore}</Link>
                </div>;
                break;
            case "no":
                result = <div className='answer-description'>
                    <h1>{l.answers.no.title}</h1>
                    <h3>{l.answers.no.description}</h3>
                    <Link to='/no'>{l.answers.learnMore}</Link>
                </div>;
                break;
            case "depends":
                result = <div className='answer-description'>
                    <h1>{l.answers.itDepends.title}</h1>
                    <h3>{l.answers.itDepends.description}</h3>
                    <Link to='/depends'>{l.answers.learnMore}</Link>
                </div>;
                break;
            default:
        }
        return result;
    }

    const [simplicityQuestion, setSimplicityQuestion] = useState(false);
    const [simplicityAnswers, setSimplicityAnswers] = useState(false);

    const [answerDescriptionYes, setAnswerDescriptionYes] = useState(false);
    const [answerDescriptionNo, setAnswerDescriptionNo] = useState(false);
    const [answerDescriptionItDepends, setAnswerDescriptionItDepends] = useState(false);


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
                setSimplicityQuestion(prev => !prev);
                setSimplicityAnswers(false);
            }
        });

    }

    const showAnswers = () => {
        setSimplicityAnswers(prev => !prev);
    }

    // Description for each answer (on/off)

    const showDescription = (answer) => {
        if (answer === "yes") {
            setAnswerDescriptionYes(true);
        } else if (answer === "no") {
            setAnswerDescriptionNo(true);
        } else if (answer === "depends") {
            setAnswerDescriptionItDepends(true);
        }
        setSimplicityAnswers(false);
        setSimplicityQuestion(false);
    }


    return (
        <div className='container'>
            <div className='header'>
                <h1 ref={portfolioRef} onClick={() => showQuestion()}><HeaderTitle lang={currentLanguage} /></h1>
            </div>
            {
                simplicityQuestion &&
                <div className='questions'>
                    <h1 onClick={showAnswers}><MainQuestion lang={currentLanguage} /></h1>
                </div>
            }
            {
                simplicityAnswers &&

                <div className='answers'>
                    <div className='answer' onClick={() => showDescription("yes")}><Answers type="yes" lang={currentLanguage} /></div>
                    <div className='answer' onClick={() => showDescription("no")}><Answers type="no" lang={currentLanguage} /></div>
                    <div className='answer' onClick={() => showDescription("depends")}><Answers type="depends" lang={currentLanguage} /></div>
                </div>
            }
            <div className='answersDescription'>
                {
                    answerDescriptionYes &&
                    <AnswerDescriptions type="yes" lang={currentLanguage} />
                }
                {
                    answerDescriptionNo &&
                    <AnswerDescriptions type="no" lang={currentLanguage} />
                }
                {
                    answerDescriptionItDepends &&
                    <AnswerDescriptions type="depends" lang={currentLanguage} />
                }
            </div>
            <label className="switch">
                <input type="checkbox" onChange={(e) => changeLanguage(e)} />
                <span className="slider round"></span>
            </label>

        </div>

    );
}

export default Header;

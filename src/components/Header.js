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

    const YesAnswer = (props) => {
        if (props.lang) {
            return <>{en.header.mainAnswersYes}</>;
        } else {
            return <>{bg.header.mainAnswersYes}</>;
        }
    }

    const NoAnswer = (props) => {
        if (props.lang) {
            return <>{en.header.mainAnswersNo}</>;
        } else {
            return <>{bg.header.mainAnswersNo}</>;
        }
    }

    const ItDependsAnswer = (props) => {
        if (props.lang) {
            return <>{en.header.mainAnswersItDepends}</>;
        } else {
            return <>{bg.header.mainAnswersItDepends}</>;
        }
    }


    // to do ( reduce to one description component )
    const YesAnswerDescription = (props) => {
        console.log(en.answers);
        if (props.lang) {
            return <div className='answer-description'>
                        <h1>{en.answers.yes.title}</h1>
                        <h3>{en.answers.yes.description}</h3>
                        <Link to='/yes'>{en.answers.learnMore}</Link>
                    </div>;
        } else {
            return <div className='answer-description'>
                        <h1>{bg.answers.yes.title}</h1>
                        <h3>{bg.answers.yes.description}</h3>
                        <Link to='/yes'>{bg.answers.learnMore}</Link>
                    </div>;
        }
    }

    const NoAnswerDescription = (props) => {
        if (props.lang) {
            return <div className='answer-description'>
                        <h1>{en.answers.no.title}</h1>
                        <h3>{en.answers.no.description}</h3>
                        <Link to='/no'>{en.answers.learnMore}</Link>
                    </div>;
        } else {
            return <div className='answer-description'>
                        <h1>{bg.answers.no.title}</h1>
                        <h3>{bg.answers.no.description}</h3>
                        <Link to='/no'>{bg.answers.learnMore}</Link>
                    </div>;
        }
    }

    const ItDependsAnswerDescription = (props) => {
        if (props.lang) {
            return <div className='answer-description'>
                        <h1>{en.answers.itDepends.title}</h1>
                        <h3>{en.answers.itDepends.description}</h3>
                        <Link to='/itDepends'>{en.answers.learnMore}</Link>
                    </div>;
        } else {
            return <div className='answer-description'>
                        <h1>{bg.answers.itDepends.title}</h1>
                        <h3>{bg.answers.itDepends.description}</h3>
                        <Link to='/itDepends'>{bg.answers.learnMore}</Link>
                    </div>;
        }
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
        } else if (answer === "itDepends") {
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
                    <div className='answer' onClick={() => showDescription("yes")}><YesAnswer lang={currentLanguage} /></div>
                    <div className='answer' onClick={() => showDescription("no")}><NoAnswer lang={currentLanguage} /></div>
                    <div className='answer' onClick={() => showDescription("itDepends")}><ItDependsAnswer lang={currentLanguage} /></div>
                </div>
            }
            <div className='answersDescription'>
                {
                    answerDescriptionYes &&
                    <YesAnswerDescription lang={currentLanguage} />
                }
                {
                    answerDescriptionNo &&
                    <NoAnswerDescription lang={currentLanguage} />
                }
                {
                    answerDescriptionItDepends &&
                    <ItDependsAnswerDescription lang={currentLanguage} />
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

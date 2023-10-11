import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import '../styles/header.css';
import '../styles/togglelanguages.css';

import answers from '../Decisions/simplicityAnswers.json';


const Header = () => {

    const portfolioRef = useRef(null);

    //Languages ( BG | EN)
    const languageCurrent = useRef(null);

    const changeLanguage = (e) => {
        console.log(languageCurrent.current);
        console.log(e.target.checked); // default is false ( BG ) -> true ( EN )
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
                <h1 ref={portfolioRef} onClick={() => showQuestion()}><span id='blue'>Port</span>folio</h1>
            </div>
            {
                simplicityQuestion &&
                <div className='questions'>
                    <h1 onClick={showAnswers}>Is simplicity <span id='blue'>important</span>?</h1>
                </div>
            }
            {
                simplicityAnswers &&

                <div className='answers'>
                    <div className='answer' onClick={() => showDescription("yes")}>Yes</div>
                    <div className='answer' onClick={() => showDescription("no")}>No</div>
                    <div className='answer' onClick={() => showDescription("itDepends")}>It depends</div>
                </div>
            }
            <div className='answersDescription'>
                {
                    answerDescriptionYes &&
                    <div className='answer-description'>
                        <h1>{answers.yes.title}</h1>
                        <h3>{answers.yes.description}</h3>
                        <Link to='/yes'>Learn More</Link>
                    </div>

                }
                {
                    answerDescriptionNo &&
                    <div className='answer-description'>
                        <h1>{answers.no.title}</h1>
                        <h3>{answers.no.description}</h3>
                        <Link to='/no'>Learn More</Link>
                    </div>
                }
                {
                    answerDescriptionItDepends &&
                    <div className='answer-description'>
                        <h1>{answers.itDepends.title}</h1>
                        <h3>{answers.itDepends.description}</h3>
                        <Link to='/itDepends'>Learn More</Link>
                    </div>
                }
            </div>
            <label className="switch">
                <input ref={languageCurrent} type="checkbox" onChange={(e) => changeLanguage(e)} />
                <span className="slider round"></span>
            </label>

        </div>

    );
}

export default Header;

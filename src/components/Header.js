import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import '../styles/header.css';


const Header = () => {

    const portfolioRef = useRef(null);

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
        if(answer === "yes"){
            setAnswerDescriptionYes(true);
        } else if(answer === "no"){
            setAnswerDescriptionNo(true);
        } else if(answer === "itDepends"){
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
                    <button onClick={() => showDescription("yes")}>Yes</button>
                    <button onClick={() => showDescription("no")}>No</button>
                    <button onClick={() => showDescription("itDepends")}>It depends</button>
                </div>
            }
            <div className='answersDescription'>
            {
                answerDescriptionYes &&
                    <div className='answer-description'>
                        <h1>YES</h1>
                        <h3>The correct answer is "yeah". Why? Because makes <span id='blue'>life</span> easier and actually richer.</h3>
                        <Link to='/yes'>Learn More</Link>
                    </div>

            }
            {
                answerDescriptionNo &&
                    <div className='answer-description'>
                        <h1>NO</h1>
                        <h3>This is not the correct answer, but anyway. Maybe complicated is your <span id='blue'>type</span>, which in some cases is better.</h3>
                        <Link to='/no'>Learn More</Link>
                    </div>
            }
            {
                answerDescriptionItDepends &&
                    <div className='answer-description'>
                        <h1>It Depends</h1>
                        <h3>It depends on what? Do you hesitate for something? Are you sure? 
                            It's okay, you can find answers for the <span id='blue'>simplicity</span> in some books or kind of books.</h3>
                            <Link to='/itDepends'>Learn More</Link>
                    </div>
            }
            </div>
        </div>
        
    );
}

export default Header;

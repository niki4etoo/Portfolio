import React, { useState } from 'react';
import '../styles/header.css';

function Header(){

    const [simplicityQuestion, setSimplicityQuestion] = useState(false);
    const [simplicityAnswers, setSimplicityAnswers] = useState(false);

    const [answerDescriptionYes, setAnswerDescriptionYes] = useState(false);
    const [answerDescriptionNo, setAnswerDescriptionNo] = useState(false);
    const [answerDescriptionItDepends, setAnswerDescriptionItDepends] = useState(false);

    const showQuestion = () => {
        setSimplicityQuestion(prev => !prev);
        setSimplicityAnswers(false);
    }

    const showAnswers = () => {
        setSimplicityAnswers(prev => !prev);
    }

    // Description for each answer (on/off)
    const showDescriptionYes = () => {
        setAnswerDescriptionYes(true);
        setSimplicityAnswers(false);
        setSimplicityQuestion(false);

        const portfolio = document.querySelector("#portfolio");
        portfolio.style.pointerEvents = "none";

        //To do ( navigate to Yes component )

    }

    const showDescriptionNo = () => {
        setAnswerDescriptionNo(true);
        setSimplicityAnswers(false);
        setSimplicityQuestion(false);

        const portfolio = document.querySelector("#portfolio");
        portfolio.style.pointerEvents = "none";

        //To do ( navigate to No component )
    }

    const showDescriptionItDepends = () => {
        setAnswerDescriptionItDepends(true);
        setSimplicityAnswers(false);
        setSimplicityQuestion(false);

        const portfolio = document.querySelector("#portfolio");
        portfolio.style.pointerEvents = "none";

        //To do ( navigate to It Depends component )
    }


    return (
        <>
        <div className='header'>
            <h1 id='portfolio' onClick={showQuestion}><span id='blue'>Port</span>folio</h1>
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
                <button onClick={showDescriptionYes}>Yes</button>
                <button onClick={showDescriptionNo}>No</button>
                <button onClick={showDescriptionItDepends}>It depends</button>
            </div>
        }
        <div className='answersDescription'>
        {
            answerDescriptionYes &&

                <div className='answer-description'>
                    <h1>YES</h1>
                    <h3>The correct answer is "yeah". Why? Because makes <span id='blue'>life</span> easier and actually richer.</h3>
                </div>

        }
        {
            answerDescriptionNo &&
                <div className='answer-description'>
                    <h1>NO</h1>
                    <h3>This is not the correct answer, but anyway. Maybe complicated is your <span id='blue'>type</span>, which in some cases is better.</h3>
                </div>
        }
        {
                answerDescriptionItDepends &&
                <div className='answer-description'>
                    <h1>It Depends</h1>
                    <h3>It depends on what? Do you hesitate for something? Are you sure? 
                        It's okay, you can find answers for the <span id='blue'>simplicity</span> in some books or kind of books.</h3>
                </div>
        }
        </div>
        </>
        
    );
}

export default Header;

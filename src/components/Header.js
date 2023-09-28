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

            <div className='question'>
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

                <div id='yes'>
                    Answer description for the "YES"
                </div>

        }
        {
            answerDescriptionNo &&
            <div id='no'>
                    Answer description for the "No"
                </div>
        }
        {
                answerDescriptionItDepends &&
                <div id='itDepends'>
                    Answer description for the "It Depends"
                </div>
        }
        </div>
        </>
        
    );
}

export default Header;

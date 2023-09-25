import React, { useState } from 'react';
import '../styles/header.css';

function Header(){

    const [simplicityQuestion, setSimplicityQuestion] = useState(false);

    const [simplicityAnswers, setSimplicityAnswers] = useState(false);


    const showQuestion = () => {
        setSimplicityQuestion(prev => !prev);
        setSimplicityAnswers(false);
    }

    const showAnswers = () => {
        setSimplicityAnswers(prev => !prev);
    }

    return (
        <>
        <div className='header'>
            <h1 onClick={showQuestion}>Portfolio</h1>
        </div>
        { 
            simplicityQuestion &&

            <div className='question'>
                <h2 onClick={showAnswers}>Is simplicity important?</h2>
            </div>
        }
        {
            simplicityAnswers && 

            <div className='answers'>
                <button onClick={() => { console.log("Go to Yes component(to do)");}}>Yes</button>
                <button onClick={() => { console.log("Go to No component(to do)");}}>No</button>
                <button onClick={() => { console.log("Go to It depends component(to do)");}}>It depends</button>
            </div>
        }
        </>
        
    );
}

export default Header;

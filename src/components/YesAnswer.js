import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';


import Navigation from "./Navigation";
import QuestionAnimations from "./QuestionAnimations";
import AnsweredQuestions from './AnsweredQuestions';

import qa from '../Decisions/questionsAndAnswers.json';

import '../styles/quiz.css';

const  userAnswers = [];

const YesAnswer = () => {

    const questionRef = useRef(null);

    const answersRef = useRef([]);

    const [index, setIndex] = useState(0);

    const [questionsToAnswer, setQuestionsToAnswer] = useState(true);
    const [questionsAnswered, setQuestionsAnswered] = useState(false);

    const handle = (answer) => {
        userAnswers.push(answer);

        if(index === qa.yes.questions.length-1){
            setQuestionsAnswered(prev => !prev);
            setQuestionsToAnswer(prev => !prev);
        } else {
            QuestionAnimations(questionRef, answersRef, setIndex);
        }
    }

    let result = [];
    const Answers = () => {

        result = [];
        qa.yes.questions[index].answers.forEach( (answer) => {
                result.push(<div key={uuidv4()} ref={(e) => answersRef.current.push(e)} className="quiz-answer" onClick={() => handle(answer)}>
                    {answer}
                </div>);
        });

        return result;
    }

    return (
        <>
        <Navigation />
            { questionsAnswered && 
                <div className="answered">
                    <span className="message-success">You answered all the questions. Congratulations! You win a gum with a few coins!</span>
                    <AnsweredQuestions questions={userAnswers} page="/yes" />
                </div>
            }
            {
                questionsToAnswer &&
                
                    <div className="quiz-container">
                        <div ref={questionRef} className="quiz-question">
                            {qa.yes.questions[index].question}
                        </div>

                        <div className="quiz-answers">
                            <Answers />
                        </div>
                    </div>
            }
        </>
    );
}

export default YesAnswer;
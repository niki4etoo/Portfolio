import React, { useState, useRef } from "react";
import gsap from 'gsap';

import Navigation from "./Navigation";

import qa from '../Decisions/questionsAndAnswers.json';

import '../styles/quiz.css';

const  userAnswers = [];

// To Do ( remove duplicated code )

const ItDependsAnswer = () => {

    const questionRef = useRef(null);

    const answersRef = useRef([]);

    const [index, setIndex] = useState(0);

    const [questionsToAnswer, setQuestionsToAnswer] = useState(true);
    const [questionsAnswered, setQuestionsAnswered] = useState(false);

    const handle = (answer) => {
        userAnswers.push(answer);

        if(index === qa.depends.questions.length-1){
            setQuestionsAnswered(prev => !prev);
            setQuestionsToAnswer(prev => !prev);
            console.log(userAnswers);


        } else {
            const timeline = gsap.timeline();
            console.log(answersRef);
            timeline.to(questionRef.current, {
                y: -300,
                ease: "Power4.easeOut",
                duration: 0.5,
            }).to(answersRef.current[0], {
                opacity: 0,
                duration: 0.25,
                ease: "Power4.easeOut"
            }).to(answersRef.current[1], {
                opacity: 0,
                duration: 0.25,
                ease: "Power4.easeOut"
            }).to(answersRef.current[2], {
                opacity: 0,
                duration: 0.25,
                ease: "Power4.easeOut"
            }).to(answersRef.current[3], {
                opacity: 0,
                duration: 0.25,
                ease: "Power4.easeOut",
                onComplete: () => {
                    setIndex(index => index + 1);
                }
            }).to(questionRef.current, { // Next question
                y: 0,
                ease: "Power4.easeIn"
            }).to(answersRef.current[3], { // revert the opacity for each answer back to 1
                opacity: 1,
                duration: 0.25,
                ease: "Power4.easeOut",
            })
            .to(answersRef.current[2], {
                opacity: 1,
                duration: 0.25,
                ease: "Power4.easeOut",
            }).to(answersRef.current[1], {
                opacity: 1,
                duration: 0.25,
                ease: "Power4.easeOut",
            }).to(answersRef.current[0], {
                opacity: 1,
                duration: 0.25,
                ease: "Power4.easeOut",
            });
        }
    }

    return (
        <>
        <Navigation />
            { questionsAnswered && 
                <div className="answered">You answered all the questions. Congratulations! You win a gum with a few coins!</div>
            }
            {
                questionsToAnswer &&
                
                    <div className="quiz-container">
                        <div ref={questionRef} className="quiz-question">
                            {qa.depends.questions[index].question}
                        </div>

                        <div className="quiz-answers">

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(qa.depends.questions[index].answers[0])}>
                                {qa.depends.questions[index].answers[0]}
                            </div>

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(qa.depends.questions[index].answers[1])}>
                                {qa.depends.questions[index].answers[1]}
                            </div>

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(qa.depends.questions[index].answers[2])}>
                                {qa.depends.questions[index].answers[2]}
                            </div>

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(qa.depends.questions[index].answers[3])}>
                                {qa.depends.questions[index].answers[3]}
                            </div>
                        </div>
                    </div>
            }
        </>
    );
}

export default ItDependsAnswer;
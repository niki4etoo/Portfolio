import React, { useState, useRef } from "react";

import Navigation from "./Navigation";
import QuestionAnimations from "./QuestionAnimations";
import AnsweredQuestions from './AnsweredQuestions';

import Messages from './Messages';

//Languages
import bg from '../languages/bg.json';
import en from '../languages/en.json';

import '../styles/quiz.css';
import '../styles/togglelanguages.css';

const userAnswers = [];

const YesAnswer = () => {

    const questionRef = useRef(null);

    const [index, setIndex] = useState(0);

    const [questionsToAnswer, setQuestionsToAnswer] = useState(true);
    const [questionsAnswered, setQuestionsAnswered] = useState(false);

    //Languages ( BG | EN) //To Do (passing states from parent to children)

    const [currentLanguage, setCurrentLanguage] = useState(false);

    const changeLanguage = (e) => {
        if (e.target.checked) {
            setCurrentLanguage(prev => true); //Switched to EN
        } else {
            setCurrentLanguage(prev => false); //Switched to BG
        }
    }

    const QuizContainer = (props) => {
        const answersRef = useRef([]);

        const handle = (answer) => {
            userAnswers.push(answer);

            if (index === en.quiz.yes.questions.length - 1) {
                setQuestionsAnswered(prev => !prev);
                setQuestionsToAnswer(prev => !prev);
            } else {
                QuestionAnimations(questionRef, answersRef, setIndex);
            }
        }

        if (props.lang) {
            return <><div className="quiz-container">
                        <div ref={questionRef} className="quiz-question">
                            {en.quiz.yes.questions[index].question}
                        </div>

                        <div className="quiz-answers">

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(en.quiz.yes.questions[index].answers[0])}>
                                {en.quiz.yes.questions[index].answers[0]}
                            </div>

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(en.quiz.yes.questions[index].answers[1])}>
                                {en.quiz.yes.questions[index].answers[1]}
                            </div>

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(en.quiz.yes.questions[index].answers[2])}>
                                {en.quiz.yes.questions[index].answers[2]}
                            </div>

                            <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(en.quiz.yes.questions[index].answers[3])}>
                                {en.quiz.yes.questions[index].answers[3]}
                            </div>
                        </div>
                    </div>
                    </>;
        } else {
            console.log(answersRef);
            return <>
                <div className="quiz-container">
                    <div ref={questionRef} className="quiz-question">
                        {bg.quiz.yes.questions[index].question}
                    </div>

                    <div className="quiz-answers">

                        <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(bg.quiz.yes.questions[index].answers[0])}>
                            {bg.quiz.yes.questions[index].answers[0]}
                        </div>

                        <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(bg.quiz.yes.questions[index].answers[1])}>
                            {bg.quiz.yes.questions[index].answers[1]}
                        </div>

                        <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(bg.quiz.yes.questions[index].answers[2])}>
                            {bg.quiz.yes.questions[index].answers[2]}
                        </div>

                        <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(bg.quiz.yes.questions[index].answers[3])}>
                            {bg.quiz.yes.questions[index].answers[3]}
                        </div>
                    </div>
                </div>
                </>;
        }
    }

    return (
        <>
            <Navigation lang={currentLanguage} index={index} />
            {questionsAnswered &&
                <div className="answered">
                    <Messages success={true} lang={currentLanguage} />
                    <AnsweredQuestions lang={currentLanguage} questions={userAnswers} questionsCount={en.quiz.yes.questions.length} page="/yes" />
                </div>
            }
            {
                questionsToAnswer &&
                <QuizContainer lang={currentLanguage} />
            }
            <label className="switch">
                <input type="checkbox" onChange={(e) => changeLanguage(e)} />
                <span className="slider round"></span>
            </label>
        </>
    );
}

export default YesAnswer;
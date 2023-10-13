import React, { useRef } from "react";

import QuestionAnimations from "./Animations/QuestionAnimations";

//Languages
import bg from '../../languages/bg.json';
import en from '../../languages/en.json';

export const userAnswers = [];

const QuizContainer = (props) => {

    const questionRef = useRef(null);

    const answersRef = useRef([]);

    const handle = (type, answer) => {
        userAnswers.push(answer);

        let length = 0;

        switch (type) {
            case "yes":
                length = en.quiz.yes.questions.length;
                break;
            case "no":
                length = en.quiz.no.questions.length;
                break;
            case "depends":
                length = en.quiz.depends.questions.length;
                break;
            default:
        }


        if (props.index === length - 1) {
            props.setQuestionsAnswered(prev => !prev);
            props.setQuestionsToAnswer(prev => !prev);
        } else {
            QuestionAnimations(questionRef, answersRef, props.setIndex);
        }
    }

    let l = {};
    let result;
    (props.lang) ? l = en : l = bg;

    switch (props.type) {
        case "yes":
            result = <div className="quiz-container">
                <div ref={questionRef} className="quiz-question">
                    {l.quiz.yes.questions[props.index].question}
                </div>

                <div className="quiz-answers">

                    <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(props.type, l.quiz.yes.questions[props.index].answers[0])}>
                        {l.quiz.yes.questions[props.index].answers[0]}
                    </div>

                    <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(props.type, l.quiz.yes.questions[props.index].answers[1])}>
                        {l.quiz.yes.questions[props.index].answers[1]}
                    </div>

                    <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(props.type, l.quiz.yes.questions[props.index].answers[2])}>
                        {l.quiz.yes.questions[props.index].answers[2]}
                    </div>

                    <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(props.type, l.quiz.yes.questions[props.index].answers[3])}>
                        {l.quiz.yes.questions[props.index].answers[3]}
                    </div>
                </div>
            </div>;
            break;
        case "no":
            result = <div className="quiz-container">
                <div ref={questionRef} className="quiz-question">
                    {l.quiz.no.questions[props.index].question}
                </div>

                <div className="quiz-answers">

                    <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(props.type, l.quiz.no.questions[props.index].answers[0])}>
                        {l.quiz.no.questions[props.index].answers[0]}
                    </div>

                    <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(props.type, l.quiz.no.questions[props.index].answers[1])}>
                        {l.quiz.no.questions[props.index].answers[1]}
                    </div>

                    <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(props.type, l.quiz.no.questions[props.index].answers[2])}>
                        {l.quiz.no.questions[props.index].answers[2]}
                    </div>

                    <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(props.type, l.quiz.no.questions[props.index].answers[3])}>
                        {l.quiz.no.questions[props.index].answers[3]}
                    </div>
                </div>
            </div>;
            break;
        case "depends":
            result = <div className="quiz-container">
                <div ref={questionRef} className="quiz-question">
                    {l.quiz.depends.questions[props.index].question}
                </div>

                <div className="quiz-answers">

                    <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(props.type, l.quiz.depends.questions[props.index].answers[0])}>
                        {l.quiz.depends.questions[props.index].answers[0]}
                    </div>

                    <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(props.type, l.quiz.depends.questions[props.index].answers[1])}>
                        {l.quiz.depends.questions[props.index].answers[1]}
                    </div>

                    <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(props.type, l.quiz.depends.questions[props.index].answers[2])}>
                        {l.quiz.depends.questions[props.index].answers[2]}
                    </div>

                    <div ref={(elem) => answersRef.current.push(elem)} className="quiz-answer" onClick={() => handle(props.type, l.quiz.depends.questions[props.index].answers[3])}>
                        {l.quiz.depends.questions[props.index].answers[3]}
                    </div>
                </div>
            </div>;
            break;
        default:
    }
    return result;
}

export default QuizContainer;
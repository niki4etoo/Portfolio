import React, { useState, useRef, useLayoutEffect } from "react";
import gsap from 'gsap';

//import QuestionAnimations from "./Animations/QuestionAnimations";

//Languages
import bg from '../../languages/bg.json';
import en from '../../languages/en.json';

export const userAnswers = [];

const QuizContainer = (props) => {

    const questionRef = useRef(null);
    const scope = useRef();
    const answersRef = useRef([]);

    const [startAnimation, setStartAnimation] = useState(false);
    const setIndex = props.setIndex;

    // Animations
    useLayoutEffect(() => { // to do
        if (!startAnimation) return;

        let ctx = gsap.context(() => {

            const timeline = gsap.timeline();
            timeline.set(answersRef.current, { pointerEvents: "none" });

            timeline.to(questionRef.current, {
                y: -300,
                ease: "Power4.easeOut",
                duration: 0.5,
            }).to([answersRef.current[0], answersRef.current[1], answersRef.current[2]], {
                opacity: 0,
                stagger: 0.25,
                ease: "Power4.easeOut",
            }).to(answersRef.current[3], {
                opacity: 0,
                ease: "Power4.easeOut",
                onComplete: () => {
                    setIndex(index => index + 1); // Moving to the next question and answers
                    console.log(answersRef.current);
                    gsap.set(answersRef.current, { pointerEvents: "auto" });
                    if (props.index === lengthQuestions - 1) {
                        props.setter((state) => { return { toAnswer: !state.toAnswer, answered: !state.answered } }); // Questions are answered (true), there are no more questions to answer (false)
                    } else {
                        timeline.to(questionRef.current, { // Next question
                            y: 0,
                            ease: "Power4.easeIn",
                            duration: 0.5,
                        }).to([answersRef.current[3], answersRef.current[2], answersRef.current[1], answersRef.current[0]], { // revert the opacity for each answer back to 1
                            opacity: 1,
                            stagger: 0.25,
                            ease: "Power4.easeOut",
                        });
                    }
                }
            });

        }, scope);

        return () => ctx.revert(); // cleanup

    }, [startAnimation, setIndex]);

    let lengthQuestions = 0;

    switch (props.type) {
        case "yes":
            lengthQuestions = en.quiz.yes.questions.length;
            break;
        case "no":
            lengthQuestions = en.quiz.no.questions.length;
            break;
        case "depends":
            lengthQuestions = en.quiz.depends.questions.length;
            break;
        default:
    }

    const handle = (answer) => {
        userAnswers.push(answer);
        setStartAnimation(prev => (prev = { startAnimation: true }));
    }

    let l = {};
    let result;
    (props.lang) ? l = en : l = bg;

    switch (props.type) {
        case "yes":
            result = <div className="quiz-container__quiz" ref={scope}>
                <div ref={questionRef} className="quiz-question__quiz">
                    {l.quiz.yes.questions[props.index].question}
                </div>

                <div className="quiz-answers__quiz">
                    {
                        l.quiz.yes.questions[props.index].answers.map((answer, index) => {
                            return <div key={answer} ref={(element) => answersRef.current[index] = element} className="quiz-answer__quiz" onClick={() => handle(answer)}>
                                {answer}
                            </div>
                        })
                    }
                </div>
            </div>;
            break;
        case "no":
            result = <div className="quiz-container__quiz" ref={scope}>
                <div ref={questionRef} className="quiz-question__quiz">
                    {l.quiz.no.questions[props.index].question}
                </div>

                <div className="quiz-answers__quiz">
                    {
                        l.quiz.no.questions[props.index].answers.map((answer, index) => {
                            return <div key={answer} ref={(element) => answersRef.current[index] = element} className="quiz-answer__quiz" onClick={() => handle(answer)}>
                                {answer}
                            </div>
                        })
                    }
                </div>
            </div>;
            break;
        case "depends":
            result = <div className="quiz-container__quiz" ref={scope}>
                <div ref={questionRef} className="quiz-question__quiz">
                    {l.quiz.depends.questions[props.index].question}
                </div>

                <div className="quiz-answers__quiz">
                    {
                        l.quiz.depends.questions[props.index].answers.map((answer, index) => {
                            return <div key={answer} ref={(element) => answersRef.current[index] = element} className="quiz-answer__quiz" onClick={() => handle(answer)}>
                                {answer}
                            </div>
                        })
                    }
                </div>
            </div>;
            break;
        default:
    }
    return result;
}

export default QuizContainer;
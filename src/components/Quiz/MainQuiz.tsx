import { useRef, useState } from 'react';

// languages
import bg from '../../languages/bg.json';
import en from '../../languages/en.json';

export const userAnswers: string[] = [];
let lengthQuestions = 0;

const QuizContainer = (props: any) => {

    const questionRef = useRef<any>(null);
    const answersRef = useRef<any>([]);

    const [index, setIndex] = useState(0);

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

    const handle = (answer: string) => {
        userAnswers.push(answer);

        if (lengthQuestions === index + 1) {
            props.setter((state: any) => { return { toAnswer: !state.toAnswer, answered: !state.answered } });
        } else {
            setIndex(index => index + 1);
        }
    }

    let result;
    let l = props.lang ? en : bg;

    switch (props.type) {
        case "yes":
            result = <div className="quiz-container__quiz">
                <div ref={questionRef} className="quiz-question__quiz">
                    {l.quiz.yes.questions[index].question}
                </div>

                <div className="quiz-answers__quiz">
                    {
                        l.quiz.yes.questions[index].answers.map((answer: string, index: number) => {
                            return <div key={answer} ref={(element) => answersRef.current[index] = element} className="quiz-answer__quiz" onClick={() => handle(answer)}>
                                {answer}
                            </div>
                        })
                    }
                </div>
            </div>;
            break;
        case "no":
            result = <div className="quiz-container__quiz">
                <div ref={questionRef} className="quiz-question__quiz">
                    {l.quiz.no.questions[index].question}
                </div>

                <div className="quiz-answers__quiz">
                    {
                        l.quiz.no.questions[index].answers.map((answer: string, index: number) => {
                            return <div key={answer} ref={(element) => answersRef.current[index] = element} className="quiz-answer__quiz" onClick={() => handle(answer)}>
                                {answer}
                            </div>
                        })
                    }
                </div>
            </div>;
            break;
        case "depends":
            result = <div className="quiz-container__quiz">
                <div ref={questionRef} className="quiz-question__quiz">
                    {l.quiz.depends.questions[index].question}
                </div>

                <div className="quiz-answers__quiz">
                    {
                        l.quiz.depends.questions[index].answers.map((answer, index) => {
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
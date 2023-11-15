import { useRef, useState } from 'react';

// languages
import bg from '../../languages/bg-mainquiz.json';
import en from '../../languages/en-mainquiz.json';

export const userAnswers: string[] = [];
let lengthQuestions = 0;

const MainQuiz = (props: any) => {

    const questionRef = useRef<any>(null);
    const answersRef = useRef<any>([]);

    const [index, setIndex] = useState(0);

    switch (props.type) {
        case 'first':
            lengthQuestions = en.first.questions.length;
            break;
        case 'second':
            lengthQuestions = en.second.questions.length;
            break;
        case 'third':
            lengthQuestions = en.third.questions.length;
            break;
        default:
    }

    const handle = (answer: string) => {
        userAnswers.push(answer);

        if (lengthQuestions === index + 1) {
            props.setter((state: any) => { return { toAnswer: !state.toAnswer, answered: !state.answered } }); //second more questions -> to answer false, answered true
        } else {
            setIndex(index => index + 1);
        }
    }

    let result;
    let l = props.lang ? en : bg;

    switch (props.type) {
        case 'first':
            result = <div className='quiz-container__quiz'>
                <div ref={questionRef} className='quiz-question__quiz'>
                    {l.first.questions[index].question}
                </div>

                <div className='quiz-answers__quiz'>
                    {
                        l.first.questions[index].answers.map((answer: string, index: number) => {
                            return <div key={answer} ref={(element) => answersRef.current[index] = element} className='quiz-answer__quiz' onClick={() => handle(answer)}>
                                {answer}
                            </div>
                        })
                    }
                </div>
            </div>;
            break;
        case 'second':
            result = <div className='quiz-container__quiz'>
                <div ref={questionRef} className='quiz-question__quiz'>
                    {l.second.questions[index].question}
                </div>

                <div className='quiz-answers__quiz'>
                    {
                        l.second.questions[index].answers.map((answer: string, index: number) => {
                            return <div key={answer} ref={(element) => answersRef.current[index] = element} className='quiz-answer__quiz' onClick={() => handle(answer)}>
                                {answer}
                            </div>
                        })
                    }
                </div>
            </div>;
            break;
        case 'third':
            result = <div className='quiz-container__quiz'>
                <div ref={questionRef} className='quiz-question__quiz'>
                    {l.third.questions[index].question}
                </div>

                <div className='quiz-answers__quiz'>
                    {
                        l.third.questions[index].answers.map((answer, index) => {
                            return <div key={answer} ref={(element) => answersRef.current[index] = element} className='quiz-answer__quiz' onClick={() => handle(answer)}>
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

export default MainQuiz;
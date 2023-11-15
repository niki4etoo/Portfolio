import { Link } from 'react-router-dom';

// languages
import bg from '../../languages/bg-mainquiz.json';
import en from '../../languages/en-mainquiz.json';

// styles
import './quiz.css';
import '../../styles/togglelanguages.css';


const AnsweredQuestions = (props: any) => {

    const resetQuestionStates = () => {
        props.setter({ toAnswer: true, answered: false }); // restore default state of question to answer and answered
    }
    
    if (props.lang) {
        return (
            <>
                <div className='answer-list__quiz'>
                    <div className='user-answer-title__quiz'>{en.stats.yourAnswers}</div>
                    <div className='user-answer-times__quiz'>{en.times.list[(props.questions.length / props.questionsCount) - 1]}</div>
                    <ol className='roman__quiz'>
                        {
                            props.questions.map((a: any, k: any) => {
                                return (
                                    <li key={k}>&nbsp;{a}</li>
                                )
                            })
                        }
                    </ol>
                    <div className='back-again__quiz'>
                        <Link to={props.page} state={{ lang: props.lang }} onClick={resetQuestionStates}>{en.stats.again}</Link>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className='answer-list__quiz'>
                    <div className='user-answer-title__quiz'>{bg.stats.yourAnswers}</div>
                    <div className='user-answer-times__quiz'>{bg.times.list[(props.questions.length / props.questionsCount) - 1]}</div>
                    <ol className='roman__quiz'>
                        {
                            props.questions.map((a: any, k: any) => {
                                return (
                                    <li key={k}>&nbsp;{a}</li>
                                )
                            })
                        }
                    </ol>
                    <div className='back-again__quiz'>
                        <Link to={props.page} state={{ lang: props.lang }} onClick={resetQuestionStates}>{bg.stats.again}</Link>
                    </div>
                </div>
            </>
        );
    }


}

export default AnsweredQuestions;
import { useState, useRef, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

import { getRandomRotation } from '../Utilities';

import LanguageSwitch from '../LanguageSwitch';
import Menu from '../Menu/Menu';

// languages
import bg from '../../languages/bg.json';
import en from '../../languages/en.json';

// styles
import './intro.css';
import '../../styles/togglelanguages.css';

let result = '';

const Intro = () => {

    const portfolioRef = useRef(null);
    const main = useRef(null);

    const [isHeaderClicked, setIsHeaderClicked] = useState(false);

    const [isDescriptionShowed, setIsDescriptionShowed] = useState(false);

    const [intro, setIntro] = useState({
        question: false, answers: false,
        first: false,
        second: false,
        third: false
    });

    let { state } = useLocation(); // using language set by user

    // languages ( BG | EN)

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false);
    const language = currentLanguage ? en : bg;

    const HeaderTitle = () => {
        return <span id='main-color'>{language.header.title}</span>;
    }

    const MainQuestion = () => {
        return <>{language.header.mainQuestion}<span id='main-color'>&nbsp;{language.header.mainQuestionAccentWord}</span>?</>;
    }


    const Answers = (props: any) => {

        switch (props.type) {
            case 'first':
                result = language.header.mainAnswerFirst;
                break;
            case 'second':
                result = language.header.mainAnswerSecond;
                break;
            case 'third':
                result = language.header.mainAnswerThird;
                break;
            default:
        }

        return result;
    }

    const AnswerDescriptions = (props: any) => {
        let result: any;
        switch (props.type) {
            case 'first':
                result = <div className='answer-description__intro'>
                    <h1>{language.answers.first.title}</h1>
                    <h3>{language.answers.first.description}</h3>
                    <Link to='/first' state={{ lang: props.lang }}>{language.answers.learnMore}</Link>
                </div>;
                break;
            case 'second':
                result = <div className='answer-description__intro'>
                    <h1>{language.answers.second.title}</h1>
                    <h3>{language.answers.second.description}</h3>
                    <Link to='/second' state={{ lang: props.lang }}>{language.answers.learnMore}</Link>
                </div>;
                break;
            case 'third':
                result = <div className='answer-description__intro'>
                    <h1>{language.answers.third.title}</h1>
                    <h3>{language.answers.third.description}</h3>
                    <Link to='/third' state={{ lang: props.lang }}>{language.answers.learnMore}</Link>
                </div>;
                break;
            default:
        }
        return result;
    }

    // animation on Header
    useLayoutEffect(() => {
        if (!isHeaderClicked) return;

        let ctx = gsap.context(() => {
            let mainTimeline = gsap.timeline();

            mainTimeline.to(portfolioRef.current, {
                y: -300,
                opacity: 0,
                ease: 'Power4.easeOut'
            }).to('.header__intro', {
                height: '10vh',
                stagger: 1.5,
                onComplete: () => {
                    setIntro((state) => {
                        return { ...state, answers: false, question: !state.question }
                    });
                }
            });
        }, main);

        return () => ctx.revert(); // clean up

    }, [isHeaderClicked]);

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {

            gsap.fromTo('.header__intro',
                {
                    opacity: 0,
                    rotation: getRandomRotation()
                },
                {
                    opacity: 1,
                    rotation: 0,
                    duration: 1.5,
                    ease: "Expo.out"
                });

        }, main);

        return () => ctx.revert(); // clean up

    }, []);

    // animation on Answer Descriptions
    useLayoutEffect(() => {
        if (!isDescriptionShowed) return;

        let ctx = gsap.context(() => {
            let mt = gsap.timeline(); // mt - main timeline
            mt.fromTo('.answer-description__intro',
                {
                    opacity: 0,
                    x: '-5%'
                },
                {
                    x: 0,
                    opacity: 1,
                    ease: 'Power4.easeOut',
                    duration: 1.5
                });

        }, main);


        return () => ctx.revert(); // clean up

    }, [isDescriptionShowed]);

    const showAnswers = () => {
        setIntro((state) => {
            return { ...state, answers: !state.answers }
        });
    }

    // description for each answer

    const showDescription = (answer: string) => {
        switch (answer) {
            case 'first':
                setIntro((state) => {
                    return { ...state, first: true }
                });
                break;
            case 'second':
                setIntro((state) => {
                    return { ...state, second: true }
                });
                break;
            case 'third':
                setIntro((state) => {
                    return { ...state, third: true }
                });
                break;
            default:
        }
        setIntro((state) => { return { ...state, question: false, answers: false } });
    }


    return (
        <div ref={main} className='container__intro'>
            <div className='header__intro'>
                <h1 ref={portfolioRef} onClick={() => { setIsHeaderClicked(prev => !prev) }}><HeaderTitle /></h1>
            </div>
            {
                intro.question &&
                <div className='questions__intro'>
                    <h1 onClick={showAnswers}><MainQuestion /></h1>
                </div>
            }
            {
                intro.answers &&

                <div className='answers__intro'>
                    <div className='answer__intro' onClick={() => {
                        showDescription('first');
                        setIsDescriptionShowed(() => true);
                    }}><Answers type='first' lang={currentLanguage} /></div>
                    <div className='answer__intro' onClick={() => {
                        showDescription('second');
                        setIsDescriptionShowed(() => true);
                    }}><Answers type='second' lang={currentLanguage} /></div>
                    <div className='answer__intro' onClick={() => {
                        showDescription('third');
                        setIsDescriptionShowed(() => true);
                    }}><Answers type='third' lang={currentLanguage} /></div>
                </div>
            }
            <div className='answer-descriptions__intro'>
                {
                    intro.first &&
                    <AnswerDescriptions type='first' lang={currentLanguage} />
                }
                {
                    intro.second &&
                    <AnswerDescriptions type='second' lang={currentLanguage} />
                }
                {
                    intro.third &&
                    <AnswerDescriptions type='third' lang={currentLanguage} />
                }
            </div>
            <Menu active='/' lang={currentLanguage} />
            <LanguageSwitch lang={currentLanguage} setter={setCurrentLanguage} />
        </div>
    );
}

export default Intro;

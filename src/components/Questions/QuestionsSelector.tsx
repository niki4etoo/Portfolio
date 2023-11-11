import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Select, { components } from 'react-select';

import LanguageSwitch from '../LanguageSwitch';
import Navigation from '../Navigation/Navigation';
import Menu from '../Menu/Menu';

// languages
import bg from '../../languages/bg-questions.json';
import en from '../../languages/en-questions.json';

// styles
import './questionsselection.css';

const portfolioStyle = {
    container: (defaultStyles: any) => ({
        ...defaultStyles,
        display: 'flex',
        width: '100%',
    }),
    option: (defaultStyles: any, state: any) => ({
        ...defaultStyles,
        color: state.isSelected ? '#fff' : '#000',
        backgroundColor: state.isSelected ? '#000' : '#fff',
    }),

    control: (defaultStyles: any) => ({
        ...defaultStyles,
        display: 'flex',
        width: '100%',
        backgroundColor: '#fff',
        margin: '2vh auto',
        padding: '10px',
        border: '3px solid blue',
        boxShadow: 'none',
        ':hover': {
            backgroundColor: '#ffe',
        }
    }),
    singleValue: (base: any) => ({
        ...base,
        padding: '5px 10px',
        borderRadius: 5,
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',

        width: 'fit-content',
    }),
};

const QuestionsSelector = () => {

    // languages ( BG | EN)
    let { state } = useLocation();

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false);

    let l = currentLanguage ? en : bg;

    const [selected, setSelected] = useState({ category: '', difficulty: '', isCategorySelected: false, isDifficultySelected: false });

    const handleCategoryOption = (selected: any) => {
        setSelected((state) => {
            return { ...state, category: selected, isCategorySelected: true }
        });
    }

    const handleDifficultyOption = (selected: any) => {
        setSelected((state) => {
            return { ...state, difficulty: selected, isDifficultySelected: true }
        });
    }


    const optionsCategories = [
        { value: 'technical', label: l.questions.categories.technical },
        { value: 'personal', label: l.questions.categories.personal },
        { value: 'work', label: l.questions.categories.work },
        { value: 'entertainment', label: l.questions.categories.entertainment },
    ];

    const optionsDifficulty = [
        { value: 'Easy', label: l.questions.select.easy },
        { value: 'Medium', label: l.questions.select.medium },
        { value: 'Hard', label: l.questions.select.hard },
    ];

    const ControlCategories = ({ children, ...props }: any) => (
        <components.Control {...props}>
            {l.questions.category} → {children}
        </components.Control>
    );

    const ControlDifficulty = ({ children, ...props }: any) => (
        <components.Control {...props}>
            {l.questions.difficulty} → {children}
        </components.Control>
    );

    const navigate = useNavigate();

    const Buttons = (props: any) => {

        const handleStatus = () => {
            //to do
        }

        const handleStart = () => {
            console.log('Start with: ', selected.difficulty);

            navigate(`/questions/${props.category.value}/`, { state: { category: props.category.value, difficulty: props.difficulty.value, lang: currentLanguage } });
        }

        return (
            <>
                <button className='buttons' type='button' onClick={handleStatus}>{l.questions.buttons.status}</button>
                <button className='buttons' type='button' onClick={handleStart}>{l.questions.buttons.start}</button>
            </>
        );
    }

    //to do: passing an args to LanguageSwitch components to switch the selected values to the language

    return (
        <>
            <Navigation lang={currentLanguage} />
            <div className='title_selection'>
                <h2>{l.questions.title}</h2>
            </div>
            <div className='container__selection'>
                <div className='categories__selection'>
                    <Select components={{ Control: ControlCategories }} options={optionsCategories} onChange={handleCategoryOption} styles={portfolioStyle} />
                    <Select components={{ Control: ControlDifficulty }} options={optionsDifficulty} onChange={handleDifficultyOption} styles={portfolioStyle} />
                </div>
                {selected.isCategorySelected && selected.isDifficultySelected &&
                    <div className='buttons__selection'>
                        <Buttons difficulty={selected.difficulty} category={selected.category} />
                    </div>
                }
            </div>
            <Menu active={'/questions'} lang={currentLanguage} />
            <LanguageSwitch lang={currentLanguage} setter={setCurrentLanguage} /> 
        </>
    );

}

export default QuestionsSelector;
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Select, { components } from 'react-select';

import LanguageSwitch from "../LanguageSwitch";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";

// languages
import bg from '../../languages/bg-questions.json';
import en from '../../languages/en-questions.json';

// styles
import './questionsselection.css';

const portfolioStyle = {
    container: (defaultStyles) => ({
        ...defaultStyles,
        display: "flex",
        width: "100%",
    }),
    option: (defaultStyles, state) => ({
        ...defaultStyles,
        color: state.isSelected ? "#fff" : "#000",
        backgroundColor: state.isSelected ? "#000" : "#fff",
    }),

    control: (defaultStyles) => ({
        ...defaultStyles,
        display: "flex",
        width: "100%",
        backgroundColor: "#fff",
        margin: "2vh auto",
        padding: "10px",
        border: "3px solid blue",
        boxShadow: "none",
        ':hover': {
            backgroundColor: "#ffe",
        }
    }),
    singleValue: (base) => ({
        ...base,
        padding: "5px 10px",
        borderRadius: 5,
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "center",

        width: "fit-content",
    }),
};

const Questions = (props) => {

    // languages ( BG | EN)
    let { state } = useLocation();

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false);

    let l = {};
    (currentLanguage) ? l = en : l = bg;

    const [selected, setSelected] = useState({ category: '', difficulty: '', isCategorySelected: false, isDifficultySelected: false });

    const handleCategoryOption = (selected) => {
        setSelected((state) => {
            return { ...state, category: selected, isCategorySelected: true }
        });
    }

    const handleDifficultyOption = (selected) => {
        setSelected((state) => {
            return { ...state, difficulty: selected, isDifficultySelected: true }
        });
    }


    const optionsCategories = [
        { value: "technical", label: l.questions.categories.technical },
        { value: "personal", label: l.questions.categories.personal },
        { value: "work", label: l.questions.categories.work },
        { value: "entertainment", label: l.questions.categories.entertainment },
    ];

    const optionsDifficulty = [
        { value: "Easy", label: l.questions.select.easy },
        { value: "Medium", label: l.questions.select.medium },
        { value: "Hard", label: l.questions.select.hard },
    ];

    const navigate = useNavigate();

    const ControlCategories = ({ children, ...props }) => (
        <components.Control {...props}>
            {l.questions.category} → {children}
        </components.Control>
    );
    
    const ControlDifficulty = ({ children, ...props }) => (
        <components.Control {...props}>
            {l.questions.difficulty} → {children}
        </components.Control>
    );

    const Buttons = (props) => {
        let l = {};
        (props.lang) ? l = en : l = bg;

        const handleStatus = () => {
            //to do
        }

        const handleStart = () => {
            console.log("Start with: ", selected.difficulty);

            navigate(`/questions/${props.category.value}/`, { state: { difficulty: props.difficulty, lang: currentLanguage } });
        }

        return (
            <>
                <button className="buttons" type="button" onClick={handleStatus}>{l.questions.buttons.status}</button>
                <button className="buttons" type="button" onClick={handleStart}>{l.questions.buttons.start}</button>
            </>
        );
    }

    return (
        <>
            <Navigation lang={currentLanguage} />
            <div className='container__selection'>
                <div className='categories__selection'>
                    <Select components={{ Control: ControlCategories }} options={optionsCategories} onChange={handleCategoryOption} styles={portfolioStyle} />
                    <Select components={{ Control: ControlDifficulty }} options={optionsDifficulty} onChange={handleDifficultyOption} styles={portfolioStyle} />
                </div>
                {selected.isCategorySelected && selected.isDifficultySelected &&
                    <div className='buttons__selection'>
                        <Buttons difficulty={selected.difficulty} category={selected.category} lang={currentLanguage} />
                    </div>
                }
            </div>
            <Menu active={"/questions"} lang={currentLanguage} />
            <LanguageSwitch lang={currentLanguage} setter={setCurrentLanguage} />
        </>
    );

}

export default Questions;
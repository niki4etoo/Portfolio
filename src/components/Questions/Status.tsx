
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import LanguageSwitch from '../LanguageSwitch';

import Navigation from "../Navigation/Navigation";

// languages
import bg from '../../languages/bg-status.json';
import en from '../../languages/en-status.json';

// style
import './status.css';

const Status = (props: any) => {

    // languages ( BG | EN)
    let { state } = useLocation();

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false);

    let l = currentLanguage ? en : bg;

    console.log(props);

    return (
        <>
            <Navigation lang={currentLanguage} navigate={'/questions'} />
            <div className='container__status'>
                <div className='header__status'><h1>{l.title}</h1></div>
                <div className='current__status'></div>
                <div className='start__status'></div>
            </div>
            
            <LanguageSwitch lang={currentLanguage} setter={setCurrentLanguage} /> 
        </>
    );
}

export default Status;
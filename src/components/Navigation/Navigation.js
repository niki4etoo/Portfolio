
import React from "react";
import { Link } from 'react-router-dom';

//Languages
import bg from '../../languages/bg.json';
import en from '../../languages/en.json';

import '../../styles/navigation.css';

import '../../styles/togglelanguages.css';

const Navigation = (props) => {

    let path = props.navigate || '/'; // Default route is home ( Intro )

    const handleBack = (e, index, lang) => {

        console.log(index); //to do 

        if (props.confirm) {
            let message = "";
            if (lang) {
                message = en.navigation.messageConfirmQuestion;
            } else {
                message = bg.navigation.messageConfirmQuestion;
            }

            if (!window.confirm(message)) {
                e.preventDefault();
            } else {
                props.userAnswers = []; // reset user answers
            }
        }
    }

    let l = {};
    (props.lang) ? l = en : l = bg;

    return (
        <>
            <div className='nav'>
                <Link className='nav-back' onClick={(e) => handleBack(e, props.index, props.lang)} to={path} state={{ lang: props.lang }}>{l.navigation.back}</Link>
            </div>
        </>
    );

}

export default Navigation;
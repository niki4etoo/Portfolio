
import React from "react";
import { Link } from 'react-router-dom';

//Languages
import bg from '../languages/bg.json';
import en from '../languages/en.json';

import '../styles/navigation.css';

import '../styles/togglelanguages.css';

const Navigation = (props) => {


    const handleBack = (e, index, lang) => {
        let message = "";
        if(lang){
            message = en.navigation.messageConfirmQuestion;
        } else {
            message = bg.navigation.messageConfirmQuestion;
        }

        console.log(index); //to do 

        if (!window.confirm(message)) {
            e.preventDefault();
        }
    }

    if(props.lang){
        return (
            <>
                <div className='nav'>
                    <Link className='nav-back' onClick={(e) => handleBack(e, props.index, props.lang)} to='/'>{en.navigation.back}</Link>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className='nav'>
                    <Link className='nav-back' onClick={(e) => handleBack(e, props.index)} to='/'>{bg.navigation.back}</Link>
                </div>
            </>
        );
    }

    
}

export default Navigation;
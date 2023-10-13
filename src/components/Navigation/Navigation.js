
import React from "react";
import { Link } from 'react-router-dom';

//Languages
import bg from '../../languages/bg.json';
import en from '../../languages/en.json';

import '../../styles/navigation.css';

import '../../styles/togglelanguages.css';

const Navigation = (props) => {

    let navigate = props.navigate || "back"; // Default is back route


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
            }
        }
    }

    switch (navigate) {
        case "back":
            {
                if (props.lang) {
                    return (
                        <>
                            <div className='nav'>
                                <Link className='nav-back' onClick={(e) => handleBack(e, props.index, props.lang)} to='/' state={{ lang: props.lang }}>{en.navigation.back}</Link>
                            </div>
                        </>
                    );
                } else {
                    return (
                        <>
                            <div className='nav'>
                                <Link className='nav-back' onClick={(e) => handleBack(e, props.index)} to='/' state={{ lang: props.lang }}>{bg.navigation.back}</Link>
                            </div>
                        </>
                    );
                }
            }
        case "contacts":
            {
                if (props.lang) {
                    return (
                        <>
                            <div className='nav'>
                                <Link className='nav-back' onClick={(e) => handleBack(e, props.index, props.lang)} to='/contacts' state={{ lang: props.lang }}>{en.navigation.contacts}</Link>
                            </div>
                        </>
                    );
                } else {
                    return (
                        <>
                            <div className='nav'>
                                <Link className='nav-back' onClick={(e) => handleBack(e, props.index)} to='/contacts' state={{ lang: props.lang }}>{bg.navigation.contacts}</Link>
                            </div>
                        </>
                    );
                }
            }
        default:
    }

}

export default Navigation;
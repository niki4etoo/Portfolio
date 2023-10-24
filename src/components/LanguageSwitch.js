import React from 'react';

const LanguageSwitch = (props) => {

    const changeLanguage = (e) => {
        if (e.target.checked) {
            props.setter(prev => true); //Switched to EN
        } else {
            props.setter(prev => false); //Switched to BG
        }
    }

    return (
        <label className="switch">
            <input type="checkbox" onChange={(e) => changeLanguage(e)} checked={props.lang} />
            <span className="slider round"></span>
        </label>
    );
}

export default LanguageSwitch;
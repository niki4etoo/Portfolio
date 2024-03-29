import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import linkedLogo from '../../images/logo/linkedin.svg';
import githubLogo from '../../images/logo/github.svg';
import twitterLogo from '../../images/logo/twitter.svg';

// languages
import bg from '../../languages/bg-contacts.json';
import en from '../../languages/en-contacts.json';

import LanguageSwitch from '../LanguageSwitch';
import Navigation from '../Navigation/Navigation';
import Menu from '../Menu/Menu';

// style
import './contacts.css';

const Contacts = () => {

    // languages ( BG | EN)
    const { state } = useLocation();

    const [currentLanguage, setCurrentLanguage] = useState(state?.lang || false);


    let l = currentLanguage ? en : bg;

    const ButtonContact = ({ label, mailto }: any) => {
        return (
            <Link
                to='#'
                className='button-send__contacts'
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }}
            >
                {label}
            </Link>
        );
    }

    return (
        <>
            <Navigation lang={currentLanguage} />
            <div className='contacts-container__contacts'>
                <div className='title__contacts'><h1>{l.title}</h1></div>
                <div className='social-links__contacts'>
                    <a href='https://www.linkedin.com/in/nikolay-nanev-75130275/'><img src={linkedLogo} alt='LinkedIn Logo' width='64' height='64' /></a>
                    <a href='https://twitter.com/niki4etooo/'><img src={twitterLogo} alt='Twitter Logo' width='64' height='64' /></a>
                    <a href='https://github.com/niki4etoo/'><img src={githubLogo} alt='Github Logo' width='64' height='64' /></a>
                </div>
                <div className='contact-button__contacts'>
                    <ButtonContact label={l.label} mailto='mailto:niki.nanev.94.work@gmail.com' />
                </div>
            </div>
            <Menu active={'/contacts'} lang={currentLanguage} />
            <LanguageSwitch lang={currentLanguage} setter={setCurrentLanguage} />
        </>
    );
}

export default Contacts;
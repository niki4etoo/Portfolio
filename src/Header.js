import React, { useState } from 'react';

import { useSpring, animated } from '@react-spring/web';

import './styles/header.css';



function Header(){

    const [simplicityQuestion, setSimplicityQuestion] = useState(false);

    const showQuestion = () => {
        setSimplicityQuestion(prev => prev = !prev);
    }

    const [ springs, api ] = useSpring(() => ({
        from: { x: 0 }
    }));

    const handleClick = () => {
        api.start({
            from: {
                x: 0,
            },
            to: {
                x: 500,
            }
        });
    }

    return (
        <>
        <div className='header'>
            <h1 onClick={showQuestion}>Portfolio</h1>
        </div>
        <animated.div
            onClick={handleClick}
            style={{
                width: 80,
                height: 80,
                background: '#ff6d6d',
                borderRadius: 8,
                ...springs,
            }} />
        { 
        simplicityQuestion &&

        <div className='question'>
            <h2>Is simplicity important?</h2>
        </div>
        }
        </>
        
    );
}

export default Header;

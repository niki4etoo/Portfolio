import React from 'react';

import './styles/header.css';

const showQuestion = () => {
    
}

function Header(){
    return (
        <div className='header'>
            <h1 onClick={showQuestion}>Portfolio</h1>
        </div>
    );
}

export default Header;

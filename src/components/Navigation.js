import React from "react";
import { Link } from 'react-router-dom';

import '../styles/navigation.css';

const Navigation = (props) => {


    const handleBack = (e, index) => {
        console.log("Current index: ", index);
        if(!window.confirm("Are you sure? (This will reset your answers progress.)")){
            e.preventDefault();
        }
    }

    return (
        <>
        <div className='nav'>
            <Link className='nav-back' onClick={(e) => handleBack(e, props.index)} to='/'>Back</Link>
        </div>
        
        </>
    );
}

export default Navigation;
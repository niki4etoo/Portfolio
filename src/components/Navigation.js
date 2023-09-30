import React from "react";
import { Link } from 'react-router-dom';

import '../styles/navigation.css';

const Navigation = () => {
    return (
        <>
        <div className="nav">
            <Link className='nav-back' to='/'>Going back</Link>
        </div>
        
        </>
    );
}

export default Navigation;
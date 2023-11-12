import { Link } from 'react-router-dom';

// languages
import bg from '../../languages/bg.json';
import en from '../../languages/en.json';

// styles
import './navigation.css';
import '../../styles/togglelanguages.css';

const Navigation = (props:any) => {

    let path = props.navigate || '/'; // Default route is intro

    let l = props.lang ? en : bg;

    return (
        <>
            <div className='nav'>
                <Link className='nav-back' to={path} state={{ lang: props.lang }}>{l.navigation.back}</Link>
            </div>
        </>
    );

}

export default Navigation;
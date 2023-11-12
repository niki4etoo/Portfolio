import { Link } from 'react-router-dom';

// languages
import bg from '../../languages/bg-menu.json';
import en from '../../languages/en-menu.json';

// style
import './menu.css';

const Menu = (props: any) => {

    // languages ( BG | EN)
    let l = props.lang ? en : bg;

    let pages = [
        { link: '/about', label: l.about, active: false },
        { link: '/', label: l.intro, active: false },
        { link: '/contacts', label: l.contacts, active: false },
        { link: '/questions', label: l.questions, active: false },
    ]

    pages.map((page) => {
        if (page.link === props.active) {
            page.active = true;
        }
        return null;
    })

    return (
        <>
            <ul className='menu'>
                {
                    pages.map((page, index) => {
                        if (page.active) {
                            return <li className='active-page' key={index}>{page.label}</li>
                        } else {
                            return <li key={index}><Link to={page.link} state={{ lang: props.lang }}>{page.label}</Link></li>
                        }
                    })
                }
            </ul>
        </>
    );
}

export default Menu;
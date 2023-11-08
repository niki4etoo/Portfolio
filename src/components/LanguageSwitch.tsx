const LanguageSwitch = (props: any) => {

    const changeLanguage = (e: any) => {
        if (e.target.checked) {
            props.setter(true); //Switched to EN
        } else {
            props.setter(false); //Switched to BG
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
import React from "react";

//Languages
import bg from '../../languages/bg.json';
import en from '../../languages/en.json';

const Messages = (props) => {
    if(props.success){
        if(props.lang){
            return (<span className="message-success">{en.quiz.messages.success}</span>);
        } else {
            return (<span className="message-success">{bg.quiz.messages.success}</span>);
        }
    }
}

export default Messages;
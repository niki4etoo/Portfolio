
// languages
import bg from '../../languages/bg.json';
import en from '../../languages/en.json';

const Messages = (props: any) => {
    if (props.success) {
        if (props.lang) {
            return (<span className="message-success__quiz">{en.quiz.messages.success}</span>);
        } else {
            return (<span className="message-success__quiz">{bg.quiz.messages.success}</span>);
        }
    }
}

export default Messages;
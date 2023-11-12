
// languages
import bg from '../../languages/bg-mainquiz.json';
import en from '../../languages/en-mainquiz.json';

const Messages = (props: any) => {
    if (props.success) {
        if (props.lang) {
            return (<span className='message-success__quiz'>{en.messages.success}</span>);
        } else {
            return (<span className='message-success__quiz'>{bg.messages.success}</span>);
        }
    }
}

export default Messages;
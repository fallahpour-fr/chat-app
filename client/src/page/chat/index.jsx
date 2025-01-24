import styles from '../../styles/styles.module.css';
import Messages from './messages';

const Chat = ({ socket }) => {
    
    return (
        <div className={styles.chatContainer}>
            <div>
                <Messages socket={socket} />
            </div>
        </div>
    );
};

export default Chat;

import styles from '../../styles/styles.module.css';
import Messages from './messages';
import SendMessage from './sendMessage';

const Chat = ({ socket , username , room }) => {
    
    return (
        <div className={styles.chatContainer}>
            <div>
                <Messages socket={socket} />
                <SendMessage socket={socket} username={username} room={room} />
            </div>
        </div>
    );
};

export default Chat;

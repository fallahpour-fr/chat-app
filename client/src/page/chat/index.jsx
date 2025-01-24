import styles from '../../styles/styles.module.css';
import Messages from './messages';
import SendMessage from './sendMessage';
import RoomAndUsersColumn from './roomAndUser';

const Chat = ({ socket , username , room }) => {
    
    return (
        <div className={styles.chatContainer}>
            <RoomAndUsersColumn socket={socket} username={username} room={room} />
            <div>
                <Messages socket={socket} />
                <SendMessage socket={socket} username={username} room={room} />
            </div>
        </div>
    );
};

export default Chat;

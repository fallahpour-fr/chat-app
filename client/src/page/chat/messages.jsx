import styles from "../../styles/styles.module.css";
import { useState, useEffect,useRef } from 'react';

const Messages = ({ socket }) => {
  const [messagesRecieved, setMessagesReceived] = useState([]);

  const messagesColumnRef = useRef(null);

    // Add this
    function sortMessagesByDate(messages) {
      return messages.sort(
        (a, b) => parseInt(a.__createdtime__) - parseInt(b.__createdtime__)
      );
    }

  // Runs whenever a socket event is recieved from the server
  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessagesReceived((state) => [
        ...state,
        {
          message: data.message,
          username: data.username,
          __createdtime__: data.__createdtime__,
        },
      ]);
    });

    // Remove event listener on component unmount
    return () => socket.off('receive_message');
  }, [socket]);

  // Add this
  useEffect(() => {
    // Last 100 messages sent in the chat room (fetched from the db in backend)
    socket.on('last_100_messages', (last100Messages) => {
      try {  
        // Check if the message is not empty before attempting to parse
        if (last100Messages && last100Messages !== '[]') {
          const parsedMessages = JSON.parse(last100Messages);
  
          // Sort these messages by __createdtime__
          const sortedMessages = sortMessagesByDate(parsedMessages);
  
          // Update the state by appending the new messages to the previous ones
          setMessagesReceived((state) => [...sortedMessages, ...state]);
        } else {
          console.warn('Received empty or invalid messages');
        }
      } catch (error) {
        console.error('Error parsing messages:', error);
      }
    });
  
    return () => socket.off('last_100_messages');
  }, [socket]);

  // Add this
  // Scroll to the most recent message
  useEffect(() => {
    messagesColumnRef.current.scrollTop = messagesColumnRef.current.scrollHeight;
  }, [messagesRecieved]);



  function formatDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  return (
    <div className={styles.messagesColumn} ref={messagesColumnRef}>
      {messagesRecieved.map((msg, i) => (
        <div className={styles.message} key={i}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className={styles.msgMeta}>{msg.username}</span>
            <span className={styles.msgMeta}>
              {formatDateFromTimestamp(msg.__createdtime__)}
            </span>
          </div>
          <p className={styles.msgText}>{msg.message}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Messages;

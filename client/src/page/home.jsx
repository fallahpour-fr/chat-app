import styles from '../styles/styles.module.css';
import { useNavigate } from 'react-router-dom';

const Home = ({ username, setUsername, room, setRoom, socket }) => {
    const navigate=useNavigate();
    const joinRoom = () => {
        if(username !=="" && room !==""){
            socket.emit('join_room',{username,room})
        }

        navigate('/chat', { replace: true });
    }
  
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`Rooms`}</h1>
        <input className={styles.input} placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />

        <select className={styles.input} onChange={(e)=>setRoom(e.target.value)}>
          <option>-- Select Room --</option>
          <option value='Room One'>Room One</option>
          <option value='Room Two'>Room Two</option>
          <option value='Room Three'>Room Three</option>
          <option value='Room Four'>Room Four</option>
        </select>

        <button onClick={joinRoom} className='btn btn-secondary btn-homepage-style'>Join Room</button>
      </div>
    </div>
  );
};

export default Home;
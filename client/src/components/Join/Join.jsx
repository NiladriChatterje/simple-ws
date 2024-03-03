import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <>
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Get in</h1>
          <div>
            <input placeholder="Name (identifier)" className="joinInput" onChange={(event) => setName(event.target.value)} />
          </div>
          <div>
            <input placeholder="RoomID" className="joinInput mt-20" onChange={(event) => setRoom(event.target.value)} />
          </div>
          <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
            <button className={'button mt-20'} type="submit">Sign In</button>
          </Link>
          <section
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10
            }}>
            <FaGithub
              style={{ marginTop: 20 }}
              size={40}
              cursor={'pointer'}
              color='rgb(27, 27, 27)'
              onClick={() => { window.open('https://github.com/NiladriChatterje', '_blank') }} />
          </section>
        </div>
      </div>
      <footer
        style={{
          width: '100%',
          height: 30,
          borderTop: '1px solid grey',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <span>Do Support@ Github</span>
      </footer>
    </>
  );
}

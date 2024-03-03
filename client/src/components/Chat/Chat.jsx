import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { io } from "socket.io-client";

import { Messages, InfoBar, Input } from '..';
import './Chat.css';

const ENDPOINT = 'localhost:5000';

let socket;

const Chat = () => {
  const [Name, setName] = useState('');
  const [Room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    socket = io(ENDPOINT, { transports: ['websocket', 'polling'] });

    setRoom(params.get('room'));
    setName(params.get('name'))

    socket.emit('join', { name: params.get('name'), room: params.get('room') }, (error) => {
      if (error)
        alert(error);

    });
  }, [ENDPOINT, params.get('name'), params.get('room')]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={Room} />
        <Messages messages={messages} name={Name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;

import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  const checkPresent = text.includes('has left') ? true : false;
  const welcomeMsg = text.includes('welcome to room') ? true : false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      )
      : (
        <div className={`messageContainer ${checkPresent || welcomeMsg ? 'justifyCenter' : 'justifyStart'}`}>
          {checkPresent ?
            <div className={`messageBox backgroundLeft`}>
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            :
            <div className={`messageBox ${welcomeMsg ? "welcomeStyle" : "backgroundLight"}`}>
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>}
          <p className="sentText pl-10 ">{(!checkPresent && !welcomeMsg) && user}</p>
        </div>
      )
  );
}

export default Message;
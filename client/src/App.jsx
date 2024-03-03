import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/chat" component={<Chat />} />
    </Routes>
  );
}

export default App;

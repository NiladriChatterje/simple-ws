import { Chat, Join } from './components';

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

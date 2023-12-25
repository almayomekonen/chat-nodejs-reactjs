import { useState } from "react";
import { useEffect } from "react";

import "./App.css";

import AuthPage from "./components/AuthPage/AuthPage";
import ChatsPage from "./components/ChatPage/ChatsPage";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
};

export default App;

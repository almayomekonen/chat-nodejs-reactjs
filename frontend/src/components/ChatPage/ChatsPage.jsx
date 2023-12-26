// ChatsPage.js
import { useState } from "react";
import PropTypes from "prop-types";
import { PrettyChatWindow } from "react-chat-engine-pretty";
import Button from "../Button/Button";
import "./ChatPage.css";

const ChatsPage = (props) => {
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedOut(true);
  };

  return (
    <div className="ChatPageHeight">
      {loggedOut ? (
        (window.location.href = "/login")
      ) : (
        <div className="chat-content">
          <PrettyChatWindow
            projectId="d4462358-b86d-432a-bf0a-5bb1be431102"
            username={props.user.username}
            secret={props.user.secret}
          />
          <Button onClick={handleLogout} label="Logout" />
        </div>
      )}
    </div>
  );
};

ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatsPage;

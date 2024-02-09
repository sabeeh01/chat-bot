import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import send from "../../images/send.png";
import styles from "./chat-input-field.module.css";

const ChatInputField = ({ onSubmit, disabled }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const onSend = (e) => {
    onSubmit(message);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    e.key === "Enter" && onSend();
  };

  return !disabled ? (
    <InputGroup className="mb-3">
      <FormControl
        placeholder={disabled ? "Typing..." : "Message..."}
        aria-label="Message..."
        aria-describedby="basic-addon2"
        value={message}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
      />
     <Button variant="dark" onClick={onSend} disabled={!message || disabled}>
        <img src={send} className={styles.icon} alt="send" />
      </Button>
    </InputGroup>
  ) : null;
};

export default ChatInputField;

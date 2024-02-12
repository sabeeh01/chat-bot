import ChatInputField from "../ChatInputField";
import styles from "./chat-box.module.css";
import MessageBox from "../MessageBox";
import { useEffect, useRef } from "react";
import { interactions } from "../../constants/interactions";
import { textSplitter } from "../../helpers/textSplitter";

const ChatBox = ({ messages, setMessages, isRendering, renderPeriodicaly }) => {
  const messagesEndRef = useRef(null);
  const currentInteraction = useRef("S1 Swizzle Inn");
  const changeInteraction = (interaction) =>
    (currentInteraction.current = interaction);

  const scrollToBottom = () =>
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });

  const onSubmit = (message, isInteraction = false) => {
    if (!isInteraction) {
      const tempMessages = [...messages];
      tempMessages.push({ isUser: true, message });
      setMessages(tempMessages);
    }

    const interaction = interactions.hasOwnProperty(currentInteraction.current)
      ? interactions[currentInteraction.current].interaction(message)
      : null;

    if (interaction) {
      interactions.hasOwnProperty(interaction) &&
        renderPeriodicaly(interactions[interaction].response);
      changeInteraction(interaction);
    }
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        {messages.map((message, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: message?.isUser ? "flex-end" : "flex-start",
              }}
            >
              <div
                style={{
                  background: message?.isUser ? "#9076F6" : "#F1F1F0",
                }}
                className={styles.messageContainer}
              >
                <MessageBox
                  style={{
                    color: message?.isUser ? "white" : "black",
                  }}
                  onSubmit={onSubmit}
                  text={
                    message?.isUser
                      ? message?.message
                      : textSplitter(message?.message)
                  }
                />
              </div>
            </div>
          );
        })}
        {isRendering && <p className={styles.typing}>Typing...</p>}
        <div ref={messagesEndRef} />
      </div>
      <ChatInputField disabled={isRendering} onSubmit={onSubmit} />
    </div>
  );
};

export default ChatBox;

import ChatInputField from "../ChatInputField";
import styles from "./chat-box.module.css";
import MessageBox from "../MessageBox";
import { useEffect, useRef } from "react";
import { interactions } from "../../constants/interactions";
import { textSplitter } from "../../helpers/textSplitter";
import usePeriodicRender from "../../hooks/usePeriodicRender";

const ChatBox = ({ show }) => {
  const [messages, setMessages, isRendering, renderPeriodicaly] =
    usePeriodicRender();
  const listContainerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const isMounted = useRef(false);
  const currentInteraction = useRef("S1 Swizzle Inn");
  const lang = useRef("en").current;

  const changeInteraction = (interaction) =>
    (currentInteraction.current = interaction?.trim());

  const scrollToBottom = () => {
    if (
      listContainerRef.current &&
      listContainerRef.current.scrollHeight >
        listContainerRef.current.clientHeight
    ) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  const onSubmit = (message, isInteraction = false) => {
    if (isInteraction) {
      currentInteraction.current = message;
      renderPeriodicaly(interactions[currentInteraction.current][lang]);
      changeInteraction(currentInteraction.current);
    } else {
      const tempMessages = [...messages];
      tempMessages.push({ isUser: true, message });
      setMessages(tempMessages);

      const interaction = interactions.hasOwnProperty(
        currentInteraction.current
      )
        ? interactions[currentInteraction.current].interaction(message)
        : null;

      if (interaction) {
        interactions.hasOwnProperty(interaction) &&
          renderPeriodicaly(interactions[interaction][lang]);
        changeInteraction(interaction);
      }
    }
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (show && !isMounted.current) {
      interactions.hasOwnProperty(`S1 Swizzle Inn`) &&
        renderPeriodicaly(interactions[`S1 Swizzle Inn`][lang]);
      isMounted.current = true;
    }
  }, [show]);

  return (
    <div className={styles.container}>
      <div className={styles.listContainer} ref={listContainerRef}>
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

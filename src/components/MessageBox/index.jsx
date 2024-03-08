import React from "react";
import { extractTag, getUrl } from "../../helpers/textSplitter";
import styles from "./message-box.module.css";
import { Button } from "react-bootstrap";

const renderMessages = ({ message, index, style, onSubmit }) => {
  const tagInfo =
    message[0] === "[" ? extractTag(message) : { content: message };
  const { tag, content } = tagInfo;
  return (
    <div key={index} className={styles.fade}>
      {tag === "b" && <p style={{ ...style, fontWeight: 700 }}>{content}</p>}
      {tag?.includes("url") && (
        <a href={getUrl(tag)} target="_blank">
          {content}
        </a>
      )}
      {tag === "img" && <img src={content} className={styles.contentImg} />}
      {tag === "audio" && (
        <audio
          autoPlay
          controls
          className={styles.contentAudio}
          src={content}
        />
      )}
      {tag?.includes("button") && (
        <Button
          onClick={() => {
            const action = getUrl(tag);
            const interaction = action.split("-");

            if (interaction[0] === "interaction") {
              onSubmit(interaction[1], true);
              return;
            }
            window.open(action);
          }}
          variant="dark"
        >
          {content}
        </Button>
      )}
      {!tag && <p style={style}>{content}</p>}
    </div>
  );
};

const MessageBox = ({ text, style, onSubmit }) => {
  const messages = Array.isArray(text) ? text : [text];
  return messages?.map((message, index) =>
    renderMessages({ style, onSubmit, message, index })
  );
};

export default MessageBox;

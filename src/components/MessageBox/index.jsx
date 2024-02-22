import React from "react";
import { extractTag } from "../../helpers/textSplitter";
import styles from "./message-box.module.css";
import { Button } from "react-bootstrap";

const MessageBox = ({ text, style, onSubmit, setLang }) => {
  return Array.isArray(text) ? (
    text.map((splice, index) => {
      const hasTag = splice[0] === "[";
      const tagInfo = hasTag ? extractTag(splice) : null;
      return (
        <div key={index} className={styles.fade}>
          {tagInfo ? (
            <>
              {tagInfo.tag === "b" && (
                <p style={{ ...style, fontWeight: 700 }}>{tagInfo.content}</p>
              )}
              {tagInfo.tag?.includes("url") && (
                <a href={tagInfo.tag.split("=")[1]} target="_blank">
                  {tagInfo.content}
                </a>
              )}
              {tagInfo.tag === "img" && (
                <img src={tagInfo.content} className={styles.contentImg} />
              )}
              {tagInfo.tag === "audio" && (
                <audio
                  autoPlay
                  controls
                  className={styles.contentAudio}
                  src={tagInfo.content}
                />
              )}
              {tagInfo.tag?.includes("button") && (
                <Button
                  onClick={() => {
                    const action = tagInfo.tag.split("=")[1];
                    const interaction = action.split("-");
                    if (interaction[0] === "lang") {
                      setLang(interaction[1]);
                      onSubmit("S1 Swizzle Inn", true);
                      return;
                    }

                    if (interaction[0] === "interaction") {
                      onSubmit(interaction[1], true);
                      return;
                    }
                    window.open(action);
                  }}
                  variant="dark"
                >
                  {tagInfo.content}
                </Button>
              )}
            </>
          ) : (
            <p style={style}>{splice}</p>
          )}
        </div>
      );
    })
  ) : (
    <p style={style}>{text}</p>
  );
};

export default MessageBox;

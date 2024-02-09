import React from "react";
import { extractTag } from "../../helpers/textSplitter";
import styles from "./message-box.module.css";
import { Button } from "react-bootstrap";

const MessageBox = ({ text, style }) => {
  return Array.isArray(text) ? (
    text.map((splice, index) => {
      const hasTag = splice[0] === "[";
      const tagInfo = hasTag ? extractTag(splice) : null;
      return (
        <div key={index} className={styles.fade}>
          {tagInfo ? (
            <>
              {tagInfo.tag.includes("url") && (
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
              {tagInfo.tag.includes("button") && (
                <Button
                  onClick={() => window.open(tagInfo.tag.split("=")[1])}
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

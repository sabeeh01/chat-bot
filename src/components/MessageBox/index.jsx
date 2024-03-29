import React, { useMemo } from "react";
import { extractTag } from "../../helpers/textSplitter";
import styles from "./message-box.module.css";
import { Button } from "react-bootstrap";

const getInfo = (text) => {
  const index = text.indexOf("=");
  let resultArray = [text.substring(0, index), text.substring(index + 1)];
  return resultArray[1];
};

const MessageBox = ({ text, style, onSubmit, size }) => {
  const videoSize = useMemo(() => {
    const width = document.documentElement.clientWidth * (window.innerWidth > 600 ? .21 : .61);
    const height = width * 0.5625 // width * (a/b) ex: 1920 * (9/16)
    return [width, height]
  }, [size])
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
                <a href={getInfo(tagInfo.tag)} target="_blank">
                  {tagInfo.content}
                </a>
              )}
              {tagInfo.tag === "video" && (
                <iframe src={tagInfo.content}
                  frameBorder="0"
                  width={videoSize[0]}
                  height={videoSize[1]}
                  allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"></iframe>
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
                    const action = getInfo(tagInfo.tag);
                    const interaction = action.split("-");

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

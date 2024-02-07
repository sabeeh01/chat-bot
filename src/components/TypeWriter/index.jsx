import React from "react";
import { extractTag } from "../../helpers/textSplitter";

const Typewriter = ({ text, style }) => {
  return Array.isArray(text) ? (
    text.map((splice, index) => {
      const hasTag = splice[0] === "[";
      const tagInfo = hasTag ? extractTag(splice) : null;
      return (
        <div key={index}>
          {tagInfo ? (
            <>
              {tagInfo.tag.includes("url") && (
                <a href={tagInfo.tag.split("=")[1]}>{tagInfo.content}</a>
              )}
              {tagInfo.tag === "img" && <img src={tagInfo.content} />}
              {tagInfo.tag === "audio" && (
                <audio autoPlay controls src={tagInfo.content}></audio>
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

export default Typewriter;

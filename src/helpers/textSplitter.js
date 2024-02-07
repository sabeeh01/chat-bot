export const textSplitter = (text = "") => {
  const result = [];
  let splice = "",
    isClosingTag = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char === "[") {
      if (text[i + 1] === "/") {
        isClosingTag = true;
        splice += char;
      } else {
        splice && result.push(splice);
        splice = char;
      }
      continue;
    }
    if (char === "]" && isClosingTag) {
      splice += char;
      result.push(splice);
      splice = "";
      isClosingTag = false;
      continue;
    }
    splice += char;
  }
  if (splice) result.push(splice);
  return result;
};

export const lineSplitter = (paragraph = "") =>
  paragraph.split(/::next-\d+::/).map((line) => ({
    isUser: false,
    message: line,
  }));

export const extractTag = (text) => {
  const pattern = /\[(.*?)\](.*?)\[\/(.*?)\]/g;
  const matches = [];
  let match;
  while ((match = pattern.exec(text)) !== null) {
    matches.push(match[1], match[2], `/${match[3]}`);
  }
  return { tag: matches[0], content: matches[1] };
};

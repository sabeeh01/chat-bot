const wordBreaker = (text) => text.match(/\b[\p{L}']+\b/gu) || [];

export const matchWords = (str = "", words = []) => {
  return words.some((word) => {
    return wordBreaker(str).some(
      (senWord) => senWord.toLowerCase() === word.toLowerCase()
    );
  });
};

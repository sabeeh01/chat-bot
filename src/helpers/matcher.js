const wordBreaker = (text) => text.match(/\b[\p{L}'0-9-]+\b/gu) || [];

export const matchWords = (str = "", words = []) => {
  return words.some((word) => {
    // return wordBreaker(str).some(
    //   (senWord) => senWord.toLowerCase() === word.toLowerCase()
    // );
    return str.toLowerCase() === word.toLowerCase();
  });
};

import { LoremIpsum } from "lorem-ipsum";

export const useLoremIpsum = (args = {}) => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    },
    ...args
  });

  return {
    loremParagraphs: paragraphCount => lorem.generateParagraphs(paragraphCount),
    loremSentences: sentenceCount => lorem.generateSentences(sentenceCount),
    loremWords: wordCount => lorem.generateWords(wordCount)
  };
};

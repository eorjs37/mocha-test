const word = {
  count() {
    return this.word.length;
  },
  lookUp() {
    return this.lookUpUrl + this.word;
  },
};
const englishWordFactory = (theWord) => {
  return Object.assign(Object.create(word), {
    word: theWord,
    language: "English",
    lookUpUrl: "https://en.wiktionary.org/wiki/",
  });
};

const japaneseWordFactory = (theWord) => {
  return Object.assign(Object.create(word), {
    word: theWord,
    language: "Japanese",
    lookUpUrl: "http://jisho.org/search/",
  });
};

const englishWord = englishWordFactory("dog");
const japaneseWord = japaneseWordFactory("犬");

const wish = require("wish");
const deepEqual = require("deep-equal");
// 인터페이스 테스트
wish(japaneseWord.word === "犬");
wish(japaneseWord.lookUp() === "http://jisho.org/search/犬");
wish(japaneseWord.count() === 1);

wish(englishWord.word === "dog");
wish(englishWord.lookUp() === "https://en.wiktionary.org/wiki/dog");
wish(englishWord.count() === 3);

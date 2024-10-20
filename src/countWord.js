class Word{
	count(){
		return this.word.length;
	}
	lookUp(){
		if (this.language === "Japanese"){
      return `http://jisho.org/search/${this.word}`;
    }else{
      return `https://en.wiktionary.org/wiki/${this.word}`;
    }
	}
}
class EnglishWord extends Word{
	constructor(word){
		super()
		this.word = word
		this.language = "Japanese"
	}
}

class JapaneseWord extends Word{
	constructor(word){
		super()
		this.word = word
		this.language = "English"
	}
}

const japaneseWord = new JapaneseWord("犬");
const englishWord = new EnglishWord("dog");
console.log(japaneseWord.word);
console.log(japaneseWord.count());
console.log(englishWord.word);
console.log(englishWord.count());
function Person() {
  this.info = function () {
    return `${this.language}/${this.name}/${this.age}`;
  };
}

function Korea(language, age, name) {
  Person.call(this);
  this.language = language;
  this.age = age;
  this.name = name;
}

function Japanese(language, age, name) {
  Person.call(this);
  this.language = language;
  this.age = age;
  this.name = name;
}

Korea.prototype = Object.create(Person.prototype);
// Korea.prototype.constructor = Korea;
Japanese.prototype = Object.create(Person.prototype);
// Korea.prototype.constructor = Japanese;

Person.prototype.reportLanguage = function () {
  return `The language is : ${this.language}`;
};

const korea = new Korea("korea", 32, "kim");
console.log(Korea.prototype === korea.__proto__);
console.log(Japanese.prototype === Korea.prototype);

// console.log(korea.info());
// const japanese = new Japanese("japanese", 30, "ki ta");
// console.log(japanese.info());

class Person {
  log(number) {
    console.log(this.whatIs(number));
  }
}

class BinaryKnower extends Person {
  whatIs(number) {
    return Number("0b" + number);
  }
}

class BinaryOblivious extends Person {
  whatIs(number) {
    return Number(number);
  }
}
const personOne = new BinaryKnower("binary knower");
const personTwo = new BinaryOblivious("binary oblivious");

[personOne, personTwo].forEach((person) => person.log(10));
module.exports;

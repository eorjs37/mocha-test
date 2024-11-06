class Person {
  constructor(readKnowledge, andKnowledge, xorKnowledge) {
    this.readKnowledge = readKnowledge;
    this.andKnowledge = andKnowledge;
    this.xorKnowledge = xorKnowledge;
  }
}

const binary = {
  readAware(number) {
    return Number("0b" + number);
  },
  readOblivious(number) {
    return number;
  },
  andAware(numberOne, numberTwo) {
    return numberOne & numberTwo;
  },
};

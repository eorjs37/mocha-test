class Person {
  constructor(binaryKnowledge) {
    this.binaryKnowledge = Object.create(
      Object.assign({ person: this }, binaryKnowledge)
    );
  }
  change(binaryKnowledge) {
    this.binaryKnowledge = Object.create(
      Object.assign({ person: this }, binaryKnowledge)
    );
  }
}

const binaryAwareness = {
  read(number) {
    return Number("0b" + number);
  },

  and(numberOne, numberTwo) {
    return numberOne & numberTwo;
  },

  xor(numberOne, numberTwo) {
    return numberOne ^ numberTwo;
  },

  forget() {
    this.person.change(binaryAwareness);
  },
};

const binaryObliviousness = {
  read(number) {
    return number;
  },
  and(numberOne, numberTwo) {
    return "unknown";
  },

  xor(numberOne, numberTwo) {
    return "unknown";
  },
  learn() {
    this.person.change(binaryObliviousness);
  },
};

const personOne = new Person(binaryAwareness);
const personTwo = new Person(binaryObliviousness);

[personOne, personTwo].forEach((person) => {
  console.log(person.binaryKnowledge.read(10));
  console.log(person.binaryKnowledge.and(2, 3));
  console.log(person.binaryKnowledge.xor(2, 3));
});

personOne.binaryKnowledge.forget(personTwo);
personTwo.binaryKnowledge.learn(personOne);
personTwo.binaryKnowledge.read = () => `will not assign both`;
[(personOne, personTwo)].forEach((person) => {
  console.log(person.binaryKnowledge.read(10));
  console.log(person.binaryKnowledge.and(2, 3));
  console.log(person.binaryKnowledge.xor(2, 3));
});

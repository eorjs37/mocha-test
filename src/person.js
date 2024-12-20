class Person {
  constructor(binaryKnower) {
    this.binaryKnower = binaryKnower;
  }
  whatIs(number) {
    return number;
  }
  whatIsBinary(number) {
    return Number("0b" + number);
  }
}

const personOne = new Person(true);
const personTwo = new Person(false);

[personOne, personTwo].forEach((person) => {
  if (person.binaryKnower) {
    console.log(person.whatIsBinary(10));
  } else {
    console.log(person.whatIs(10));
  }
});

class Dog {
  constructor() {
    this.cost = 50;
  }
  displayPrice() {
    return `The dog costs $${this.cost}`;
  }
}

//데코레이터1
function Cute(dog) {
  const cuteDog = Object.create(dog);
  cuteDog.cost = dog.cost + 20;
  return cuteDog;
}

//데코레이터2
function Trained(dog) {
  const trainedDog = Object.create(dog);
  trainedDog.cost = dog.cost + 60;
  return trainedDog;
}

const test = require("tape");
test("base dog price", (assert) => {
  assert.equal(new Dog().displayPrice(), "The dog costs $50");
  assert.end();
});

test("cute dog price", (assert) => {
  assert.equal(Cute(new Dog()).displayPrice(), `The dog costs $70`);
  assert.end();
});

test("trained/cute dog price", (assert) => {
  const str = Trained(Cute(new Dog())).displayPrice();
  assert.equal(str, `The dog costs $130`);
  assert.end();
});

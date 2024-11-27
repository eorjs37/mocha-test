class Dog {
  constructor() {
    this.cost = 50;
  }
  displayPrice() {
    return `The dog costs $${this.cost}`;
  }
}

const test = require("tape");
test("base dog price", (assert) => {
  assert.equal(new Dog().displayPrice(), `The dog costs $50`);
  assert.end();
});

function Cute(dog) {
  const cuteDog = Object.create(dog);
  cuteDog.cost = dog.cost + 20;
  return cuteDog;
}

test("cute Dog price", (assert) => {
  assert.equal(Cute(new Dog()).displayPrice(), "The dog costs $70");
  assert.end();
});

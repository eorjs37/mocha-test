function add(numberOne, numberTwo) {
  return function (numberTwo) {
    return numberOne + numberTwo;
  };
}

const addFunc1 = add(1);
console.log(addFunc1);
console.log(add(1, 2));

console.log(addFunc1(3));

R = require("ramda");

function add2(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

const curriedAdd = R.curry(add2);

console.log(curriedAdd(1));
console.log(curriedAdd(1, 2));
console.log(curriedAdd(1)(2));

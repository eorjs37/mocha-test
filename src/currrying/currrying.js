function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function addFp(numberOne, numberTwo) {
  return function (numberTwo) {
    return numberOne + numberTwo;
  };
}

R = require("ramda");

const curriedAdd = R.curry(add);
console.log(curriedAdd(1));

console.log(curriedAdd(1)(2));
console.log(curriedAdd(1, 2));

const increment = curriedAdd(1);
console.log(increment(3));

const square = (thing) => thing * thing;
console.log([2, 4, 5].map(square));

const mapSquares = R.map(square);
console.log(mapSquares([2, 4, 5]));

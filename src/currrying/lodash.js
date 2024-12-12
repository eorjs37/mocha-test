const _ = require("lodash");

const square = (thing) => thing * thing;
const mapSquares = _.map(square);
console.log(mapSquares[(2, 4, 5)]);
console.log(_.map([2, 4, 5], square));

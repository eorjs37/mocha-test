R = require("ramda");
const square = (thing) => thing * thing;

const fourthPower = R.compose(square, square);
const mapFouthPower = R.map(fourthPower);
const pringFourthPower = R.compose(console.log, square, square);
R.map(pringFourthPower, [2, 4, 5]);

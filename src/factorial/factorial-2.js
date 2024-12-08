function memoizedFactorial(number, lookupTable = {}) {
  if (number in lookupTable) {
    console.log("cached");
    return lookupTable[number];
  } else {
    console.log("calculationg");
    let reduceValue;

    if (number < 2) {
      reduceValue = 1;
    } else {
      reduceValue = number * memoizedFactorial(number - 1)["result"];
    }
    lookupTable[number] = reduceValue;
    return {
      result: reduceValue,
      lookupTable: lookupTable,
    };
  }
}

const { result, lookupTable } = memoizedFactorial(10);
console.log(result);
console.log(lookupTable);

console.log(memoizedFactorial(10)["result"], lookupTable);

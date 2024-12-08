function factorial(number) {
  if (number < 2) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

const result = factorial(3);
console.log(result);

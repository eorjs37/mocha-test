four().then(addOne).then(console.log);

function addOne(addend) {
  return Promise.resolve(addend + 1);
}

function four() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 500);
  });
}

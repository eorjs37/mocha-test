four()
  .then(() => 6)
  .then(console.log);

function four() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 500);
  });
}

Promise.resolve()
  .then(() => 4)
  .then(() => 11)
  .then(console.log);

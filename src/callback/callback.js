function addOne(addend, callback) {
  callback(addend + 1);
}

function three(callback) {
  setTimeout(() => {
    callback(3, console.log);
  }, 500);
}

three(addOne);

const test = require("tape");

test(`our addOne function`, (assert) => {
  addOne(3, (result) => {
    assert.equal(result, 4);
    assert.end();
  });
});

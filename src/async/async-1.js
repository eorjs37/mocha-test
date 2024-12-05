const http = require("http");

const getBody = {
  bodyArray: [],
  saveBody: function (chunk) {
    this.bodyArray.push(chunk);
  },
  printBody: function () {
    console.log(this.bodyArray.join(""));
    this.allDone();
  },
  getResult: function (result) {
    result.on("data", this.saveBody.bind(this));
    result.on("end", this.printBody.bind(this));
  },
  allDone: function () {},
};

//http.get("http://refactoringjs.com", getBody.getResult.bind(getBody));

function setup() {
  getBody.bodyArray = [];
}
function teardown() {
  getBody.allDone = function () {};
}
const test = require("tape");
const testDouble = require("testdouble");
test("out async routine", function (assert) {
  getBody.allDone = testDouble.function();

  testDouble.when(getBody.allDone()).thenDo(function () {
    assert.notEqual(getBody.bodyArray.length, 0);

    assert.end();
  });

  http.get("http://refactoringjs.com", getBody.getResult.bind(getBody));
});

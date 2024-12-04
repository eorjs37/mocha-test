const http = require("http");
let bodyArray = [];

function saveBody(chunk) {
  bodyArray.push(chunk);
}

function printBody() {
  console.log(bodyArray.join(""));
}

function getResults(result) {
  result.on("data", saveBody);
  result.on("end", printBody);
}

http.get("http://refactoringjs.com", getResults);

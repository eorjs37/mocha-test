function fileName(){
    var theError = new Error("here I am");
    return theError.stack.match(/(\w+\.js)/)[1];
}

console.log(fileName());
 





const array1 = ['a','b','c']

//for of는 컬랙션(열거가 가능한 객체 즉 배열)에서 사용가능
for(let item of array1){
    console.log(item);   
}

//for in는 객체에서 사용되며,key에 접근은 가능하지만, value에는 접근이 불가능하다
for(let item in array1){
    console.log(item);   
}

const obj = {a:1,b:1,c:2}
for(let item in obj){
    console.log(obj[item]);
    
}
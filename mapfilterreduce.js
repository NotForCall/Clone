let them ="curange";
console.log(them) 

// array mapmathos..
let arr = [234,345,234,124,64]
let a= arr.map((value)=>{
    console.log(value)
    return value+1
})
console.log(a)

// arary filter method
let arr2 =[45,6,356,45,68,45,34]
let a2=arr2.filter((a)=>{
     return a<10
}) 

console.log(a2)

// array reduce method
let arr3 =[52,67,56,34]
let a3=arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(a3)

let me =[23,45,34,12]
let me3=me.reduce((h3,h4)=>{
    return h3+h4;
})
console.log(me3)

// practice set****
// const prompt = require("prompt-sync")();
// let anything;
// anything=prompt("enter an number:")
// console.log(anything)

//this is Math.randome demo function
// first demo  
function getrandome(max){
    return Math.floor(Math.random()* max);
}
console.log(getrandome(3));
console.log(getrandome(1));
console.log(getrandome());

  
// function getrandome(min,max){
//     min=Math.ceil(min);
//     max=Math.floor(max);
//     return Math.randome() * (max - min) + min;
// }

console.log(getrandome(1,3))

var grade = 'b';
var result;

switch(grade){
    case 'a':
        result="a grade";
        break;
    case 'b':
        result="b result";
        break;
    case 'c':
        result="c result";
        break;  
    default:
        result="no grade";          
}

console.log(result);

console.log("guess the number:")




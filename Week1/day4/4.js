//2. Data Types

//Primitive Data Types/ Value Data Types

//1. Number
var num = 10;
var num1=10.5;

console.log(num,num1,typeof(num), typeof(num1));

//2. String data types- combination of characters - numbers
var nm='Pragyan Nanda'
var nm1="KRMU"
var nm2=`sohna
                gurugram
        HR`


console.log(nm,nm1,typeof nm,typeof nm1);
console.log(nm2,typeof nm2);

//3.Boolean
var bl=false;
var bl1=true;
console.log(bl,typeof bl,bl1)

//4.Null
var nl=null
console.log(nl,typeof nl);

//5.Undefined
var ud=undefined;
console.log(ud,typeof ud);

//NON PRIMITIVE DATA TYPES/REFRENCE DATA TYPES

//1.Array
let arr=[1,2,3]
console.log(arr,typeof arr);

//2.Objects
let obj={a:1};
console.log(obj,typeof obj);
//3. Functions
function hello(){
    console.log('Hello World');
}

console.log(hello());

function yello(){
    return'yello World';
}

console.log(yello());
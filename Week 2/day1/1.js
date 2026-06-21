// 9. Rest and Spread Operator

// Spread Operator - Merge/ copy/ join [ ... ]

// array

// let a1 = [1,2,3];
// let a2 = [4,5,6,5,6,7,7,8,8,8];

// // let a3 = [1,2,3,4,5,6];

// let a3 = [...a1, ...a2,10,20];

// // let a3 = a1.concat(a2)

// console.log(a3, typeof a3);

// Object

// let o1 = {"a":1};
// let o2 = {"b":2};

// let o3 = {...o1,...o2,"c":3,"a":4};

// console.log(o3);

// Rest operator - return an array [...]

// function add(x,...y){
//     console.log(x);
//     console.log(y);

// }

// add(1,2)
// add(1)
// add(1,2,3)

// 10. reverse(), join() and split() Method

// let arr = [1,2,3,4];

// console.log(arr.reverse());

// let arr = ["h","e","l","l","o"]

// let str = "12345"

//  str[ip] -> split  -> arr[op]

// let ans = str.split("");
// console.log(ans);

//  arr [ip] join  str[op]

// let ans = arr.join("123")

// console.log(ans , typeof ans);

// 11. Array slice() and splice()
// return a new array
// slice - >copy slice(start index, end=end-1 index)
// let arr = [1,2,3,4,5];

// let ans1 = arr.slice(1,3);
// console.log(ans1, arr);

// let ans1 = arr.splice(1,3);
// console.log(ans1, arr);

// 12. Template Literals -

// var name = "love";

// console.log("My name is",name);
// console.log(`My name is ${name}`);

// 13. Function with Default Parameter

// function hii(name= "john"){
//     console.log(name);
// }

// hii()
// hii("chintu")

// 14. Callback and Higher Order Function

// function HOF(callback){
//     console.log("hello from HOF fn.");
//     callback();
//     console.log("byy from HOF fn.");

// }
// function greet(){
//     console.log("Hello from callback fn.");

// }

// HOF(greet)

//15. Array Higher Order Function Methods

// let arr = [1,2,3,4,5];

// arr.map((el,index,arr,d)=>{
// console.log(el,index,arr,d);

// })

// a) map() -
// return a new arr
// size of ip arr is equal to op arr

// let arr = [1,2,3,4,5];
// let ans = arr.map((el)=>{
//     return el+5
// })

// console.log(ans);

// b) filter()
// return a new array
// size is dynamic

// let arr = [1,2,3,4,5];

// let ans = arr.filter((el)=>{
//     return el%2==0
// })

// console.log(ans);

// c) sort() - arrangement
// let arr = [10,2,30,4,-5];

// let ans = arr.sort((a,b)=>b-a);
// console.log(ans);

// d) reduce() - used single value as a result

// let arr = [1,2,3,4,5];

// let ans = arr.reduce((acc,el)=>{
// return acc+el
// },0);

// console.log(ans);

// let arr = [1,2,3,4,5];

// let ans = arr.reduce((acc,el)=>{
// return acc+el
// },"");

// console.log(ans, typeof ans);

// e) forEach()

// return undefined
// size of ip arr is equal to op arr
// iteration

// let arr = [1,2,3,4,5];
// let ans = arr.forEach((el)=>{
//     console.log(el+5)
// })

// console.log(ans);

// f) includes()

// let arr = [1,2,3,4,5];

// console.log(arr.includes(10));
// console.log(arr.includes(3));

// 16. Problems on str pattern [Extra]

/* let str = "hello world";
let o1 = "world hello";
let o2 = "dlrow olleh";
let o3 = "olleh dlrow";

let ans = str
  .split(" ")
  .reverse()
  .map((el) => {
    return el.split("").reverse().join("");
  }).join(" ");

console.log(ans); */
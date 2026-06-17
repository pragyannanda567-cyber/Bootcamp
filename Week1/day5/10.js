//Function - it is a reusable block of code to perform certain task


//1.Function defination/decleration

//REGULAR FUNCTIONS

//a. function with no parameter
function greet1(){
    //Block of code
    console.log('Hello From js');
}

//2. Function calling/invoking
greet1()
greet1()

//b. Function with parameter
function add(x,y){
    console.log(x+y)

};

add(1,2);

//c. Function with no parameter and return keyword
function greet(){
    //Block of code
    return 'Hello From js';
}

greet()

//3. Function Expression/Statement

let x = function(a){
    return a+5
}

console.log(x(5));

//ARROW FUNCTION
const add=(a)=>{
    a+5
}   

console.log(add(5));

//OR

const add=a=>a+5

console.log(add(5));
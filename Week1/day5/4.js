//Array Data Structures
//Collection of different data types
//dynamic size/length
//contigneous/Ordered M/E allocation
//indexing [ default = 0]
//Mutable -> inbuilt fn that is used to change arr values
//Non - Primitive Data Type

var arr=[1,true,'hello'];
console.log(arr);

arr.push(5);
console.log(arr);

//1.Create

var arr=[];
arr=[1,2,3]

//2. Read
console.log(arr,typeof arr);

//Read specific positions/index value

console.log(arr[1]);

//3.Update
//add RHS/Ending [push]
arr.push(10);

console.log(arr);

//add LHS/Starting [Unshift]
arr.unshift(100);

console.log(arr);

arr[2]=20;
console.log(arr);

//4. Delete 

//RHS pop()

arr.pop()
console.log(arr);

//LHS Shift()
arr.shift()
console.log(arr);

//Loop in array

//For Loop
var arr= [10,20,30,40,50];

for(let i=0;i<arr.length;i++){
    console.log('Index Value:',i,'Arr Value:',arr[i]);
}

//for .... of loop
for(let val of arr){
    console.log(val);
}